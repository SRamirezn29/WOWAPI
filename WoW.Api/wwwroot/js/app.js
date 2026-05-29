import {
  CONTINENTS, HEROES, RACES, CLASSES, TROOPS, ENEMY_TROOPS,
  POPULAR_ITEMS, WEAPONS, RARITY_MAP,
  ICON_CDN, ICON_FALLBACK
} from './data.js';

// ── Config ───────────────────────────────────────────────────
const API_BASE  = 'http://localhost:5001';
const TOKEN_KEY = 'wow_pro_token';

// ── State ────────────────────────────────────────────────────
let currentUser = null;

// ── Utils ────────────────────────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function iconUrl(icon) {
  return `${ICON_CDN}${icon}.jpg`;
}

function imgTag(src, alt, cls = '', fallback = ICON_FALLBACK) {
  return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" class="${cls}" onerror="this.src='${fallback}'" loading="lazy">`;
}

function rarityStyle(rarity) {
  const r = RARITY_MAP[rarity] || RARITY_MAP.common;
  return `color:${r.color};background:${r.bg};border:1px solid ${r.color}44;`;
}

function token() { return localStorage.getItem(TOKEN_KEY); }

// ── View Router ──────────────────────────────────────────────
function showView(name) {
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`view-${name}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.wow-nav .nav-link[data-view]').forEach(el => {
    el.classList.toggle('active', el.dataset.view === name);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Home ─────────────────────────────────────────────────────
function renderHome() {
  renderPopularItems('all');
  renderQuestGuide();
}

// ── Popular Items ────────────────────────────────────────────
function renderPopularItems(filter) {
  const container = document.getElementById('popular-items-grid');
  if (!container) return;

  const items = filter === 'all' ? POPULAR_ITEMS
    : POPULAR_ITEMS.filter(i => i.rarity === filter);

  if (!items.length) {
    container.innerHTML = `<div class="col-12 empty-state"><p>Sin resultados</p></div>`;
    return;
  }

  container.innerHTML = items.map(item => {
    const r = RARITY_MAP[item.rarity] || RARITY_MAP.common;
    return `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="item-card" style="border-left:3px solid ${r.color}">
        ${imgTag(iconUrl(item.icon), item.name, 'item-icon')}
        <div>
          <div class="item-name" style="color:${r.color}">${escapeHtml(item.name)}</div>
          <div class="item-type">${escapeHtml(item.type)}</div>
        </div>
        <span class="item-badge" style="${rarityStyle(item.rarity)}">${r.label}</span>
      </div>
    </div>`;
  }).join('');
}

// ── Mapas ────────────────────────────────────────────────────
function renderMapas() {
  const grid = document.getElementById('continents-grid');
  if (!grid) return;
  grid.innerHTML = CONTINENTS.map(c => {
    // usa c.thumb si existe, si no intenta el patrón estándar por id
    const thumbSrc = c.thumb ? encodeURI(c.thumb) : `/images/zones/${c.id}.jpg`;
    const bannerBg = `url('${thumbSrc}') center/cover no-repeat, ${c.gradient}`;
    return `
    <div class="col-6 col-md-4 col-xl-3">
      <div class="continent-card" onclick="openZoneDetail('${c.id}')">
        <div class="continent-banner" style="background:${bannerBg}">
          <span class="continent-name">${escapeHtml(c.name)}</span>
        </div>
        <div class="continent-body">
          <div class="continent-expansion">${escapeHtml(c.expansion)}</div>
          <div class="continent-desc">${escapeHtml(c.desc)}</div>
          <div class="continent-zones-count">${c.zones.length} zonas</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

window.openZoneDetail = function(continentId) {
  const c = CONTINENTS.find(x => x.id === continentId);
  if (!c) return;

  const banner = document.getElementById('zone-detail-banner');
  const thumbSrc = c.thumb ? encodeURI(c.thumb) : `/images/zones/${continentId}.jpg`;
  banner.style.background = `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('${thumbSrc}') center/cover no-repeat, ${c.gradient}`;
  delete banner.dataset.loaded;

  document.getElementById('zone-detail-title').textContent = c.name;
  document.getElementById('zone-detail-sub').textContent   = c.expansion;
  document.getElementById('zone-detail-desc').textContent  = c.desc;

  const grid = document.getElementById('zones-grid');
  grid.innerHTML = c.zones.map(z => {
    // encodeURI convierte espacios y tildes a %20/%C3%B1 etc. para que el servidor los sirva
    const imgSrc  = z.image ? encodeURI(z.image) : null;
    const imgHtml = imgSrc
      ? `<div class="zone-img-wrap"><img src="${imgSrc}" alt="${escapeHtml(z.name)}" class="zone-img" onerror="this.closest('.zone-img-wrap').remove()"></div>`
      : z.blizzardZoneId
        ? `<div class="zone-img-wrap zone-img-loading" id="zone-img-${z.blizzardZoneId}"><div class="zone-img-spinner"></div></div>`
        : '';
    const hasImg = !!(imgSrc || z.blizzardZoneId);
    return `
    <div class="col-12 col-sm-6 col-xl-4">
      <div class="zone-card ${hasImg ? 'has-image' : ''}" ${z.blizzardZoneId ? `data-blizzard-id="${z.blizzardZoneId}"` : ''}>
        ${imgHtml}
        <div class="zone-card-body">
          <div class="zone-name">${escapeHtml(z.name)}</div>
          <span class="zone-level">Niv. ${escapeHtml(z.level)}</span>
          <div class="zone-desc">${escapeHtml(z.desc)}</div>
        </div>
      </div>
    </div>`;
  }).join('');

  showView('zone-detail');

  // Carga asíncrona de imágenes desde la API de Blizzard
  loadBlizzardZoneImages(c.zones);
};

async function loadBlizzardZoneImages(zones) {
  const zonesWithId = zones.filter(z => z.blizzardZoneId && !z.image);
  if (!zonesWithId.length) return;

  await Promise.allSettled(zonesWithId.map(async z => {
    try {
      const res = await fetch(`${API_BASE}/api/zones/${z.blizzardZoneId}/media`);
      if (!res.ok) throw new Error('no image');
      const { imageUrl } = await res.json();

      const wrap = document.getElementById(`zone-img-${z.blizzardZoneId}`);
      if (!wrap) return;

      wrap.classList.remove('zone-img-loading');
      wrap.innerHTML = `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(z.name)}" class="zone-img" loading="lazy" onerror="this.closest('.zone-img-wrap').remove()">`;

      // También actualiza el banner del continente si es la primera zona
      const banner = document.getElementById('zone-detail-banner');
      if (banner && banner.dataset.loaded !== '1') {
        banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('${escapeHtml(imageUrl)}')`;
        banner.dataset.loaded = '1';
      }
    } catch {
      const wrap = document.getElementById(`zone-img-${z.blizzardZoneId}`);
      if (wrap) wrap.remove();
      const card = document.querySelector(`[data-blizzard-id="${z.blizzardZoneId}"]`);
      if (card) card.classList.remove('has-image');
    }
  }));
}

window.backToMapas = function() { showView('mapas'); };

// ── Héroes ───────────────────────────────────────────────────
function renderHeroes() {
  const grid = document.getElementById('heroes-grid');
  if (!grid) return;
  grid.innerHTML = HEROES.map(h => {
    const iconSrc    = `${ICON_CDN}${h.classIcon}.jpg`;
    const factionCls = h.faction.toLowerCase().includes('alianza') ? 'alliance'
                     : h.faction.toLowerCase().includes('horda')   ? 'horde' : 'neutral';
    return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="hero-card">
        <div class="hero-icon-wrap">
          <img src="${iconSrc}" alt="${escapeHtml(h.role)}" class="hero-class-icon"
               onerror="this.src='${ICON_FALLBACK}'" loading="lazy">
          <div class="hero-icon-glow"></div>
        </div>
        <div class="hero-body">
          <div class="hero-name">${escapeHtml(h.name)}</div>
          <div class="hero-title">${escapeHtml(h.title)}</div>
          <div class="hero-role">${escapeHtml(h.role)}</div>
          <div class="hero-lore">${escapeHtml(h.lore)}</div>
          <span class="hero-faction faction-${factionCls}">${escapeHtml(h.faction)}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── Armas ────────────────────────────────────────────────────
function renderArmas(expansionFilter) {
  const grid = document.getElementById('armas-grid');
  if (!grid) return;

  const items = expansionFilter && expansionFilter !== 'all'
    ? WEAPONS.filter(w => w.expansion === expansionFilter)
    : WEAPONS;

  grid.innerHTML = items.map(w => {
    const r = RARITY_MAP[w.rarity] || RARITY_MAP.common;
    return `
    <div class="col-12 col-sm-6 col-xl-4">
      <div class="weapon-card" style="border-left:3px solid ${r.color}">
        ${imgTag(iconUrl(w.icon), w.name, 'weapon-icon')}
        <div class="weapon-info">
          <div class="weapon-name" style="color:${r.color}">${escapeHtml(w.name)}</div>
          <div class="weapon-type">${escapeHtml(w.type)}</div>
          <div class="weapon-expansion">${escapeHtml(w.expansion)}</div>
        </div>
        <span class="item-badge" style="${rarityStyle(w.rarity)}">${r.label}</span>
      </div>
    </div>`;
  }).join('');
}

// ── Objetos ──────────────────────────────────────────────────
function renderObjetos() {
  const grid = document.getElementById('objetos-grid');
  if (!grid) return;
  grid.innerHTML = POPULAR_ITEMS.map(item => {
    const r = RARITY_MAP[item.rarity] || RARITY_MAP.common;
    return `
    <div class="col-12 col-sm-6 col-xl-4">
      <div class="item-card" style="border-left:3px solid ${r.color}">
        ${imgTag(iconUrl(item.icon), item.name, 'item-icon')}
        <div style="flex:1;min-width:0">
          <div class="item-name" style="color:${r.color}">${escapeHtml(item.name)}</div>
          <div class="item-type">${escapeHtml(item.type)}</div>
          <div class="item-type" style="margin-top:.2rem;font-size:.75rem;">${escapeHtml(item.desc)}</div>
        </div>
        <span class="item-badge" style="${rarityStyle(item.rarity)}">${r.label}</span>
      </div>
    </div>`;
  }).join('');
}

// ── Razas ────────────────────────────────────────────────────
function renderRaces() {
  renderFactionRaces('alliance-races-grid', RACES.alliance, 'alliance');
  renderFactionRaces('horde-races-grid',    RACES.horde,    'horde');
}

function renderFactionRaces(containerId, races, faction) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = races.map(r => `
    <div class="col-6 col-md-4 col-xl-3">
      <div class="race-card ${faction}">
        <div class="race-icon-wrap" style="background:${r.gradient}">
          ${imgTag(r.icon, r.name, 'race-icon')}
        </div>
        <div class="race-body">
          <div class="race-name">${escapeHtml(r.name)}</div>
          <div class="race-capital">Capital: ${escapeHtml(r.capital)}</div>
          <span class="race-ability">${escapeHtml(r.racialAbility)}</span>
          <div class="race-desc">${escapeHtml(r.desc)}</div>
        </div>
      </div>
    </div>`).join('');
}

// ── Clases ───────────────────────────────────────────────────
function renderClasses() {
  const grid = document.getElementById('classes-grid');
  if (!grid) return;
  grid.innerHTML = CLASSES.map(c => `
    <div class="col-6 col-md-4 col-xl-3">
      <div class="class-card" style="border-top:3px solid ${c.color}">
        <div class="class-icon-wrap">
          ${imgTag(iconUrl(c.icon), c.name, 'class-icon', ICON_FALLBACK)}
          <div>
            <div class="class-name" style="color:${c.color}">${escapeHtml(c.name)}</div>
            <div class="class-role">${escapeHtml(c.role)}</div>
          </div>
        </div>
        <div class="class-desc">${escapeHtml(c.desc)}</div>
        <div class="class-abilities">
          ${c.abilities.map(a => `<span class="ability-pill">${escapeHtml(a)}</span>`).join('')}
        </div>
      </div>
    </div>`).join('');
}

// ── Tropas ───────────────────────────────────────────────────
function renderTroops() {
  renderFactionTroops('alliance-troops-grid', TROOPS.alliance, 'alliance');
  renderFactionTroops('horde-troops-grid',    TROOPS.horde,    'horde');
}

function renderFactionTroops(containerId, troops, faction) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = troops.map(t => buildTroopCard(t, faction, null)).join('');
}

function buildTroopCard(t, faction, customColor) {
  const atkPct = Math.round(t.stats.ataque    / 10 * 100);
  const defPct = Math.round(t.stats.defensa   / 10 * 100);
  const spdPct = Math.round(t.stats.velocidad / 10 * 100);
  const badgeStyle = customColor
    ? `background:${customColor}22;color:${customColor};border:1px solid ${customColor}44`
    : '';
  const nameStyle  = customColor ? `color:${customColor}` : '';
  return `
  <div class="col-12 col-sm-6 col-xl-4">
    <div class="troop-card ${faction}" ${customColor ? `style="border-top:2px solid ${customColor}33"` : ''}>
      <div class="troop-banner">
        ${imgTag(iconUrl(t.icon), t.name, 'troop-icon')}
        <div class="troop-header-info">
          <div class="troop-name" ${nameStyle ? `style="${nameStyle}"` : ''}>${escapeHtml(t.name)}</div>
          <div class="troop-race">${escapeHtml(t.race ?? '')}</div>
        </div>
        <span class="troop-type-badge" ${badgeStyle ? `style="${badgeStyle}"` : ''}>${escapeHtml(t.type)}</span>
      </div>
      <div class="troop-body">
        <div class="troop-desc">${escapeHtml(t.desc)}</div>
        <div class="stat-bars">
          <div class="stat-row stat-atk">
            <span class="stat-label">Ataque</span>
            <div class="stat-bar"><div class="stat-fill" style="width:${atkPct}%"></div></div>
            <span>${t.stats.ataque}/10</span>
          </div>
          <div class="stat-row stat-def">
            <span class="stat-label">Defensa</span>
            <div class="stat-bar"><div class="stat-fill" style="width:${defPct}%"></div></div>
            <span>${t.stats.defensa}/10</span>
          </div>
          <div class="stat-row stat-spd">
            <span class="stat-label">Velocidad</span>
            <div class="stat-bar"><div class="stat-fill" style="width:${spdPct}%"></div></div>
            <span>${t.stats.velocidad}/10</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ── Tropas Enemigas ──────────────────────────────────────────
function renderEnemyTroops() {
  const container = document.getElementById('enemy-troops-container');
  if (!container) return;

  container.innerHTML = ENEMY_TROOPS.map(faction => `
    <div class="enemy-faction-section mb-5">
      <div class="enemy-faction-header" style="border-left:4px solid ${faction.color};background:linear-gradient(90deg,${faction.color}1a,transparent);padding:.75rem 1rem;border-radius:0 var(--radius) var(--radius) 0;margin-bottom:1.25rem;">
        <div style="font-weight:800;font-size:1.1rem;color:${faction.color}">${escapeHtml(faction.name)}</div>
        <div class="text-mute" style="font-size:.82rem;margin-top:.2rem">${escapeHtml(faction.desc)}</div>
      </div>
      <div class="row g-3">
        ${faction.units.map(t => buildTroopCard(
          { ...t, race: faction.name },
          'enemy',
          faction.color
        )).join('')}
      </div>
    </div>`).join('');
}

// ── Auth / JWT ───────────────────────────────────────────────
function setAuthState(user) {
  currentUser = user;
  const guestEl     = document.getElementById('auth-guest');
  const loggedEl    = document.getElementById('auth-logged');
  const userLabel   = document.getElementById('user-label');
  const dashSection = document.getElementById('dashboard-section');

  if (user) {
    guestEl?.classList.add('d-none');
    loggedEl?.classList.remove('d-none');
    if (userLabel) userLabel.textContent = user.email || user.name || 'Usuario';
    dashSection?.classList.remove('d-none');
    loadInventory();
  } else {
    guestEl?.classList.remove('d-none');
    loggedEl?.classList.add('d-none');
    dashSection?.classList.add('d-none');
  }
}

window.openLoginModal = function() {
  clearModalErrors();
  const el = document.getElementById('loginModal');
  if (el) bootstrap.Modal.getOrCreateInstance(el).show();
};

window.openRegisterModal = function() {
  clearModalErrors();
  const el = document.getElementById('registerModal');
  if (el) bootstrap.Modal.getOrCreateInstance(el).show();
};

function clearModalErrors() {
  document.querySelectorAll('.modal-error').forEach(el => { el.textContent = ''; el.classList.add('d-none'); });
}

function showModalError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.remove('d-none'); }
}

window.handleLogin = async function() {
  const email    = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value;

  if (!email || !password) { showModalError('login-error', 'Completa todos los campos.'); return; }

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      showModalError('login-error', data.message || 'Credenciales incorrectas.');
      return;
    }

    const data = await res.json();
    localStorage.setItem(TOKEN_KEY, data.token);
    bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide();
    setAuthState({ email, name: data.name });
  } catch {
    showModalError('login-error', 'Error de conexión con el servidor.');
  }
};

window.handleRegister = async function() {
  const email    = document.getElementById('reg-email')?.value.trim();
  const username = document.getElementById('reg-name')?.value.trim();
  const password = document.getElementById('reg-password')?.value;

  if (!email || !username || !password) { showModalError('reg-error', 'Completa todos los campos.'); return; }
  if (password.length < 6) { showModalError('reg-error', 'La contraseña debe tener al menos 6 caracteres.'); return; }

  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      showModalError('reg-error', data.message || 'No se pudo registrar.');
      return;
    }

    bootstrap.Modal.getInstance(document.getElementById('registerModal'))?.hide();
    openLoginModal();
  } catch {
    showModalError('reg-error', 'Error de conexión con el servidor.');
  }
};

window.handleLogout = function() {
  localStorage.removeItem(TOKEN_KEY);
  setAuthState(null);
};

// ── API: buscar ítem ─────────────────────────────────────────
window.searchItem = async function() {
  if (!currentUser) { openLoginModal(); return; }

  const input = document.getElementById('search-input');
  const query = input?.value.trim();
  if (!query) return;

  const results = document.getElementById('search-results');
  if (results) results.innerHTML = '<p class="text-mute">Buscando...</p>';

  try {
    const res = await fetch(
      `${API_BASE}/api/wowitem/search?query=${encodeURIComponent(query)}`,
      { headers: { Authorization: `Bearer ${token()}` } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const items = await res.json();

    if (!items.length) {
      results.innerHTML = '<p class="text-mute">No se encontraron resultados.</p>';
      return;
    }

    results.innerHTML = items.map(item => {
      const r    = RARITY_MAP[item.quality?.toLowerCase()] || RARITY_MAP.common;
      const icon = item.icon ? iconUrl(item.icon) : ICON_FALLBACK;
      return `
      <div class="item-card mb-2" style="border-left:3px solid ${r.color}">
        ${imgTag(icon, item.name, 'item-icon')}
        <div style="flex:1">
          <div class="item-name" style="color:${r.color}">${escapeHtml(item.name)}</div>
          <div class="item-type">${escapeHtml(item.type || '')}</div>
        </div>
        <button class="btn-login" style="font-size:.75rem;padding:.25rem .6rem"
          onclick="saveFavorite(${JSON.stringify(escapeHtml(JSON.stringify(item)))})">
          + Guardar
        </button>
      </div>`;
    }).join('');
  } catch {
    results.innerHTML = '<p class="text-mute">Error al conectar con la API de Blizzard.</p>';
  }
};

window.saveFavorite = async function(itemJson) {
  if (!currentUser) { openLoginModal(); return; }
  let item;
  try { item = JSON.parse(itemJson); } catch { return; }

  try {
    await fetch(`${API_BASE}/api/userfavorites`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token()}` },
      body: JSON.stringify({ itemId: item.id, itemName: item.name, itemIcon: item.icon })
    });
    loadInventory();
  } catch { /* silent */ }
};

window.deleteFavorite = async function(id) {
  try {
    await fetch(`${API_BASE}/api/userfavorites/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token()}` }
    });
    loadInventory();
  } catch { /* silent */ }
};

async function loadInventory() {
  if (!currentUser) return;
  const container = document.getElementById('inventory-list');
  if (!container) return;

  try {
    const res = await fetch(`${API_BASE}/api/userfavorites`, {
      headers: { Authorization: `Bearer ${token()}` }
    });
    if (!res.ok) throw new Error();
    const items = await res.json();

    if (!items.length) {
      container.innerHTML = '<div class="empty-state"><p>Inventario vacío</p></div>';
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="inv-item">
        ${imgTag(item.itemIcon ? iconUrl(item.itemIcon) : ICON_FALLBACK, item.itemName, '')}
        <span class="inv-item-name">${escapeHtml(item.itemName)}</span>
        <button class="inv-item-delete" onclick="deleteFavorite(${item.id})" title="Eliminar">x</button>
      </div>`).join('');
  } catch {
    container.innerHTML = '<p class="text-mute" style="padding:.5rem">No se pudo cargar el inventario.</p>';
  }
}

// ── Nav Search ───────────────────────────────────────────────
window.navSearch = function(e) {
  e.preventDefault();
  const query = document.getElementById('nav-search-input')?.value.trim();
  if (!query) return;
  showView('home');
  const input = document.getElementById('search-input');
  if (input) { input.value = query; window.searchItem(); }
};

// ── Filter handlers ──────────────────────────────────────────
window.filterPopular = function(btn, filter) {
  document.querySelectorAll('#popular-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPopularItems(filter);
};

window.filterArmas = function(btn, expansion) {
  document.querySelectorAll('#armas-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderArmas(expansion);
};

// ── Guía de Misiones ─────────────────────────────────────────
function renderQuestGuide() {
  const el = document.getElementById('quest-guide-grid');
  if (!el) return;

  const questTypes = [
    {
      type: 'Normal',
      color: '#ffcc00',
      markerClass: 'qm-normal',
      icon: 'inv_misc_map01',
      title: 'Misión Normal',
      badge: '!',
      desc: 'Misiones de historia o secundarias. Se completan una sola vez. El signo "!" amarillo sobre un NPC indica que tiene una misión disponible.',
      tips: ['Habla con NPCs con "!" amarillo', 'El "?" amarillo indica entrega', 'Aparecen en el minimapa como puntos amarillos'],
    },
    {
      type: 'Daily',
      color: '#00aaff',
      markerClass: 'qm-daily',
      icon: 'achievement_quests_completed_daily_01',
      title: 'Misión Diaria',
      badge: '!',
      desc: 'Se reinician cada día a las 07:00 (hora servidor). Dan reputación, monedas de expansión u objetos. El "!" azul las diferencia de las normales.',
      tips: ['Reinicio: 07:00 AM hora servidor', 'Dan reputación y moneda de expansión', 'NPCs con "!" azul o símbolo de reloj'],
    },
    {
      type: 'Weekly',
      color: '#aa44ff',
      markerClass: 'qm-weekly',
      icon: 'achievement_quests_completed_weekly',
      title: 'Misión Semanal',
      badge: '!',
      desc: 'Se reinician cada martes. Suelen dar recompensas importantes: ilvl alto, monturas, runas o monedas especiales de la expansión actual.',
      tips: ['Reinicio: martes cada semana', 'Recompensas de alto nivel (cofres, ilvl)', 'Ícono con borde especial en el diario'],
    },
    {
      type: 'World',
      color: '#33dd88',
      markerClass: 'qm-world',
      icon: 'worldquest',
      title: 'Misión de Mundo',
      badge: 'W',
      desc: 'Aparecen en el mapa del mundo con iconos temáticos. Disponibles por tiempo limitado (6-24 h). Dan reputación, equipo y recursos de la expansión.',
      tips: ['Actívate con reputación "Amistoso"', 'Aparecen en el mapa del continente', 'Cada ícono indica el tipo de recompensa'],
    },
    {
      type: 'Dungeon',
      color: '#ff8800',
      markerClass: 'qm-dungeon',
      icon: 'achievement_dungeon_heroic',
      title: 'Misión de Mazmorra',
      badge: 'M',
      desc: 'Requiere entrar a una mazmorra específica. Suelen pedir derrotar jefes o recolectar objetos dentro. Dan equipo o puntos de mazmorra.',
      tips: ['Suelen ir en cadena con la historia', 'Puedes hacer la mazmorra en grupo', 'Busca el NPC cerca de la entrada'],
    },
    {
      type: 'Raid',
      color: '#ff4444',
      markerClass: 'qm-raid',
      icon: 'achievement_raid_icecrown',
      title: 'Misión de Banda',
      badge: 'B',
      desc: 'Requiere entrar a una banda (raid). Pueden dar transmogrifación de sets legendarios, logros o montura única del jefe final de la expansión.',
      tips: ['Necesitas grupo de 10-30 jugadores', 'El LFR permite acceso sin grupo formado', 'Algunos drops son 100% para misión'],
    },
    {
      type: 'Campaign',
      color: '#c59b53',
      markerClass: 'qm-campaign',
      icon: 'achievement_quests_completed_quest01_03',
      title: 'Misión de Campaña',
      badge: 'C',
      desc: 'La historia principal de la expansión. Tienen un ícono distinto (dorado/especial). Desbloquean zonas, mecánicas y el siguiente capítulo de historia.',
      tips: ['Sigue el ícono de libro o estrella dorada', 'Desbloquean mecánicas clave de la expansión', 'Prioritarias para progresar la historia'],
    },
    {
      type: 'Bonus',
      color: '#88ccff',
      markerClass: 'qm-bonus',
      icon: 'inv_misc_head_dragon_blue',
      title: 'Objetivo Bonus',
      badge: '+',
      desc: 'Zonas marcadas con "+" en el minimapa. Se activan automáticamente al entrar. Dan experiencia y objetos sin necesidad de aceptar la misión.',
      tips: ['Se activan solos al entrar en la zona', 'Aparecen como "+" azul en el minimapa', 'No ocupan espacio en el diario de misiones'],
    },
  ];

  el.innerHTML = questTypes.map(q => {
    const iconSrc = `${ICON_CDN}${q.icon}.jpg`;
    return `
    <div class="col-12 col-sm-6 col-xl-3">
      <div class="quest-card" style="--qcolor:${q.color}">
        <div class="quest-card-header">
          <div class="quest-marker ${q.markerClass}">${escapeHtml(q.badge)}</div>
          <img src="${iconSrc}" alt="${escapeHtml(q.title)}" class="quest-icon"
               onerror="this.style.display='none'" loading="lazy">
          <div class="quest-title">${escapeHtml(q.title)}</div>
        </div>
        <div class="quest-desc">${escapeHtml(q.desc)}</div>
        <ul class="quest-tips">
          ${q.tips.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
        </ul>
      </div>
    </div>`;
  }).join('');
}

// ── Helpers ──────────────────────────────────────────────────
function triggerView(view) {
  showView(view);
  if (view === 'mapas')    renderMapas();
  if (view === 'heroes')   renderHeroes();
  if (view === 'armas')    renderArmas('all');
  if (view === 'objetos')  renderObjetos();
  if (view === 'razas')    renderRaces();
  if (view === 'clases')   renderClasses();
  if (view === 'tropas')   renderTroops();
  if (view === 'enemigos') renderEnemyTroops();
}

// ── Init ─────────────────────────────────────────────────────
function init() {
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-view]');
    if (!link) return;
    e.preventDefault();
    triggerView(link.dataset.view);
  });

  document.getElementById('home-categories')?.addEventListener('click', e => {
    const card = e.target.closest('[data-goto]');
    if (card) triggerView(card.dataset.goto);
  });

  document.querySelectorAll('[data-carousel-goto]').forEach(btn => {
    btn.addEventListener('click', () => triggerView(btn.dataset.carouselGoto));
  });

  // Restaura sesión leyendo el JWT guardado (sin llamada extra al servidor)
  const savedToken = token();
  if (savedToken) {
    try {
      const payload = JSON.parse(atob(savedToken.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));
      if (payload.exp * 1000 > Date.now()) {
        setAuthState({
          email: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || payload.email,
          name:  payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']         || payload.name
        });
      } else {
        localStorage.removeItem(TOKEN_KEY); // token expirado
      }
    } catch { localStorage.removeItem(TOKEN_KEY); }
  }

  renderHome();
  showView('home');
}

document.addEventListener('DOMContentLoaded', init);

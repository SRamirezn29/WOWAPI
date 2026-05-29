const API_BASE  = 'http://localhost:5001';
const TOKEN_KEY = 'wow_pro_token';
const ICON_CDN  = 'https://wow.zamimg.com/images/wow/icons/large/';
const ICON_FALLBACK = `${ICON_CDN}inv_misc_questionmark.jpg`;

// ── Popular items data (Wowhead CDN icons) ───────────────────
const POPULAR_ITEMS = [
  // ── Armas ──
  { id: 19019, name: 'Thunderfury',         subtitle: 'Blessed Blade of the Windseeker', icon: 'inv_sword_11',              type: 'Espada',         category: 'armas',   rarity: 'legendary' },
  { id: 17182, name: 'Sulfuras',            subtitle: 'Hand of Ragnaros',                icon: 'inv_hammer_unique_sulfuras', type: 'Maza dos manos', category: 'armas',   rarity: 'legendary' },
  { id: 49623, name: 'Shadowmourne',        subtitle: '',                                icon: 'inv_axe_113',                type: 'Hacha dos manos',category: 'armas',   rarity: 'legendary' },
  { id: 22589, name: 'Atiesh',             subtitle: 'Greatstaff of the Guardian',      icon: 'inv_staff_77',               type: 'Báculo',         category: 'armas',   rarity: 'legendary' },
  { id: 32837, name: 'Warglaive de Azzinoth', subtitle: '',                             icon: 'inv_sword_90',               type: 'Arma de mano',   category: 'armas',   rarity: 'legendary' },
  { id: 18609, name: 'Ashkandi',           subtitle: 'Greatsword of the Brotherhood',   icon: 'inv_sword_51',               type: 'Espada dos manos',category: 'armas',  rarity: 'epic'      },
  { id: 46017, name: "Val'anyr",           subtitle: 'Hammer of Ancient Kings',         icon: 'inv_hammer_unique_val_anyr_3d', type: 'Maza',        category: 'armas',   rarity: 'legendary' },
  { id: 18832, name: 'Brutality Blade',    subtitle: '',                                icon: 'inv_sword_29',               type: 'Espada',         category: 'armas',   rarity: 'epic'      },
  // ── Héroes ──
  { id: 22691, name: 'Corrupted Ashbringer', subtitle: '',                              icon: 'inv_sword_39',               type: 'Espada dos manos',category: 'heroes', rarity: 'epic'      },
  { id: 18608, name: 'Benediction',        subtitle: 'Báculo de los Justos',            icon: 'inv_staff_06',               type: 'Báculo',         category: 'heroes',  rarity: 'epic'      },
  { id: 24556, name: "Quel'Serrar",        subtitle: 'Hoja Élfica Ancestral',           icon: 'inv_sword_27',               type: 'Espada',         category: 'heroes',  rarity: 'epic'      },
  { id: 19406, name: "Lok'amir il Romathis", subtitle: '',                              icon: 'inv_mace_25',                type: 'Maza',           category: 'heroes',  rarity: 'epic'      },
  // ── Objetos ──
  { id: 17011, name: "Escama de Onyxia",   subtitle: "Onyxia Scale Cloak",             icon: 'inv_misc_cape_18',           type: 'Capa',           category: 'objetos', rarity: 'epic'      },
  { id: 19138, name: "Lágrima de Neltharion", subtitle: "Neltharion's Tear",           icon: 'inv_misc_gem_bloodstone_01', type: 'Gema',           category: 'objetos', rarity: 'epic'      },
  { id: 18563, name: 'Choker of the Fire Lord', subtitle: '',                           icon: 'inv_jewelry_necklace_13',    type: 'Collar',         category: 'objetos', rarity: 'epic'      },
  { id: 19347, name: 'Band of Accuria',    subtitle: '',                                icon: 'inv_jewelry_ring_38',        type: 'Anillo',         category: 'objetos', rarity: 'epic'      },
  // ── Mapas ──
  { id: 18592, name: 'Talisman of Ephemeral Power', subtitle: 'Monte Ignis',           icon: 'inv_jewelry_talisman_08',    type: 'Talismán',       category: 'mapas',   rarity: 'epic'      },
  { id: 17204, name: 'Core Hound Tooth',   subtitle: 'Guarida del Núcleo de Fuego',    icon: 'inv_knife_09',               type: 'Daga',           category: 'mapas',   rarity: 'epic'      },
  { id: 19432, name: 'Fuego de Ragnaros',  subtitle: 'Molten Core',                    icon: 'inv_misc_gem_variety_02',    type: 'Material',       category: 'mapas',   rarity: 'rare'      },
  { id: 22988, name: 'Nexus Crystal',      subtitle: 'Naxxramas',                      icon: 'inv_misc_gem_ebondraenite_01', type: 'Material',     category: 'mapas',   rarity: 'rare'      },
];

const RARITY_MAP = {
  legendary: { label: 'Legendario', cls: 'rarity-legendary' },
  epic:      { label: 'Épico',      cls: 'rarity-epic'      },
  rare:      { label: 'Raro',       cls: 'rarity-rare'      },
  uncommon:  { label: 'Poco común', cls: 'rarity-uncommon'  },
};

// ── DOM references ──────────────────────────────────────────
const loginModalEl       = document.getElementById('login-modal');
const registerModalEl    = document.getElementById('register-modal');
const loginModalTrigger  = document.getElementById('login-modal-trigger');
const registerModalTrigger = document.getElementById('register-modal-trigger');

const modalHint          = document.getElementById('modal-hint');
const modalSubtitle      = document.getElementById('modal-subtitle');
const loginEmail         = document.getElementById('login-email');
const loginPassword      = document.getElementById('login-password');
const loginBtn           = document.getElementById('login-btn');
const loginError         = document.getElementById('login-error');
const loginSpinner       = document.getElementById('login-spinner');

const regName            = document.getElementById('reg-name');
const regEmail           = document.getElementById('reg-email');
const regPassword        = document.getElementById('reg-password');
const regConfirm         = document.getElementById('reg-confirm');
const registerBtn        = document.getElementById('register-btn');
const registerError      = document.getElementById('register-error');
const registerSuccess    = document.getElementById('register-success');
const registerSpinner    = document.getElementById('register-spinner');

const logoutBtn          = document.getElementById('logout-btn');
const guestBanner        = document.getElementById('guest-banner');
const guestLoginLink     = document.getElementById('guest-login-link');
const inventoryLoginLink = document.getElementById('inventory-login-link');

const searchInput        = document.getElementById('search-input');
const searchBtn          = document.getElementById('search-btn');
const searchError        = document.getElementById('search-error');
const searchSpinner      = document.getElementById('search-spinner');
const itemResultCard     = document.getElementById('item-result-card');
const resultName         = document.getElementById('result-name');
const resultId           = document.getElementById('result-id');
const saveBtn            = document.getElementById('save-btn');
const saveSpinner        = document.getElementById('save-spinner');

const inventoryList      = document.getElementById('inventory-list');
const inventoryEmpty     = document.getElementById('inventory-empty');
const inventoryGuest     = document.getElementById('inventory-guest');
const inventoryCount     = document.getElementById('inventory-count');

const popularGrid        = document.getElementById('popular-items-grid');

// Bootstrap modal instances
const loginModal    = new bootstrap.Modal(loginModalEl);
const registerModal = new bootstrap.Modal(registerModalEl);

// ── Helpers ─────────────────────────────────────────────────
const getToken = () => localStorage.getItem(TOKEN_KEY);

function authHeaders() {
  return { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` };
}

function setLoading(spinner, button, loading) {
  spinner.classList.toggle('d-none', !loading);
  button.disabled = loading;
}

function showError(el, msg)  { el.textContent = msg; el.classList.remove('d-none'); }
function hideError(el)       { el.classList.add('d-none'); }

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// ── Auth state UI ────────────────────────────────────────────
function setAuthState(loggedIn) {
  loginModalTrigger.classList.toggle('d-none',  loggedIn);
  registerModalTrigger.classList.toggle('d-none', loggedIn);
  logoutBtn.classList.toggle('d-none',           !loggedIn);
  guestBanner.classList.toggle('d-none',         loggedIn);

  inventoryGuest.classList.toggle('d-none', loggedIn);
  inventoryEmpty.classList.add('d-none');
  inventoryList.innerHTML = '';
  inventoryCount.classList.toggle('d-none', !loggedIn);

  // footer links
  document.getElementById('footer-login-link').classList.toggle('d-none', loggedIn);
  document.getElementById('footer-register-link').classList.toggle('d-none', loggedIn);

  if (!loggedIn) {
    itemResultCard.style.display = 'none';
    inventoryCount.textContent = '0';
  }
}

// ── Login modal ──────────────────────────────────────────────
function openLoginModal(hint = '') {
  hideError(loginError);
  loginEmail.value = '';
  loginPassword.value = '';

  if (hint) {
    showError(modalHint, hint);
    modalSubtitle.textContent = hint;
  } else {
    hideError(modalHint);
    modalSubtitle.textContent = 'Inicia sesión para continuar';
  }

  loginModal.show();
  loginModalEl.addEventListener('shown.bs.modal', () => loginEmail.focus(), { once: true });
}

function openRegisterModal() {
  hideError(registerError);
  hideError(registerSuccess);
  regName.value = regEmail.value = regPassword.value = regConfirm.value = '';
  registerModal.show();
  registerModalEl.addEventListener('shown.bs.modal', () => regName.focus(), { once: true });
}

// ── Init ─────────────────────────────────────────────────────
(function init() {
  renderPopularItems('todos');
  if (getToken()) {
    setAuthState(true);
    loadInventory();
  } else {
    setAuthState(false);
  }
})();

// ── Open modal triggers ──────────────────────────────────────
loginModalTrigger.addEventListener('click',    () => openLoginModal());
registerModalTrigger.addEventListener('click', () => openRegisterModal());
guestLoginLink.addEventListener('click',       (e) => { e.preventDefault(); openLoginModal(); });
inventoryLoginLink.addEventListener('click',   (e) => { e.preventDefault(); openLoginModal('Inicia sesión para ver y gestionar tu inventario.'); });
document.getElementById('footer-login-link').addEventListener('click',    (e) => { e.preventDefault(); openLoginModal(); });
document.getElementById('footer-register-link').addEventListener('click', (e) => { e.preventDefault(); openRegisterModal(); });

// Switch between modals
document.getElementById('switch-to-register').addEventListener('click', (e) => {
  e.preventDefault(); loginModal.hide(); setTimeout(() => openRegisterModal(), 200);
});
document.getElementById('switch-to-login').addEventListener('click', (e) => {
  e.preventDefault(); registerModal.hide(); setTimeout(() => openLoginModal(), 200);
});

// ── Navbar category links ─────────────────────────────────────
document.querySelectorAll('[data-filter]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tab = document.querySelector(`[data-cat="${link.dataset.filter}"]`);
    if (tab) tab.click();
    document.getElementById('section-popular').scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Category tabs ─────────────────────────────────────────────
document.getElementById('cat-tabs').addEventListener('click', (e) => {
  const tab = e.target.closest('[data-cat]');
  if (!tab) return;

  document.querySelectorAll('[data-cat]').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderPopularItems(tab.dataset.cat);
});

// ── Navbar search ─────────────────────────────────────────────
document.getElementById('nav-search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const val = document.getElementById('nav-search-input').value.trim();
  if (val) quickSearch(val);
});

// ── Popular items rendering ───────────────────────────────────
function renderPopularItems(category) {
  const items = category === 'todos'
    ? POPULAR_ITEMS
    : POPULAR_ITEMS.filter(i => i.category === category);

  if (!items.length) {
    popularGrid.innerHTML = `<div class="col-12 text-center text-secondary py-5">No hay ítems en esta categoría.</div>`;
    return;
  }

  popularGrid.innerHTML = items.map(item => {
    const r = RARITY_MAP[item.rarity] ?? RARITY_MAP.rare;
    const iconSrc = `${ICON_CDN}${item.icon}.jpg`;
    const safeId  = escapeHtml(String(item.id));
    const safeName = escapeHtml(item.name);

    return `
      <div class="col-6 col-md-4 col-xl-3">
        <div class="item-card" data-search-name="${safeName}" role="button" tabindex="0">
          <div class="item-card-icon-wrap">
            <img src="${iconSrc}"
                 onerror="this.src='${ICON_FALLBACK}'"
                 alt="${safeName}" loading="lazy">
          </div>
          <div class="item-card-body">
            <span class="rarity-badge ${r.cls}">${r.label}</span>
            <div class="item-card-name">${safeName}</div>
            ${item.subtitle ? `<div class="item-card-sub">${escapeHtml(item.subtitle)}</div>` : ''}
            <div class="item-card-type">${escapeHtml(item.type)}</div>
          </div>
          <div class="item-card-footer">
            <button class="btn btn-outline-warning btn-sm w-100" data-search-name="${safeName}">
              🔍 Buscar
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Event delegation for item card clicks
popularGrid.addEventListener('click', (e) => {
  const target = e.target.closest('[data-search-name]');
  if (target) quickSearch(target.dataset.searchName);
});

// ── Quick search (from cards or navbar) ───────────────────────
function quickSearch(name) {
  searchInput.value = name;
  document.getElementById('section-dashboard').scrollIntoView({ behavior: 'smooth' });

  if (getToken()) {
    setTimeout(searchItem, 350);
  } else {
    openLoginModal('Inicia sesión para buscar ítems en la base de datos de Blizzard.');
  }
}

// ── Login ────────────────────────────────────────────────────
loginBtn.addEventListener('click', handleLogin);
loginPassword.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleLogin(); });

async function handleLogin() {
  hideError(loginError);
  const email    = loginEmail.value.trim();
  const password = loginPassword.value;

  if (!email || !password) { showError(loginError, 'Por favor completa todos los campos.'); return; }

  setLoading(loginSpinner, loginBtn, true);
  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error('unauthorized');

    const data = await res.json();
    localStorage.setItem(TOKEN_KEY, data.token);
    loginModal.hide();
    setAuthState(true);
    loadInventory();
  } catch {
    showError(loginError, 'Credenciales incorrectas. Inténtalo de nuevo.');
  } finally {
    setLoading(loginSpinner, loginBtn, false);
  }
}

// ── Register ─────────────────────────────────────────────────
registerBtn.addEventListener('click', handleRegister);
regConfirm.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleRegister(); });

async function handleRegister() {
  hideError(registerError);
  hideError(registerSuccess);

  const name     = regName.value.trim();
  const email    = regEmail.value.trim();
  const password = regPassword.value;
  const confirm  = regConfirm.value;

  if (!name || !email || !password) {
    showError(registerError, 'Por favor completa todos los campos.'); return;
  }
  if (password.length < 6) {
    showError(registerError, 'La contraseña debe tener al menos 6 caracteres.'); return;
  }
  if (password !== confirm) {
    showError(registerError, 'Las contraseñas no coinciden.'); return;
  }

  setLoading(registerSpinner, registerBtn, true);
  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'register_failed');
    }

    registerSuccess.textContent = '¡Cuenta creada exitosamente! Redirigiendo al login...';
    registerSuccess.classList.remove('d-none');

    setTimeout(() => {
      registerModal.hide();
      loginEmail.value = email;
      setTimeout(() => openLoginModal(), 250);
    }, 1600);

  } catch (err) {
    const msg = err.message === 'register_failed'
      ? 'No se pudo crear la cuenta. El correo ya podría estar en uso.'
      : (err.message || 'Error al conectar con el servidor.');
    showError(registerError, msg);
  } finally {
    setLoading(registerSpinner, registerBtn, false);
  }
}

// ── Logout ───────────────────────────────────────────────────
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem(TOKEN_KEY);
  setAuthState(false);
});

// ── Search ───────────────────────────────────────────────────
searchBtn.addEventListener('click', searchItem);
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') searchItem(); });

async function searchItem() {
  hideError(searchError);
  itemResultCard.style.display = 'none';

  const name = searchInput.value.trim();
  if (!name) return;

  if (!getToken()) {
    openLoginModal('Inicia sesión para buscar ítems en la base de datos de Blizzard.');
    return;
  }

  setLoading(searchSpinner, searchBtn, true);
  try {
    const res = await fetch(
      `${API_BASE}/api/items/search/${encodeURIComponent(name)}`,
      { headers: authHeaders() }
    );

    if (res.status === 401) { handleExpiredToken(); return; }
    if (!res.ok) throw new Error('not_found');

    const item = await res.json();
    resultName.textContent = item.name ?? item.itemName ?? 'Desconocido';
    resultId.textContent   = item.id   ?? item.itemId   ?? '—';
    saveBtn.dataset.itemId   = item.id   ?? item.itemId;
    saveBtn.dataset.itemName = item.name ?? item.itemName;

    // Reset save button
    saveBtn.textContent = 'Guardar';
    saveBtn.classList.replace('btn-secondary', 'btn-success');
    saveBtn.disabled = false;
    saveSpinner.classList.add('d-none');

    itemResultCard.style.display = 'block';
  } catch (err) {
    showError(searchError, err.message === 'not_found'
      ? 'No se encontró ningún ítem con ese nombre.'
      : 'Error al conectar con el servidor.');
  } finally {
    setLoading(searchSpinner, searchBtn, false);
  }
}

// ── Save favorite ────────────────────────────────────────────
saveBtn.addEventListener('click', async () => {
  if (!getToken()) { openLoginModal('Inicia sesión para guardar ítems en tu inventario.'); return; }

  const itemId   = saveBtn.dataset.itemId;
  const itemName = saveBtn.dataset.itemName;
  if (!itemId) return;

  setLoading(saveSpinner, saveBtn, true);
  try {
    const res = await fetch(`${API_BASE}/api/items/favorite`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({ itemId: Number(itemId), itemName }),
    });

    if (res.status === 401) { handleExpiredToken(); return; }
    if (!res.ok) throw new Error('save_failed');

    await loadInventory();
    saveBtn.textContent = '✓ Guardado';
    saveBtn.classList.replace('btn-success', 'btn-secondary');
    saveBtn.disabled = true;
  } catch {
    showError(searchError, 'No se pudo guardar el ítem.');
  } finally {
    saveSpinner.classList.add('d-none');
  }
});

// ── Load inventory ───────────────────────────────────────────
async function loadInventory() {
  try {
    const res = await fetch(`${API_BASE}/api/items/favorites`, { headers: authHeaders() });
    if (res.status === 401) { handleExpiredToken(); return; }
    if (!res.ok) throw new Error('fetch_failed');
    renderInventory(await res.json());
  } catch { /* silently fail */ }
}

function renderInventory(items) {
  inventoryList.innerHTML = '';
  inventoryEmpty.classList.add('d-none');

  if (!items || items.length === 0) {
    inventoryEmpty.classList.remove('d-none');
    inventoryCount.textContent = '0';
    return;
  }

  inventoryCount.textContent = items.length;
  items.forEach(item => {
    const id   = item.itemId ?? item.id;
    const name = item.itemName ?? item.name ?? 'Desconocido';

    const li = document.createElement('li');
    li.innerHTML = `
      <div class="item-info">
        <span>${escapeHtml(String(name))}</span>
        <span>ID: ${escapeHtml(String(id))}</span>
      </div>
      <button class="btn btn-danger btn-sm" title="Eliminar">❌</button>
    `;
    li.querySelector('button').addEventListener('click', () => deleteFavorite(id));
    inventoryList.appendChild(li);
  });
}

// ── Delete favorite ──────────────────────────────────────────
async function deleteFavorite(itemId) {
  try {
    const res = await fetch(`${API_BASE}/api/items/favorite/${itemId}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });

    if (res.status === 401) { handleExpiredToken(); return; }
    if (!res.ok) throw new Error('delete_failed');

    await loadInventory();

    if (saveBtn.dataset.itemId === String(itemId)) {
      saveBtn.textContent = 'Guardar';
      saveBtn.classList.replace('btn-secondary', 'btn-success');
      saveBtn.disabled = false;
    }
  } catch { /* non-critical */ }
}

// ── Token expiry ─────────────────────────────────────────────
function handleExpiredToken() {
  localStorage.removeItem(TOKEN_KEY);
  setAuthState(false);
  openLoginModal('Tu sesión expiró. Por favor inicia sesión nuevamente.');
}

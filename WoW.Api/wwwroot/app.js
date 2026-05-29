const API_BASE  = 'http://localhost:5001';
const TOKEN_KEY = 'wow_pro_token';
const ICON_CDN  = 'https://wow.zamimg.com/images/wow/icons/large/';
const ICON_FALLBACK = `${ICON_CDN}inv_misc_questionmark.jpg`;
// Retratos oficiales de Blizzard desde el CDN de Heroes of the Storm
const PORTRAIT_CDN = 'https://d1u1mce87gyfbn.cloudfront.net/hero/';

// ── Datos: Zonas / Continentes ────────────────────────────────
const ZONES = [
  {
    name: 'Kalimdor',
    expansion: 'Classic · Cataclysm',
    gradient: 'linear-gradient(135deg, #3d2810 0%, #6b4820 50%, #3d2810 100%)',
    icon: '🌵',
    desc: 'El vasto continente occidental, hogar de los Elfos de la Noche, los Tauren y las áridas tierras de Durotar. Aquí se alza el gran árbol del mundo Teldrassil y el sagrado Monte Hyjal, escenario de batallas legendarias que decidieron el destino del mundo.'
  },
  {
    name: 'Eastern Kingdoms',
    expansion: 'Classic · Cataclysm',
    gradient: 'linear-gradient(135deg, #1e3020 0%, #2e5030 50%, #1e3020 100%)',
    icon: '🏰',
    desc: 'El continente oriental donde se alzan las ruinas de Lordaeron, la majestuosa Ventormenta y los oscuros páramos de la Plaga. Cuna de la humanidad y campo de batalla eterno entre la Alianza y la Horda desde el comienzo de los tiempos.'
  },
  {
    name: 'Northrend',
    expansion: 'Wrath of the Lich King',
    gradient: 'linear-gradient(135deg, #0a1e30 0%, #1a4060 50%, #0a1e30 100%)',
    icon: '❄️',
    desc: 'La tierra de hielo eterno en el extremo norte del mundo. Aquí se alza la Ciudadela de la Corona de Hielo, fortaleza del Rey Exánime Arthas Menethil, donde los héroes de Azeroth libraron su batalla más épica contra el Flagelo.'
  },
  {
    name: 'Dragon Isles',
    expansion: 'Dragonflight',
    gradient: 'linear-gradient(135deg, #3a1008 0%, #7a3015 50%, #3a1008 100%)',
    icon: '🐉',
    desc: 'El hogar ancestral de los dragones, redescubierto en la era moderna. Las cinco razas de vuelo custodian estos territorios místicos repletos de maravillas naturales, volcanes activos y antiguos secretos de los titanes que crearon el mundo.'
  },
  {
    name: 'Broken Isles',
    expansion: 'Legion',
    gradient: 'linear-gradient(135deg, #1a0e3a 0%, #3a2060 50%, #1a0e3a 100%)',
    icon: '🌊',
    desc: 'Archipiélago mítico donde se libró la batalla final contra la Legión Ardiente. Hogar de Suramar, la ciudad élfica oculta por 10.000 años, y de la Guarida del Cielo, sede de la Orden de los Cazademonios fundada por Illidan.'
  },
  {
    name: 'Kul Tiras',
    expansion: 'Battle for Azeroth',
    gradient: 'linear-gradient(135deg, #0a1a30 0%, #153050 50%, #0a1a30 100%)',
    icon: '⚓',
    desc: 'La nación marítima gobernada por la Casa Proudmoore. Sus aguas están infestadas de piratas y criaturas del mar. Jaina Proudmoore retorna aquí para reconciliarse con su pasado y su familia mientras Azeroth se prepara para una nueva guerra.'
  },
  {
    name: 'Zandalar',
    expansion: 'Battle for Azeroth',
    gradient: 'linear-gradient(135deg, #2a1a08 0%, #5a3a10 50%, #2a1a08 100%)',
    icon: '🏛️',
    desc: 'El continente natal de los Trolls Zandalari, una de las razas más antiguas del mundo. La imponente ciudad pirámide de Dazar\'alor domina la isla desde lo alto, guardando milenios de historia y el poder de los Loa, dioses bestiales de los trolls.'
  },
  {
    name: 'Pandaria',
    expansion: 'Mists of Pandaria',
    gradient: 'linear-gradient(135deg, #0a2010 0%, #1a4020 50%, #0a2010 100%)',
    icon: '🐼',
    desc: 'El continente místico envuelto en niebla durante 10.000 años, hogar de los Pandaren. Una tierra de paz y filosofía donde el Sha, las encarnaciones físicas de las emociones negativas, acechan en las sombras esperando que llegue el conflicto.'
  },
  {
    name: 'Khaz Algar',
    expansion: 'The War Within',
    gradient: 'linear-gradient(135deg, #12081e 0%, #2a1545 50%, #12081e 100%)',
    icon: '⛏️',
    desc: 'Las profundidades subterráneas exploradas en la más reciente expansión. Un vasto mundo subterráneo donde viven los Earthen, los ancestros de piedra de los enanos, mientras la amenaza de los Nérubios y su reina resurge desde las profundidades.'
  },
  {
    name: 'Outland',
    expansion: 'The Burning Crusade',
    gradient: 'linear-gradient(135deg, #2a1008 0%, #5a2c00 50%, #2a1008 100%)',
    icon: '🌋',
    desc: 'Lo que quedó del mundo de Draenor tras la explosión mágica causada por los Consejos de Sangre. Este fragmento de planeta flotante en el Vacío es un páramo desolado donde Illidan Stormrage estableció su dominio en el Templo Oscuro.'
  },
  {
    name: 'Shadowlands',
    expansion: 'Shadowlands',
    gradient: 'linear-gradient(135deg, #0a0818 0%, #1a1030 50%, #0a0818 100%)',
    icon: '👻',
    desc: 'El reino de la muerte al que viajan las almas de todos los mortales. Dividido en cuatro Convenants: el glorioso Bastión, el belicoso Maldraxxus, el eterno Ardenweald y el redentivo Revendreth, con el terrible Maw en su centro absoluto.'
  },
];

// ── Datos: Héroes ─────────────────────────────────────────────
const HEROES = [
  {
    id: 'arthas',
    name: 'Arthas Menethil',
    title: 'El Rey Exánime',
    faction: 'scourge',
    factionLabel: 'El Flagelo',
    borderColor: '#4dfff2',
    lore: 'Príncipe de Lordaeron y paladín del Orden de la Mano de Plata, Arthas fue corrompido por la espada maldita Frostmourne en su búsqueda por proteger a su pueblo del Flagelo. Desesperado, sacrificó su alma para obtener el poder necesario, traicionó a su maestro Uther, masacró la ciudad de Stratholme y asesinó a su propio padre el Rey Terenas II. Finalmente se fundió con el Lich King, convirtiéndose en el amo del Flagelo y la mayor amenaza que Azeroth haya visto. Su reinado de terror culminó en la Ciudadela de la Corona de Hielo, donde fue finalmente derrotado por los campeones del mundo.'
  },
  {
    id: 'sylvanas',
    name: 'Sylvanas Windrunner',
    title: 'La Reina Banshee',
    faction: 'horda',
    factionLabel: 'La Horda',
    borderColor: '#ff5555',
    lore: 'Antigua Gran Exploradora de Quel\'Thalas, Sylvanas fue asesinada y convertida en Banshee por Arthas durante la destrucción de los Elfos del Bosque. Liberada del control del Flagelo, fundó los Renegados y tomó la Ciudad Abandonada bajo su mando. Su determinación absoluta la llevó a ser Jefa de Guerra de la Horda, pero sus decisiones cada vez más oscuras —incluyendo la destrucción del árbol del mundo Teldrassil— revelaron una agenda que iba mucho más allá de cualquier facción. Finalmente fue juzgada en los Shadowlands por sus crímenes contra la vida misma.'
  },
  {
    id: 'thrall',
    name: 'Thrall',
    title: 'Go\'el, Hijo de la Tierra',
    faction: 'horda',
    factionLabel: 'La Horda',
    borderColor: '#ff5555',
    lore: 'Go\'el, hijo del Jefe de Guerra Durotan, es el más grande Chamán que Azeroth haya conocido jamás. Nacido en Draenor y criado como esclavo por el cruel Aedelas Blackmoore, desarrolló tanto poder físico como mental. Escapó, reunificó a los clanes orcas liberándolos de la influencia demoníaca, y fundó la Nueva Horda junto a la ciudad de Orgrimmar en las áridas tierras de Durotar. Su vínculo único con los elementos del mundo fue la clave para derrotar al dragón del caos Deathwing durante el Cataclismo, salvando Azeroth de la destrucción total.'
  },
  {
    id: 'jaina',
    name: 'Jaina Proudmoore',
    title: 'Gran Maestra de Dalaran',
    faction: 'alianza',
    factionLabel: 'La Alianza',
    borderColor: '#4da6ff',
    lore: 'Una de las magas más poderosas que hayan existido, Jaina es hija del Almirante Daelin Proudmoore y fue discípula del Archimago Antonidas. Conocida por su sabiduría y su deseo de paz, fundó la ciudad de Theramore como símbolo de cooperación entre razas. Sin embargo, cuando Garrosh Hellscream destruyó Theramore con una bomba de mana matando a miles, algo se quebró en Jaina. La pacifista idealista se transformó en una voluntad de hierro. Asumió el liderazgo del Consejo de los Seis en Dalaran y se convirtió en una de las mentes más brillantes y decididas de la Alianza.'
  },
  {
    id: 'illidan',
    name: 'Illidan Stormrage',
    title: 'El Cazademonios',
    faction: 'neutral',
    factionLabel: 'Neutral',
    borderColor: '#ffc107',
    lore: 'Hermano gemelo de Malfurion Stormrage, Illidan fue el primer Cazademonios de Azeroth. Consumió el Ojo de Sargeras y absorbió la esencia de mil demonios para volverse lo suficientemente poderoso como para combatir a la Legión Ardiente desde adentro. Encarcelado durante diez mil años por sus propios hermanos élficos, fue liberado durante la invasión demoníaca. Siempre llamado "El Traidor", cuando en realidad todo lo que hizo fue prepararse para la inevitable guerra contra la Legión. "No estás preparado" se convirtió en sus palabras inmortales frente a los aventureros que lo derrotaron.'
  },
  {
    id: 'anduin',
    name: 'Anduin Wrynn',
    title: 'Rey de Ventormenta',
    faction: 'alianza',
    factionLabel: 'La Alianza',
    borderColor: '#4da6ff',
    lore: 'Hijo del legendario Rey Varian Wrynn, Anduin creció bajo la tutela espiritual del Papa Benedictus y desarrolló un profundo vínculo con la Luz Sagrada. A diferencia de su padre guerrero, siempre prefirió la diplomacia sobre la espada. Tras la muerte heroica de Varian en la Tumba de Sargeras, asumió el trono siendo apenas un adolescente y lideró la Alianza con compasión y convicción durante algunas de las guerras más devastadoras de Azeroth, demostrando que la fortaleza no siempre viene de una espada, sino del corazón y la fe.'
  },
  {
    id: 'varian',
    name: 'Varian Wrynn',
    title: 'Lo\'Gosh, el Rey Lobo',
    faction: 'alianza',
    factionLabel: 'La Alianza',
    borderColor: '#4da6ff',
    lore: 'Rey de Ventormenta y uno de los guerreros más formidables de toda la Alianza. Secuestrado por la Horda y con sus recuerdos borrados mágicamente, Varian vivió como gladiador en Cuernovil bajo el nombre de Lo\'Gosh, "Fantasma Lobo", ganando cada combate con ferocidad absoluta. Tras recuperar su identidad, lideró la Alianza con mano firme y justa durante años. Murió sacrificándose heroicamente en la entrada de la Tumba de Sargeras, combatiendo en solitario a un ejército de demonios para proteger la retirada de sus aliados. Padre orgulloso de Anduin Wrynn.'
  },
  {
    id: 'guldan',
    name: 'Gul\'dan',
    title: 'El Primero de los Brujos',
    faction: 'legion',
    factionLabel: 'Legión Ardiente',
    borderColor: '#c87dff',
    lore: 'El brujo orco más traicionero y poderoso de todos los tiempos. Gul\'dan fue el instrumento de Kil\'jaeden para corromper a toda la raza orca: ofreció la sangre demoníaca de Mannoroth a los clanes, transformando a una raza noble y espiritual en una maquinaria de guerra sedienta de sangre. Abrió el Portal Oscuro conectando Draenor con Azeroth e inició la Primera Guerra. Su obsesión insaciable por el poder lo llevó a su fin cuando fue devorado por los propios demonios que convocó al intentar robar la esencia de Sargeras en la Tumba del mismo dios-demonio.'
  },
  {
    id: 'tyrande',
    name: 'Tyrande Whisperwind',
    title: 'Suma Sacerdotisa de Elune',
    faction: 'alianza',
    factionLabel: 'La Alianza',
    borderColor: '#4da6ff',
    lore: 'Suma Sacerdotisa de Elune, la diosa de la luna, y comandante de los Centinelas Elfos de la Noche durante más de diez mil años. Compañera eterna de Malfurion Stormrage, Tyrande ha defendido a su pueblo con una dedicación y poder absolutos. Fue ella quien liberó a Illidan de su prisión, desafiando el consejo de Malfurion. Cuando Sylvanas quemó Teldrassil con todo su pueblo, Tyrande invocó el poder de la "Cazadora Nocturna", canalizando directamente la ira de la diosa Elune para buscar una venganza que sacudió los propios Shadowlands.'
  },
  {
    id: 'garrosh',
    name: 'Garrosh Hellscream',
    title: 'Jefe de Guerra Caído',
    faction: 'horda',
    factionLabel: 'La Horda',
    borderColor: '#ff5555',
    lore: 'Hijo del legendario Grom Hellscream, Garrosh comenzó como un guerrero atormentado por la vergüenza del legado de corrupción de su padre. Thrall vio su potencial y lo llevó a Azeroth donde demostró su valía en batalla. Sin embargo, su orgullo extremo y purismo orco lo llevaron por un camino oscuro: cuando asumió como Jefe de Guerra, expulsó a los no-orcos de la Horda, ordenó el ataque a Theramore y finalmente usó el corazón de un Dios Antiguo para empoderar a sus tropas en Pandaria. Su propia facción se unió a la Alianza para derrocarlo en el asedio de Orgrimmar.'
  },
];

// ── Datos: Ítems populares ────────────────────────────────────
const POPULAR_ITEMS = [
  { id: 19019, name: 'Thunderfury',            subtitle: 'Blessed Blade of the Windseeker', icon: 'inv_sword_11',                 type: 'Espada',          category: 'armas',   rarity: 'legendary' },
  { id: 17182, name: 'Sulfuras',               subtitle: 'Hand of Ragnaros',                icon: 'inv_hammer_unique_sulfuras',    type: 'Maza dos manos',  category: 'armas',   rarity: 'legendary' },
  { id: 49623, name: 'Shadowmourne',           subtitle: '',                                icon: 'inv_axe_113',                   type: 'Hacha dos manos', category: 'armas',   rarity: 'legendary' },
  { id: 22589, name: 'Atiesh',                subtitle: 'Greatstaff of the Guardian',      icon: 'inv_staff_77',                  type: 'Báculo',          category: 'armas',   rarity: 'legendary' },
  { id: 32837, name: 'Warglaive de Azzinoth',  subtitle: '',                               icon: 'inv_sword_90',                  type: 'Arma de mano',    category: 'armas',   rarity: 'legendary' },
  { id: 18609, name: 'Ashkandi',              subtitle: 'Greatsword of the Brotherhood',   icon: 'inv_sword_51',                  type: 'Espada dos manos',category: 'armas',   rarity: 'epic'      },
  { id: 46017, name: "Val'anyr",              subtitle: 'Hammer of Ancient Kings',         icon: 'inv_hammer_unique_val_anyr_3d', type: 'Maza',            category: 'armas',   rarity: 'legendary' },
  { id: 18832, name: 'Brutality Blade',       subtitle: '',                                icon: 'inv_sword_29',                  type: 'Espada',          category: 'armas',   rarity: 'epic'      },
  { id: 22691, name: 'Corrupted Ashbringer',  subtitle: '',                               icon: 'inv_sword_39',                  type: 'Espada dos manos',category: 'heroes',  rarity: 'epic'      },
  { id: 18608, name: 'Benediction',           subtitle: 'Báculo de los Justos',            icon: 'inv_staff_06',                  type: 'Báculo',          category: 'heroes',  rarity: 'epic'      },
  { id: 24556, name: "Quel'Serrar",           subtitle: 'Hoja Élfica Ancestral',           icon: 'inv_sword_27',                  type: 'Espada',          category: 'heroes',  rarity: 'epic'      },
  { id: 19406, name: "Lok'amir il Romathis",  subtitle: '',                               icon: 'inv_mace_25',                   type: 'Maza',            category: 'heroes',  rarity: 'epic'      },
  { id: 17011, name: 'Escama de Onyxia',      subtitle: 'Onyxia Scale Cloak',             icon: 'inv_misc_cape_18',              type: 'Capa',            category: 'objetos', rarity: 'epic'      },
  { id: 19138, name: 'Lágrima de Neltharion', subtitle: "Neltharion's Tear",              icon: 'inv_misc_gem_bloodstone_01',    type: 'Gema',            category: 'objetos', rarity: 'epic'      },
  { id: 18563, name: 'Choker of the Fire Lord',subtitle: '',                              icon: 'inv_jewelry_necklace_13',       type: 'Collar',          category: 'objetos', rarity: 'epic'      },
  { id: 19347, name: 'Band of Accuria',       subtitle: '',                               icon: 'inv_jewelry_ring_38',           type: 'Anillo',          category: 'objetos', rarity: 'epic'      },
  { id: 18592, name: 'Talisman of Ephemeral Power', subtitle: 'Monte Ignis',             icon: 'inv_jewelry_talisman_08',       type: 'Talismán',        category: 'mapas',   rarity: 'epic'      },
  { id: 17204, name: 'Core Hound Tooth',      subtitle: 'Guarida del Núcleo de Fuego',   icon: 'inv_knife_09',                  type: 'Daga',            category: 'mapas',   rarity: 'epic'      },
  { id: 19432, name: 'Fuego de Ragnaros',     subtitle: 'Molten Core',                   icon: 'inv_misc_gem_variety_02',       type: 'Material',        category: 'mapas',   rarity: 'rare'      },
  { id: 22988, name: 'Nexus Crystal',         subtitle: 'Naxxramas',                     icon: 'inv_misc_gem_ebondraenite_01',  type: 'Material',        category: 'mapas',   rarity: 'rare'      },
];

const RARITY_MAP = {
  legendary: { label: 'Legendario', cls: 'rarity-legendary' },
  epic:      { label: 'Épico',      cls: 'rarity-epic'      },
  rare:      { label: 'Raro',       cls: 'rarity-rare'      },
  uncommon:  { label: 'Poco común', cls: 'rarity-uncommon'  },
};

// ── DOM references ────────────────────────────────────────────
const loginModalEl         = document.getElementById('login-modal');
const registerModalEl      = document.getElementById('register-modal');
const loginModalTrigger    = document.getElementById('login-modal-trigger');
const registerModalTrigger = document.getElementById('register-modal-trigger');
const modalHint            = document.getElementById('modal-hint');
const modalSubtitle        = document.getElementById('modal-subtitle');
const loginEmail           = document.getElementById('login-email');
const loginPassword        = document.getElementById('login-password');
const loginBtn             = document.getElementById('login-btn');
const loginError           = document.getElementById('login-error');
const loginSpinner         = document.getElementById('login-spinner');
const regName              = document.getElementById('reg-name');
const regEmail             = document.getElementById('reg-email');
const regPassword          = document.getElementById('reg-password');
const regConfirm           = document.getElementById('reg-confirm');
const registerBtn          = document.getElementById('register-btn');
const registerError        = document.getElementById('register-error');
const registerSuccess      = document.getElementById('register-success');
const registerSpinner      = document.getElementById('register-spinner');
const logoutBtn            = document.getElementById('logout-btn');
const guestBanner          = document.getElementById('guest-banner');
const guestLoginLink       = document.getElementById('guest-login-link');
const inventoryLoginLink   = document.getElementById('inventory-login-link');
const searchInput          = document.getElementById('search-input');
const searchBtn            = document.getElementById('search-btn');
const searchError          = document.getElementById('search-error');
const searchSpinner        = document.getElementById('search-spinner');
const itemResultCard       = document.getElementById('item-result-card');
const resultName           = document.getElementById('result-name');
const resultId             = document.getElementById('result-id');
const saveBtn              = document.getElementById('save-btn');
const saveSpinner          = document.getElementById('save-spinner');
const inventoryList        = document.getElementById('inventory-list');
const inventoryEmpty       = document.getElementById('inventory-empty');
const inventoryGuest       = document.getElementById('inventory-guest');
const inventoryCount       = document.getElementById('inventory-count');
const popularGrid          = document.getElementById('popular-items-grid');
const zonesGrid            = document.getElementById('zones-grid');
const heroesGrid           = document.getElementById('heroes-grid');

const loginModal    = new bootstrap.Modal(loginModalEl);
const registerModal = new bootstrap.Modal(registerModalEl);

// ── Helpers ───────────────────────────────────────────────────
const getToken = () => localStorage.getItem(TOKEN_KEY);

function authHeaders() {
  return { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` };
}

function setLoading(spinner, button, loading) {
  spinner.classList.toggle('d-none', !loading);
  button.disabled = loading;
}

function showError(el, msg) { el.textContent = msg; el.classList.remove('d-none'); }
function hideError(el)      { el.classList.add('d-none'); }

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// ── View system ───────────────────────────────────────────────
function showView(viewName) {
  document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`view-${viewName}`);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update active nav link
  document.querySelectorAll('[data-view]').forEach(l => l.classList.remove('active'));
  document.querySelectorAll(`[data-view="${viewName}"]`).forEach(l => l.classList.add('active'));

  // Render on-demand
  if (viewName === 'mapas')  renderZones();
  if (viewName === 'heroes') renderHeroes();
  if (viewName === 'armas') {
    setTimeout(() => {
      document.querySelector('[data-cat="armas"]')?.click();
      document.getElementById('section-popular')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  }
  if (viewName === 'objetos') {
    setTimeout(() => {
      document.querySelector('[data-cat="objetos"]')?.click();
      document.getElementById('section-popular')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  }
}

// ── Render: Zones ─────────────────────────────────────────────
function renderZones() {
  if (zonesGrid.children.length > 0) return;

  zonesGrid.innerHTML = ZONES.map(zone => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="zone-card">
        <div class="zone-card-bg" style="background:${zone.gradient};"></div>
        <div class="zone-card-overlay">
          <div class="zone-expansion">${escapeHtml(zone.expansion)}</div>
          <div class="zone-name">${zone.icon} ${escapeHtml(zone.name)}</div>
          <div class="zone-desc">${escapeHtml(zone.desc)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Render: Heroes ────────────────────────────────────────────
function renderHeroes() {
  if (heroesGrid.children.length > 0) return;

  heroesGrid.innerHTML = HEROES.map(hero => {
    const portraitUrl = `${PORTRAIT_CDN}${hero.id}/select-screen-portrait.png`;

    return `
      <div class="col-12 col-sm-6 col-xl-4">
        <div class="hero-card" style="border-color:${hero.borderColor}33;">
          <div class="hero-portrait-wrap">
            <img
              src="${portraitUrl}"
              alt="${escapeHtml(hero.name)}"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="hero-portrait-fallback" style="display:none; background:linear-gradient(135deg,#0a0a0a,#1a1a1a);">⚔</div>
            <div class="hero-portrait-gradient"></div>
          </div>
          <div class="hero-card-body">
            <span class="hero-faction faction-${hero.faction}">${escapeHtml(hero.factionLabel)}</span>
            <div class="hero-name">${escapeHtml(hero.name)}</div>
            <div class="hero-title">${escapeHtml(hero.title)}</div>
            <p class="hero-lore">${escapeHtml(hero.lore)}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Render: Popular items ─────────────────────────────────────
function renderPopularItems(category) {
  const items = category === 'todos' ? POPULAR_ITEMS : POPULAR_ITEMS.filter(i => i.category === category);

  if (!items.length) {
    popularGrid.innerHTML = `<div class="col-12 text-center text-secondary py-5">No hay ítems en esta categoría.</div>`;
    return;
  }

  popularGrid.innerHTML = items.map(item => {
    const r       = RARITY_MAP[item.rarity] ?? RARITY_MAP.rare;
    const safeName = escapeHtml(item.name);

    return `
      <div class="col-6 col-md-4 col-xl-3">
        <div class="item-card" data-search-name="${safeName}" role="button" tabindex="0">
          <div class="item-card-icon-wrap">
            <img src="${ICON_CDN}${item.icon}.jpg" onerror="this.src='${ICON_FALLBACK}'" alt="${safeName}" loading="lazy">
          </div>
          <div class="item-card-body">
            <span class="rarity-badge ${r.cls}">${r.label}</span>
            <div class="item-card-name">${safeName}</div>
            ${item.subtitle ? `<div class="item-card-sub">${escapeHtml(item.subtitle)}</div>` : ''}
            <div class="item-card-type">${escapeHtml(item.type)}</div>
          </div>
          <div class="item-card-footer">
            <button class="btn btn-outline-warning btn-sm w-100" data-search-name="${safeName}">🔍 Buscar</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── Auth state UI ─────────────────────────────────────────────
function setAuthState(loggedIn) {
  loginModalTrigger.classList.toggle('d-none',    loggedIn);
  registerModalTrigger.classList.toggle('d-none', loggedIn);
  logoutBtn.classList.toggle('d-none',            !loggedIn);
  guestBanner.classList.toggle('d-none',          loggedIn);
  inventoryGuest.classList.toggle('d-none',       loggedIn);
  inventoryEmpty.classList.add('d-none');
  inventoryList.innerHTML = '';
  inventoryCount.classList.toggle('d-none', !loggedIn);
  document.getElementById('footer-login-link').classList.toggle('d-none',    loggedIn);
  document.getElementById('footer-register-link').classList.toggle('d-none', loggedIn);
  if (!loggedIn) { itemResultCard.style.display = 'none'; inventoryCount.textContent = '0'; }
}

// ── Login modal helpers ───────────────────────────────────────
function openLoginModal(hint = '') {
  hideError(loginError);
  loginEmail.value = '';
  loginPassword.value = '';
  if (hint) { showError(modalHint, hint); modalSubtitle.textContent = hint; }
  else      { hideError(modalHint);       modalSubtitle.textContent = 'Inicia sesión para continuar'; }
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

// ── Init ──────────────────────────────────────────────────────
(function init() {
  renderPopularItems('todos');
  showView('home');
  if (getToken()) { setAuthState(true); loadInventory(); }
  else              setAuthState(false);
})();

// ── Global click: [data-view] links (nav, footer, carousel) ──
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-view]');
  // Ignore if it's the login/logout buttons (they have their own handlers)
  if (!trigger || trigger.tagName === 'BUTTON' && trigger.id === 'logout-btn') return;
  if (trigger.id === 'login-modal-trigger' || trigger.id === 'register-modal-trigger') return;
  e.preventDefault();
  showView(trigger.dataset.view);
  // Close mobile nav
  const navCollapse = document.getElementById('navMain');
  if (navCollapse.classList.contains('show')) {
    bootstrap.Collapse.getInstance(navCollapse)?.hide();
  }
});

// ── Brand → home ──────────────────────────────────────────────
document.getElementById('nav-brand').addEventListener('click', (e) => { e.preventDefault(); showView('home'); });

// ── Category tabs ─────────────────────────────────────────────
document.getElementById('cat-tabs').addEventListener('click', (e) => {
  const tab = e.target.closest('[data-cat]');
  if (!tab) return;
  document.querySelectorAll('[data-cat]').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderPopularItems(tab.dataset.cat);
});

// ── Popular items: click to quick search ─────────────────────
popularGrid.addEventListener('click', (e) => {
  const t = e.target.closest('[data-search-name]');
  if (t) quickSearch(t.dataset.searchName);
});

// ── Navbar search form ────────────────────────────────────────
document.getElementById('nav-search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const val = document.getElementById('nav-search-input').value.trim();
  if (val) quickSearch(val);
});

// ── Quick search ──────────────────────────────────────────────
function quickSearch(name) {
  showView('home');
  searchInput.value = name;
  setTimeout(() => {
    document.getElementById('section-dashboard').scrollIntoView({ behavior: 'smooth' });
    if (getToken()) setTimeout(searchItem, 400);
    else openLoginModal('Inicia sesión para buscar ítems en la base de datos de Blizzard.');
  }, 80);
}

// ── Modal triggers ────────────────────────────────────────────
loginModalTrigger.addEventListener('click',    () => openLoginModal());
registerModalTrigger.addEventListener('click', () => openRegisterModal());
guestLoginLink.addEventListener('click',       (e) => { e.preventDefault(); openLoginModal(); });
inventoryLoginLink.addEventListener('click',   (e) => { e.preventDefault(); openLoginModal('Inicia sesión para ver y gestionar tu inventario.'); });
document.getElementById('footer-login-link').addEventListener('click',    (e) => { e.preventDefault(); openLoginModal(); });
document.getElementById('footer-register-link').addEventListener('click', (e) => { e.preventDefault(); openRegisterModal(); });
document.getElementById('switch-to-register').addEventListener('click',   (e) => { e.preventDefault(); loginModal.hide(); setTimeout(openRegisterModal, 200); });
document.getElementById('switch-to-login').addEventListener('click',      (e) => { e.preventDefault(); registerModal.hide(); setTimeout(openLoginModal, 200); });

// ── Login ─────────────────────────────────────────────────────
loginBtn.addEventListener('click', handleLogin);
loginPassword.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleLogin(); });

async function handleLogin() {
  hideError(loginError);
  const email = loginEmail.value.trim(), password = loginPassword.value;
  if (!email || !password) { showError(loginError, 'Por favor completa todos los campos.'); return; }

  setLoading(loginSpinner, loginBtn, true);
  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('unauthorized');
    const data = await res.json();
    localStorage.setItem(TOKEN_KEY, data.token);
    loginModal.hide();
    setAuthState(true);
    loadInventory();
  } catch { showError(loginError, 'Credenciales incorrectas. Inténtalo de nuevo.'); }
  finally  { setLoading(loginSpinner, loginBtn, false); }
}

// ── Register ──────────────────────────────────────────────────
registerBtn.addEventListener('click', handleRegister);
regConfirm.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleRegister(); });

async function handleRegister() {
  hideError(registerError); hideError(registerSuccess);
  const name = regName.value.trim(), email = regEmail.value.trim(),
        password = regPassword.value, confirm = regConfirm.value;

  if (!name || !email || !password) { showError(registerError, 'Por favor completa todos los campos.'); return; }
  if (password.length < 6)  { showError(registerError, 'La contraseña debe tener al menos 6 caracteres.'); return; }
  if (password !== confirm) { showError(registerError, 'Las contraseñas no coinciden.'); return; }

  setLoading(registerSpinner, registerBtn, true);
  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err.message || 'register_failed'); }
    registerSuccess.textContent = '¡Cuenta creada exitosamente! Redirigiendo al login...';
    registerSuccess.classList.remove('d-none');
    setTimeout(() => { registerModal.hide(); loginEmail.value = email; setTimeout(openLoginModal, 250); }, 1600);
  } catch (err) {
    showError(registerError, err.message === 'register_failed'
      ? 'No se pudo crear la cuenta. El correo ya podría estar en uso.'
      : (err.message || 'Error al conectar con el servidor.'));
  } finally { setLoading(registerSpinner, registerBtn, false); }
}

// ── Logout ────────────────────────────────────────────────────
logoutBtn.addEventListener('click', () => { localStorage.removeItem(TOKEN_KEY); setAuthState(false); });

// ── Search ────────────────────────────────────────────────────
searchBtn.addEventListener('click', searchItem);
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') searchItem(); });

async function searchItem() {
  hideError(searchError);
  itemResultCard.style.display = 'none';
  const name = searchInput.value.trim();
  if (!name) return;
  if (!getToken()) { openLoginModal('Inicia sesión para buscar ítems en la base de datos de Blizzard.'); return; }

  setLoading(searchSpinner, searchBtn, true);
  try {
    const res = await fetch(`${API_BASE}/api/items/search/${encodeURIComponent(name)}`, { headers: authHeaders() });
    if (res.status === 401) { handleExpiredToken(); return; }
    if (!res.ok) throw new Error('not_found');
    const item = await res.json();
    resultName.textContent       = item.name ?? item.itemName ?? 'Desconocido';
    resultId.textContent         = item.id   ?? item.itemId   ?? '—';
    saveBtn.dataset.itemId       = item.id   ?? item.itemId;
    saveBtn.dataset.itemName     = item.name ?? item.itemName;
    saveBtn.textContent = 'Guardar';
    saveBtn.classList.replace('btn-secondary', 'btn-success');
    saveBtn.disabled = false;
    saveSpinner.classList.add('d-none');
    itemResultCard.style.display = 'block';
  } catch (err) {
    showError(searchError, err.message === 'not_found' ? 'No se encontró ningún ítem con ese nombre.' : 'Error al conectar con el servidor.');
  } finally { setLoading(searchSpinner, searchBtn, false); }
}

// ── Save favorite ─────────────────────────────────────────────
saveBtn.addEventListener('click', async () => {
  if (!getToken()) { openLoginModal('Inicia sesión para guardar ítems en tu inventario.'); return; }
  const itemId = saveBtn.dataset.itemId, itemName = saveBtn.dataset.itemName;
  if (!itemId) return;

  setLoading(saveSpinner, saveBtn, true);
  try {
    const res = await fetch(`${API_BASE}/api/items/favorite`, {
      method: 'POST', headers: authHeaders(),
      body: JSON.stringify({ itemId: Number(itemId), itemName }),
    });
    if (res.status === 401) { handleExpiredToken(); return; }
    if (!res.ok) throw new Error('save_failed');
    await loadInventory();
    saveBtn.textContent = '✓ Guardado';
    saveBtn.classList.replace('btn-success', 'btn-secondary');
    saveBtn.disabled = true;
  } catch { showError(searchError, 'No se pudo guardar el ítem.'); }
  finally  { saveSpinner.classList.add('d-none'); }
});

// ── Load inventory ────────────────────────────────────────────
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
    const id = item.itemId ?? item.id, name = item.itemName ?? item.name ?? 'Desconocido';
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

// ── Delete favorite ───────────────────────────────────────────
async function deleteFavorite(itemId) {
  try {
    const res = await fetch(`${API_BASE}/api/items/favorite/${itemId}`, { method: 'DELETE', headers: authHeaders() });
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

// ── Token expiry ──────────────────────────────────────────────
function handleExpiredToken() {
  localStorage.removeItem(TOKEN_KEY);
  setAuthState(false);
  openLoginModal('Tu sesión expiró. Por favor inicia sesión nuevamente.');
}

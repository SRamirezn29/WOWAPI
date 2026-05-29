// ── CDN helpers ──────────────────────────────────────────────
export const ICON_CDN      = 'https://wow.zamimg.com/images/wow/icons/large/';
export const PORTRAIT_CDN  = 'https://d1u1mce87gyfbn.cloudfront.net/hero/';
export const ICON_FALLBACK = `${ICON_CDN}inv_misc_questionmark.jpg`;

// ── Continentes con sub-zonas ────────────────────────────────
export const CONTINENTS = [
  {
    id: 'kalimdor',
    thumb: '/images/zones/kalimdor.jpg',
    name: 'Kalimdor',
    expansion: 'Classic · Cataclysm',
    icon: '🌵',
    gradient: 'linear-gradient(135deg, #3d2810 0%, #6b4820 50%, #3d2810 100%)',
    desc: 'El vasto continente occidental, hogar de los Elfos de la Noche, los Tauren y las áridas tierras de Durotar.',
    zones: [
      { name: 'Durotar',          level: '1-10',  image: '/images/zones/durotar.webp',                       desc: 'Tierra natal de los Orcos y los Trols, marcada por el calor y las rocas rojizas. Orgrimmar, capital de la Horda, se alza en el norte.' },
      { name: 'Valle de Mulgore', level: '1-10',  image: '/images/zones/valle-de-mulgore.webp',              desc: 'Praderas sagradas de los Tauren. La Gran Mesa de Thunder Bluff domina el horizonte sobre las suaves colinas.' },
      { name: 'Bosque de Teldrassil', level: '1-10', image: '/images/zones/bosque-de-teldrassil.webp',          desc: 'El gran árbol del mundo donde viven los Elfos de la Noche. Darnassus, su ciudad capital, flota entre las ramas.' },
      { name: 'Azshara',         level: '10-20', image: '/images/zones/azshara.webp',                       desc: 'Costa septentrional marcada por la magia arcana de la era de la Reina Azshara. Ahora territorio de los Goblins Trampa-cabras.' },
      { name: 'Bosque de Ashenvale', level: '18-30', image: '/images/zones/bosque-de-ashenvale.webp',            desc: 'Frondoso bosque eterno disputado entre la Alianza y la Horda. Los Sentinelas protegen sus antiguos árboles de roble cósmico.' },
      { name: 'Montañas Stonetalon', level: '15-27', image: '/images/zones/Montañas Stonetalon.webp', desc: 'Montañas encrespadas con depósitos minerales. La industria Goblin arrasa los bosques, causando conflictos con los Druidas.' },
      { name: 'Desolace',        level: '30-40', image: '/images/zones/Desolace.webp',          desc: 'Paisaje desolado y estéril donde los Centauros guerrean eternamente. Las ruinas de los Kaldorei guardan secretos del pasado.' },
      { name: 'Mil Agujas',      level: '25-35', image: '/images/zones/Mil Agujas.webp',         desc: 'Un laberinto de pináculos de arenisca que se elevan sobre el suelo del desierto. Los Tauren de Mil Agujas son maestros de esta tierra.' },
      { name: 'Feralas',         level: '38-50', image: '/images/zones/Feralas.webp',            desc: 'Selva densa y húmeda al suroeste. Los Gigantes de piedra merodean entre ruinas ancestrales de la civilización Kaldorei.' },
      { name: 'Tanaris',         level: '40-50', image: '/images/zones/Tanaris.jpg',             desc: 'Desierto abrasador al sur con la ciudad pirata de Gadgetzan. Las Cavernas del Tiempo, nexo temporal del Dragonaspecto del Bronce, se hallan aquí.' },
      { name: 'Silithus',        level: '55-60', image: '/images/zones/Silithus.webp',           desc: 'El semillero de los Qiraji, una antigua raza insectoide. La descomunal Ahn\'Qiraj fue sellada en la Guerra de los Arenas.' },
      { name: 'Monte Hyjal',     level: '78-82', image: '/images/zones/Monte Hyjal.jpg',         desc: 'Montaña sagrada del Árbol del Mundo Nordrassil. Ragnaros el Señor del Fuego intentó quemarla durante el Cataclismo.' },
    ]
  },
  {
    id: 'eastern-kingdoms',
    thumb: '/images/zones/eastern-kingdoms.jpg',
    name: 'Eastern Kingdoms',
    expansion: 'Classic · Cataclysm',
    icon: '🏰',
    gradient: 'linear-gradient(135deg, #1e3020 0%, #2e5030 50%, #1e3020 100%)',
    desc: 'El continente oriental con las ruinas de Lordaeron, la majestuosa Ventormenta y los oscuros páramos de la Plaga.',
    zones: [
      { name: 'Elwynn Forest',    level: '1-10',  image: '/images/zones/Elwynn Forest.jpg',        desc: 'Los bosques apacibles que rodean Ventormenta, ciudad capital humana. El punto de partida de incontables héroes humanos.' },
      { name: 'Dun Morogh',       level: '1-10',  image: '/images/zones/Dun Morogh.webp',           desc: 'Tierras heladas de los Enanos y Gnomos. La gran ciudad de Forja de Hierro, tallada en las montañas, es la joya de la Corona.' },
      { name: 'Tirisfal Glades',  level: '1-10',  image: '/images/zones/Tirisfal Glades.jpg',       desc: 'Las lúgubres tierras de los No-Muertos. Undercity, capital de los Renegados, yace bajo las ruinas del palacio de Lordaeron.' },
      { name: 'Westfall',         level: '10-20', image: '/images/zones/Westfall.jpg',              desc: 'Tierras agrícolas empobrecidas al oeste de Ventormenta. El Defias Brotherhood, liderado por Edwin VanCleef, asoló estas tierras.' },
      { name: 'Redridge Mountains', level: '15-25', image: '/images/zones/Redridge Mountains.jpg',  desc: 'Montañas escarpadas al este de Ventormenta. Los Orcos del clan Fuego Negro atacan constantemente los puestos fronterizos humanos.' },
      { name: 'Silverpine Forest', level: '10-20', image: '/images/zones/Silverpine Forest.jpg',    desc: 'Bosque oscuro y sombrío al sur de Tirisfal. Los Hombres Lobo fueron maldecidos aquí por el virus Mannoroth durante el Tercer Guerra.' },
      { name: 'Hillsbrad Foothills', level: '20-30', image: '/images/zones/Hillsbrad Foothills.jpg', desc: 'Valle fértil disputado entre la Alianza y la Horda. Antes próspero, ahora un campo de batalla constante entre humanos y No-Muertos.' },
      { name: 'Arathi Highlands', level: '25-35', image: '/images/zones/Arathi Highlands.jpg',      desc: 'Mesetas ventosas con el antiguo pueblo humano de Stromgarde. La batalla por Arathi es escenario de combates JcJ eternos.' },
      { name: 'Stranglethorn Vale', level: '30-45', image: '/images/zones/Stranglethorn Vale.jpg',  desc: 'Selva tropical al sur repleta de Trols y piratas. Booty Bay, ciudad gobernada por piratas, es un hervidero de comercio y peligro.' },
      { name: 'Plaguelands',      level: '48-58', image: '/images/zones/Plaguelands.jpg',           desc: 'Tierras corrompidas por el poder del Flagelo. Antiguas ciudades como Stratholme y Scholomance aguardan a los aventureros más valientes.' },
      { name: 'Burning Steppes',  level: '50-58', image: '/images/zones/Burning Steppes.jpg',       desc: 'Páramos volcánicos bajo el control del dragón Nefarian. La Montaña Pira Negra y sus mazmorras son un desafío legendario.' },
      { name: 'Blasted Lands',    level: '45-55', desc: 'Tierra quemada por la explosión del Portal Oscuro. Las energías demoníacas corrompieron para siempre este paisaje desolado.' },
    ]
  },
  {
    id: 'terrallende',
    thumb: '/images/zones/terrallende.webp',
    name: 'Terrallende',
    expansion: 'The Burning Crusade',
    gradient: 'linear-gradient(135deg, #2d0800 0%, #7a1500 50%, #2d0800 100%)',
    desc: 'Los restos destrozados del mundo natal de los Orcos, ahora islas flotantes suspendidas en el vacío. Portal Oscuro abierto, demonios por doquier y la promesa de redención Draenei.',
    zones: [
      { name: 'Península de Fuego Infernal', level: '58-63', image: '/images/zones/Península de Fuego Infernal.jpg', blizzardZoneId: 3483, desc: 'La zona de entrada a Terrallende: un paisaje volcánico arrasado por la guerra constante. La Ciudadela del Fuego Infernal, bastión de los Orcos del Clan Bonechewer, domina el horizonte rojizo.' },
      { name: 'Marisma de Zangar',           level: '60-65', image: '/images/zones/Marisma de Zangar.jpg', blizzardZoneId: 3521, desc: 'Marismas azuladas formadas sobre el cadáver de un ser eterno. Los Draenei Broken habitan este extraño ecosistema junto a hongos gigantes y criaturas únicas de Terrallende.' },
      { name: 'Bosque de Terokkar',          level: '62-65', image: '/images/zones/Bosque de Terokkar.jpg', blizzardZoneId: 3519, desc: 'El bosque oscuro donde se alza Shattrath, ciudad neutral y hogar de los Sha\'tar. Las ruinas de Auchindoun, lugar de descanso Draenei, son asediadas por los Arakkoa.' },
      { name: 'Llanura de Nagrand',          level: '64-67', image: '/images/zones/Llanura de Nagrand.jpg', blizzardZoneId: 3518, desc: 'Las praderas flotantes más hermosas de Terrallende, que recuerdan al Draenor original intacto. Hogar de los Mag\'har Orcos no corrompidos y el anciano Greatmother Geyah.' },
      { name: 'Montañas Filoespada',         level: '65-68', image: '/images/zones/Montañas Filoespada.webp', blizzardZoneId: 3522, desc: 'Formaciones rocosas afiladas como cuchillas donde los Gronn, seres de piedra colosales, gobiernan. Los Furbolg y los Ogros luchan por el dominio de estas tierras imposibles.' },
      { name: 'Tormenta Abisal',             level: '67-70', image: '/images/zones/Tormenta Abisal.webp', blizzardZoneId: 3523, desc: 'Islas flotantes de energía arcana al norte extremo de Terrallende. Los Naaru construyeron aquí el Templo de Tempest Keep, ahora ocupado por Kael\'thas Sunstrider y su ejército.' },
      { name: 'Valle Sombraluna',            level: '67-70', image: '/images/zones/Valle Sombraluna.webp', blizzardZoneId: 3520, desc: 'El corazón oscuro de Terrallende donde Illidan Tempestira gobierna desde la Ciudadela del Templo Negro. Fuerzas de la Alianza y Horda se unen aquí para derrotar al Señor de los Demonios.' },
    ]
  },
  {
    id: 'northrend',
    thumb: '/images/zones/northrend.webp',
    name: 'Northrend',
    expansion: 'Wrath of the Lich King',
    icon: '❄️',
    gradient: 'linear-gradient(135deg, #0a1e30 0%, #1a4060 50%, #0a1e30 100%)',
    desc: 'La tierra de hielo eterno donde se alza la Ciudadela de la Corona de Hielo, fortaleza del Rey Exánime.',
    zones: [
      { name: 'Howling Fjord',   level: '68-72', image: '/images/zones/Howling Fjord.webp',       desc: 'Los acantilados bañados por el mar del norte. Los Vrykul, ancestros de los humanos, despertaron aquí para servir al Rey Exánime.' },
      { name: 'Borean Tundra',   level: '68-72', image: '/images/zones/Borean Tundra.webp',       desc: 'Tundra helada en el extremo occidental. La ciudad gnómica de Fizzcrank y los Nerubios subterráneos conviven en esta región.' },
      { name: 'Dragonblight',    level: '72-75', image: '/images/zones/Dragonblight.webp',        desc: 'El cementerio de dragones más sagrado del mundo. Aquí Arthas Menethil traicionó a Ner\'zhul y se convirtió en el Rey Exánime.' },
      { name: 'Grizzly Hills',   level: '73-75', image: '/images/zones/Grizzly Hills.png',        desc: 'Espesos bosques de pinos habitados por Furbolgs y humanos Vrykul. Un raro oasis de belleza natural en el inhóspito norte.' },
      { name: 'Zul\'Drak',       level: '74-77', image: "/images/zones/Zul'Drak.webp",            desc: 'Las tierras de los Trols Helados, que sacrifican sus dioses Loa para combatir al Flagelo. Un ejemplo de desesperación absoluta.' },
      { name: 'Sholazar Basin',  level: '76-78', image: '/images/zones/Sholazar Basin.webp',      desc: 'Exuberante cuenca tropical mantenida caliente por máquinas titánicas. Los Oráculos y los Worg compiten por el dominio de estas tierras.' },
      { name: 'Storm Peaks',     level: '77-80', image: '/images/zones/Storm Peaks.webp',         desc: 'Las altísimas montañas donde viven los Titanes de Piedra. La ciudad titánica de Ulduar, prisión de Yogg-Saron, se encuentra aquí.' },
      { name: 'Icecrown',        level: '77-80', image: '/images/zones/Icecrown.jpg',             desc: 'La región más oscura y desolada de Northrend. La Ciudadela de la Corona de Hielo domina el horizonte, sede del poder del Rey Exánime.' },
      { name: 'Crystalsong Forest', level: '74-80', image: '/images/zones/Crystalsong Forest.webp', desc: 'Bosque cristalino de belleza sobrenatural que rodea la ciudad flotante de Dalaran, base de operaciones de los magos durante la expansión.' },
    ]
  },
  {
    id: 'pandaria',
    thumb: '/images/zones/pandaria.webp',
    name: 'Pandaria',
    expansion: 'Mists of Pandaria',
    icon: '🐼',
    gradient: 'linear-gradient(135deg, #1a3020 0%, #2d5a35 50%, #1a3020 100%)',
    desc: 'El continente ancestral oculto en la niebla durante 10,000 años. Tierra de los Pandaren y la antigua Orden del Loto de Hierro.',
    zones: [
      { name: 'Jade Forest',     level: '85-86', image: '/images/zones/Jade Forest.webp',             desc: 'Exuberante jungla de bambú donde los héroes llegan por primera vez a Pandaria. El Templo del Jade Jade y el Dios Sha acechan sus profundidades.' },
      { name: 'Valley of the Four Winds', level: '86-87', image: '/images/zones/Valley of the Four Winds.webp', desc: 'Fértiles tierras agrícolas donde los Pandaren cultivan en paz. Chen Cuerpoesponjoso tiene sus raíces en estas tranquilas llanuras.' },
      { name: 'Krasarang Wilds', level: '86-87', image: '/images/zones/Krasarang Wilds.webp',          desc: 'Jungla pantanosa con ruinas antiguas del Imperio Pandaren. La Desesperanza, uno de los Sha, corrompió estas tierras con tristeza.' },
      { name: 'Kun-Lai Summit',  level: '87-88', image: '/images/zones/Kun-Lai Summit.webp',           desc: 'Las altas cimas nevadas donde vive el maestro Shang Xi. El Templo del Tigre Blanco y los Yaungol nómadas habitan esta región.' },
      { name: 'Townlong Steppes', level: '88-89', image: '/images/zones/Townlong Steppes.webp',        desc: 'Las estepas al norte, protegidas de los Mantid por la Gran Muralla. Los Shado-Pan vigilan eternamente las fronteras de Pandaria.' },
      { name: 'Dread Wastes',    level: '89-90', image: '/images/zones/Dread Wastes.webp',             desc: 'Las tierras de los Mantid, una raza insectoide con una civilización antigua y belicosa. Su Emperatriz Shaohao guía a su pueblo hacia la destrucción.' },
      { name: 'Vale of Eternal Blossoms', level: '90', image: '/images/zones/Vale of Eternal Blossoms.jpg', desc: 'El corazón sagrado de Pandaria con jardines dorados y fuentes milagrosas. Sede de la ciudad eterna de Pandaria y sus antiguas reliquias.' },
    ]
  },
  {
    id: 'draenor',
    thumb: '/images/zones/draenor.webp',
    name: 'Draenor',
    expansion: 'Warlords of Draenor',
    icon: '🔥',
    gradient: 'linear-gradient(135deg, #2d1a0a 0%, #5a3515 50%, #2d1a0a 100%)',
    desc: 'El mundo natal de los Orcos antes de su corrupción. Una línea temporal alternativa preservada de la destrucción que vivió Outland.',
    zones: [
      { name: 'Frostfire Ridge', level: '90-92',  image: '/images/zones/Frostfire Ridge.jpg',   desc: 'Tierra volcánica congelada, hogar del clan Lobo Gélido de Orgrim Martillo del Crepúsculo. Volcanes y glaciares conviven en un paisaje único.' },
      { name: 'Shadowmoon Valley', level: '90-92', image: '/images/zones/Shadowmoon Valley.jpg', desc: 'El valle de los Arakkoa y el clan Shadowmoon. Ner\'zhul estudia aquí el cosmos antes de su traición con el Señor de la Noche.' },
      { name: 'Gorgrond',        level: '92-94', image: '/images/zones/Gorgrond.webp',           desc: 'Un mundo de colisión entre la vida vegetal gigante y la tecnología mecánica. Los Gronn y las plantas colosales dominan este paisaje salvaje.' },
      { name: 'Talador',         level: '94-96', image: '/images/zones/Talador.jpg',             desc: 'Las tierras de los Draenei, con la magnética ciudad de Shattrath como joya central. La Horda de Hierro convierte aquí sus peores actos.' },
      { name: 'Spires of Arak', level: '96-98',  image: '/images/zones/Spires of Arak.webp',    desc: 'Los altos peñascos donde viven los Arakkoa exiliados. Sus ruinas flotantes y secretos arcanos atraen a aventureros de todo el mundo.' },
      { name: 'Nagrand',         level: '98-100', image: '/images/zones/Nagrand.jpg',            desc: 'Las praderas eternas y sagradas de los Orcos. Garrosh Hellscream tiene sus raíces en estas tierras, al igual que Grommash.' },
      { name: 'Tanaan Jungle',   level: '100',   image: '/images/zones/Tanaan Jungle.jpg',       desc: 'La jungla de la Horda de Hierro y el Portal Oscuro original. Gul\'dan completa aquí sus rituales más oscuros.' },
    ]
  },
  {
    id: 'broken-isles',
    thumb: '/images/zones/broken-isles.webp',
    name: 'Broken Isles',
    expansion: 'Legion',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #1a0a2d 0%, #3d1a60 50%, #1a0a2d 100%)',
    desc: 'Las islas fragmentadas donde la Legión Ardiente invasora lanzó su asalto más devastador contra Azeroth.',
    zones: [
      { name: 'Azsuna',          level: '98-110', image: '/images/zones/Azsuna.jpg',      desc: 'Ruinas ancestrales de los Azsharan sumergidas en magia arcana. Los Naga y los Elfos Azules protegen sus secretos milenarios.' },
      { name: 'Val\'sharah',     level: '98-110', image: "/images/zones/Val'sharah.jpg",  desc: 'El bosque eterno donde los Druidas mantienen su conexión con Ysera. La Pesadilla Esmeralda corrompió estas tierras durante la Legión.' },
      { name: 'Highmountain',    level: '98-110', image: '/images/zones/Highmountain.jpg', desc: 'Las montañas de los Tauren de Alta Cima, descendientes de Huln Highmountain. El Pico del Trueno divide el mundo antiguo del nuevo.' },
      { name: 'Stormheim',       level: '98-110', image: '/images/zones/Stormheim.jpg',   desc: 'Las tierras de los Vrykul y las Valkyr de Odyn. El dios titánico custodia aquí el Salón de Valor, donde los guerreros son juzgados.' },
      { name: 'Suramar',         level: '110',    image: '/images/zones/Suramar.jpg',     desc: 'La ciudad eterna de los Élfes Nocturnos que sobrevivieron bajo una cúpula arcana durante 10,000 años. Elisande, su guardiana, sirvió a la Legión.' },
    ]
  },
  {
    id: 'kul-tiras',
    thumb: '/images/zones/kul-tiras.webp',
    name: 'Kul Tiras',
    expansion: 'Battle for Azeroth',
    icon: '⚓',
    gradient: 'linear-gradient(135deg, #0a1520 0%, #1a3040 50%, #0a1520 100%)',
    desc: 'Isla nación de marineros y capitanes. La patria de Jaina Mareviento y una tierra de magia marina y secretos oscuros.',
    zones: [
      { name: 'Tiragarde Sound', level: '110-120', image: '/images/zones/Tiragarde Sound.jpg',  desc: 'El corazón náutico de Kul Tiras con la ciudad portuaria de Boralus. La casa Proudmoore y la Marina Real dominan estas aguas.' },
      { name: 'Drustvar',        level: '110-120', image: '/images/zones/Drustvar.jpg',          desc: 'Las tierras oscuras al oeste marcadas por la magia Drust. Los brujos de la Dama de los Cuervos aterrorizan los pueblos de la región.' },
      { name: 'Stormsong Valley', level: '110-120', image: '/images/zones/Stormsong Valley.jpg', desc: 'El Valle de la Tormenta donde la Hermandad del Templo invoca a los Faceless Ones. La corrupción del Mar Viejo Dios se extiende por aquí.' },
    ]
  },
  {
    id: 'zandalar',
    thumb: '/images/zones/zandalar.webp',
    name: 'Zandalar',
    expansion: 'Battle for Azeroth',
    icon: '🦎',
    gradient: 'linear-gradient(135deg, #1a1500 0%, #3d3000 50%, #1a1500 100%)',
    desc: 'El continente ancestral de los Trols Zandalari, guardianes de los más antiguos secretos del mundo y la ciudad de Zuldazar.',
    zones: [
      { name: 'Zuldazar',        level: '110-120', image: '/images/zones/Zuldazar.webp',   desc: 'La gran ciudad piramidal de los Zandalari, una de las más antiguas del mundo. El Rey Rastakhan gobierna desde su Gran Pirámide de oro.' },
      { name: 'Nazmir',          level: '110-120', image: '/images/zones/Nazmir.webp',    desc: 'Las pantanosas tierras corrompidas por G\'huun, el Viejo Dios artificial creado por los Titanes. Los Loa de la sangre se enfrentan a esta amenaza.' },
      { name: 'Vol\'dun',        level: '110-120', image: "/images/zones/Vol'dun.jpg",    desc: 'El desierto de los exiliados Zandalari, gobernado por los Vulpera nómadas. Las ruinas de Atul\'Aman esconden tesoros y peligros Tol\'vir.' },
    ]
  },
  {
    id: 'shadowlands',
    thumb: '/images/zones/shadowlands.webp',
    name: 'Shadowlands',
    expansion: 'Shadowlands',
    icon: '💀',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a35 50%, #0a0a1a 100%)',
    desc: 'El reino de los muertos, separado del mundo vivo por el Velo. Las cuatro zonas del Afterlife esperan a las almas de los caídos.',
    zones: [
      { name: 'Bastion',         level: '50-60', image: '/images/zones/Bastion.jpg',       desc: 'La tierra de los Kyrianos, almas que eligieron servir como guardias angelicales. El dominio de la luz y el sacrificio.'  },
      { name: 'Maldraxxus',      level: '50-60', image: '/images/zones/Maldraxxus.jpg',    desc: 'El dominio de los Necrolords y los guerreros muertos. Una tierra de poder brutal y traición constante entre las cinco casas.'  },
      { name: 'Ardenweald',      level: '50-60', image: '/images/zones/Ardenweald.webp',   desc: 'El bosque eterno de las Noches de Invierno, donde las almas de los guardianes de la naturaleza esperan su renacimiento.'  },
      { name: 'Revendreth',      level: '50-60', image: '/images/zones/Revendreth.webp',   desc: 'El castillo de los Venthyr, quienes purifican las almas orgullosas y arrogantes con tormento eterno. El Conde Denathrius los traicionó.'  },
      { name: 'The Maw',         level: '50-60', image: '/images/zones/The Maw.jpg',       desc: 'La prisión eterna de las almas más oscuras del cosmos. Sylvanas rompió el Velo para que todas las almas acabaran aquí.'  },
    ]
  },
  {
    id: 'dragon-isles',
    thumb: '/images/zones/dragon-isles.jpg',
    name: 'Dragon Isles',
    expansion: 'Dragonflight',
    icon: '🐉',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #3d2010 50%, #1a0a00 100%)',
    desc: 'El hogar ancestral de los Dragonaspecto, resurgido del fondo del mar después de miles de años de silencio.',
    zones: [
      { name: 'The Waking Shores', level: '60-62', desc: 'Las costas ígneas donde los dragones rojos de Alexstrasza retornan a su hogar. Enormes estructuras titánicas aguardan redescubrimiento.' },
      { name: 'Ohn\'ahran Plains', level: '62-64', desc: 'Las praderas verdes de los Centauros y los dragones verdes de Ysera renacidos. Un paisaje de vida salvaje y espíritus de la naturaleza.' },
      { name: 'The Azure Span',  level: '64-66', desc: 'Los bosques y tundras de los dragones azules de Malygos. Gnolls y Tuskarr coexisten en estas tierras salvajes del norte.' },
      { name: 'Thaldraszus',     level: '66-68', desc: 'La cima de las Islas del Dragón, sede de la ciudad eterna de Valdrakken donde los cinco aspectos comparten su poder.' },
      { name: 'Zaralek Cavern',  level: '70',    desc: 'Cavernas subterráneas descubiertas con el contenido de parches 10.1. Los Forzarockos habitan estas profundidades volcánicas.' },
    ]
  },
  {
    id: 'midnight',
    thumb: '/images/zones/midnight.webp',
    name: 'Midnight',
    expansion: 'Midnight (Próximamente)',
    gradient: 'linear-gradient(135deg, #1a0028 0%, #3d0060 50%, #1a0028 100%)',
    desc: "La próxima expansión de WoW lleva a los héroes a Quel'Thalas, la patria de los Elfos del Sangre, asediada por las fuerzas del Vacío. Una batalla por la identidad y la supervivencia élfica.",
    zones: [
      { name: 'Silvermoon City',     level: '70+',   image: '/images/zones/Silvermoon City.webp', desc: "La capital dorada de los Elfos del Sangre, reconstruida tras la devastación del Lich King. El Vacío amenaza ahora con consumir su brillante arquitectura desde dentro." },
      { name: 'Eversong Woods',      level: '70-71', image: '/images/zones/Eversong Woods.webp',  desc: "Los exuberantes bosques dorados que rodean Silvermoon. Las energías de la Fuente del Sol irradian hasta aquí, manteniendo la tierra viva contra el avance del Vacío." },
      { name: 'Ghostlands',          level: '71-73', desc: "Tierras al sur de Quel'Thalas aún corrompidas por el paso del Lich King. El Vacío se une a la corrupción no-muerta creando una amenaza doble y devastadora." },
      { name: "Isle of Quel'Danas",  level: '73-75', desc: "La isla sagrada de la Fuente del Sol, corazón del poder arcano de Quel'Thalas. Protegerla de los agentes del Vacío es la misión crítica de la Guardia del Sol." },
      { name: 'Tierras del Vacío',   level: '75-77', desc: "Zonas completamente consumidas por la oscuridad del Vacío. Un paisaje donde la realidad se fractura y los horrores interdimensionales deambulan libremente." },
      { name: 'Las Ruinas Arcanas',  level: '77-80', desc: "Restos de la civilización élfica de 10,000 años de antigüedad, ahora corroídos por energías del Vacío. Guardan secretos del primer florecimiento mágico de los Elfos." },
    ]
  },
  {
    id: 'khaz-algar',
    thumb: '/images/zones/khaz-algar.jpg',
    name: 'Khaz Algar',
    expansion: 'The War Within',
    gradient: 'linear-gradient(135deg, #0a0a00 0%, #1e1e10 50%, #0a0a00 100%)',
    desc: 'Las islas subterráneas del continente sumergido donde la Reina Ansurek y los Nerubianos aguardan en las profundidades.',
    zones: [
      { name: 'Isle of Dorn',    level: '70-71', image: '/images/zones/Isle of Dorn.webp',       desc: 'La superficie rocosa de Khaz Algar, hogar de los Earthen, los Enanos titánicos. Las minas y ruinas titánicas abundan en este lugar.' },
      { name: 'The Ringing Deeps', level: '71-73', image: '/images/zones/The Ringing Deeps.avif', desc: 'Las profundidades mecánicas donde los Titan-Forged trabajan sin descanso. Los Nerubios ya se infiltran en estas cavernas industriales.' },
      { name: 'Hallowfall',      level: '73-75', image: '/images/zones/Hallowfall.webp',          desc: 'Una caverna iluminada por cristales gigantes donde los Araqqoa resistentes viven alejados de la Reina. Un oasis de luz bajo la tierra.' },
      { name: 'Azj-Kahet',       level: '75-77', image: '/images/zones/Azj-Kahet.webp',           desc: 'La ciudad de la Reina Nerubia Ansurek, la verdadera amenaza de The War Within. Una metrópolis arácnida de increíble arquitectura oscura.' },
    ]
  }
];

// ── Héroes ────────────────────────────────────────────────────
export const HEROES = [
  {
    id: 'arthas',
    name: 'Arthas Menethil',
    title: 'El Rey Exánime',
    faction: 'Neutro',
    classIcon: 'classicon_deathknight',
    role: 'Paladín / Caballero de la Muerte',
    lore: 'Príncipe de Lordaeron y paladín de la Luz, Arthas sacrificó su alma para empuñar Frostmourne y salvar a su pueblo del Flagelo. Esta decisión lo transformó en el más temido de los No-Muertos: el Rey Exánime, gobernante de la Ciudadela de la Corona de Hielo en Rasganorte. Su caída representa la tragedia más épica de la historia de Warcraft.'
  },
  {
    id: 'thrall',
    name: 'Thrall',
    title: 'El Señor de los Clanes',
    faction: 'Horda',
    classIcon: 'classicon_shaman',
    role: 'Chamán',
    lore: 'Criado como esclavo con el nombre Go\'el, Thrall escapó de la servidumbre para reunificar a los clanes Orcos y fundar la nueva Horda en Durotar. Como Gran Chamán del Mundo, su poder sobre los elementos es inmenso. Estuvo a punto de morir durante el Cataclismo al enfrentarse a Deathwing junto a la Tierra misma.'
  },
  {
    id: 'jaina',
    name: 'Jaina Mareviento',
    title: 'Almirante de la Alianza',
    faction: 'Alianza',
    classIcon: 'classicon_mage',
    role: 'Maga',
    lore: 'Considerada la maga más poderosa de toda Azeroth, Jaina fundó Theramore para la paz entre la Alianza y la Horda. La destrucción de Theramore por Garrosh Hellscream la cambió para siempre, tornando sus cabellos blancos de puro dolor. Ahora sirve como Almirante, manteniendo un equilibrio entre venganza y sabiduría.'
  },
  {
    id: 'sylvanas',
    name: 'Sylvanas Brisaveloz',
    title: 'La Reina Oscura',
    faction: 'Horda / Shadowlands',
    classIcon: 'classicon_hunter',
    role: 'Exploradora / Arquera',
    lore: 'Reina de los Elfos del Bosque de Quel\'Thalas, Sylvanas murió a manos de Arthas y fue resucitada como Abanderada del Flagelo. Tras liberarse, lideró a los Renegados y se convirtió en Warchief de la Horda. Su plan de romper el Velo entre vivos y muertos causó los eventos de Shadowlands.'
  },
  {
    id: 'illidan',
    name: 'Illidan Tempestira',
    title: 'El Cazador de Demonios',
    faction: 'Neutro',
    classIcon: 'classicon_demonhunter',
    role: 'Cazador de Demonios',
    lore: 'Hechicero Elfo de la Noche que bebió el Ojo de Sargeras para ganar poder demoniaco. Encarcelado 10,000 años por su hermano Malfurion, fue liberado para combatir a la Legión Ardiente en Outland. "No estáis preparados" es su advertencia más memorable. Murió y resucitó para liderar la lucha contra el Titán Sargeras.'
  },
  {
    id: 'anduin',
    name: 'Anduin Wrynn',
    title: 'Rey de Ventormenta',
    faction: 'Alianza',
    classIcon: 'classicon_priest',
    role: 'Sacerdote / Guerrero',
    lore: 'Hijo del gran Varian Wrynn, Anduin creció siendo más diplomático que guerrero. Tras la muerte de su padre en la Legión, asumió el trono de Ventormenta. En Shadowlands fue capturado por el Jailer y casi convertido en su campeón. Su fe en la Luz y su compasión son su mayor fortaleza y su más profunda vulnerabilidad.'
  },
  {
    id: 'tyrande',
    name: 'Tyrande Susurraviento',
    title: 'Sumo Sacerdotisa de Elune',
    faction: 'Alianza',
    classIcon: 'classicon_priest',
    role: 'Sacerdotisa / Guerrera',
    lore: 'Sumo Sacerdotisa de la diosa lunar Elune y guardiana eterna de los Elfos de la Noche. Compañera de Malfurion Stormrage durante 10,000 años. En Shadowlands se transformó en la Noche Guerrera al recibir todo el poder de la luna para vengar la destrucción de Teldrassil por Sylvanas.'
  },
  {
    id: 'malfurion',
    name: 'Malfurion Stormrage',
    title: 'El Archidruid',
    faction: 'Alianza',
    classIcon: 'classicon_druid',
    role: 'Druida',
    lore: 'El primer y más poderoso Druida de Azeroth, estudiante del semidiós Cenarius. Malfurion salvó el mundo en la Guerra de los Ancients y durante la Tercera Guerra. Pasó 10,000 años en el Sueño Esmeralda mientras los demás dormitaban, y despertó para defender Teldrassil del ataque del Cataclismo.'
  },
  {
    id: 'varian',
    name: 'Varian Wrynn',
    title: 'Alto Rey de la Alianza',
    faction: 'Alianza',
    classIcon: 'classicon_warrior',
    role: 'Guerrero',
    lore: 'Uno de los guerreros más formidables de Azeroth, conocido como Lo\'Gosh, el Lobo Fantasma. Varian fue capturado, esclavizado y dividido en dos personas por magia de Onyxia. Reunificado, lideró la Alianza con ferocidad y sabiduría. Murió heroicamente en la Legión protegiendo a su hijo Anduin durante el ataque a la Tumba de Sargeras.'
  },
  {
    id: 'garrosh',
    name: 'Garrosh Hellscream',
    title: 'Ex-Jefe de Guerra de la Horda',
    faction: 'Horda / Villano',
    classIcon: 'classicon_warrior',
    role: 'Guerrero',
    lore: 'Hijo del legendario Grommash Hellscream, Garrosh ascendió desde la inseguridad en Nagrand hasta convertirse en Jefe de Guerra de la Horda. Su sed de pureza racial orca y de conquista lo llevó a cometer atrocidades, incluyendo la destrucción de Theramore. Fue juzgado pero escapó, causando los eventos de Warlords of Draenor.'
  },
  {
    id: 'kaelthas',
    name: 'Kael\'thas Sunstrider',
    title: 'Príncipe del Sol',
    faction: 'Horda → Legión Ardiente',
    classIcon: 'classicon_mage',
    role: 'Mago',
    lore: 'Príncipe de los Elfos del Sangre, Kael\'thas lideró a su pueblo tras la devastación de Quel\'Thalas. Su desesperación por alimentar la adicción mágica de su raza lo llevó a pactar con Illidan y luego con la Legión Ardiente. "Un príncipe nunca muere" proclamó antes de su primera derrota en el Castillo de la Tormenta Magister.'
  },
  {
    id: 'guldan',
    name: 'Gul\'dan',
    title: 'El Primer Brujo Orc',
    faction: 'Legión Ardiente',
    classIcon: 'classicon_warlock',
    role: 'Brujo',
    lore: 'El Orc responsable de la corrupción de toda su raza, Gul\'dan vendió el alma de los Orcos a Mannoroth por poder demoniaco. Creó el Portal Oscuro que conectó Azeroth con Draenor, iniciando la Primera Guerra. Murió buscando el poder de Sargeras en la Tumba, y fue resucitado por la Legión para causar aún más devastación.'
  },
  {
    id: 'uther',
    name: 'Uther el Ser de Luz',
    title: 'El Defensor de la Luz',
    faction: 'Alianza',
    classIcon: 'classicon_paladin',
    role: 'Paladín',
    lore: 'El primer Paladín de Azeroth y fundador de la Orden de la Mano de Plata. Mentor de Arthas Menethil, Uther fue asesinado por su propio pupilo durante la purga de Stratholme. Su alma fue enviada a Bastion en Shadowlands, donde trabajó para canalizar almas justas hacia el Afterlife. Su sacrificio resonó a través del cosmos.'
  },
  {
    id: 'kelthuzad',
    name: 'Kel\'Thuzad',
    title: 'El Nigromante Supremo',
    faction: 'Flagelo / Rey Exánime',
    classIcon: 'classicon_mage',
    role: 'Mago / Liche',
    lore: 'Antiguo miembro del Consejo de los Seis de Dalaran, Kel\'Thuzad abandonó todo por el poder de la nigromancia. Fundó el Culto del Flagelo y fue el agente de Ner\'zhul en Azeroth. Murió y resucitó como Liche, convirtiéndose en el segundo al mando del Rey Exánime. Su fortaleza Naxxramas flotante es uno de los desafíos más temidos del juego.'
  }
];

// ── Razas ─────────────────────────────────────────────────────
export const RACES = {
  alliance: [
    {
      id: 'human',
      name: 'Humano',
      capital: 'Ventormenta',
      racialAbility: 'Cada Hombre para Sí Mismo',
      desc: 'La raza más numerosa y adaptable de Azeroth. Los humanos son conocidos por su determinación y liderazgo de la Alianza. Ventormenta, su gran ciudad, es el bastión de la civilización en los Reinos del Este.',
      gradient: 'linear-gradient(135deg, #2a3a5c, #4a6090)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_human_male.jpg`
    },
    {
      id: 'dwarf',
      name: 'Enano',
      capital: 'Forja de Hierro',
      racialAbility: 'Resistencia Pétrea',
      desc: 'Maestros herreros y mineros tallados de la roca por los Titanes. Los Enanos guardan los secretos más profundos de la creación y son aliados inamovibles de la Alianza.',
      gradient: 'linear-gradient(135deg, #5a3e2e, #8a6040)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_dwarf_male.jpg`
    },
    {
      id: 'nightelf',
      name: 'Elfo de la Noche',
      capital: 'Darnassus (destruida)',
      racialAbility: 'Paso Lunar',
      desc: 'Los inmortales guardianes de la naturaleza, practicantes del druidismo durante 10,000 años. Los Elfos de la Noche perdieron su inmortalidad para destruir el Pozo de la Eternidad y salvar el mundo.',
      gradient: 'linear-gradient(135deg, #1a1a3a, #3a2a5c)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_nightelf_female.jpg`
    },
    {
      id: 'gnome',
      name: 'Gnomo',
      capital: 'Mechagnom (liberada)',
      racialAbility: 'Fuga del Ingeniero',
      desc: 'Los inventores más brillantes de Azeroth, que perdieron Gnomeregan por una invasión de Troggs. Su ciudad ha sido liberada en Wrath of the Lich King. Su ingenio y entusiasmo son inagotables.',
      gradient: 'linear-gradient(135deg, #3a1a3a, #6a3060)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_gnome_male.jpg`
    },
    {
      id: 'draenei',
      name: 'Draenei',
      capital: 'El Exodar',
      racialAbility: 'Don de la Naruu',
      desc: 'Los sobrevivientes del planeta Argus que huyeron de la Legión Ardiente durante 25,000 años. Su conexión con la Luz es extraordinaria y su El Exodar es en realidad una nave espacial Naruu.',
      gradient: 'linear-gradient(135deg, #1a2a4a, #2a4080)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_draenei_female.jpg`
    },
    {
      id: 'worgen',
      name: 'Huargen',
      capital: 'Gilneas',
      racialAbility: 'Transformación',
      desc: 'Los ciudadanos del reino de Gilneas maldecidos por el virus del Hombre Lobo. Los Huargen luchan con su naturaleza dual: la civilización humana y el salvajismo depredador del lobo.',
      gradient: 'linear-gradient(135deg, #1e1e1e, #3a3020)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_worgen_male.jpg`
    },
    {
      id: 'void-elf',
      name: 'Elfo del Vacío',
      capital: 'Telogrus Rift',
      racialAbility: 'Teletransportación del Vacío',
      desc: 'Elfos del Sangre exiliados que fueron transformados al ser corrompidos por el Vacío durante experimentos con su poder. Ahora sirven a la Alianza con el poder de las sombras y el vacío.',
      gradient: 'linear-gradient(135deg, #0a0a2a, #1a0a35)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_voidelf_female.jpg`
    },
    {
      id: 'lightforged-draenei',
      name: 'Draenei Exaltado',
      capital: 'El Exodar',
      racialAbility: 'Juicio Divino',
      desc: 'Draenei que han sometido su cuerpo y alma a la Luz de forma literal, luchando contra la Legión como parte de los Vindicaar durante miles de años. Su fe es absolutamente inquebrantable.',
      gradient: 'linear-gradient(135deg, #2a2a1a, #5a5020)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_lightforgeddraenei_female.jpg`
    },
    {
      id: 'dark-iron-dwarf',
      name: 'Enano Hierro Negro',
      capital: 'Fortaleza Roca Negra',
      racialAbility: 'Forja de Almas',
      desc: 'Los Enanos que se asentaron en las profundidades volcánicas y fueron esclavizados por el dios de fuego Ragnaros. Ahora libres, su maestría en la forja y la piromancia es legendaria.',
      gradient: 'linear-gradient(135deg, #1a0a00, #3a1500)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_darkirondwarf_male.jpg`
    },
    {
      id: 'kul-tiran',
      name: 'Kul Tirano',
      capital: 'Boralus',
      racialAbility: 'Arraigado',
      desc: 'Los robustos marineros y pescadores de Kul Tiras, conectados con la magia druídica del mar y las bestias marinas. Sus cuerpos son naturalmente más grandes y resistentes que los humanos comunes.',
      gradient: 'linear-gradient(135deg, #0a1520, #1a2535)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_kultiran_male.jpg`
    }
  ],
  horde: [
    {
      id: 'orc',
      name: 'Orco',
      capital: 'Orgrimmar',
      racialAbility: 'Sangre de la Horda',
      desc: 'Los fundadores de la Horda moderna, corrompidos en su día por el demonio Mannoroth. Los Orcos de Thrall han recuperado su honor guerrero y shamanístico, construyendo Orgrimmar en las ardientes tierras de Durotar.',
      gradient: 'linear-gradient(135deg, #1a2a0a, #3a5010)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_orc_male.jpg`
    },
    {
      id: 'undead',
      name: 'No-Muerto (Renegado)',
      capital: 'Entrañas',
      racialAbility: 'Voluntad del Renegado',
      desc: 'Los muertos que se liberaron del control mental del Lich King. Los Renegados, liderados por Sylvanas, mantienen su libre albedrío a pesar de su condición. Viven bajo las ruinas de Lordaeron en su sombría capital, las Entrañas.',
      gradient: 'linear-gradient(135deg, #0a1a0a, #1a3015)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_undead_male.jpg`
    },
    {
      id: 'tauren',
      name: 'Tauren',
      capital: 'Thunder Bluff',
      racialAbility: 'Pisoteo',
      desc: 'Los imponentes seres bovinos conectados profundamente con la naturaleza y la espiritualidad chamánica. Los Tauren son los druidas y chamanes más sabios de la Horda, y Thunder Bluff es un lugar sagrado de paz.',
      gradient: 'linear-gradient(135deg, #3a2510, #6a4520)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_tauren_male.jpg`
    },
    {
      id: 'troll',
      name: 'Trol',
      capital: 'Tiraparla (Echo Isles)',
      racialAbility: 'Regeneración Berserker',
      desc: 'Los trols de los Colmillos Oscuros, chamanistas y practicantes del Vudú. Vol\'jin lideró a su gente desde la esclavitud hasta la dignidad, y fue brevemente Warchief de la Horda antes de su muerte heroica ante la Legión.',
      gradient: 'linear-gradient(135deg, #0a2a2a, #1a4040)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_troll_male.jpg`
    },
    {
      id: 'bloodelf',
      name: 'Elfo del Sangre',
      capital: 'Lunargenta',
      racialAbility: 'Sifón Arcano',
      desc: 'Los sobrevivientes de la devastación de Quel\'Thalas, adictos a la magia tras la destrucción del Cristal del Sol por el Lich King. Los Elfos del Sangre son la raza más numerosa y hermosa de la Horda, gobernados desde la dorada Lunargenta.',
      gradient: 'linear-gradient(135deg, #2a0a0a, #5a1010)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_bloodelf_female.jpg`
    },
    {
      id: 'goblin',
      name: 'Goblin',
      capital: 'Kezan (destruida)',
      racialAbility: 'Cohetes del Cinturón',
      desc: 'Los maestros del capitalismo y la ingeniería explosiva de Azeroth. Tras la destrucción de Kezan por el Cataclismo de Deathwing, los Goblins del Cartel Bilgewater se unieron a la Horda bajo la dirección del Jefe Gallywix.',
      gradient: 'linear-gradient(135deg, #1a2a0a, #304a10)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_goblin_male.jpg`
    },
    {
      id: 'nightborne',
      name: 'Nocheterna',
      capital: 'Suramar',
      racialAbility: 'Ancestral Arcano',
      desc: 'Los nobles Elfos de la Noche de Suramar, que vivieron 10,000 años bajo una cúpula de magia arcana. Tras liberarse, decidieron unirse a la Horda al ser rechazados por los Elfos de la Noche de la Alianza.',
      gradient: 'linear-gradient(135deg, #1a0a2a, #351a4a)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_nightborne_female.jpg`
    },
    {
      id: 'highmountain-tauren',
      name: 'Tauren de Alta Cima',
      capital: 'Thundertotem',
      racialAbility: 'Carga del Bisonte',
      desc: 'Descendientes del héroe Huln Highmountain, que luchó en la Guerra de los Ancients. Los Tauren de Alta Cima llevan cuernos de cuervo, moose y caribú, reflejando sus diferentes linajes tribales en las montañas de Highmountain.',
      gradient: 'linear-gradient(135deg, #1a1500, #353000)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_highmountaintauren_male.jpg`
    },
    {
      id: 'zandalari-troll',
      name: 'Trol Zandalari',
      capital: 'Zuldazar',
      racialAbility: 'Plegaria del Loa',
      desc: 'Los imponentes Trols Zandalari son los guardianes del conocimiento tribal más antiguo del mundo. Gobernados desde las pirámides doradas de Zuldazar, su conexión con los espíritus Loa les da poderes únicos.',
      gradient: 'linear-gradient(135deg, #1a1000, #353500)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_zandalaritroll_male.jpg`
    },
    {
      id: 'vulpera',
      name: 'Vulpera',
      capital: 'Vol\'dun',
      racialAbility: 'Bolsa de Trucos',
      desc: 'Los astutos nómadas zorros del desierto de Vol\'dun, expertos en sobrevivir en las condiciones más inhóspitas. Los Vulpera se unieron a la Horda tras ayudar a los aventureros a derrotar la amenaza Sethrak en Battle for Azeroth.',
      gradient: 'linear-gradient(135deg, #2a1500, #4a2500)',
      icon: `https://wow.zamimg.com/images/wow/icons/large/race_vulpera_male.jpg`
    }
  ]
};

// ── Clases ────────────────────────────────────────────────────
export const CLASSES = [
  {
    id: 'warrior',
    name: 'Guerrero',
    color: '#C69B3A',
    icon: 'classicon_warrior',
    role: 'Tanque / DPS',
    desc: 'Maestros del combate cuerpo a cuerpo con armadura pesada. Los Guerreros se enfrentan a sus enemigos directamente, canalizando su rabia en ataques devastadores o protegiéndose como murallas de acero indestructibles.',
    abilities: ['Carga', 'Golpe Heroico', 'Grito de Batalla', 'Represalia', 'Vendaval']
  },
  {
    id: 'paladin',
    name: 'Paladín',
    color: '#F48CBA',
    icon: 'classicon_paladin',
    role: 'Tanque / Sanador / DPS',
    desc: 'Los guerreros sagrados de la Luz, que combinan el combate marcial con el poder divino. Pueden sanar a sus aliados, proteger a sus compañeros con auras sagradas o desatar el juicio de la Luz contra los no-muertos.',
    abilities: ['Juicio', 'Escudo Divino', 'Lay on Hands', 'Consagración', 'Retribución']
  },
  {
    id: 'hunter',
    name: 'Cazador',
    color: '#AAD372',
    icon: 'classicon_hunter',
    role: 'DPS a distancia / Melé',
    desc: 'Rastreadores y arqueros con un vínculo místico con la naturaleza. Los Cazadores siempre viajan con una mascota fiel que lucha a su lado. Su conocimiento del terreno y sus trampas los convierten en adversarios peligrosos a cualquier distancia.',
    abilities: ['Tiro Ágil', 'Multi-disparo', 'Señal de Bestia', 'Trampa Congelante', 'Tiro al Blanco']
  },
  {
    id: 'rogue',
    name: 'Pícaro',
    color: '#FFF468',
    icon: 'classicon_rogue',
    role: 'DPS melé',
    desc: 'Asesinos ágiles que usan la sombra y el sigilo para eliminar objetivos antes de que sepan lo que les golpeó. Los Pícaros acumulan Puntos de Combo para ejecutar poderosos Ataques Finales desde las sombras.',
    abilities: ['Aturdir', 'Golpe Bajo', 'Evasión', 'Veneno Mortal', 'Entumecedor']
  },
  {
    id: 'priest',
    name: 'Sacerdote',
    color: '#FFFFFF',
    icon: 'classicon_priest',
    role: 'Sanador / DPS sombra',
    desc: 'Canalizadores de la Luz y las Sombras. Los Sacerdotes son los sanadores más versátiles del juego, capaces tanto de curar a sus aliados con la Luz Sagrada como de corromper mentes con el temible poder de las Sombras del Vacío.',
    abilities: ['Palabra de Poder: Escudo', 'Flash Heal', 'Renew', 'Agonía Psíquica', 'Forma de Sombra']
  },
  {
    id: 'death-knight',
    name: 'Caballero de la Muerte',
    color: '#C41E3A',
    icon: 'classicon_deathknight',
    role: 'Tanque / DPS melé',
    desc: 'Los guerreros caídos resucitados por el Rey Exánime para servir al Flagelo. Liberados de su control, los Caballeros de la Muerte ahora utilizan el poder de las runas y la energía de la muerte para servir a sus propios objetivos.',
    abilities: ['Golpe de Muerte', 'Plaga del Sangre', 'Presencia del Hielo', 'Invocación de Muertos', 'Abrazo de la Muerte']
  },
  {
    id: 'shaman',
    name: 'Chamán',
    color: '#0070DD',
    icon: 'classicon_shaman',
    role: 'Sanador / DPS',
    desc: 'Invocadores de los elementos: tierra, fuego, agua y aire. Los Chamanes son los líderes espirituales de la Horda, capaces de desatar tempestades, sanar con el agua elemental o fortalecer a sus compañeros con poderosos tótems.',
    abilities: ['Cadena de Relámpagos', 'Golpe de Lava', 'Totem de Tierra', 'Ola de Sanación', 'Transformación de Lobo']
  },
  {
    id: 'mage',
    name: 'Mago',
    color: '#3FC7EB',
    icon: 'classicon_mage',
    role: 'DPS a distancia',
    desc: 'Los maestros de la magia arcana, dominando el fuego, el hielo y el tiempo. Los Magos lanzan hechizos devastadores desde la distancia y pueden teletransportarse instantáneamente entre ciudades del mundo.',
    abilities: ['Bola de Fuego', 'Nova de Hielo', 'Misil Arcano', 'Destellar', 'Ralentizar el Tiempo']
  },
  {
    id: 'warlock',
    name: 'Brujo',
    color: '#8788EE',
    icon: 'classicon_warlock',
    role: 'DPS a distancia',
    desc: 'Magos corrompidos que sellaron tratos con los demonios para obtener poder oscuro. Los Brujos siembran maldiciones y venenos en sus enemigos mientras sus servidores demoníacos los protegen y atacan a su lado.',
    abilities: ['Rayo de Sombra', 'Corrupción', 'Invocar Infernal', 'Drenaje Vital', 'Metamorfosis (antiguo)']
  },
  {
    id: 'monk',
    name: 'Monje',
    color: '#00FF98',
    icon: 'classicon_monk',
    role: 'Tanque / Sanador / DPS melé',
    desc: 'Artistas marciales que canalizan el chi a través de su cuerpo. Introducidos en Mists of Pandaria, los Monjes luchan con manos y pies, elaborando combos fluidos que pueden curar, proteger o devastar dependiendo de su especialización.',
    abilities: ['Golpe del Tigre', 'Ola de Mist', 'Puño de la Ira', 'Toque Vigorizador', 'Patada Ascendente']
  },
  {
    id: 'druid',
    name: 'Druida',
    color: '#FF7C0A',
    icon: 'classicon_druid',
    role: 'Tanque / Sanador / DPS melé / DPS distancia',
    desc: 'Los guardianes de la naturaleza que pueden transformarse en oso, felino, cuervo o árbol. Los Druidas son la clase más versátil del juego, capaz de cumplir cualquier rol en grupo gracias a sus distintas formas animales.',
    abilities: ['Wrath', 'Renovar', 'Forma de Oso', 'Forma Felina', 'Resucitar']
  },
  {
    id: 'demon-hunter',
    name: 'Cazador de Demonios',
    color: '#A330C9',
    icon: 'classicon_demonhunter',
    role: 'Tanque / DPS melé',
    desc: 'Elfos de la Noche e Ira del Sangre que siguieron el camino de Illidan Tempestira, sacrificando sus ojos por la visión demoníaca. Los Cazadores de Demonios consumen el poder de sus enemigos para convertirse en algo más que elfo.',
    abilities: ['Golpe del Caos', 'Lanzamiento Malévolo', 'Metamorfosis', 'Consumir Magia', 'Huella Abismal']
  },
  {
    id: 'evoker',
    name: 'Evocador',
    color: '#33937F',
    icon: 'classicon_evoker',
    role: 'Sanador / DPS a distancia',
    desc: 'Los Draktyr, dragones en forma humanoide introducidos en Dragonflight, son la clase más reciente. Canalizan el poder de los cinco aspectos dracónicos para curar, proteger o destruir. Solo pueden ser Draktyr, la nueva raza de la expansión.',
    abilities: ['Empower', 'Soplo de Devastación', 'Fuente de Vida', 'Escamas Temporales', 'Vuelo Esencial']
  }
];

// ── Tropas ────────────────────────────────────────────────────
export const TROOPS = {
  alliance: [
    {
      name: 'Infante de Marina',
      race: 'Humano',
      type: 'Infantería básica',
      icon: 'inv_sword_04',
      desc: 'La columna vertebral de los ejércitos humanos. El Infante de Marina porta escudo y espada, formando la primera línea de defensa de la Alianza. Su entrenamiento disciplinado es la clave de la fuerza humana.',
      stats: { ataque: 4, defensa: 5, velocidad: 3 }
    },
    {
      name: 'Caballero de Ventormenta',
      race: 'Humano',
      type: 'Caballería pesada',
      icon: 'ability_warrior_charge',
      desc: 'La élite montada de Ventormenta. Los Caballeros portan lanzas relucientes y armadura completa de placas, capaces de romper líneas enemigas con una carga devastadora que resuena en el campo de batalla.',
      stats: { ataque: 7, defensa: 5, velocidad: 8 }
    },
    {
      name: 'Arquero del Bosque',
      race: 'Elfo de la Noche',
      type: 'Unidad a distancia',
      icon: 'ability_hunter_quickshot',
      desc: 'Las Sentinelas élite de Tyrande, maestras del arco y el sigilo. Sus flechas encantadas con la luz de la Luna pueden derribar a un adversario a cientos de metros, y su visión nocturna las hace temibles en la oscuridad.',
      stats: { ataque: 6, defensa: 3, velocidad: 6 }
    },
    {
      name: 'Francotirador Gnomo',
      race: 'Gnomo',
      type: 'Ingeniería de combate',
      icon: 'inv_gun_02',
      desc: 'El ingenio Gnomo convertido en arma de guerra. Sus rifles de precisión incorporan lentes de aumento y sistemas de recarga automática que permiten disparar rafagas rápidas y precisas desde posiciones elevadas.',
      stats: { ataque: 7, defensa: 2, velocidad: 4 }
    },
    {
      name: 'Paladín de la Mano de Plata',
      race: 'Enano / Humano',
      type: 'Unidad élite sagrada',
      icon: 'spell_holy_holybolt',
      desc: 'Los campeones sagrados de Uther y la Orden de la Mano de Plata. Capaces de curar heridas en plena batalla y bendecir a sus compañeros con auras protectoras mientras desatan el poder de la Luz contra los No-Muertos.',
      stats: { ataque: 6, defensa: 7, velocidad: 4 }
    },
    {
      name: 'Oso de Guerra Enano',
      race: 'Enano',
      type: 'Bestia de guerra',
      icon: 'ability_racial_bearform',
      desc: 'Los formidables osos polares de Dun Morogh, amaestrados y armados por los Enanos de Forja de Hierro. Cada oso porta una plataforma de combate en su lomo con dos arqueros, convirtiéndolo en una fortaleza móvil.',
      stats: { ataque: 8, defensa: 6, velocidad: 3 }
    }
  ],
  horde: [
    {
      name: 'Guerrero Orc',
      race: 'Orco',
      type: 'Infantería pesada',
      icon: 'inv_axe_15',
      desc: 'El núcleo de los ejércitos de la Horda. El Guerrero Orc porta un hacha enorme y armadura de cuero pesado. Su furia berserker y resistencia física los hace temibles en el combate cuerpo a cuerpo, donde superan a casi cualquier tropa de la Alianza.',
      stats: { ataque: 8, defensa: 4, velocidad: 4 }
    },
    {
      name: 'Jinete de Lobo',
      race: 'Orco',
      type: 'Caballería rápida',
      icon: 'ability_mount_direwolf',
      desc: 'La caballería de la Horda montada sobre enormes lobos de guerra Direwolf. Su velocidad y ferocidad los hace ideales para flanquear al enemigo y para misiones de reconocimiento. Los lobos y sus jinetes combaten como una única mente.',
      stats: { ataque: 7, defensa: 3, velocidad: 9 }
    },
    {
      name: 'Lanzacabezas Trol',
      race: 'Trol',
      type: 'Unidad a distancia',
      icon: 'inv_throwingaxe_07',
      desc: 'Los temibles arqueros y lanzadores de hachas Trols. Con su capacidad de regeneración y su destreza con proyectiles, los Lanzacabezas pueden cubrir a las unidades de infantería y acosar a los enemigos desde posiciones seguras.',
      stats: { ataque: 6, defensa: 2, velocidad: 6 }
    },
    {
      name: 'Chamán de la Tormenta',
      race: 'Tauren / Trol',
      type: 'Unidad mágica de apoyo',
      icon: 'spell_nature_lightning',
      desc: 'Los invocadores de elementos que acompañan a los ejércitos de la Horda. Un solo Chamán de la Tormenta puede paralizar formaciones enteras con relámpagos encadenados o levantar tótems curativos que mantienen vivos a los guerreros más heridos.',
      stats: { ataque: 7, defensa: 3, velocidad: 4 }
    },
    {
      name: 'Catapulta Goblin',
      race: 'Goblin',
      type: 'Artillería de asedio',
      icon: 'inv_misc_bomb_04',
      desc: 'La ingeniería explosiva Goblin en su máxima expresión de caos y destrucción. Las catapultas Goblin pueden lanzar bombas especiales, barriles de aceite inflamable o incluso Goblins con explosivos atados. Imprecisas pero devastadoras.',
      stats: { ataque: 9, defensa: 2, velocidad: 2 }
    },
    {
      name: 'Guardián Tauren',
      race: 'Tauren',
      type: 'Unidad defensiva élite',
      icon: 'ability_warrior_shieldwall',
      desc: 'Los imponentes guerreros Tauren que forman la vanguardia defensiva de la Horda. Su tamaño y resistencia son únicos en Azeroth. Los Guardianes Tauren pueden absorber enormes cantidades de daño mientras sus compañeros más ágiles flanquean al enemigo.',
      stats: { ataque: 5, defensa: 9, velocidad: 2 }
    }
  ]
};

// ── Objetos / Armas Populares ──────────────────────────────────
export const POPULAR_ITEMS = [
  { id: 19019, name: 'Thunderfury',        rarity: 'legendary', icon: 'inv_sword_39',       type: 'Espada de una mano',    desc: 'La legendaria espada de Thunderaan, el Príncipe del Aire.' },
  { id: 17182, name: 'Sulfuras',           rarity: 'legendary', icon: 'inv_hammer_unique_sulfuras', type: 'Mazo de dos manos', desc: 'El arma personal de Ragnaros, el Señor del Fuego.' },
  { id: 30312, name: 'Warglaive of Azzinoth', rarity: 'legendary', icon: 'inv_sword_122',   type: 'Arma de filo',          desc: 'Las hojas gemelas de Azzinoth, empuñadas por Illidan.' },
  { id: 45038, name: 'Val\'anyr',          rarity: 'legendary', icon: 'inv_mace_99',         type: 'Mazo',                  desc: 'El martillo de los Titanes Antiguos, forjado en Ulduar.' },
  { id: 50040, name: 'Shadowmourne',       rarity: 'legendary', icon: 'inv_axe_113',         type: 'Hacha de dos manos',    desc: 'Forjada con fragmentos de Frostmourne para combatir al Rey Exánime.' },
  { id: 71086, name: 'Dragonwrath',        rarity: 'legendary', icon: 'inv_staff_100',       type: 'Bastón',                desc: 'El bastón de Tarecgosa, el dragón azul, del Fireland.' },
  { id: 76935, name: 'Fangs of the Father',rarity: 'legendary', icon: 'inv_knife_1h_deathwingraid_d_01', type: 'Dagas',    desc: 'Las dagas creadas con escamas de Deathwing para el asesino Wrathion.' },
  { id: 25, name: 'Hearthstone',           rarity: 'common',    icon: 'inv_misc_rune_04',    type: 'Objeto de uso',         desc: 'Permite regresar a la posada actual. El objeto más icónico del juego.' },
  { id: 159, name: 'Conjured Water',       rarity: 'common',    icon: 'inv_drink_07',        type: 'Consumible',            desc: 'Agua conjurada por un Mago para recuperar maná.' },
  { id: 2512, name: 'Glowing Brightwood Staff', rarity: 'uncommon', icon: 'inv_staff_06',   type: 'Bastón',                desc: 'Bastón verde de nivel medio, apreciado por sus estadísticas de inteligencia.' },
  { id: 11815, name: 'Hand of Edward the Odd', rarity: 'rare', icon: 'inv_staff_30',        type: 'Bastón',                desc: 'Un bastón raro con un encantamiento único que dispara un hechizo aleatorio.' },
  { id: 18832, name: 'Eskhandar\'s Claw', rarity: 'epic',      icon: 'inv_weapon_hand_14', type: 'Garras',                 desc: 'Las garras del legendario jaguar de las tierras de hielo.' },
  { id: 32837, name: 'Wand of Happiness', rarity: 'rare',      icon: 'inv_wand_12',         type: 'Varita',                desc: 'Una varita encantada que disipa la infelicidad.' },
  { id: 12282, name: 'Worn Battleaxe',    rarity: 'common',    icon: 'inv_axe_15',          type: 'Hacha de dos manos',    desc: 'Un hacha desgastada del campo de batalla. Útil para principiantes.' },
  { id: 3685, name: 'Broad Claymore',     rarity: 'common',    icon: 'inv_sword_27',        type: 'Espada de dos manos',   desc: 'Una gran espada recta, equilibrada para el combate prolongado.' },
];

export const WEAPONS = [
  { id: 19019, name: 'Thunderfury',              rarity: 'legendary', icon: 'inv_sword_39',        type: 'Espada de una mano',     expansion: 'Classic' },
  { id: 17182, name: 'Sulfuras',                 rarity: 'legendary', icon: 'inv_hammer_unique_sulfuras', type: 'Mazo de dos manos', expansion: 'Classic' },
  { id: 30312, name: 'Warglaive of Azzinoth',    rarity: 'legendary', icon: 'inv_sword_122',        type: 'Arma de filo',           expansion: 'TBC' },
  { id: 45038, name: 'Val\'anyr',                rarity: 'legendary', icon: 'inv_mace_99',          type: 'Mazo',                   expansion: 'WotLK' },
  { id: 50040, name: 'Shadowmourne',             rarity: 'legendary', icon: 'inv_axe_113',          type: 'Hacha de dos manos',     expansion: 'WotLK' },
  { id: 71086, name: 'Dragonwrath',              rarity: 'legendary', icon: 'inv_staff_100',        type: 'Bastón',                 expansion: 'Cataclysm' },
  { id: 76935, name: 'Fangs of the Father',      rarity: 'legendary', icon: 'inv_knife_1h_deathwingraid_d_01', type: 'Dagas',     expansion: 'Cataclysm' },
  { id: 12784, name: 'Frostmourne',              rarity: 'legendary', icon: 'inv_sword_70',         type: 'Espadón de dos manos',   expansion: 'WotLK' },
  { id: 44566, name: 'Armageddon',               rarity: 'epic',      icon: 'inv_sword_106',        type: 'Espadón de dos manos',   expansion: 'WotLK' },
  { id: 32837, name: 'Staff of the Sun King',    rarity: 'epic',      icon: 'inv_staff_68',         type: 'Bastón',                 expansion: 'TBC' },
  { id: 18832, name: 'Eskhandar\'s Claw',        rarity: 'epic',      icon: 'inv_weapon_hand_14',   type: 'Garras',                 expansion: 'Classic' },
  { id: 23041, name: 'Lok\'amir il Romathis',    rarity: 'epic',      icon: 'inv_mace_46',          type: 'Mazo de una mano',       expansion: 'Classic' },
  { id: 28741, name: 'Atiesh',                   rarity: 'legendary', icon: 'inv_staff_06',         type: 'Bastón Legendario',      expansion: 'Classic' },
  { id: 30449, name: 'Shard of Azzinoth',        rarity: 'epic',      icon: 'inv_sword_122',        type: 'Arma de filo',           expansion: 'TBC' },
  { id: 40402, name: 'Betrayer of Humanity',     rarity: 'epic',      icon: 'inv_axe_91',           type: 'Hacha de una mano',      expansion: 'WotLK' },
  { id: 17193, name: 'Ashkandi',                 rarity: 'epic',      icon: 'inv_sword_63',         type: 'Espadón de dos manos',   expansion: 'Classic' },
  { id: 23577, name: 'Naxxramas Blade',          rarity: 'epic',      icon: 'inv_sword_48',         type: 'Espada de una mano',     expansion: 'Classic' },
  { id: 30041, name: 'Zhar\'doom',               rarity: 'epic',      icon: 'inv_staff_71',         type: 'Bastón',                 expansion: 'TBC' },
];

// ── Tropas Enemigas ───────────────────────────────────────────
export const ENEMY_TROOPS = [
  {
    id: 'burning-legion',
    name: 'La Legión Ardiente',
    color: '#cc4400',
    gradient: 'linear-gradient(135deg, #2a0a00, #5a1500)',
    desc: 'El ejército demoníaco más poderoso del cosmos, liderado por el Titán caído Sargeras. Han destruido miles de mundos y su objetivo final es erradicar toda vida del universo.',
    units: [
      { name: 'Felguard',           type: 'Infantería demonio',     icon: 'ability_warrior_sunder',       desc: 'La columna vertebral del ejército de la Legión. Los Felguards son soldados brutales de piel verde, armados con enormes hachas y una resistencia extraordinaria al daño físico.', stats: { ataque: 7, defensa: 5, velocidad: 4 } },
      { name: 'Infernal',           type: 'Bomba de asedio viviente', icon: 'spell_fire_selfdestruct',    desc: 'Gigantes de roca volcánica que caen del cielo como meteoros. Un solo Infernal puede devastar una ciudad entera. Su fuego demoníaco verde no se apaga con agua normal.', stats: { ataque: 9, defensa: 7, velocidad: 2 } },
      { name: 'Dreadlord',          type: 'Élite vampírica',        icon: 'ability_warlock_haunt',        desc: 'Los maestros de la manipulación y el engaño. Los Nathrezim prefieren la guerra psicológica y la traición, infiltrándose en civilizaciones para corromperlas desde dentro.', stats: { ataque: 7, defensa: 4, velocidad: 6 } },
      { name: 'Eredar Hechicero',   type: 'Artillería arcana',      icon: 'spell_shadow_demonicempathy',  desc: 'Magos Eredar corrompidos al servicio de Kil\'jaeden. Su dominio de la magia demoníaca es absoluto, capaces de lanzar lluvias de fuego verde que consumen ejércitos enteros.', stats: { ataque: 8, defensa: 3, velocidad: 4 } },
      { name: 'Terrorguard',        type: 'Jinete demonio alado',   icon: 'spell_shadow_metamorphosis',   desc: 'Criaturas aladas que siembran el terror desde las alturas. Los Terrorguards arrasan formaciones con sus garras y aliento de fuego verde, creando caos en las líneas de retaguardia.', stats: { ataque: 7, defensa: 4, velocidad: 8 } },
    ]
  },
  {
    id: 'the-scourge',
    name: 'El Flagelo',
    color: '#4488aa',
    gradient: 'linear-gradient(135deg, #0a1520, #1a3040)',
    desc: 'El ejército no-muerto del Rey Exánime, formado por los cuerpos resucitados de los caídos. Cada víctima del Flagelo se convierte en un nuevo soldado, haciendo que su ejército crezca con cada batalla.',
    units: [
      { name: 'Ghoul',              type: 'Infantería no-muerta',   icon: 'ability_racial_cannibalize',   desc: 'Cadáveres reanimados que atacan en hordas incontables. Los Ghouls carecen de miedo y dolor. Su ventaja principal es el número absoluto del que dispone el Lich King.', stats: { ataque: 4, defensa: 3, velocidad: 5 } },
      { name: 'Abominación',        type: 'Monstruo de asedio',     icon: 'spell_shadow_animatedead',     desc: 'Horribles creaciones de carne cosida, partes de múltiples cadáveres unidas con magia oscura. Cada Abominación es una fortaleza móvil capaz de devastar líneas enteras con sus cadenas.', stats: { ataque: 8, defensa: 6, velocidad: 2 } },
      { name: 'Caballero de la Muerte', type: 'Élite montada',      icon: 'inv_sword_70',                 desc: 'Los guerreros más poderosos caídos en batalla, resucitados por el Rey Exánime. Montan corceles espectrales y manejan armas rúnicas que drenan la fuerza vital de sus víctimas.', stats: { ataque: 9, defensa: 6, velocidad: 7 } },
      { name: "Val'kyr",            type: 'Élite aérea',            icon: 'ability_paladin_divinesteed',  desc: 'Guerreras espirituales capturadas por el Rey Exánime. Vuelan sobre el campo de batalla eligiendo a los caídos más poderosos para resucitarlos como siervos del Flagelo.', stats: { ataque: 7, defensa: 5, velocidad: 9 } },
      { name: 'Liche',              type: 'Artillería mágica',      icon: 'spell_frost_frostnova',        desc: 'Poderosos hechiceros transformados en no-muertos. Los Liches canalizan magia de escarcha y nigromancia desde distancias seguras, congelando ejércitos enteros en segundos.', stats: { ataque: 9, defensa: 4, velocidad: 3 } },
    ]
  },
  {
    id: 'old-gods',
    name: 'Los Antiguos Dioses',
    color: '#7700aa',
    gradient: 'linear-gradient(135deg, #0a0015, #200030)',
    desc: 'Entidades cósmicas del Vacío aprisionadas por los Titanes en las profundidades de Azeroth. Sus tentáculos llegan a la superficie a través de cultistas y criaturas corrompidas, sembrando locura y destrucción.',
    units: [
      { name: 'Qiraji Gladiador',   type: 'Infantería insectoide',  icon: 'ability_warrior_challange',    desc: "Guerreros de la civilización Qiraji, entrenados bajo las órdenes de C'Thun. Cada gladiador ha derrotado a centenares de enemigos. Su exoesqueleto es casi tan duro como el acero.", stats: { ataque: 8, defensa: 5, velocidad: 6 } },
      { name: 'Faceless One',       type: 'Horror del Vacío',       icon: 'spell_shadow_void_form_passive', desc: 'Criaturas sin rostro invocadas por el poder de los Antiguos Dioses. Su sola presencia infunde locura en los mortales cercanos. Sus tentáculos pueden envolver a múltiples enemigos a la vez.', stats: { ataque: 7, defensa: 6, velocidad: 4 } },
      { name: 'Silithid Colmena',   type: 'Enjambre insectoide',    icon: 'ability_druid_swipe',           desc: 'Insectos Silithid que atacan en enjambres devastadores siguiendo órdenes telepáticas. Una sola ola de Silithid puede sobrepasar en número a cualquier ejército convencional del mundo.', stats: { ataque: 5, defensa: 3, velocidad: 7 } },
      { name: "N'Raqi Tenedor",     type: 'Canal del Vacío',        icon: 'spell_shadow_siphon_mana',      desc: "Canalizadores de la energía de Yogg-Saron. Pueden manipular la mente de los enemigos, haciendo que los aliados luchen entre sí. Su poder del Vacío consume la cordura de quienes se acercan.", stats: { ataque: 7, defensa: 4, velocidad: 4 } },
    ]
  },
  {
    id: 'primalists',
    name: 'Los Primalists',
    color: '#ff6600',
    gradient: 'linear-gradient(135deg, #1a0800, #3d1500)',
    desc: 'Seguidores de los Protodrakes elementales que rechazan el orden de los Aspectos Dracónicos. Creen que los dragones nunca debieron recibir el poder de los Titanes y buscan liberarlos de ese yugo.',
    units: [
      { name: 'Protodrake Elemental', type: 'Bestia de vuelo',      icon: 'ability_evoker_breathofeons',  desc: 'Dragones primitivos que no recibieron el regalo de los Titanes. Su poder elemental es brutal y sin refinamiento, desatando llamas, hielo o relámpagos con la fuerza de la naturaleza pura.', stats: { ataque: 9, defensa: 6, velocidad: 8 } },
      { name: 'Cultista Primalist',  type: 'Fanático elemental',    icon: 'spell_shaman_stormearthfire',  desc: 'Mortales que abrazaron el poder elemental sin control, cediendo su cuerpo a las fuerzas naturales. Se convierten en conductos vivientes de destrucción pura, sin preservar su humanidad.', stats: { ataque: 6, defensa: 3, velocidad: 5 } },
      { name: 'Fyrakk el Ardiente',  type: 'Proto-Aspecto del Fuego', icon: 'spell_fire_burningbolt',    desc: 'Uno de los cuatro Incarnates. Fyrakk corrompió el Árbol del Mundo Amirdrassil con Fuego del Sueño, intentando forjar un orden donde los Primalists gobiernen Azeroth.', stats: { ataque: 10, defensa: 7, velocidad: 7 } },
      { name: 'Iridikron el Pétreo', type: 'Proto-Aspecto de la Tierra', icon: 'inv_stone_15',           desc: 'El más calculador de los Incarnates. Iridikron usa su conexión con la tierra para crear terremotos y fortalecer a sus seguidores con resistencia sobrenatural a cualquier tipo de daño.', stats: { ataque: 8, defensa: 9, velocidad: 2 } },
    ]
  },
  {
    id: 'nerubians',
    name: "Los Nerubianos de Azj-Kahet",
    color: '#8855aa',
    gradient: 'linear-gradient(135deg, #0a0010, #1a0025)',
    desc: 'La civilización arácnida de las profundidades de Khaz Algar, liderada por la Reina Ansurek. Una sociedad sofisticada que usa venenos, seda y magia del Vacío para dominar las profundidades de Azeroth.',
    units: [
      { name: 'Guerrero Nerubiano',  type: 'Infantería arácnida',   icon: 'ability_rogue_sprint',         desc: 'Con seis extremidades y caparazones casi impenetrables, los guerreros Nerubianos pueden trepar por cualquier superficie y atacar desde ángulos completamente imposibles para bipedos.', stats: { ataque: 7, defensa: 6, velocidad: 7 } },
      { name: 'Tejedora Venenosa',   type: 'Especialista en trampas', icon: 'ability_hunter_markedfordeath', desc: 'Las Tejedoras crean redes de seda impregnadas con venenos paralizantes. Una sola puede inmovilizar a decenas de enemigos en segundos, preparándolos para el festín de los guerreros.', stats: { ataque: 5, defensa: 3, velocidad: 8 } },
      { name: "Arach'nor Ascendido", type: 'Élite del Vacío',       icon: 'spell_shadow_misery',          desc: "Nerubianos que canalizaron el poder del Vacío, transformando sus cuerpos más allá de lo natural. Los Arach'nor proyectan energía del Vacío y drenan la esencia vital de sus víctimas.", stats: { ataque: 8, defensa: 5, velocidad: 6 } },
      { name: 'Reina Ansurek',       type: 'Comandante suprema',    icon: 'ability_warlock_soulburn',     desc: 'La Reina de Azj-Kahet, cuyo poder sobre el Vacío y el veneno es absoluto. Ansurek busca expandir su reino más allá de las profundidades. Ningún ejército de la superficie la ha detenido.', stats: { ataque: 10, defensa: 8, velocidad: 7 } },
    ]
  }
];

// ── Rareza ────────────────────────────────────────────────────
export const RARITY_MAP = {
  legendary: { label: 'Legendario', color: '#ff8000', bg: 'rgba(255,128,0,0.1)' },
  epic:      { label: 'Épico',      color: '#a335ee', bg: 'rgba(163,53,238,0.1)' },
  rare:      { label: 'Raro',       color: '#0070dd', bg: 'rgba(0,112,221,0.1)' },
  uncommon:  { label: 'Poco común', color: '#1eff00', bg: 'rgba(30,255,0,0.1)' },
  common:    { label: 'Común',      color: '#9d9d9d', bg: 'rgba(157,157,157,0.1)' },
};

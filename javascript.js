'use strict';

/* ════════════════════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════════════════════ */
const T = {
  en: {
    nav_about:'About', nav_skills:'Skills', nav_projects:'Projects',
    nav_games:'Games', nav_exp:'Experience', nav_contact:'Contact',
    nav_available:'Available',
    hero_label:'// Developer Portfolio',
    hero_subtitle:'Backend Developer & Game Developer',
    hero_desc:'Backend developer focused on building scalable systems and experimental interactive projects. Passionate about creating both robust backend architectures and creative game experiences.',
    hero_cta_p:'View Projects', hero_cta_s:'Get in Touch',
    hero_location:'Buenos Aires, Argentina', hero_scroll:'Scroll',
    about_tag:'01 / About', about_title:'Who I Am',
    about_p1:'Alejo Briff is a backend developer and game developer based in Buenos Aires. He specializes in building scalable backend systems, APIs and interactive software.',
    about_p2:'Alongside professional development, he explores experimental game design and interactive systems using engines such as <strong>Godot</strong> and <strong>Unity</strong>.',
    about_p3:'He enjoys creating projects that combine technical problem solving with creative design.',
    stat_exp:'Years Coding', stat_proj:'Projects Built', stat_comp:'Companies', stat_eng:'Game Engines',
    skills_tag:'02 / Skills', skills_title:'Tech Stack',
    cat_backend:'Backend', cat_frontend:'Frontend', cat_gamedev:'Game Development', cat_tools:'Tools',
    proj_tag:'03 / Projects', proj_title:"What I've Built",
    games_tag:'04 / Game Dev', games_title:'Worlds Built',
    games_intro:'Alongside professional work, Alejo develops independent games exploring experimental mechanics, horror atmospheres, card-based systems and procedural design.',
    game_badge:'Game Project',
    exp_tag:'05 / Experience', exp_title:'Journey',
    contact_tag:'06 / Contact', contact_title:"Let's Connect",
    contact_headline:'Ready to build something?',
    contact_sub:"Whether it's a backend system, a game project, or a wild experiment — I'm always open to interesting conversations and collaborations.",
    contact_phone_lbl:'Phone',
    footer_copy:'© 2025 Alejo Briff. All systems operational.',
    modal_tech:'Technologies', modal_repo:'View Repository', modal_demo:'Live Demo',
  },
  es: {
    nav_about:'Sobre Mí', nav_skills:'Habilidades', nav_projects:'Proyectos',
    nav_games:'Juegos', nav_exp:'Experiencia', nav_contact:'Contacto',
    nav_available:'Disponible',
    hero_label:'// Portfolio de Desarrollador',
    hero_subtitle:'Desarrollador Backend & Desarrollador de Videojuegos',
    hero_desc:'Desarrollador backend enfocado en construir sistemas escalables y proyectos interactivos experimentales. Apasionado por crear tanto arquitecturas backend robustas como experiencias creativas en videojuegos.',
    hero_cta_p:'Ver Proyectos', hero_cta_s:'Contactar',
    hero_location:'Buenos Aires, Argentina', hero_scroll:'Scroll',
    about_tag:'01 / Sobre Mí', about_title:'Quién Soy',
    about_p1:'Alejo Briff es un desarrollador backend y desarrollador de videojuegos radicado en Buenos Aires. Se especializa en la construcción de sistemas backend escalables, APIs y software interactivo.',
    about_p2:'Además del desarrollo profesional, explora el diseño experimental de videojuegos y sistemas interactivos utilizando motores como <strong>Godot</strong> y <strong>Unity</strong>.',
    about_p3:'Le gusta crear proyectos que combinan resolución de problemas técnicos con diseño creativo.',
    stat_exp:'Años Programando', stat_proj:'Proyectos', stat_comp:'Empresas', stat_eng:'Motores de Juego',
    skills_tag:'02 / Habilidades', skills_title:'Stack Técnico',
    cat_backend:'Backend', cat_frontend:'Frontend', cat_gamedev:'Desarrollo de Videojuegos', cat_tools:'Herramientas',
    proj_tag:'03 / Proyectos', proj_title:'Lo Que Construí',
    games_tag:'04 / Game Dev', games_title:'Mundos Construidos',
    games_intro:'Junto al trabajo profesional, Alejo desarrolla juegos independientes explorando mecánicas experimentales, atmósferas de terror, sistemas de cartas y diseño procedural.',
    game_badge:'Proyecto de Juego',
    exp_tag:'05 / Experiencia', exp_title:'Trayectoria',
    contact_tag:'06 / Contacto', contact_title:'Conectemos',
    contact_headline:'¿Listo para construir algo?',
    contact_sub:'Ya sea un sistema backend, un proyecto de juego o un experimento audaz — siempre estoy abierto a conversaciones y colaboraciones interesantes.',
    contact_phone_lbl:'Teléfono',
    footer_copy:'© 2025 Alejo Briff. All systems operational.',
    modal_tech:'Technologies', modal_repo:'View Repository', modal_demo:'Live Demo',
  }
};

let lang = 'en';

function applyLang(l) {
  lang = l;
  const t = T[l];
  document.documentElement.lang = l;

  // Static data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });

  // Category labels
  document.querySelectorAll('[data-cat]').forEach(el => {
    const k = el.getAttribute('data-cat');
    if (t[k] !== undefined) el.textContent = t[k];
  });

  // Dynamic: game badges
  document.querySelectorAll('.game-badge').forEach(el => el.textContent = t.game_badge);

  // Dynamic: project descriptions
  document.querySelectorAll('[data-pdesc]').forEach(el => {
    const i = +el.getAttribute('data-pdesc');
    el.textContent = PROJECTS[i].desc[l];
  });

  // Dynamic: game titles + descs
  document.querySelectorAll('[data-gtitle]').forEach(el => {
    const i = +el.getAttribute('data-gtitle');
    el.textContent = GAMES[i].title[l];
  });
  document.querySelectorAll('[data-gdesc]').forEach(el => {
    const i = +el.getAttribute('data-gdesc');
    el.textContent = GAMES[i].desc[l];
  });

  // Dynamic: experience
  document.querySelectorAll('[data-erole]').forEach(el => {
    const i = +el.getAttribute('data-erole');
    el.textContent = EXPERIENCE[i].role[l];
  });
  document.querySelectorAll('[data-eitems]').forEach(el => {
    const i = +el.getAttribute('data-eitems');
    el.innerHTML = EXPERIENCE[i].items[l].map(it => `<li>${it}</li>`).join('');
  });

  // Switcher buttons
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  document.getElementById('btn-es').classList.toggle('active', l === 'es');
  document.getElementById('btn-en').setAttribute('aria-pressed', l === 'en');
  document.getElementById('btn-es').setAttribute('aria-pressed', l === 'es');
}

document.getElementById('btn-en').addEventListener('click', () => applyLang('en'));
document.getElementById('btn-es').addEventListener('click', () => applyLang('es'));

/* ════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════ */
const SKILL_CATS = [
  { key:'cat_backend', v:'', skills:[
    {name:'Node.js',     icon:'💚', sub:'Runtime'},
    {name:'.NET',        icon:'🔷', sub:'Framework'},
    {name:'Python',      icon:'🐍', sub:'Language'},
    {name:'Java',        icon:'☕', sub:'Language'},
    {name:'C#',          icon:'💎', sub:'Language'},
    {name:'C++',         icon:'⚙️', sub:'Language'},
    {name:'SQL',         icon:'🗄️', sub:'Database'},
    {name:'MongoDB',     icon:'🍃', sub:'NoSQL'},
    {name:'REST APIs',   icon:'🌐', sub:'Architecture'},
    {name:'Frappe',      icon:'🧩', sub:'Framework'},
  ]},

  { key:'cat_frontend', v:'alt', skills:[
    {name:'HTML',        icon:'🧱', sub:'Markup'},
    {name:'CSS',         icon:'🎨', sub:'Styles'},
    {name:'JavaScript',  icon:'⚡', sub:'Language'},
    {name:'TypeScript',  icon:'🔵', sub:'Language'},
    {name:'React',       icon:'⚛️', sub:'Library'},
    {name:'Next.js',     icon:'▲', sub:'Framework'},
    {name:'Tailwind',    icon:'💨', sub:'CSS'},
  ]},

  { key:'cat_gamedev', v:'alt', skills:[
    {name:'Godot',         icon:'🎯', sub:'Engine'},
    {name:'Unity',         icon:'🎮', sub:'Engine'},
    {name:'Unreal Engine', icon:'🧬', sub:'Engine'},
    {name:'GDScript',      icon:'📜', sub:'Language'},
    {name:'C#',            icon:'💎', sub:'Language'},
    {name:'C++',           icon:'⚙️', sub:'Language'},
    {name:'Lua',           icon:'🌙', sub:'Language'},
    {name:'Gameplay Systems', icon:'🧠', sub:'Design'},
    {name:'AI Behaviours', icon:'👁️', sub:'Game AI'},
    {name:'Procedural Systems', icon:'🔁', sub:'Generation'},
  ]},

  { key:'cat_tools', v:'green-v', skills:[
    {name:'Git',      icon:'🌿', sub:'Version Control'},
    {name:'Docker',   icon:'🐳', sub:'Containers'},
    {name:'Postman',  icon:'🚀', sub:'API Testing'},
    {name:'Linux',    icon:'🐧', sub:'Environment'},
    {name:'CI/CD',    icon:'⚙️', sub:'Automation'},
  ]},
];

const PROJECTS = [
  {
    title:'Rhaka E-commerce Platform',
    company:'Rhaka New York',
    desc:{
      en:'Complete e-commerce platform development including marketing automation and newsletter infrastructure.',
      es:'Desarrollo completo de plataforma e-commerce incluyendo automatización de marketing y sistema de newsletters.'
    },
    longDesc:{
      en:'Full development of Rhaka’s e-commerce ecosystem including the online store, customer management, email marketing automation and newsletter systems. Implemented product catalogue management, order processing, promotional campaigns and integrated mailing infrastructure to support marketing strategies.',
      es:'Desarrollo completo del ecosistema e-commerce de Rhaka incluyendo la tienda online, gestión de clientes, automatización de email marketing y sistema de newsletters. Implementación de gestión de catálogo de productos, procesamiento de pedidos, campañas promocionales e infraestructura de mailing.'
    },
    tags:[['Next.js','cyan'],['Node.js','cyan'],['MongoDB','green'],['Mail Marketing','magenta']],
    color:[255,120,0],
  },

  {
    title:'Pick to Wall System',
    company:'Farmacity',
    desc:{
      en:'Logistics interface improving internal order preparation workflows.',
      es:'Interfaz logística que mejora los flujos internos de preparación de pedidos.'
    },
    longDesc:{
      en:"A fullstack logistics management system built for Farmacity's internal operations using the Pick to Wall methodology. Integrated operational dashboards, order preparation interfaces and internal APIs to streamline warehouse workflows and improve employee efficiency.",
      es:'Sistema logístico fullstack desarrollado para operaciones internas de Farmacity usando la metodología Pick to Wall. Integra dashboards operativos, interfaces de preparación de pedidos y APIs internas para optimizar los flujos del almacén.'
    },
    tags:[['Node.js','cyan'],['React','cyan'],['SQL','magenta'],['REST API','gray']],
    color:[0,255,136],
  },

  {
    title:'Subway Station Management System',
    company:'Personal Project',
    desc:{
      en:'Management system for subway stations with reports and operational dashboards.',
      es:'Sistema de gestión para estaciones de subte con reportes y dashboards operativos.'
    },
    longDesc:{
      en:'A complete management system for subway station operations. Includes real-time dashboards, incident reporting, administrative management modules and data analytics tools designed to support complex infrastructure environments.',
      es:'Sistema completo de gestión para operaciones de estaciones de subte. Incluye dashboards en tiempo real, reportes de incidentes, módulos administrativos y herramientas de análisis de datos.'
    },
    tags:[['Python','cyan'],['SQL','magenta'],['Dashboards','gray']],
    color:[212,0,255],
  },

  {
    title:'Building Management System',
    company:'Onbytec Technology',
    desc:{
      en:'Backend system automating residential building administration.',
      es:'Sistema backend para automatizar la administración de edificios.'
    },
    longDesc:{
      en:'Backend platform for managing residential buildings. Includes smart access control integration with Hikvision cameras, dynamic key generation for intercom entry systems, resident management modules and automated administrative tools.',
      es:'Plataforma backend para gestión de edificios residenciales. Incluye integración con cámaras Hikvision para control de acceso inteligente, generación dinámica de claves para intercomunicadores, gestión de residentes y herramientas administrativas automatizadas.'
    },
    tags:[['Node.js','cyan'],['Frappe','magenta'],['Hikvision','cyan'],['MongoDB','green']],
    color:[0,240,255],
  },

  {
    title:'Multi-Store ERP Platform',
    company:'Novigo Technology',
    desc:{
      en:'Enterprise ERP system for multi-store business management.',
      es:'Sistema ERP empresarial para gestión de múltiples tiendas.'
    },
    longDesc:{
      en:'Backend development for an ERP platform supporting multi-store businesses. Includes inventory systems, order management, administrative dashboards and scalable backend services designed for complex commercial operations.',
      es:'Desarrollo backend para plataforma ERP orientada a empresas con múltiples tiendas. Incluye sistemas de inventario, gestión de pedidos, dashboards administrativos y servicios backend escalables.'
    },
    tags:[['Node.js','cyan'],['ERP','magenta'],['REST API','gray'],['SQL','green']],
    color:[0,200,255],
  },

  {
    title:'Medical Admission & Results System',
    company:'Novigo Technology',
    desc:{
      en:'Healthcare platform for patient admission and clinical results management.',
      es:'Plataforma de salud para admisión de pacientes y gestión de resultados clínicos.'
    },
    longDesc:{
      en:'Backend development of a medical services system supporting patient admission workflows and clinical result management. Designed for reliability and data integrity in healthcare environments.',
      es:'Desarrollo backend de un sistema de servicios médicos que gestiona admisión de pacientes y resultados clínicos. Diseñado con foco en confiabilidad y manejo seguro de datos.'
    },
    tags:[['Node.js','cyan'],['Healthcare','magenta'],['SQL','green']],
    color:[0,255,180],
  },

  {
    title:'Industrial Maintenance Management System',
    company:'Novigo Technology',
    desc:{
      en:'Platform for managing industrial machinery maintenance and operational resources.',
      es:'Plataforma para gestión de mantenimiento de maquinaria y recursos industriales.'
    },
    longDesc:{
      en:'System developed to manage maintenance operations and machinery resources within industrial companies. Includes scheduling tools, maintenance tracking, operational reports and asset management modules.',
      es:'Sistema desarrollado para gestionar mantenimiento y recursos maquinarios en empresas industriales. Incluye programación de tareas, seguimiento de mantenimiento, reportes operativos y gestión de activos.'
    },
    tags:[['Node.js','cyan'],['Maintenance','magenta'],['ERP','gray']],
    color:[255,160,0],
  },
];

const GAMES = [
  {
    title:{ en:'Reactive Horror AI Prototype', es:'Prototipo de IA de Terror Reactiva' },
    desc:{
      en:'First-person horror prototype in Godot exploring AI behaviours reacting to player vision and sound.',
      es:'Prototipo de terror en primera persona en Godot explorando comportamientos de IA que reaccionan a la vista y al sonido del jugador.'
    },
    longDesc:{
      en:'Gameplay prototype exploring reactive enemy AI. During the day the player prepares resources under time pressure, while at night an enemy reacts dynamically to sound and line of sight. The project focuses on experimentation with tension design, stealth mechanics and emergent behaviour systems.',
      es:'Prototipo de gameplay centrado en IA reactiva. Durante el día el jugador prepara recursos bajo límite de tiempo, mientras que durante la noche un enemigo reacciona dinámicamente al sonido y a la línea de visión. El proyecto explora diseño de tensión, mecánicas de sigilo y comportamientos emergentes.'
    },
    tags:[['Godot','magenta'],['GDScript','magenta'],['AI Systems','cyan'],['Horror','gray']],
    color:[212,0,255],
  },

  {
    title:{ en:'Card Strategy System Prototype', es:'Prototipo de Sistema Estratégico de Cartas' },
    desc:{
      en:'Experimental card system inspired by rock–paper–scissors mechanics and betting systems.',
      es:'Sistema experimental de cartas inspirado en mecánicas de piedra–papel–tijera y sistemas de apuestas.'
    },
    longDesc:{
      en:'Design prototype for a strategic card game built around rock–paper–scissors logic with betting mechanics inspired by traditional games. The project explores economic systems, player psychology and modular card interactions.',
      es:'Prototipo de diseño para un juego de cartas estratégico basado en lógica de piedra–papel–tijera con mecánicas de apuesta inspiradas en juegos tradicionales. El proyecto explora sistemas económicos, psicología del jugador e interacciones modulares entre cartas.'
    },
    tags:[['Game Design','cyan'],['Systems Design','cyan'],['Card Game','gray']],
    color:[0,240,255],
  },

  {
    title:{ en:'Audio-Reactive Platformer Prototype', es:'Prototipo de Plataformas Reactivo al Sonido' },
    desc:{
      en:'Vertical platformer experiment where platforms and traps react to sound and rhythm.',
      es:'Experimento de plataformas vertical donde plataformas y trampas reaccionan al sonido y al ritmo.'
    },
    longDesc:{
      en:'Prototype inspired by vertical platformers like Jump King. The project experiments with sound-driven mechanics such as noise-sensitive platforms, silence zones and rhythm-reactive traps, exploring how audio can influence gameplay.',
      es:'Prototipo inspirado en plataformas verticales como Jump King. Experimenta con mecánicas basadas en sonido como plataformas sensibles al ruido, zonas de silencio y trampas que reaccionan al ritmo.'
    },
    tags:[['Godot','magenta'],['Game Mechanics','cyan'],['Audio Gameplay','gray']],
    color:[0,255,136],
  },

  {
    title:{ en:'Gameplay Systems Experiments', es:'Experimentos de Sistemas de Gameplay' },
    desc:{
      en:'Collection of small prototypes exploring mechanics, AI behaviours and procedural systems.',
      es:'Colección de pequeños prototipos explorando mecánicas, IA y sistemas procedurales.'
    },
    longDesc:{
      en:'Ongoing experiments developed while studying game development. Includes AI behaviour prototypes, procedural gameplay systems, interaction experiments and mechanics exploration across different engines such as Godot, Unity and LÖVE2D.',
      es:'Experimentos continuos desarrollados durante el estudio de desarrollo de videojuegos. Incluye prototipos de IA, sistemas procedurales, experimentos de interacción y exploración de mecánicas en motores como Godot, Unity y LÖVE2D.'
    },
    tags:[['Godot','magenta'],['Unity','magenta'],['Lua','cyan'],['Prototyping','gray']],
    color:[180,180,255],
  },
];

const EXPERIENCE = [
  {
    date:'Aug 2025 – 2026',
    role:{ en:'Backend Developer', es:'Desarrollador Backend' },
    company:'Onbytec Technology / Novigo',
    items:{
      en:[
        'Developed backend systems for multiple enterprise platforms.',
        'Built ERP solutions for multi-store businesses.',
        'Developed healthcare systems for patient admission and clinical results.',
        'Developed industrial maintenance management platforms.',
        'Implemented smart access control systems integrated with Hikvision.',
        'Developed dynamic intercom key systems using Node.js and Frappe.'
      ],
      es:[
        'Desarrollo de sistemas backend para múltiples plataformas empresariales.',
        'Construcción de soluciones ERP para empresas con múltiples tiendas.',
        'Desarrollo de sistemas médicos para admisión de pacientes y resultados clínicos.',
        'Desarrollo de plataformas de gestión de mantenimiento industrial.',
        'Implementación de sistemas de control de acceso inteligente integrados con Hikvision.',
        'Desarrollo de sistemas de claves dinámicas para intercomunicadores usando Node.js y Frappe.'
      ],
    },
  },

  {
    date:'Oct 2024 – Jan 2025',
    role:{ en:'Fullstack Developer', es:'Desarrollador Fullstack' },
    company:'Farmacity',
    items:{
      en:[
        'Developed logistics interfaces for the Pick to Wall system.',
        'Worked across frontend and backend layers.',
        'Integrated operational interfaces with internal APIs.',
        'Improved internal logistics workflow efficiency.'
      ],
      es:[
        'Desarrollo de interfaces logísticas para el sistema Pick to Wall.',
        'Trabajo en frontend y backend.',
        'Integración de interfaces con APIs internas.',
        'Mejora de eficiencia en flujos logísticos internos.'
      ],
    },
  },

  {
    date:'2025 – Present',
    role:{ en:'Web / XR Developer', es:'Desarrollador Web / XR' },
    company:'Briffo.ai',
    items:{
      en:[
        'Developed the corporate website.',
        'Built a virtual museum experience for the web.',
        'Implemented 3D walkthroughs using WebGL and Three.js.',
        'Created experimental VR interaction prototypes.'
      ],
      es:[
        'Desarrollo del sitio web corporativo.',
        'Construcción de un museo virtual interactivo.',
        'Implementación de recorridos 3D usando WebGL y Three.js.',
        'Desarrollo de prototipos de interacción VR.'
      ],
    },
  },

  {
    date:'2025',
    role:{ en:'E-commerce Developer', es:'Desarrollador E-commerce' },
    company:'Rhaka New York',
    items:{
      en:[
        'Developed the complete e-commerce platform.',
        'Implemented product catalog and order systems.',
        'Created email marketing infrastructure.',
        'Built automated newsletter and campaign systems.'
      ],
      es:[
        'Desarrollo completo de la plataforma e-commerce.',
        'Implementación de catálogo de productos y sistema de pedidos.',
        'Creación de infraestructura de email marketing.',
        'Construcción de sistemas automatizados de newsletters y campañas.'
      ],
    },
  },
];

/* ════════════════════════════════════════════════════
   CURSOR
════════════════════════════════════════════════════ */
const cursorEl = document.getElementById('cursor');
const ringEl   = document.getElementById('cursor-ring');
let cx = -200, cy = -200, rx = -200, ry = -200;

document.addEventListener('mousemove', e => {
  cx = e.clientX; cy = e.clientY;
  cursorEl.style.left = cx + 'px';
  cursorEl.style.top  = cy + 'px';
});
(function animRing() {
  rx += (cx - rx) * .12;
  ry += (cy - ry) * .12;
  ringEl.style.left = rx + 'px';
  ringEl.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

function hoverify(sel) {
  document.querySelectorAll(sel).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
hoverify('a,button,.skill-card,.project-card,.game-card,.contact-link,.btn,.engine-badge,.stat-card,.lang-btn');

/* ════════════════════════════════════════════════════
   PARTICLE NETWORK
════════════════════════════════════════════════════ */
(function(){
  const cv = document.getElementById('particle-canvas');
  const ctx = cv.getContext('2d');
  const mobile = innerWidth < 768;
  const N = mobile ? 40 : 90;
  const CD = mobile ? 100 : 160;
  const MR = 200;
  let W, H, mx = -999, my = -999;

  function resize(){ W = cv.width = innerWidth; H = cv.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mouseleave', () => { mx = my = -999; });

  function mkP() {
    const b = Math.random();
    return {
      x: Math.random()*W, y: Math.random()*H,
      vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4,
      r: Math.random()*1.8+.8,
      hue: b>.6?185:b>.3?290:155,
    };
  }
  const ps = Array.from({length:N}, mkP);

  function loop(){
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<ps.length;i++){
      const p=ps[i];
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      const dx=p.x-mx, dy=p.y-my, d=Math.hypot(dx,dy);
      if(d<MR){ const f=(MR-d)/MR*.6; p.x+=dx/d*f*2; p.y+=dy/d*f*2; }

      // dot
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`hsla(${p.hue},100%,70%,.7)`;
      ctx.shadowBlur=8; ctx.shadowColor=`hsla(${p.hue},100%,70%,.9)`;
      ctx.fill(); ctx.shadowBlur=0;

      // p-p connections
      for(let j=i+1;j<ps.length;j++){
        const q=ps[j], dd=Math.hypot(p.x-q.x,p.y-q.y);
        if(dd<CD){
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(0,240,255,${(1-dd/CD)*.4})`; ctx.lineWidth=.6; ctx.stroke();
        }
      }

      // mouse connection
      const md=Math.hypot(p.x-mx,p.y-my);
      if(md<CD*1.4){
        ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(mx,my);
        ctx.strokeStyle=`rgba(212,0,255,${(1-md/(CD*1.4))*.65})`; ctx.lineWidth=.8; ctx.stroke();
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ════════════════════════════════════════════════════
   ABOUT CANVAS
════════════════════════════════════════════════════ */
(function(){
  const cv = document.getElementById('about-canvas');
  if(!cv) return;
  const ctx = cv.getContext('2d');
  let t=0;
  const nodes = Array.from({length:24}, () => ({
    x:Math.random(), y:Math.random(),
    vx:(Math.random()-.5)*.002, vy:(Math.random()-.5)*.002,
    r:Math.random()*2.5+1.2,
  }));
  function frame(){
    const W=cv.offsetWidth, H=cv.offsetHeight;
    cv.width=W*devicePixelRatio; cv.height=H*devicePixelRatio;
    ctx.scale(devicePixelRatio,devicePixelRatio);
    t+=.006;
    ctx.fillStyle='rgba(15,15,21,.6)'; ctx.fillRect(0,0,W,H);
    // grid
    ctx.strokeStyle='rgba(0,240,255,.05)'; ctx.lineWidth=1;
    for(let x=0;x<W;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    // update nodes
    nodes.forEach(n=>{
      n.x+=n.vx; n.y+=n.vy;
      if(n.x<0||n.x>1)n.vx*=-1;
      if(n.y<0||n.y>1)n.vy*=-1;
    });
    // connections
    for(let i=0;i<nodes.length;i++){
      for(let j=i+1;j<nodes.length;j++){
        const d=Math.hypot((nodes[i].x-nodes[j].x)*W,(nodes[i].y-nodes[j].y)*H);
        if(d<140){
          ctx.beginPath(); ctx.moveTo(nodes[i].x*W,nodes[i].y*H); ctx.lineTo(nodes[j].x*W,nodes[j].y*H);
          ctx.strokeStyle=`rgba(0,240,255,${(1-d/140)*.5})`; ctx.lineWidth=.8; ctx.stroke();
        }
      }
    }
    // dots
    nodes.forEach((n,i)=>{
      const hue=i%3===0?185:i%3===1?290:155;
      ctx.beginPath(); ctx.arc(n.x*W,n.y*H,n.r+Math.sin(t*1.5+i)*.5,0,Math.PI*2);
      ctx.fillStyle=`hsla(${hue},100%,70%,.85)`;
      ctx.shadowBlur=6+Math.sin(t+i)*3; ctx.shadowColor=`hsla(${hue},100%,70%,1)`;
      ctx.fill(); ctx.shadowBlur=0;
    });
    // pulse ring
    const pulse=.5+.5*Math.sin(t*2);
    ctx.beginPath(); ctx.arc(W/2,H/2,40+pulse*15,0,Math.PI*2);
    ctx.strokeStyle=`rgba(0,240,255,${.08+pulse*.06})`; ctx.lineWidth=1; ctx.stroke();
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ════════════════════════════════════════════════════
   SKILLS RENDER
════════════════════════════════════════════════════ */
const sc = document.getElementById('skills-container');
SKILL_CATS.forEach((cat, ci) => {
  const wrap = document.createElement('div');
  wrap.className = 'skills-category fade-up';
  wrap.style.transitionDelay = (ci * .1) + 's';

  const lbl = document.createElement('div');
  lbl.className = 'skills-category-label';
  lbl.setAttribute('data-cat', cat.key);
  lbl.textContent = T.en[cat.key];
  wrap.appendChild(lbl);

  const grid = document.createElement('div');
  grid.className = 'skills-grid';
  cat.skills.forEach((s, si) => {
    const card = document.createElement('div');
    card.className = `skill-card ${cat.v}`;
    card.style.transitionDelay = (ci * .1 + si * .05) + 's';
    card.innerHTML = `<span class="skill-icon">${s.icon}</span><div class="skill-name">${s.name}</div><div class="skill-sub">${s.sub}</div>`;
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
  sc.appendChild(wrap);
  hoverify('.skill-card');
});

/* ════════════════════════════════════════════════════
   PROJECT CANVAS HELPER
════════════════════════════════════════════════════ */
function makeProjectCanvas(cv, color) {
  const ctx = cv.getContext('2d');
  let t=0;
  const [r,g,b]=color;
  const pts=Array.from({length:18},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.003,vy:(Math.random()-.5)*.003}));
  function loop(){
    const W=cv.offsetWidth, H=cv.offsetHeight;
    cv.width=W*devicePixelRatio; cv.height=H*devicePixelRatio;
    ctx.scale(devicePixelRatio,devicePixelRatio);
    t+=.014;
    ctx.fillStyle='#0b0b0f'; ctx.fillRect(0,0,W,H);
    const gr=ctx.createRadialGradient(W*.5+Math.sin(t)*(W*.2),H*.5+Math.cos(t*.7)*(H*.2),0,W*.5,H*.5,W*.7);
    gr.addColorStop(0,`rgba(${r},${g},${b},.18)`); gr.addColorStop(1,'transparent');
    ctx.fillStyle=gr; ctx.fillRect(0,0,W,H);
    for(let l=0;l<5;l++){
      ctx.beginPath();
      ctx.moveTo(0,H*(l/4)+Math.sin(t+l)*(H*.08));
      ctx.bezierCurveTo(W*.33,H*(l/4)+Math.cos(t*.8+l)*(H*.12),W*.66,H*(l/4)+Math.sin(t*1.2+l)*(H*.1),W,H*(l/4)+Math.cos(t+l)*(H*.07));
      ctx.strokeStyle=`rgba(${r},${g},${b},${.07+l*.015})`; ctx.lineWidth=1; ctx.stroke();
    }
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>1)p.vx*=-1; if(p.y<0||p.y>1)p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x*W,p.y*H,1.5,0,Math.PI*2);
      ctx.fillStyle=`rgba(${r},${g},${b},.7)`; ctx.shadowBlur=4; ctx.shadowColor=`rgb(${r},${g},${b})`; ctx.fill(); ctx.shadowBlur=0;
    });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ════════════════════════════════════════════════════
   PROJECTS RENDER
════════════════════════════════════════════════════ */
const SVG_GH = `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;
const SVG_EX = `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>`;

const pg = document.getElementById('projects-grid');
PROJECTS.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'project-card fade-up';
  card.style.transitionDelay = (i * .1) + 's';
  const tags = p.tags.map(([n,c]) => `<span class="tag tag-${c}">${n}</span>`).join('');
  card.innerHTML = `
    <div class="project-thumb"><canvas></canvas><div class="project-overlay"></div></div>
    <div class="project-info">
      <div class="project-title">${p.title}</div>
      <div class="project-company">${p.company}</div>
      <div class="project-desc" data-pdesc="${i}">${p.desc.en}</div>
      <div class="project-tags">${tags}</div>
    </div>`;
  card.addEventListener('click', () => openModal(p));
  pg.appendChild(card);
  makeProjectCanvas(card.querySelector('canvas'), p.color);
  hoverify('.project-card');
});

/* ════════════════════════════════════════════════════
   GAME DEV CANVAS HELPER
════════════════════════════════════════════════════ */
function makeGameCanvas(cv, color) {
  const ctx = cv.getContext('2d');
  let t=0;
  const [r,g,b]=color;
  const stars=Array.from({length:60},()=>({x:Math.random(),y:Math.random(),size:Math.random()*1.4+.3,speed:Math.random()*.002+.0005,bright:Math.random()}));
  function loop(){
    const W=cv.offsetWidth, H=cv.offsetHeight;
    cv.width=W*devicePixelRatio; cv.height=H*devicePixelRatio;
    ctx.scale(devicePixelRatio,devicePixelRatio);
    t+=.012;
    ctx.fillStyle='#080810'; ctx.fillRect(0,0,W,H);
    stars.forEach(s=>{
      s.y-=s.speed; if(s.y<0){s.y=1;s.x=Math.random();}
      ctx.beginPath(); ctx.arc(s.x*W,s.y*H,s.size,0,Math.PI*2);
      ctx.fillStyle=`rgba(${r},${g},${b},${.4+.6*Math.sin(t*2+s.bright*6)})`; ctx.fill();
    });
    const hg=ctx.createLinearGradient(0,H*.4,0,H);
    hg.addColorStop(0,'transparent'); hg.addColorStop(1,`rgba(${r},${g},${b},.12)`);
    ctx.fillStyle=hg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle=`rgba(${r},${g},${b},.15)`; ctx.lineWidth=.8;
    const vp={x:W*.5,y:H*.55};
    for(let i=-8;i<=8;i++){ctx.beginPath();ctx.moveTo(vp.x+i*(W*.12),H);ctx.lineTo(vp.x,vp.y);ctx.stroke();}
    for(let j=0;j<8;j++){
      const prog=j/8;
      ctx.beginPath();ctx.moveTo(vp.x-(vp.x)*(1-prog*.8),vp.y+(H-vp.y)*prog);ctx.lineTo(vp.x+(W-vp.x)*(1-prog*.8),vp.y+(H-vp.y)*prog);ctx.stroke();
    }
    const pulse=.5+.5*Math.sin(t*1.8);
    const grd=ctx.createRadialGradient(W*.5,vp.y,0,W*.5,vp.y,50+pulse*20);
    grd.addColorStop(0,`rgba(${r},${g},${b},${.4+pulse*.2})`); grd.addColorStop(1,'transparent');
    ctx.fillStyle=grd; ctx.fillRect(0,0,W,H);
    requestAnimationFrame(loop);
  }
  loop();
}

/* ════════════════════════════════════════════════════
   GAME DEV RENDER
════════════════════════════════════════════════════ */
const gg = document.getElementById('gamedev-grid');
GAMES.forEach((game, i) => {
  const card = document.createElement('div');
  card.className = 'game-card fade-up';
  card.style.transitionDelay = (i * .1) + 's';
  const tags = game.tags.map(([n,c]) => `<span class="tag tag-${c}">${n}</span>`).join('');
  card.innerHTML = `
    <div class="game-thumb">
      <canvas></canvas>
      <div class="scanlines"></div>
      <div class="game-glitch"></div>
      <span class="game-badge">Game Project</span>
    </div>
    <div class="game-info">
      <div class="game-title" data-gtitle="${i}">${game.title.en}</div>
      <div class="game-desc" data-gdesc="${i}">${game.desc.en}</div>
      <div class="project-tags" style="margin-top:12px">${tags}</div>
    </div>`;
  gg.appendChild(card);
  makeGameCanvas(card.querySelector('canvas'), game.color);
  hoverify('.game-card');
});

/* ════════════════════════════════════════════════════
   EXPERIENCE RENDER
════════════════════════════════════════════════════ */
const tl = document.getElementById('timeline');
EXPERIENCE.forEach((exp, i) => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  const li = exp.items.en.map(it => `<li>${it}</li>`).join('');
  item.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-date">${exp.date}</div>
    <div class="timeline-role" data-erole="${i}">${exp.role.en}</div>
    <div class="timeline-company">${exp.company}</div>
    <ul class="timeline-responsibilities" data-eitems="${i}">${li}</ul>`;
  tl.appendChild(item);
});

/* ════════════════════════════════════════════════════
   MODAL
════════════════════════════════════════════════════ */
let activeProject = null;
const modalOverlay = document.getElementById('modal-overlay');
const modalClose   = document.getElementById('modal-close');
const modalBody    = document.getElementById('modal-body');
const modalCanvas  = document.getElementById('modal-canvas');

function openModal(p) {
  activeProject = p;
  renderModal(p, lang);
  makeProjectCanvas(modalCanvas, p.color);
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function renderModal(p, l) {
  const t = T[l];
  const tags = p.tags.map(([n,c]) => `<span class="tag tag-${c}">${n}</span>`).join('');
  modalBody.innerHTML = `
    <h2 class="modal-title">${p.title} <span style="font-family:var(--mono);font-size:.65rem;color:var(--text-muted);font-weight:300;">· ${p.company}</span></h2>
    <p class="modal-desc">${p.longDesc[l]}</p>
    <p class="modal-section-label">${t.modal_tech}</p>
    <div class="project-tags" style="margin-bottom:24px">${tags}</div>`;
}
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* ════════════════════════════════════════════════════
   PATCH applyLang TO ALSO REFRESH OPEN MODAL
════════════════════════════════════════════════════ */
if (!window._base_applyLang) {
  window._base_applyLang = applyLang;
  applyLang = function(l) {
    window._base_applyLang(l);
    if (activeProject && modalOverlay.classList.contains('active')) renderModal(activeProject, l);
  }
}
document.getElementById('btn-en').addEventListener('click', () => applyLang('en'));
document.getElementById('btn-es').addEventListener('click', () => applyLang('es'));

/* ════════════════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════════════════ */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up, .timeline-item, .skills-category').forEach(el => obs.observe(el));

/* ════════════════════════════════════════════════════
   NAV SCROLL STATE
════════════════════════════════════════════════════ */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => navEl.classList.toggle('scrolled', scrollY > 60), { passive:true });

/* ════════════════════════════════════════════════════
   SMOOTH ANCHOR LINKS
════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});
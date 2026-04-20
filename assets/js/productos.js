// ─── PRODUCTOS ────────────────────────────────────────────────
const I = 'assets/img/';

const PRODUCTOS = [
  // ── 1. Cerezas ────────────────────────────────────────────
  { nombre:'Cereza Blanca',         cat:'cerezas',    img:I+'cereza-blanca.jpg',
    desc:'Variedad de pulpa clara y sabor suave, muy apreciada en fresco. Excelente adaptación al clima húmedo del sur, con cosecha en diciembre-enero.' },
  { nombre:'Cereza Kordia',         cat:'cerezas',    img:I+'cereza-kordia.jpg',
    desc:'Cereza tardía de fruto firme y color rojo intenso. Perfecta para las condiciones del sur. Cosecha en enero.' },
  { nombre:'Cereza Lambert',        cat:'cerezas',    img:I+'cereza-lambert.jpg',
    desc:'Variedad clásica de gran tamaño y color oscuro profundo. Muy apreciada en el mercado local con buena producción en suelos de Los Lagos.' },
  { nombre:'Cereza Lapins',         cat:'cerezas',    img:I+'cereza-lapins.jpg',
    desc:'Autofértil: no necesita polinizador. Fruto grande, dulce y de maduración tardía. Especialmente recomendada para huertos pequeños o familiares.' },
  { nombre:'Cereza Regina',         cat:'cerezas',    img:I+'cereza-regina.jpg',
    desc:'Variedad premium de maduración muy tardía. Fruto firme, muy dulce y con escasa caída. Ideal para consumo fresco y venta directa.' },
  { nombre:'Cereza Reiner',         cat:'cerezas',    img:I+'cereza-reiner.jpg',
    desc:'Variedad de excelente calibre y sabor dulce equilibrado. Muy productiva en el clima del sur de Chile.' },
  { nombre:'Corazón de Paloma',     cat:'cerezas',    img:I+'cereza-corazon-paloma.jpg',
    desc:'Variedad tradicional de forma característica, pulpa tierna y sabor dulce. Bien adaptada al clima y suelos del sur de Chile.' },
  { nombre:'Guinda Ácida Roja',     cat:'cerezas',    img:I+'guinda-acida.jpg',
    desc:'Sabor ácido intenso, ideal para conservas, mermeladas y jugos artesanales. Árbol rústico y muy productivo en climas fríos y húmedos.' },

  // ── 2. Manzanos, Perales, Membrillos, Higuera ─────────────
  { nombre:'Manzana Cabeza de Niño', cat:'manzanos', img:I+'manzana-cabeza-nino.jpg',
    desc:'Variedad local de gran tamaño y sabor dulce. Muy típica del sur, excelente para consumo fresco, jugo natural y elaboración de chicha.' },
  { nombre:'Manzana del Paraíso',   cat:'manzanos',   img:I+'manzana-paraiso.jpg',
    desc:'Portainjerto enano utilizado como pie para otros manzanos. Permite obtener árboles de menor porte con producción más precoz y manejable.' },
  { nombre:'Manzana Fierro',        cat:'manzanos',   img:I+'manzana-fierro.jpg',
    desc:'Variedad tradicional chilena de larga conservación post cosecha. Fruto firme, sabor equilibrado. Muy rústica y perfectamente adaptada al sur.' },
  { nombre:'Manzana Gravenstein',   cat:'manzanos',   img:I+'manzana-gravenstein.jpg',
    desc:'Una de las variedades más antiguas y apreciadas. Cosecha temprana con sabor aromático intenso. Excelente para jugo fresco y consumo directo.' },
  { nombre:'Manzana Limona',        cat:'manzanos',   img:I+'manzana-limona.jpg',
    desc:'Fruto amarillo-verdoso de sabor suave y ligeramente ácido. Variedad tradicional del sur, muy usada en sidra artesanal y consumo familiar.' },
  { nombre:'Manzana Plátano',       cat:'manzanos',   img:I+'manzana-platano.jpg',
    desc:'Fruto alargado y amarillo característico. Sabor dulce y maduración tardía. Muy resistente y de alta productividad en condiciones del sur.' },
  { nombre:'Manzana Reineta',       cat:'manzanos',   img:I+'manzana-reineta.jpg',
    desc:'Variedad europea de excelente calidad y sabor complejo. Aromática e ideal para repostería. Se adapta muy bien a la Región de Los Lagos.' },
  { nombre:'Manzano Jonagold',      cat:'manzanos',   img:I+'manzana-jonagold.jpg',
    desc:'Híbrido de Golden y Jonathan. Fruto grande de color amarillo-anaranjado con sabor excepcional. Alta productividad en el sur.' },
  { nombre:'Peral Packams',         cat:'manzanos',   img:I+'pera-packams.jpg',
    desc:'Pera de cosecha tardía, fruto jugoso y aromático. Excelente para consumo fresco y conservas. Adaptada a climas templados y fríos.' },
  { nombre:'Peral Asiático',        cat:'manzanos',   img:I+'pera-asiatica.jpg',
    desc:'Fruto crujiente y muy jugoso, con forma redonda. Sabor dulce refrescante. Ideal para consumo en fresco, se come como una manzana.' },
  { nombre:'Peral Winter Nelli',    cat:'manzanos',   img:I+'pera-winter-nelli.jpg',
    desc:'Variedad tradicional de maduración invernal. Fruto firme con pulpa muy aromática. Excelente para conservas y consumo diferido.' },
  { nombre:'Membrillo Lúcuma',      cat:'manzanos',   img:I+'membrillo.jpg',
    desc:'Fruto aromático de sabor intenso, ideal para dulces y mermeladas artesanales. Árbol rústico, resistente y de bajo manejo.' },
  { nombre:'Higuera',               cat:'manzanos',   img:I+'higuera.jpg',
    desc:'Árbol mediterráneo bien adaptado al sur con microclima favorable. Fruto dulce y nutritivo, ideal para consumo fresco o deshidratado.' },
  { nombre:'Parra',                 cat:'manzanos',   img:I+'parra.jpg',
    desc:'Enredadera de uva, versátil para patios y pérgolas. Produce fruta para consumo directo, jugos o elaboración casera.' },

  // ── 3. Ciruelos y Duraznos ────────────────────────────────
  { nombre:'Ciruela Angelina',      cat:'ciruelas',   img:I+'ciruela-angelina.jpg',
    desc:'Fruto grande de color rojo intenso y pulpa amarilla dulce y firme. Maduración tardía, bien adaptada a las condiciones del sur.' },
  { nombre:"Ciruela D'Agen",        cat:'ciruelas',   img:I+'ciruela-dagen.jpg',
    desc:'Variedad francesa clásica para secado. Pulpa azul-negra, muy dulce y productiva. La base de la tradicional ciruela pasa artesanal.' },
  { nombre:'Ciruelo Santa Rosa',    cat:'ciruelas',   img:I+'ciruela-santa-rosa.jpg',
    desc:'Fruto de color rojo púrpura con pulpa amarilla jugosa. Una de las ciruelas más tradicionales, de excelente sabor para consumo fresco.' },
  { nombre:'Ciruelo Reina Claudia', cat:'ciruelas',   img:I+'ciruela-reina-claudia.jpg',
    desc:'Variedad europea de fruto verde-dorado con pulpa dulce y aromática. Considerada una de las ciruelas de mejor sabor del mundo.' },
  { nombre:'Durazno Beterraga',     cat:'ciruelas',   img:I+'durazno-beterraga.jpg',
    desc:'Fruto de pulpa roja llamativa y sabor dulce intenso. Muy decorativo y diferenciador. Poco común, agrega valor real a cualquier huerto.' },
  { nombre:'Durazno Carson',        cat:'ciruelas',   img:I+'durazno-carson.jpg',
    desc:'Variedad de media estación con fruto grande y jugoso. Muy productivo en el sur con manejo adecuado. Sabor equilibrado y atractivo.' },
  { nombre:'Durazno Plátano',       cat:'ciruelas',   img:I+'durazno-platano.jpg',
    desc:'Fruto alargado y característico con pulpa blanca de sabor suave y dulce. Variedad tradicional muy apreciada en el sur de Chile.' },
  { nombre:'Damasco',               cat:'ciruelas',   img:I+'damasco.jpg',
    desc:'Albaricoque adaptado al clima sureño. Fruto aromático, ideal para consumo fresco, mermeladas artesanales y deshidratado.' },

  // ── 4. Frutales Menores ───────────────────────────────────
  { nombre:'Arándanos',             cat:'berries',    img:I+'arandanos.jpg',
    desc:'Multivariedad. Fruto antioxidante de alta demanda y valor nutricional. Se adapta perfectamente a los suelos ácidos del sur. Cosecha en verano.' },
  { nombre:'Frambuesas',            cat:'berries',    img:I+'frambuesas.jpg',
    desc:'Fruto delicado y aromático. Ideal para consumo fresco, mermeladas y repostería. Muy productivo en el clima templado-húmedo del sur.' },
  { nombre:'Frutillas',             cat:'berries',    img:I+'frutillas.jpg',
    desc:'Variedad seleccionada para el sur. Fruto dulce y aromático con producción abundante durante toda la primavera y verano.' },
  { nombre:'Grosellas',             cat:'berries',    img:I+'grosellas.jpg',
    desc:'Arbusto rústico de bayas ácidas y nutritivas. Excelente para mermeladas y jugos. Alta tolerancia al frío y humedad del sur.' },
  { nombre:'Zarzaparrilla',         cat:'berries',    img:I+'zarzaparrilla.jpg',
    desc:'Arbusto nativo de bayas negras con propiedades medicinales reconocidas. Muy resistente y fácil de cultivar en el sur de Chile.' },
  { nombre:'Murta',                 cat:'berries',    img:I+'murta.jpg',
    desc:'Especie nativa de frutos rojos pequeños, aromáticos y de sabor único. Usada en repostería tradicional y mermeladas artesanales.' },
  { nombre:'Ruibarbo',              cat:'berries',    img:I+'ruibarbo.jpg',
    desc:'Planta perenne con pecíolos comestibles de sabor ácido característico. Tradicional para kuchen, mermeladas y postres del sur.' },

  // ── 5. Frutos Secos ───────────────────────────────────────
  { nombre:'Nogal',                 cat:'secos',      img:I+'nogal.jpg',
    desc:'Árbol de larga vida y gran producción. Nuez de excelente calidad y alta demanda en el mercado local. Perfectamente adaptado al sur.' },
  { nombre:'Nogal Chandler',        cat:'secos',      img:I+'nogal-chandler.jpg',
    desc:'Variedad moderna de nuez de cáscara clara y pulpa grande. Productividad precoz y alta. Una de las más demandadas comercialmente.' },
  { nombre:'Castaño Marrón',        cat:'secos',      img:I+'castano-marron.jpg',
    desc:'Árbol noble de crecimiento vigoroso. Produce castañas grandes y dulces. Muy bien adaptado a los suelos profundos del sur.' },
  { nombre:'Avellano Europeo',      cat:'secos',      img:I+'avellano-europeo.jpg',
    desc:'Arbusto productivo de fruto seco muy apreciado. Se adapta bien al clima frío-húmedo de la Décima Región. Alta demanda local.' },

  // ── 6. Frutales de Flor ───────────────────────────────────
  { nombre:'Cerezo de Flor Doble',  cat:'flor',       img:I+'cerezo-flor-doble.jpg',
    desc:'Ornamental de gran valor estético. Florece abundantemente en primavera con flores dobles rosas o blancas. Excelente opción para jardines del sur.' },
  { nombre:'Cerezo de Flor',        cat:'flor',       img:I+'cerezo-flor.jpg',
    desc:'Árbol ornamental de floración espectacular. Copa elegante y follaje decorativo. Ideal para dar estructura visual a jardines.' },
  { nombre:'Manzano de Flor',       cat:'flor',       img:I+'manzano-flor.jpg',
    desc:'Variedad ornamental con floración rosada abundante. Frutos pequeños decorativos que persisten en otoño. Muy resistente al clima sureño.' },
  { nombre:'Almendro',              cat:'flor',       img:I+'almendro.jpg',
    desc:'Árbol de floración temprana espectacular. Flores rosadas anuncian el fin del invierno. Requiere buen drenaje, ideal para zonas soleadas.' },

  // ── 7. Plantas Acuáticas ──────────────────────────────────
  { nombre:'Lirio de Agua',         cat:'acuaticas',  img:I+'lirio-agua.jpg',
    desc:'Planta acuática de flores blancas elegantes. Ideal para estanques y humedales ornamentales. Fácil de mantener en aguas quietas.' },
  { nombre:'Flor de Loto',          cat:'acuaticas',  img:I+'flor-loto.jpg',
    desc:'Planta acuática con flores grandes y hojas flotantes. Símbolo de belleza y pureza. Aporta un toque exótico a estanques y jardines de agua.' },

  // ── 8. Cítricos ───────────────────────────────────────────
  { nombre:'Limones',               cat:'citricos',   img:I+'limones.jpg',
    desc:'Variedades adaptadas a microclimas del sur. Requieren ubicación protegida de heladas. Producción continua con buen manejo estacional.' },
  { nombre:'Limón Variegado',       cat:'citricos',   img:I+'limon-variegado.jpg',
    desc:'Variedad ornamental con hojas jaspeadas blanco-verde y frutos rayados. Decorativo y productivo, ideal para patios protegidos.' },
  { nombre:'Limequat',              cat:'citricos',   img:I+'limequat.jpg',
    desc:'Híbrido entre limón y kumquat. Fruto pequeño, muy ácido y aromático. Árbol compacto, resistente al frío, ideal para macetas.' },
  { nombre:'Kumquat',               cat:'citricos',   img:I+'kumquat.jpg',
    desc:'Cítrico miniatura de cáscara dulce y pulpa ácida. Se come entero. Árbol ornamental compacto, muy productivo y resistente al frío.' },
  { nombre:'Pomelo',                cat:'citricos',   img:I+'pomelo.jpg',
    desc:'Cítrico de fruto grande y pulpa rosada o amarilla. Sabor entre dulce y amargo característico. Requiere microclima protegido.' },

  // ── 9. Ornamentales ───────────────────────────────────────
  { nombre:'Azaleas',               cat:'ornamentales', img:I+'azalea.jpg',
    desc:'Arbusto de floración espectacular en primavera. Colores vibrantes rosa, rojo, blanco o lila. Prefiere sombra parcial y suelo ácido.' },
  { nombre:'Rododendros',           cat:'ornamentales', img:I+'rododendro.jpg',
    desc:'Arbusto robusto de grandes flores en racimos. Muy decorativo. Prospera en climas húmedos con suelos ácidos, perfecto para el sur.' },
  { nombre:'Camelias',              cat:'ornamentales', img:I+'camelia.jpg',
    desc:'Arbusto de follaje perenne y flores elegantes en invierno-primavera. Clásico de los jardines del sur. Longevo y de bajo mantenimiento.' },
  { nombre:'Erikas',                cat:'ornamentales', img:I+'erika.jpg',
    desc:'Arbusto compacto de floración prolongada. Pequeñas flores rosadas o blancas. Ideal para borduras, rocallas y cubresuelos.' },
  { nombre:'Lavandas',              cat:'ornamentales', img:I+'lavanda.jpg',
    desc:'Arbusto aromático de flores moradas. Atrae abejas y polinizadores. Muy resistente a la sequía, ideal para jardines de bajo riego.' },
  { nombre:'Pitosporum',            cat:'ornamentales', img:I+'pitosporum.jpg',
    desc:'Arbusto ornamental de follaje denso y brillante. Excelente para cercos vivos, setos y estructuras verdes durante todo el año.' },
  { nombre:'Helechos Paragua',      cat:'ornamentales', img:I+'helecho-paragua.jpg',
    desc:'Helecho nativo de gran porte con frondas elegantes en forma de paraguas. Perfecto para zonas sombrías y húmedas del jardín.' },
  { nombre:'Kiwi',                  cat:'ornamentales', img:I+'kiwi.jpg',
    desc:'Enredadera vigorosa de fruto exótico y nutritivo. Requiere tutor y polinizador macho. Muy productiva en el clima húmedo del sur.' },
  { nombre:'Olivo',                 cat:'ornamentales', img:I+'olivo.jpg',
    desc:'Árbol mediterráneo de larga vida. Variedades seleccionadas para climas del sur. Para producción de aceitunas y aceite artesanal.' },
  { nombre:'Sauco',                 cat:'ornamentales', img:I+'sauco.jpg',
    desc:'Arbusto nativo de múltiples usos: flores y frutos comestibles con propiedades medicinales. Muy rústico y de rápido crecimiento.' },

  // ── 10. Nativos ───────────────────────────────────────────
  { nombre:'Coihue',                cat:'nativos',    img:I+'coihue.jpg',
    desc:'Árbol nativo emblemático del bosque valdiviano. Copa amplia y follaje denso perenne. Ideal para grandes jardines y reforestación.' },
  { nombre:'Raulí',                 cat:'nativos',    img:I+'rauli.jpg',
    desc:'Árbol nativo caducifolio de madera apreciada. Follaje amarillo-rojizo en otoño. Crecimiento rápido y gran valor paisajístico.' },
  { nombre:'Roble',                 cat:'nativos',    img:I+'roble.jpg',
    desc:'Árbol nativo robusto y longevo. Madera de alta calidad, follaje caducifolio con hermosos colores otoñales. Emblema del sur chileno.' },
  { nombre:'Ulmo',                  cat:'nativos',    img:I+'ulmo.jpg',
    desc:'Árbol nativo de floración blanca espectacular en verano. Su miel de ulmo es famosa. Perfecto para jardines amplios y bosques.' },
  { nombre:'Notro',                 cat:'nativos',    img:I+'notro.jpg',
    desc:'Árbol nativo de flores rojas intensas, también llamado ciruelillo. Florece a fines de primavera. Atrae picaflores y abejas.' },
  { nombre:'Arrayán',               cat:'nativos',    img:I+'arrayan.jpg',
    desc:'Árbol nativo de corteza canela característica. Follaje perenne verde oscuro. Símbolo del bosque valdiviano, muy ornamental.' },
];

const CATEGORIAS = [
  { id:'todos',        label:'Todos' },
  { id:'cerezas',      label:'Cerezas' },
  { id:'manzanos',     label:'Manzanos, Perales y Membrillos' },
  { id:'ciruelas',     label:'Ciruelos y Duraznos' },
  { id:'berries',      label:'Frutales Menores' },
  { id:'secos',        label:'Frutos Secos' },
  { id:'flor',         label:'Frutales de Flor' },
  { id:'acuaticas',    label:'Plantas Acuáticas' },
  { id:'citricos',     label:'Cítricos' },
  { id:'ornamentales', label:'Ornamentales' },
  { id:'nativos',      label:'Nativos' },
];

let catActiva = 'todos', busqueda = '';

function renderTabs() {
  const c = document.getElementById('category-tabs');
  if (!c) return;
  c.innerHTML = CATEGORIAS.map(cat =>
    `<button class="tab-btn${cat.id===catActiva?' active':''}" data-cat="${cat.id}">${cat.label}</button>`
  ).join('');
  c.querySelectorAll('.tab-btn').forEach(btn =>
    btn.addEventListener('click', () => { catActiva = btn.dataset.cat; renderTabs(); renderProductos(); })
  );
}

function renderProductos() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const q = busqueda.toLowerCase().trim();
  const lista = PRODUCTOS.filter(p =>
    (catActiva==='todos' || p.cat===catActiva) &&
    (!q || p.nombre.toLowerCase().includes(q) || (p.desc||'').toLowerCase().includes(q))
  );
  if (!lista.length) {
    grid.innerHTML = '<div class="no-results"><p>No se encontraron productos.</p></div>';
    return;
  }
  grid.innerHTML = lista.map((p,i) => {
    const catLabel = (CATEGORIAS.find(c => c.id === p.cat) || {}).label || '';
    return `
    <article class="product-card" style="transition-delay:${(i%12)*35}ms">
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy" onerror="this.parentElement.style.background='var(--crema-oscura)'">
        <span class="product-card-cat">${catLabel}</span>
      </div>
      <div class="product-card-body">
        <h3>${p.nombre}</h3>
        ${p.desc ? `<p>${p.desc}</p>` : ''}
      </div>
    </article>
  `;}).join('');
  requestAnimationFrame(() =>
    grid.querySelectorAll('.product-card').forEach((c,i) => setTimeout(()=>c.classList.add('visible'), i*35))
  );
}

document.addEventListener('DOMContentLoaded', () => {
  renderTabs(); renderProductos();
  const s = document.getElementById('search-input');
  if (s) s.addEventListener('input', e => { busqueda = e.target.value; renderProductos(); });
});
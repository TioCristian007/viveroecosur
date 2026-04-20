// ─── PRODUCTOS ────────────────────────────────────────────────
// Todas las imágenes viven en assets/img/, sin dependencias externas.

const I = 'assets/img/';

const PRODUCTOS = [

  // ── 1. Cerezas ────────────────────────────────────────────
  { nombre:'Cereza Blanca',            cat:'cerezas',      img: I+'cereza-blanca.jpg' },
  { nombre:'Cereza Kordia',            cat:'cerezas',      img: I+'cereza-kordia.jpg' },
  { nombre:'Cereza Lambert',           cat:'cerezas',      img: I+'cereza-lambert.jpg' },
  { nombre:'Cereza Lapins',            cat:'cerezas',      img: I+'cereza-lapins.jpg' },
  { nombre:'Cereza Regina',            cat:'cerezas',      img: I+'cereza-regina.jpg' },
  { nombre:'Cereza Reiner',            cat:'cerezas',      img: I+'cereza-reiner.jpg' },
  { nombre:'Corazón de Paloma',        cat:'cerezas',      img: I+'cereza-corazon-paloma.jpg' },
  { nombre:'Guinda Ácida Roja',        cat:'cerezas',      img: I+'guinda-acida.jpg' },

  // ── 2. Manzanos, Perales, Membrillos, Higuera ──────────────
  { nombre:'Manzana Cabeza de Niño',   cat:'manzanos',     img: I+'manzana-cabeza-nino.jpg' },
  { nombre:'Manzana del Paraíso',      cat:'manzanos',     img: I+'manzana-paraiso.jpg' },
  { nombre:'Manzana Fierro',           cat:'manzanos',     img: I+'manzana-fierro.jpg' },
  { nombre:'Manzana Gravenstein',      cat:'manzanos',     img: I+'manzana-gravenstein.jpg' },
  { nombre:'Manzana Limona',           cat:'manzanos',     img: I+'manzana-limona.jpg' },
  { nombre:'Manzana Plátano',          cat:'manzanos',     img: I+'manzana-platano.jpg' },
  { nombre:'Manzana Reineta',          cat:'manzanos',     img: I+'manzana-reineta.jpg' },
  { nombre:'Manzano Jonagold',         cat:'manzanos',     img: I+'manzana-jonagold.jpg' },
  { nombre:'Peral Packams',            cat:'manzanos',     img: I+'pera-packams.jpg' },
  { nombre:'Peral Asiático',           cat:'manzanos',     img: I+'pera-asiatica.jpg' },
  { nombre:'Peral Winter Nelli',       cat:'manzanos',     img: I+'pera-winter-nelli.jpg' },
  { nombre:'Membrillo Lúcuma',         cat:'manzanos',     img: I+'membrillo.jpg' },
  { nombre:'Higuera',                  cat:'manzanos',     img: I+'higuera.jpg' },
  { nombre:'Parra',                    cat:'manzanos',     img: I+'parra.jpg' },

  // ── 3. Ciruelos y Duraznos ────────────────────────────────
  { nombre:'Ciruela Angelina',         cat:'ciruelas',     img: I+'ciruela-angelina.jpg' },
  { nombre:"Ciruela D'Agen",           cat:'ciruelas',     img: I+'ciruela-dagen.jpg' },
  { nombre:'Ciruelo Santa Rosa',       cat:'ciruelas',     img: I+'ciruela-santa-rosa.jpg' },
  { nombre:'Ciruelo Reina Claudia',    cat:'ciruelas',     img: I+'ciruela-reina-claudia.jpg' },
  { nombre:'Durazno Beterraga',        cat:'ciruelas',     img: I+'durazno-beterraga.jpg' },
  { nombre:'Durazno Carson',           cat:'ciruelas',     img: I+'durazno-carson.jpg' },
  { nombre:'Durazno Plátano',          cat:'ciruelas',     img: I+'durazno-platano.jpg' },
  { nombre:'Damasco',                  cat:'ciruelas',     img: I+'damasco.jpg' },

  // ── 4. Frutales Menores ───────────────────────────────────
  { nombre:'Arándanos',                cat:'berries',      img: I+'arandanos.jpg' },
  { nombre:'Frambuesas',               cat:'berries',      img: I+'frambuesas.jpg' },
  { nombre:'Frutillas',                cat:'berries',      img: I+'frutillas.jpg' },
  { nombre:'Grosellas',                cat:'berries',      img: I+'grosellas.jpg' },
  { nombre:'Zarzaparrilla',            cat:'berries',      img: I+'zarzaparrilla.jpg' },
  { nombre:'Murta',                    cat:'berries',      img: I+'murta.jpg' },
  { nombre:'Ruibarbo',                 cat:'berries',      img: I+'ruibarbo.jpg' },

  // ── 5. Frutos Secos ───────────────────────────────────────
  { nombre:'Nogal',                    cat:'secos',        img: I+'nogal.jpg' },
  { nombre:'Nogal Chandler',           cat:'secos',        img: I+'nogal-chandler.jpg' },
  { nombre:'Castaño Marrón',           cat:'secos',        img: I+'castano-marron.jpg' },
  { nombre:'Avellano Europeo',         cat:'secos',        img: I+'avellano-europeo.jpg' },

  // ── 6. Frutales de Flor ───────────────────────────────────
  { nombre:'Cerezo de Flor Doble',     cat:'flor',         img: I+'cerezo-flor-doble.jpg' },
  { nombre:'Cerezo de Flor',           cat:'flor',         img: I+'cerezo-flor.jpg' },
  { nombre:'Manzano de Flor',          cat:'flor',         img: I+'manzano-flor.jpg' },
  { nombre:'Almendro',                 cat:'flor',         img: I+'almendro.jpg' },

  // ── 7. Plantas Acuáticas ──────────────────────────────────
  { nombre:'Lirio de Agua',            cat:'acuaticas',    img: I+'lirio-agua.jpg' },
  { nombre:'Flor de Loto',             cat:'acuaticas',    img: I+'flor-loto.jpg' },

  // ── 8. Cítricos ───────────────────────────────────────────
  { nombre:'Limones',                  cat:'citricos',     img: I+'limones.jpg' },
  { nombre:'Limón Variegado',          cat:'citricos',     img: I+'limon-variegado.jpg' },
  { nombre:'Limequat',                 cat:'citricos',     img: I+'limequat.jpg' },
  { nombre:'Kumquat',                  cat:'citricos',     img: I+'kumquat.jpg' },
  { nombre:'Pomelo',                   cat:'citricos',     img: I+'pomelo.jpg' },

  // ── 9. Ornamentales ───────────────────────────────────────
  { nombre:'Azaleas',                  cat:'ornamentales', img: I+'azalea.jpg' },
  { nombre:'Rododendros',              cat:'ornamentales', img: I+'rododendro.jpg' },
  { nombre:'Camelias',                 cat:'ornamentales', img: I+'camelia.jpg' },
  { nombre:'Erikas',                   cat:'ornamentales', img: I+'erika.jpg' },
  { nombre:'Lavandas',                 cat:'ornamentales', img: I+'lavanda.jpg' },
  { nombre:'Pitosporum',               cat:'ornamentales', img: I+'pitosporum.jpg' },
  { nombre:'Helechos Paragua',         cat:'ornamentales', img: I+'helecho-paragua.jpg' },
  { nombre:'Kiwi',                     cat:'ornamentales', img: I+'kiwi.jpg' },
  { nombre:'Olivo',                    cat:'ornamentales', img: I+'olivo.jpg' },
  { nombre:'Sauco',                    cat:'ornamentales', img: I+'sauco.jpg' },

  // ── 10. Nativos ───────────────────────────────────────────
  { nombre:'Coihue',                   cat:'nativos',      img: I+'coihue.jpg' },
  { nombre:'Raulí',                    cat:'nativos',      img: I+'rauli.jpg' },
  { nombre:'Roble',                    cat:'nativos',      img: I+'roble.jpg' },
  { nombre:'Ulmo',                     cat:'nativos',      img: I+'ulmo.jpg' },
  { nombre:'Notro',                    cat:'nativos',      img: I+'notro.jpg' },
  { nombre:'Arrayán',                  cat:'nativos',      img: I+'arrayan.jpg' },
];

// ─── Categorías ───────────────────────────────────────────
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
    (!q || p.nombre.toLowerCase().includes(q))
  );
  if (!lista.length) {
    grid.innerHTML = '<div class="no-results"><p>No se encontraron productos.</p></div>';
    return;
  }
  grid.innerHTML = lista.map((p,i) => `
    <article class="product-card" style="transition-delay:${(i%12)*35}ms">
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy" onerror="this.parentElement.style.background='var(--crema-oscura)'">
      </div>
      <div class="product-card-body"><h3>${p.nombre}</h3></div>
    </article>
  `).join('');
  requestAnimationFrame(() =>
    grid.querySelectorAll('.product-card').forEach((c,i) => setTimeout(()=>c.classList.add('visible'), i*35))
  );
}

document.addEventListener('DOMContentLoaded', () => {
  renderTabs(); renderProductos();
  const s = document.getElementById('search-input');
  if (s) s.addEventListener('input', e => { busqueda = e.target.value; renderProductos(); });
});
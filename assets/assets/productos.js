// ─── Producto data ─────────────────────────────────────
const PRODUCTOS = [
  // Cerezas y Guindas
  { id:1,  nombre:"Cereza Blanca",             categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/cereza-blanca.jpg",       desc:"Variedad de pulpa clara y sabor suave, muy apreciada en fresco. Excelente adaptación al clima húmedo del sur, con cosecha en diciembre-enero." },
  { id:2,  nombre:"Cereza Kordia",             categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/kordia.jpg",              desc:"Cereza tardía de fruto firme y color rojo intenso. Alta resistencia al rajado por lluvia, perfecta para las condiciones del sur. Cosecha en enero." },
  { id:3,  nombre:"Cereza Lambert",            categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/cereza-lambert.jpg",      desc:"Variedad clásica de gran tamaño y color oscuro profundo. Muy apreciada en el mercado local con buena producción en suelos de Los Lagos." },
  { id:4,  nombre:"Cereza Lapins",             categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/lapins.png",             desc:"Autofértil: no necesita polinizador. Fruto grande, dulce y de maduración tardía. Especialmente recomendada para huertos pequeños o familiares." },
  { id:5,  nombre:"Cereza Regina",             categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/cereza-regina.jpg",      desc:"Variedad premium de maduración muy tardía. Fruto firme, muy dulce y con escasa caída. Ideal para consumo fresco y venta directa." },
  { id:6,  nombre:"Cerezo de Flor Doble",      categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/cerezo-flor.jpg",       desc:"Ornamental de gran valor estético. Florece abundantemente en primavera con flores dobles rosas o blancas. Excelente opción para jardines del sur." },
  { id:7,  nombre:"Corazón de Paloma",         categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/cereza-corazon-paloma.jpg", desc:"Variedad tradicional de forma característica, pulpa tierna y sabor dulce. Bien adaptada al clima y suelos del sur de Chile." },
  { id:8,  nombre:"Guinda Ácida Roja",         categoria:"cerezas",  cat_label:"Cerezas y Guindas",              img:"https://viveroecosur.cl/wp-content/uploads/2017/03/guinda-acida.jpg",      desc:"Sabor ácido intenso, ideal para conservas, mermeladas y jugos artesanales. Árbol rústico y muy productivo en climas fríos y húmedos." },
  // Manzanos
  { id:9,  nombre:"Manzana Cabeza de Niño",    categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/manzana-nino.jpg",      desc:"Variedad local de gran tamaño y sabor dulce. Muy típica del sur, excelente para consumo fresco, jugo natural y elaboración de chicha." },
  { id:10, nombre:"Manzana del Paraíso",       categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/manzanos-b.jpg",       desc:"Portainjerto enano utilizado como pie para otros manzanos. Permite obtener árboles de menor porte con producción más precoz y manejable." },
  { id:11, nombre:"Manzana Fierro",            categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/manzana-fierro.jpg",   desc:"Variedad tradicional chilena de larga conservación post cosecha. Fruto firme, sabor equilibrado. Muy rústica y perfectamente adaptada al sur." },
  { id:12, nombre:"Manzana Gravenstein",       categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/GRAVENSTEIN.jpg",     desc:"Una de las variedades más antiguas y apreciadas. Cosecha temprana con sabor aromático intenso. Excelente para jugo fresco y consumo directo." },
  { id:13, nombre:"Manzana Limona",            categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/LIMONA.png",          desc:"Fruto amarillo-verdoso de sabor suave y ligeramente ácido. Variedad tradicional del sur, muy usada en sidra artesanal y consumo familiar." },
  { id:14, nombre:"Manzana Plátano",           categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/manzana-platano.png", desc:"Fruto alargado y amarillo característico. Sabor dulce y maduración tardía. Muy resistente y de alta productividad en condiciones del sur." },
  { id:15, nombre:"Manzana Reineta",           categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/manzana-reineta-1-copia-1.jpg", desc:"Variedad europea de excelente calidad y sabor complejo. Aromática e ideal para repostería. Se adapta muy bien a la Región de Los Lagos." },
  { id:16, nombre:"Manzano Braeburn",          categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/Braeburn.png",        desc:"Origen neozelandés, fruto bicolor rojo-amarillo. Sabor dulce-ácido muy equilibrado con excelente conservación en post cosecha." },
  { id:17, nombre:"Manzano Jonagold",          categoria:"manzanos", cat_label:"Manzanos",                       img:"https://viveroecosur.cl/wp-content/uploads/2017/03/Jonagold.png",       desc:"Híbrido de Golden y Jonathan. Fruto grande de color amarillo-anaranjado con sabor excepcional. Alta productividad en el sur." },
  // Ciruelas, Duraznos y Damascos
  { id:18, nombre:"Ciruela Angelina",          categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2017/03/ciruela-angelino.png", desc:"Fruto grande de color rojo intenso y pulpa amarilla dulce y firme. Maduración tardía, bien adaptada a las condiciones del sur." },
  { id:19, nombre:"Ciruela D'Agen",            categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2017/03/ciruela-dagen.jpg",  desc:"Variedad francesa clásica para secado. Pulpa azul-negra, muy dulce y productiva. La base de la tradicional ciruela pasa artesanal." },
  { id:20, nombre:"Ciruela Dagen",             categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2020/11/ciruela-dagen.jpg", desc:"Adaptación local de excelente desempeño. Ideal para mermeladas, conservas caseras y consumo fresco. Muy productiva en el sur." },
  { id:21, nombre:"Durazno Beterraga",         categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2020/10/durazno-beterraga.jpg", desc:"Fruto de pulpa roja llamativa y sabor dulce intenso. Muy decorativo y diferenciador. Poco común, agrega valor real a cualquier huerto." },
  { id:22, nombre:"Durazno Carson",            categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2020/10/durazno-Carson.jpg", desc:"Variedad de media estación con fruto grande y jugoso. Muy productivo en el sur con manejo adecuado. Sabor equilibrado y atractivo." },
  { id:23, nombre:"Durazno Plátano",           categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2020/11/durazno-platano.jpg", desc:"Fruto alargado y característico con pulpa blanca de sabor suave y dulce. Variedad tradicional muy apreciada en el sur de Chile." },
  { id:24, nombre:"Damasco",                   categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2020/10/Damasco.jpg",        desc:"Albaricoque adaptado al clima sureño. Fruto aromático, ideal para consumo fresco, mermeladas artesanales y deshidratado." },
  { id:25, nombre:"Pera Packard",              categoria:"ciruelas", cat_label:"Ciruelas y Duraznos",             img:"https://viveroecosur.cl/wp-content/uploads/2017/03/pera-packard.jpg",  desc:"Variedad de origen americano de fruto grande y jugoso. Excelente calidad de pera con buena adaptación a los suelos del sur." },
  // Berries
  { id:26, nombre:"Arándanos",                 categoria:"berries",  cat_label:"Berries",                         img:"https://viveroecosur.cl/wp-content/uploads/2017/03/arandano.jpg",       desc:"Multivariedad. Fruto antioxidante de alta demanda y valor nutricional. Se adapta perfectamente a los suelos ácidos del sur. Cosecha en verano." },
  { id:27, nombre:"Frambuesas",                categoria:"berries",  cat_label:"Berries",                         img:"https://viveroecosur.cl/wp-content/uploads/2017/03/frambuesa.jpg",      desc:"Fruto delicado y aromático. Ideal para consumo fresco, mermeladas y repostería. Muy productivo en el clima templado-húmedo del sur." },
  { id:28, nombre:"Frutillas",                 categoria:"berries",  cat_label:"Berries",                         img:"https://viveroecosur.cl/wp-content/uploads/2017/03/frutillas.jpg",      desc:"Variedad seleccionada para el sur. Fruto dulce y aromático con producción abundante durante toda la primavera y verano." },
  { id:29, nombre:"Grosellas",                 categoria:"berries",  cat_label:"Berries",                         img:"https://viveroecosur.cl/wp-content/uploads/2020/11/grosellas.jpg",     desc:"Arbusto rústico de bayas ácidas y nutritivas. Excelente para mermeladas y jugos. Alta tolerancia al frío y humedad del sur." },
  { id:30, nombre:"Maqui",                     categoria:"berries",  cat_label:"Berries",                         img:"https://viveroecosur.cl/wp-content/uploads/2017/03/maqui.jpg",         desc:"Especie nativa chilena con frutos morados ricos en antioxidantes. Rústico y de bajo manejo. Gran valor nutricional y cultural para el sur." },
  { id:31, nombre:"Zarzaparrilla",             categoria:"berries",  cat_label:"Berries",                         img:"https://viveroecosur.cl/wp-content/uploads/2020/11/zarzaparrilla.jpg", desc:"Arbusto nativo de bayas negras con propiedades medicinales reconocidas. Muy resistente y fácil de cultivar en el sur de Chile." },
  // Frutos Secos
  { id:32, nombre:"Almendro",                  categoria:"secos",    cat_label:"Frutos Secos",                    img:"https://viveroecosur.cl/wp-content/uploads/2020/10/almendro.jpg",       desc:"Árbol de floración temprana y fruto seco de alto valor. Requiere buen drenaje. Variedades seleccionadas para adaptarse al sur." },
  { id:33, nombre:"Avellano Europeo",          categoria:"secos",    cat_label:"Frutos Secos",                    img:"https://viveroecosur.cl/wp-content/uploads/2020/10/avellano-europeo.jpg", desc:"Arbusto productivo de fruto seco muy apreciado. Se adapta bien al clima frío-húmedo de la Décima Región. Alta demanda local." },
  { id:34, nombre:"Nogal",                     categoria:"secos",    cat_label:"Frutos Secos",                    img:"https://viveroecosur.cl/wp-content/uploads/2020/11/nogal-500x325.jpg", desc:"Árbol de larga vida y gran producción. Nuez de excelente calidad y alta demanda en el mercado local. Perfectamente adaptado al sur." },
  // Cítricos
  { id:35, nombre:"Limones",                   categoria:"citricos", cat_label:"Cítricos",                        img:"https://viveroecosur.cl/wp-content/uploads/2020/11/Limones.jpg",        desc:"Variedades adaptadas a microclimas del sur. Requieren ubicación protegida de heladas. Producción continua con buen manejo estacional." },
  { id:36, nombre:"Mandarinas",                categoria:"citricos", cat_label:"Cítricos",                        img:"https://viveroecosur.cl/wp-content/uploads/2020/11/mandarinos.jpg",     desc:"Variedades seleccionadas para climas templados. Fruto dulce y fácil de pelar. Ideal para huertos familiares en zonas protegidas del sur." },
  { id:37, nombre:"Naranjos",                  categoria:"citricos", cat_label:"Cítricos",                        img:"https://viveroecosur.cl/wp-content/uploads/2020/11/naranjos.jpg",      desc:"Adaptable a zonas con microclima favorable en el sur. Requiere protección de heladas. Excelente calidad de fruto cuando tiene el manejo adecuado." },
  // Otros
  { id:38, nombre:"Kiwi",                      categoria:"otros",    cat_label:"Ornamentales y Otros",            img:"https://viveroecosur.cl/wp-content/uploads/2020/11/kiwi.jpg",          desc:"Enredadera vigorosa de fruto exótico y nutritivo. Requiere tutor y polinizador macho. Muy productiva en el clima húmedo del sur." },
  { id:39, nombre:"Olivo",                     categoria:"otros",    cat_label:"Ornamentales y Otros",            img:"https://viveroecosur.cl/wp-content/uploads/2020/11/olivo.jpg",         desc:"Árbol mediterráneo de larga vida. Variedades seleccionadas para climas del sur. Para producción de aceitunas y aceite artesanal." },
  { id:40, nombre:"Membrillo Lúcuma",          categoria:"otros",    cat_label:"Ornamentales y Otros",            img:"https://viveroecosur.cl/wp-content/uploads/2017/03/membrillo.jpg",     desc:"Fruto aromático de sabor intenso, ideal para dulces y mermeladas artesanales. Árbol rústico, resistente y de bajo manejo." },
  { id:41, nombre:"Sauco",                     categoria:"otros",    cat_label:"Ornamentales y Otros",            img:"https://viveroecosur.cl/wp-content/uploads/2017/03/sauco.jpg",         desc:"Arbusto nativo de múltiples usos: flores y frutos comestibles con propiedades medicinales. Muy rústico y de rápido crecimiento." },
  { id:42, nombre:"Helechos",                  categoria:"otros",    cat_label:"Ornamentales y Otros",            img:"https://viveroecosur.cl/wp-content/uploads/2020/11/helechos.jpg",      desc:"Plantas ornamentales ideales para zonas húmedas y sombreadas. Aportan textura y verde durante todo el año en jardines del sur." },
  { id:43, nombre:"Lirios de Agua y Nenúfares",categoria:"otros",    cat_label:"Ornamentales y Otros",            img:"https://viveroecosur.cl/wp-content/uploads/2020/11/Lirios-de-agua-y-nenufares-flor-de-loto-500x667.jpg", desc:"Plantas acuáticas ornamentales de gran belleza. Ideales para estanques y jardines con agua. Floración llamativa en primavera-verano." },
];

// ─── Category config ────────────────────────────────────
const CATEGORIAS = [
  { id:"todos",    label:"Todos"                  },
  { id:"cerezas",  label:"Cerezas y Guindas"      },
  { id:"manzanos", label:"Manzanos"               },
  { id:"ciruelas", label:"Ciruelas y Duraznos"    },
  { id:"berries",  label:"Berries"                },
  { id:"secos",    label:"Frutos Secos"           },
  { id:"citricos", label:"Cítricos"               },
  { id:"otros",    label:"Ornamentales y Otros"   },
];

// ─── State ──────────────────────────────────────────────
let catActiva = "todos";
let busqueda   = "";

// ─── Render ─────────────────────────────────────────────
function renderTabs() {
  const container = document.getElementById("category-tabs");
  if (!container) return;
  container.innerHTML = CATEGORIAS.map(c => `
    <button
      class="tab-btn${c.id === catActiva ? " active" : ""}"
      data-cat="${c.id}"
      aria-pressed="${c.id === catActiva}"
    >${c.label}</button>
  `).join("");

  container.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      catActiva = btn.dataset.cat;
      renderTabs();
      renderProductos();
    });
  });
}

function renderProductos() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  const q = busqueda.toLowerCase().trim();

  const filtrados = PRODUCTOS.filter(p => {
    const matchCat = catActiva === "todos" || p.categoria === catActiva;
    const matchQ   = !q || p.nombre.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  if (filtrados.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <p>No se encontraron productos para "<strong>${busqueda || catActiva}</strong>".</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtrados.map((p, i) => `
    <article class="product-card" style="transition-delay:${(i % 12) * 40}ms">
      <div class="product-card-img">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy" onerror="this.style.opacity='0'">
        <span class="product-card-cat">${p.cat_label}</span>
      </div>
      <div class="product-card-body">
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
      </div>
    </article>
  `).join("");

  // stagger animation
  requestAnimationFrame(() => {
    grid.querySelectorAll(".product-card").forEach((card, i) => {
      setTimeout(() => card.classList.add("visible"), i * 40);
    });
  });
}

// ─── Init ────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderTabs();
  renderProductos();

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      busqueda = e.target.value;
      renderProductos();
    });
  }
});
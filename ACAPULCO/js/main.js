// Importamos los datos
import { platillos, mapPlaces } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // --- NAVBAR SCROLL ---
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 80);
  });

  // --- GALLERY FILTERS ---
  const filterBtns = document.querySelectorAll('.gallery-filter');
  const galleryCards = document.querySelectorAll('.gallery-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.textContent.trim();

      galleryCards.forEach(card => {
        const cardCategory = card.querySelector('.g-badge').textContent.trim();
        if (filterValue === 'Todos' || cardCategory === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // MAPA ORIGINAL (TURISMO - Siempre visible)
  // ==========================================
  let activeMap = 0;
  const mapList = document.getElementById('mapList');
  const mapFrame = document.getElementById('mapFrame');

  function initMap() {
    mapList.innerHTML = mapPlaces.map((p, i) => `
      <div class="map-item ${i === activeMap ? 'active' : ''}" data-index="${i}">
        <div class="map-item-icon">${p.icon}</div>
        <div class="map-item-info"><h4>${p.label}</h4><p>${p.sub}</p></div>
      </div>
    `).join('');

    document.querySelectorAll('#mapList .map-item').forEach(item => {
      item.addEventListener('click', (e) => {
        activeMap = parseInt(e.currentTarget.getAttribute('data-index'));
        initMap(); // Volvemos a renderizar para marcar el activo
      });
    });

    if(mapPlaces[activeMap]) {
        mapFrame.src = mapPlaces[activeMap].url;
    }
  }

// ==========================================
  // MAPA NUEVO (GASTRONOMÍA - Oculto por defecto)
  // ==========================================
  const gastroMapSection = document.getElementById('mapa-gastronomia');
  const gastroMapTitle = document.getElementById('gastroMapTitle');
  const gastroMapList = document.getElementById('gastroMapList');
  const gastroMapFrame = document.getElementById('gastroMapFrame');
  const btnCerrarMapaGastro = document.getElementById('btnCerrarMapaGastro'); // Nuevo botón
  
  let activeGastroMap = 0;
  let currentGastroPlaces = [];

  // Función para cerrar el mapa y volver arriba
  if (btnCerrarMapaGastro) {
    btnCerrarMapaGastro.addEventListener('click', () => {
      // 1. Ocultar la sección del mapa
      gastroMapSection.style.display = 'none';
      // 2. Hacer scroll suave de regreso a la sección de comida
      document.getElementById('gastronomia').scrollIntoView({behavior: 'smooth'});
    });
  }

  function renderGastroMap() {
    gastroMapList.innerHTML = currentGastroPlaces.map((p, i) => `
      <div class="map-item ${i === activeGastroMap ? 'active' : ''}" data-index="${i}">
        <div class="map-item-icon">${p.icon}</div>
        <div class="map-item-info"><h4>${p.label}</h4><p>${p.sub}</p></div>
      </div>
    `).join('');

    document.querySelectorAll('#gastroMapList .map-item').forEach(item => {
      item.addEventListener('click', (e) => {
        activeGastroMap = parseInt(e.currentTarget.getAttribute('data-index'));
        renderGastroMap(); 
      });
    });

    if(currentGastroPlaces[activeGastroMap]) {
        gastroMapFrame.src = currentGastroPlaces[activeGastroMap].url;
    }
  }

  // ==========================================
  // LÓGICA DE LA SECCIÓN DE COMIDA
  // ==========================================
  let activeGastro = 0;
  const gastroList = document.getElementById('gastroList');
  const gastroDetail = document.getElementById('gastroDetail');

  function initGastronomy() {
    gastroList.innerHTML = platillos.map((p, i) => `
      <div class="gastro-item ${i === activeGastro ? 'active' : ''}" data-index="${i}">
        <div class="gastro-icon">${p.emoji}</div>
        <div class="gastro-info">
          <span class="gastro-name">${p.name}</span>
          <span class="gastro-cat ${p.catClass}">${p.cat}</span>
          <div class="gastro-sub-name">${p.sub}</div>
        </div>
        <span class="gastro-arrow">›</span>
      </div>
    `).join('');

    document.querySelectorAll('.gastro-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'));
        setGastro(index);
      });
    });

    updateGastroDetail();
  }

  function setGastro(index) {
    activeGastro = index;
    
    // Si cambian de platillo, ocultamos el mapa para mantener la interfaz limpia
    if(gastroMapSection) gastroMapSection.style.display = 'none'; 
    
    document.querySelectorAll('.gastro-item').forEach((item, i) => {
      item.classList.toggle('active', i === activeGastro);
    });
    updateGastroDetail();
  }

  function updateGastroDetail() {
    const p = platillos[activeGastro];
    gastroDetail.innerHTML = `
      <div class="gastro-detail-img ${p.bg}">
        <div style="position:relative;z-index:2;">
          ${p.tags.map(t => `<span class="gastro-tag" style="background:${t.bg};color:${t.color}">${t.label}</span>`).join('')}
        </div>
        <div class="gastro-detail-name" style="position:relative;z-index:2;margin-top:8px;">${p.name}</div>
      </div>
      <div class="gastro-detail-body">
        <p class="gastro-detail-desc">${p.desc}</p>
        <div class="gastro-ingredients">
          <h4>Ingredientes principales</h4>
          <div class="ingr-tags">${p.ingredients.map(i => `<span class="ingr-tag">${i}</span>`).join('')}</div>
        </div>
      </div>
      <div class="gastro-footer">
        <div class="gastro-price">Precio aproximado <span>Desde ${p.price}</span></div>
        <button class="btn-gold" id="btnDondeProbarlo" style="font-size:13px;padding:10px 20px;">📍 Dónde probarlo</button>
      </div>
    `;

    // Acción del botón "Dónde probarlo"
    document.getElementById('btnDondeProbarlo').addEventListener('click', () => {
      // Validamos si hay restaurantes disponibles en data.js
      if (!p.dondeProbarlo || p.dondeProbarlo.length === 0) {
        alert("Los lugares sugeridos para este platillo se agregarán próximamente. ¡Vuelve pronto!");
        return;
      }
      
      // Cargamos los datos al mapa nuevo
      currentGastroPlaces = p.dondeProbarlo;
      activeGastroMap = 0; 
      gastroMapTitle.innerHTML = `Dónde probar <span style="color:var(--gold)">${p.name}</span>`;
      
      // Mostramos la sección y la renderizamos
      gastroMapSection.style.display = 'block';
      renderGastroMap();
      
      // Deslizamos suavemente hacia el mapa
      gastroMapSection.scrollIntoView({behavior: 'smooth'});
    });
  }

  // --- CONTACT FORM LOGIC ---
  const contactFormBtn = document.getElementById('submitBtn');
  if (contactFormBtn) {
    contactFormBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const btn = e.currentTarget;
      btn.textContent = '✅ ¡Mensaje enviado!';
      btn.style.background = '#16a34a';
      setTimeout(() => {
        btn.innerHTML = '✈️ Enviar Mensaje';
        btn.style.background = '';
      }, 3000);
    });
  }

  const msgArea = document.getElementById('msgArea');
  const charCount = document.getElementById('charCount');
  if(msgArea) {
      msgArea.addEventListener('input', function() {
        charCount.textContent = this.value.length + '/500';
      });
  }

  // Inicializamos ambos componentes al arrancar
  initMap();
  initGastronomy();
});
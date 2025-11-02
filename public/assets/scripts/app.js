/* assets/scripts/app.js - Unificado (home, detalhes, admin) */
const BASE = "http://localhost:3000";
const ENDPOINTS = {
  consoles: `${BASE}/consoles`,
  jogos: `${BASE}/jogos`,
  noticias: `${BASE}/noticias`
};

let formMode = 'create'; // create | edit
let editEntity = null;
let editId = null;

function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;");
}
function formatContent(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

/* ---------- FETCH HELPERS ---------- */
async function safeFetchJson(url, opts) {
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error('Erro na requisição: ' + res.status);
  return res.json();
}

async function fetchAllEntities() {
  const [c, j, n] = await Promise.all([
    fetch(ENDPOINTS.consoles).then(r => r.ok ? r.json() : []),
    fetch(ENDPOINTS.jogos).then(r => r.ok ? r.json() : []),
    fetch(ENDPOINTS.noticias).then(r => r.ok ? r.json() : [])
  ]);
  return { consoles: c, jogos: j, noticias: n };
}

async function fetchEntityById(entity, id) {
  const res = await fetch(`${BASE}/${entity}/${id}`);
  if (!res.ok) throw new Error('Não encontrado');
  return res.json();
}

/* ---------- RENDER CARDS (HOME) ---------- */
function criarCard(item, entityName) {
  const buttonText = item.categoria === 'Console' ? 'Ver Console' :
    item.categoria === 'Jogo' ? 'Ver Jogo' : 'Ver Notícia';
  const detalheLink = `detalhes.html?id=${item.id}&type=${entityName}`;
  return `
    <div class="col">
      <div class="card h-100 text-light bg-dark border-warning">
        <a href="${detalheLink}" class="d-block">
          <img src="${item.imagem}" class="card-img-top" alt="${escapeHtml(item.titulo || item.nome || '')}" onerror="this.src='assets/img/placeholder.png'">
        </a>
        <div class="card-body bg-black">
          <a href="${detalheLink}" class="text-decoration-none">
            <h5 class="card-title text-warning">${escapeHtml(item.titulo || item.nome || '')}</h5>
          </a>
          <p class="card-text">${escapeHtml(item.descricao || '')}</p>
          <p class="text-muted small">${escapeHtml(item.categoria || '')} ${item.data ? '(' + escapeHtml(item.data) + ')' : ''}</p>
          <div class="d-flex gap-2">
            <a href="${detalheLink}" class="btn btn-sm btn-outline-warning">${buttonText}</a>
            <button class="btn btn-sm btn-outline-warning" onclick="startEdit('${entityName}', ${item.id})">Editar</button>
            <button class="btn btn-sm btn-outline-danger" onclick="excluirItem('${entityName}', ${item.id})">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

async function montarSecaoCardsUnificados() {
  const container = document.getElementById('cards-unificados');
  if (!container) return;
  const { consoles, jogos, noticias } = await fetchAllEntities();
  const todos = [
    ...consoles.map(i => ({...i, __entity: 'consoles'})),
    ...jogos.map(i => ({...i, __entity: 'jogos'})),
    ...noticias.map(i => ({...i, __entity: 'noticias'}))
  ];
  if (todos.length === 0) {
    container.innerHTML = '<p class="text-muted">Nenhum item encontrado.</p>';
    return;
  }
  let html = '';
  todos.forEach(item => html += criarCard(item, item.__entity));
  container.innerHTML = html;
}

/* ---------- CAROUSEL (DESTAQUE) ---------- */
async function montarCarouselJogosDestaque() {
  const container = document.getElementById('carousel-container');
  if (!container) return;
  const res = await fetch(ENDPOINTS.jogos);
  const jogos = res.ok ? await res.json() : [];
  const destaque = jogos.filter(j => j.destaque);
  if (destaque.length === 0) {
    container.innerHTML = '<p class="text-muted">Nenhum jogo em destaque no momento.</p>';
    return;
  }
  const indicators = destaque.map((j, i) => `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="${i===0 ? 'active' : ''}" aria-current="${i===0 ? 'true' : 'false'}" aria-label="Slide ${i+1}"></button>`).join('\n');
  const items = destaque.map((j, i) => `
    <div class="carousel-item ${i===0 ? 'active' : ''}">
      <a href="detalhes.html?id=${j.id}&type=jogos" class="d-block">
        <img src="${j.imagem}" class="d-block w-100 rounded" alt="${escapeHtml(j.titulo)}" style="max-height:420px; object-fit:cover;" onerror="this.src='assets/img/placeholder.png'">
        <div class="carousel-caption d-none d-md-block text-start" style="background: rgba(0,0,0,0.35); border-radius:6px; padding:10px;">
          <h5 class="text-warning mb-1">${escapeHtml(j.titulo)}</h5>
          <p class="small">${escapeHtml(j.descricao || '')}</p>
        </div>
      </a>
    </div>
  `).join('\n');
  container.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        ${indicators}
      </div>
      <div class="carousel-inner">
        ${items}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
}

/* ---------- DETALHES ---------- */
async function carregarDetalhesPagina() {
  const detalhesContainer = document.getElementById('detalhes-item');
  if (!detalhesContainer) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const type = params.get('type') || 'jogos';
  if (!id) {
    detalhesContainer.innerHTML = `<h2 class="text-warning text-center">ID não especificado</h2><p class="text-muted">Forneça o parâmetro <code>?id=</code> na URL.</p>`;
    return;
  }
  try {
    const item = await fetchEntityById(type, id);
    detalhesContainer.innerHTML = `
      <h1 class="text-warning mb-3">${escapeHtml(item.titulo || item.nome || '')}</h1>
      <p class="text-muted small"><span class="badge bg-warning text-dark">${escapeHtml(item.categoria || '')}</span></p>
      <div class="row g-4 align-items-start">
        <div class="col-12 col-md-5">
          <img src="${item.imagem}" alt="${escapeHtml(item.titulo || '')}" class="img-fluid rounded" onerror="this.src='assets/img/placeholder.png'">
        </div>
        <div class="col-12 col-md-7">
          <h3 class="text-warning">Resumo</h3>
          <p>${escapeHtml(item.descricao || '')}</p>
          <h4 class="text-warning">Sobre</h4>
          <p>${formatContent(item.conteudo || '')}</p>
          <p class="text-muted small">Publicado em: ${escapeHtml(item.data || '')}</p>
        </div>
      </div>
    `;
    document.title = `${item.titulo || item.nome} - Games Retrô`;
  } catch (e) {
    detalhesContainer.innerHTML = `<h2 class="text-danger text-center">Item não encontrado</h2><p class="text-muted">Erro ao carregar os dados: ${escapeHtml(String(e.message))}</p>`;
  }
}

/* ---------- CRUD: Create / Update / Delete (usado pelo formulário comum e admin) ---------- */
async function submitFormCommon(event, opts = {}) {
  event.preventDefault();
  // determine source fields (admin vs index)
  const isAdmin = document.body && document.body.id === 'admin-page';
  const entity = isAdmin ? document.getElementById('admin-entity').value : document.getElementById('form-entity').value;
  const titulo = (isAdmin ? document.getElementById('admin-titulo') : document.getElementById('form-titulo')).value.trim();
  const descricao = (isAdmin ? document.getElementById('admin-descricao') : document.getElementById('form-descricao')).value.trim();
  const data = (isAdmin ? document.getElementById('admin-data') : document.getElementById('form-data')).value.trim();
  const imagem = (isAdmin ? document.getElementById('admin-imagem') : document.getElementById('form-imagem')).value.trim();
  const categoria = (isAdmin ? document.getElementById('admin-categoria') : document.getElementById('form-categoria')).value.trim();
  const destaque = (isAdmin ? document.getElementById('admin-destaque') : document.getElementById('form-destaque')).checked;

  const payload = {
    titulo,
    descricao,
    conteudo: descricao,
    categoria: categoria || (entity==='jogos'?'Jogo':(entity==='consoles'?'Console':'Notícia')),
    data,
    imagem,
    destaque: !!destaque
  };

  try {
    if (formMode === 'create') {
      await safeFetchJson(ENDPOINTS[entity], {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
    } else if (formMode === 'edit') {
      await safeFetchJson(`${BASE}/${editEntity}/${editId}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      });
      formMode = 'create'; editEntity = null; editId = null;
      // reset admin/index buttons visibility
      if (isAdmin) {
        document.getElementById('admin-submit').textContent = 'Salvar';
        document.getElementById('admin-cancel').classList.add('d-none');
      } else {
        document.getElementById('form-submit').textContent = 'Adicionar';
        document.getElementById('form-cancel-edit').classList.add('d-none');
      }
    }

    // reset forms and re-render depending on page
    if (isAdmin) {
      document.getElementById('admin-form').reset();
      loadAdminTables();
    } else {
      document.getElementById('form-jogo').reset();
      montarSecaoCardsUnificados();
      montarCarouselJogosDestaque();
    }
  } catch (e) {
    alert('Erro no servidor: ' + e.message);
  }
}

function startEdit(entity, id) {
  fetchEntityById(entity, id).then(item => {
    formMode = 'edit';
    editEntity = entity;
    editId = id;
    if (document.body && document.body.id === 'admin-page') {
      document.getElementById('admin-entity').value = entity;
      document.getElementById('admin-titulo').value = item.titulo || item.nome || '';
      document.getElementById('admin-descricao').value = item.descricao || item.conteudo || '';
      document.getElementById('admin-data').value = item.data || '';
      document.getElementById('admin-imagem').value = item.imagem || '';
      document.getElementById('admin-categoria').value = item.categoria || '';
      document.getElementById('admin-destaque').checked = !!item.destaque;
      document.getElementById('admin-submit').textContent = 'Atualizar';
      document.getElementById('admin-cancel').classList.remove('d-none');
      document.getElementById('admin-form').scrollIntoView({behavior:'smooth', block:'center'});
    } else {
      document.getElementById('form-entity').value = entity;
      document.getElementById('form-titulo').value = item.titulo || item.nome || '';
      document.getElementById('form-descricao').value = item.descricao || item.conteudo || '';
      document.getElementById('form-data').value = item.data || '';
      document.getElementById('form-imagem').value = item.imagem || '';
      document.getElementById('form-categoria').value = item.categoria || '';
      document.getElementById('form-destaque').checked = !!item.destaque;
      document.getElementById('form-submit').textContent = 'Atualizar';
      document.getElementById('form-cancel-edit').classList.remove('d-none');
      document.getElementById('form-jogo').scrollIntoView({behavior:'smooth', block:'center'});
    }
  }).catch(e => alert('Erro ao carregar item para edição: '+ e.message));
}

function cancelarEdit() {
  formMode = 'create'; editEntity = null; editId = null;
  if (document.body && document.body.id === 'admin-page') {
    document.getElementById('admin-form').reset();
    document.getElementById('admin-submit').textContent = 'Salvar';
    document.getElementById('admin-cancel').classList.add('d-none');
  } else {
    document.getElementById('form-jogo').reset();
    document.getElementById('form-submit').textContent = 'Adicionar';
    document.getElementById('form-cancel-edit').classList.add('d-none');
  }
}

async function excluirItem(entity, id) {
  if (!confirm('Deseja realmente excluir este item?')) return;
  const res = await fetch(`${BASE}/${entity}/${id}`, { method: 'DELETE' });
  if (res.ok) {
    // re-render appropriate views
    if (document.body && document.body.id === 'admin-page') loadAdminTables();
    else { montarSecaoCardsUnificados(); montarCarouselJogosDestaque(); }
  } else {
    alert('Erro ao excluir item.');
  }
}

/* ---------- ADMIN: render tables ---------- */
function createTableHtml(items, entity) {
  if (!Array.isArray(items) || items.length === 0) return '<p class="text-muted">Nenhum registro.</p>';
  let html = '<table class="table table-dark table-striped align-middle">';
  html += '<thead><tr><th>ID</th><th>Título</th><th>Categoria</th><th>Data</th><th>Destaque</th><th class="text-end">Ações</th></tr></thead><tbody>';
  items.forEach(it => {
    html += `<tr>
      <td>${it.id}</td>
      <td>${escapeHtml(it.titulo || it.nome || '')}</td>
      <td>${escapeHtml(it.categoria || '')}</td>
      <td>${escapeHtml(it.data || '')}</td>
      <td>${it.destaque ? 'Sim' : '—'}</td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-warning me-2" onclick="startEdit('${entity}', ${it.id})">Editar</button>
        <button class="btn btn-sm btn-outline-danger" onclick="excluirItem('${entity}', ${it.id})">Excluir</button>
      </td>
    </tr>`;
  });
  html += '</tbody></table>';
  return html;
}

async function loadAdminTables() {
  const { consoles, jogos, noticias } = await fetchAllEntities();
  document.getElementById('table-consoles').innerHTML = createTableHtml(consoles, 'consoles');
  document.getElementById('table-jogos').innerHTML = createTableHtml(jogos, 'jogos');
  document.getElementById('table-noticias').innerHTML = createTableHtml(noticias, 'noticias');
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Home page
  if (document.body && document.body.id === 'home-page') {
  montarCarouselJogosDestaque();
  montarSecaoCardsUnificados();
}
  // Detalhes
  if (document.body && document.body.id === 'detalhes-page') {
    carregarDetalhesPagina();
  }
  // Admin
  if (document.body && document.body.id === 'admin-page') {
    loadAdminTables();
    const adminForm = document.getElementById('admin-form');
    if (adminForm) adminForm.addEventListener('submit', submitFormCommon);
    const btnCancel = document.getElementById('admin-cancel');
    if (btnCancel) btnCancel.addEventListener('click', cancelarEdit);
  }
});

const dados = [

  {
    id: 101,
    titulo: "Atari 2600 (1977)",
    descricao: "Um dos primeiros consoles domésticos que popularizou cartuchos.",
    conteudo: "O Atari 2600 revolucionou o mercado em 1977, popularizando o conceito de cartuchos intercambiáveis. Com gráficos simples, mas inovadores para a época, trouxe a experiência de arcade para a sala de estar. Jogos como *Space Invaders* e *Pitfall!* se tornaram clássicos instantâneos. Sua influência é inegável, estabelecendo as bases para toda a indústria moderna de videogames. ",
    categoria: "Console",
    data: "1977-09-11",
    imagem: "assets/img/atari2600/atari2600.jpg",
    fotos: [
      { id: 1, titulo: "atari primeira verção", imagem: "/assets/img/atari2600/atariprimeiraversao.png",},
      { id: 2, titulo: "controle atari", imagem: "/assets/img/atari2600/ataricontrole.jpg",},
      { id: 3, titulo: "jogo incluido no lançamento", imagem: "/assets/img/atari2600/jogolançamento.png",}
    ]
  },
  {
    id: 102,
    titulo: "Nintendo Entertainment System (NES) (1983)",
    descricao: "Console que revitalizou a indústria e introduziu grandes franquias.",
    conteudo: "O NES não apenas salvou a indústria após a crise de 1983, mas a redefiniu. Com um controle de qualidade rigoroso e títulos icônicos como *Super Mario Bros.* e *The Legend of Zelda*, ele introduziu a jogabilidade baseada em enredo e mecânicas mais complexas. Seu sucesso transformou a Nintendo em uma gigante global.",
    categoria: "Console",
    data: "1983-07-15",
    imagem: "assets/img/nes/nes.jpg",
    fotos: [
      { id: 1, titulo: "controle nes", imagem: "/assets/img/nes/controlenes.jpg",},
      { id: 2, titulo: "Nintendo Zapper", imagem: "/assets/img/nes/zappernes.jpg",},
      { id: 3, titulo: "Comparação de NES de diferentes regiões", imagem: "/assets/img/nes/comparaçaones.jpg",}
    ]
  },
{
    id: 103,
    titulo: "Sega Master System (1985)",
    descricao: "Lançado em 1985, o Sega Master System foi o principal concorrente do NES na era dos 8 bits.",
    conteudo: "O **Master System** foi a primeira grande aposta da Sega no mercado de consoles. Embora tenha tido mais sucesso na Europa e no Brasil do que na América do Norte, ele possuía gráficos tecnicamente superiores ao NES e introduziu personagens como *Alex Kidd*. Foi fundamental para iniciar a 'Guerra dos Consoles' com a Nintendo.",
    categoria: "Console",
    data: "1985-10-20",
    imagem: "assets/img/segams/Master-System.jpg",
    fotos: [
      { id: 1, titulo: "Controles do Master System.", imagem: "/assets/img/segams/controlems.jpg",},
      { id: 2, titulo: "Sega Light Phaser", imagem: "/assets/img/segams/lightphaserms.jpg",},
      { id: 3, titulo: "Sega óculos 3D e o adaptador de cartão", imagem: "/assets/img/segams/oculosms.jpg",}
    ]
  },
  {
    id: 104,
    titulo: "Sega Genesis (Mega Drive) (1988)",
    descricao: "Lançado em 1988, o Sega Genesis, conhecido como Mega Drive fora da América do Norte, foi um console de 16 bits que marcou a transição para gráficos mais avançados e jogabilidade mais complexa.",
    conteudo: "O **Mega Drive** marcou a transição para a era dos 16 bits. Sua campanha de marketing agressiva, focada na velocidade e no público adolescente, e a introdução de *Sonic the Hedgehog*, permitiram à Sega competir de igual para igual com o SNES. É lembrado por sua vasta biblioteca de jogos de arcade e RPGs.",
    categoria: "Console",
    data: "1988-10-29",
    imagem: "assets/img/segamd/Mega-Drive.jpg",
    fotos: [
      { id: 1, titulo: "Controlador Genesis de seis botões", imagem: "/assets/img/segamd/controlemd.jpg",},
      { id: 2, titulo: " Nomad, versão portátil do console.", imagem: "/assets/img/segamd/nomadmd.jpg", },
      { id: 3, titulo: "Modelo cartucho", imagem: "/assets/img/segamd/cartuchomd.jpg",}
    ]
  },
  {
    id: 105,
    titulo: "Super Nintendo (SNES) (1990)",
    descricao: "Console 16-bit conhecido por RPGs e plataformas inesquecíveis.",
    conteudo: "O **Mega Drive** marcou a transição para a era dos 16 bits. Sua campanha de marketing agressiva, focada na velocidade e no público adolescente, e a introdução de *Sonic the Hedgehog*, permitiram à Sega competir de igual para igual com o SNES. É lembrado por sua vasta biblioteca de jogos de arcade e RPGs.",
    categoria: "Console",
    data: "1990-11-21",
    imagem: "assets/img/snes/snes.jpg",
    fotos: [
      { id: 1, titulo: " Cartucho Super Game Boy", imagem: "/assets/img/snes/cartuchosnes.jpg",},
      { id: 2, titulo: "Controles da versão japonesa (acima) e americana (abaixo).", imagem: "/assets/img/snes/controlesnes.jpg",},
      { id: 3, titulo: "Super NES Mouse", imagem: "/assets/img/snes/snesmouse.jpg",}
    ]
  },

  // JOGOS 
  {
    id: 201,
    titulo: "Pong (1972)",
    descricao: "Um dos primeiros e mais simples jogos eletrônicos.",
    conteudo: "Pong é creditado como um dos primeiros jogos de arcade de sucesso comercial. Seu design extremamente simples (duas barras e uma bola) provou que o mercado de jogos eletrônicos era viável. Ele desencadeou a indústria de videogames e inspirou inúmeros jogos de esporte.",
    categoria: "Jogo",
    data: "1972-11-29",
    imagem: "assets/img/pong/pong.png",
    destaque: true,
    fotos: [
      { id: 1, titulo: "Máquina Pong", imagem: "/assets/img/pong/pongarcade.png",},
      { id: 2, titulo: "Versão do pong portatil", imagem: "/assets/img/pong/pongdomestico.png",},
      { id: 3, titulo: "Criador do Pong", imagem: "/assets/img/pong/criadorpong1.jpg", }
    ]
  },
  {
    id: 202,
    titulo: "Space Invaders (1978)",
    descricao: "Um clássico de 1978, Space Invaders coloca o jogador no comando de uma nave que deve atirar e destruir hordas de alienígenas.",
    conteudo: "Space Invaders** foi um fenômeno cultural global. É um dos primeiros jogos de tiro (shmup) e popularizou o conceito de pontuação alta. Sua demanda por moedas era tão alta que se diz ter causado uma escassez temporária de moedas de 100 ienes no Japão!",
    categoria: "Jogo",
    data: "1978-06-16",
    imagem: "assets/img/spinvaders/space-invaders.jpg",
    destaque: false,
    fotos: [
      { id: 1, titulo: "Arcade Space Invaders", imagem: "/assets/img/spinvaders/spacearcade.jpeg",},
      { id: 2, titulo: "Criador Space Invaders", imagem: "/assets/img/spinvaders/criadorspace.jpg", },
      { id: 3, titulo: "Capa do cartucho Space Invaders", imagem: "/assets/img/spinvaders/spacecartucho.jpeg",}
    ]
  },
  {
    id: 203,
    titulo: "Pac-Man (1980)",
    descricao: "Jogo de labirinto que virou ícone da cultura pop.",
    conteudo: "Pac-Man** (originalmente Puck Man) é um dos jogos de arcade mais vendidos e reconhecidos de todos os tempos. Sua jogabilidade de labirinto, focada em estratégia e evasão, e o apelo do personagem, o transformaram em um ícone pop que transcendeu o mundo dos games.",
    categoria: "Jogo",
    data: "1980-05-22",
    imagem: "assets/img/pacman/pac-man.jpg",
    destaque: true,
    fotos: [
      { id: 1, titulo: "Versão portatil Pac-Man", imagem: "/assets/img/pacman/pacmanportatil.jpg",},
      { id: 2, titulo: "Criador Pac-Man", imagem: "/assets/img/pacman/criadorpacman.jpg",},
      { id: 3, titulo: "Poster Primeiro arcade Pac-Man", imagem: "/assets/img/pacman/panfletopacman.png",}

    ]
  },
  {
    id: 204,
    titulo: "Tetris (1984)",
    descricao: "Quebra-cabeça viciante criado na União Soviética.",
    conteudo: "Tetris** é notável por ter sido criado por um engenheiro de software russo e por ser um dos jogos mais portados de todos os tempos. Sua popularidade explodiu globalmente com o lançamento do Nintendo Game Boy, provando que jogos simples e viciantes podem ser eternos. É um mestre em design de jogos pela sua simplicidade e profundidade.",
    categoria: "Jogo",
    data: "1984-06-06",
    imagem: "assets/img/tetris/tetris.jpg",
    destaque: false,
    fotos: [
      { id: 1, titulo: "Criador Tetris", imagem: "/assets/img/tetris/criadortetris.jpg",},
      { id: 2, titulo: "Game Boy Tetris", imagem: "/assets/img/tetris/tetrisgb.jpg",},
      { id: 3, titulo: "Imagem do jogo Tetris", imagem: "/assets/img/tetris/primeirotetris.png",}
    ]
  },
  {
    id: 205,
    titulo: "Super Mario Bros (1985)",
    descricao: "Lançado em 1985, Super Mario Bros é um jogo de plataforma onde o jogador controla Mario em sua missão para resgatar a Princesa Peach do vilão Bowser.",
    conteudo: "Super Mario Bros.** é o jogo de plataforma definitivo. Ele definiu o gênero, introduzindo conceitos como rolagem lateral suave, power-ups, e design de fases que ensina o jogador através da experiência. Seu sucesso no NES o tornou um divisor de águas e o jogo mais influente de todos os tempos.",
    categoria: "Jogo",
    data: "1985-09-13",
    imagem: "assets/img/smariobros/super-mario-bross.jpg",
    destaque: true,
    fotos: [
      { id: 1, titulo: "Capa Super Mario Bros", imagem: "/assets/img/smariobros/capamario.png",},
      { id: 2, titulo: "Screenshot do jogo", imagem: "/assets/img/smariobros/mariotela.png",},
      { id: 3, titulo: "criador do Super Mario bros", imagem: "/assets/img/smariobros/criadormario.jpg", }
    ]
  },

  // NOTÍCIAS / CURIOSIDADES
  
  {
    id: 302,
    titulo: "Remakes e Remasters",
    descricao: "Muitos jogos retro estão sendo remasterizados ou refeitos para plataformas modernas. Títulos como 'The Legend of Zelda: Link's Awakening' e 'Final Fantasy VII Remake' trouxeram clássicos para novas audiências.",
    conteudo: "Muitos jogos retro estão sendo remasterizados ou refeitos para plataformas modernas. Títulos como 'The Legend of Zelda: Link's Awakening' e 'Final Fantasy VII Remake' trazem gráficos atualizados e jogabilidade aprimorada, permitindo que novas gerações experimentem esses clássicos com uma roupagem nova e atraente, mantendo a essência original. A facilidade de acesso em consoles modernos é um grande atrativo para os fãs do retrô.",
    categoria: "Notícia",
    data: "2025-03-28",
    imagem: "assets/img/remakes/remake.jpeg",
    fotos: [
      { id: 1, titulo: "Remake Final Fantasy VII", imagem: "/assets/img/remakes/remakeff.jpeg",},
      { id: 2, titulo: "Remake Resident Evil 4", imagem: "/assets/img/remakes/remakere.jpeg",  },
      { id: 3, titulo: "Remake Zelda: Link's Awakening", imagem: "/assets/img/remakes/remakezld.jpeg",}
    ]
  },
];

/* cria o HTML do card */
function criarCardBootstrap(item) {
  const urlDetalhes = `detalhes.html?id=${item.id}`;
  const buttonText = item.categoria === 'Console' ? 'Ver Console' :
                     item.categoria === 'Jogo' ? 'Ver Jogo' : 'Ver Notícia';

  return `
    <div class="col">
      <div class="card h-100 text-light bg-dark border-black">
        <a href="${urlDetalhes}" class="d-block">
          <img src="${item.imagem}" class="card-img-top" alt="${escapeHtml(item.titulo)}" onerror="this.src='assets/img/placeholder.png'">
        </a>
        <div class="card-body bg-black">
          <a href="${urlDetalhes}" class="text-decoration-none">
            <h5 class="card-title text-warning">${escapeHtml(item.titulo)}</h5>
          </a>
          <p class="card-text">${escapeHtml(item.descricao)}</p>
          <a href="${urlDetalhes}" class="btn btn-sm btn-outline-warning mt-2">${buttonText}</a>
        </div>
      </div>
    </div>
  `;
}

/* monta seção com cards usando id do container e filtro por categoria */
function montarSecaoCards(containerId, categorias) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const categoriasArr = Array.isArray(categorias) ? categorias : [categorias];

  const items = dados.filter(d => categoriasArr.includes(d.categoria));
  if (items.length === 0) {
    container.innerHTML = `<p class="text-muted">Nenhum item encontrado.</p>`;
    return;
  }

  let html = '';
  items.forEach(item => html += criarCardBootstrap(item));
  container.innerHTML = html;
}

// Função para montar o Carousel de Jogos em Destaque.
function montarCarouselJogosDestaque() {
  const destaqueJogos = dados.filter(d => d.categoria === 'Jogo' && d.destaque);
  const container = document.getElementById('carousel-container');

  if (!container) return;

  if (destaqueJogos.length === 0) {
    container.innerHTML = `<p class="text-muted">Nenhum jogo em destaque no momento.</p>`;
    return;
  }

  const indicators = destaqueJogos.map((j, i) => {
    return `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="${i===0 ? 'active' : ''}" aria-current="${i===0 ? 'true' : 'false'}" aria-label="Slide ${i+1}"></button>`;
  }).join('\n');

  // Cria os itens (slides) do carousel.
  const items = destaqueJogos.map((j, i) => {
    return `
      <div class="carousel-item ${i===0 ? 'active' : ''}">
        <a href="detalhes.html?id=${j.id}" class="d-block">
          <img src="${j.imagem}" class="d-block w-100 rounded" alt="${escapeHtml(j.titulo)}" style="max-height:420px; object-fit:cover;" onerror="this.src='img/placeholder.png'">
          <div class="carousel-caption d-none d-md-block text-start" style="background: rgba(0,0,0,0.35); border-radius:6px; padding:10px;">
            <h5 class="text-warning mb-1">${escapeHtml(j.titulo)}</h5>
            <p class="small">${escapeHtml(j.descricao)}</p>
          </div>
        </a>
      </div>
    `;
  }).join('\n');

  // Monta a estrutura final do Carousel do Bootstrap.
  const carouselHTML = `
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

  container.innerHTML = carouselHTML;
}

// Função que carrega e exibe os detalhes de um item específico na página de detalhes.
function carregarDetalhesPagina() {
  const detalhesContainer = document.getElementById('detalhes-item');
  const fotosContainer = document.getElementById('fotos-vinculadas');

  if (!detalhesContainer) return; // não estamos na página de detalhes

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (!id) {
    detalhesContainer.innerHTML = `<h2 class="text-warning text-center">ID não especificado</h2><p class="text-muted">Forneça o parâmetro <code>?id=</code> na URL.</p>`;
    return;
  }

  const item = dados.find(d => String(d.id) === String(id));
  if (!item) {
    detalhesContainer.innerHTML = `<h2 class="text-danger text-center">Item não encontrado</h2><p class="text-muted">Nenhum item corresponde ao ID fornecido.</p>`;
    return;
  }

  // Cria o HTML principal dos detalhes do item (título, imagem, resumo, conteúdo).
  const htmlDetalhes = `
    <h1 class="text-warning mb-3">${escapeHtml(item.titulo)}</h1>
    <p class="text-muted small"><span class="badge bg-warning text-dark">${escapeHtml(item.categoria)}</span></p>
    <div class="row g-4 align-items-start">
      <div class="col-12 col-md-5">
        <img src="${item.imagem}" alt="${escapeHtml(item.titulo)}" class="img-fluid rounded" onerror="this.src='assets/img/placeholder.png'">
      </div>
      <div class="col-12 col-md-7">
        <h3 class="text-warning">Resumo</h3>
        <p>${escapeHtml(item.descricao)}</p>
        <h4 class="text-warning">Sobre</h4>
        <p>${formatContent(item.conteudo)}</p>
      </div>

       
  `;
  detalhesContainer.innerHTML = htmlDetalhes;

  if (fotosContainer) {
    fotosContainer.innerHTML = ''; // limpa
    if (Array.isArray(item.fotos) && item.fotos.length > 0) {
      const titulo = document.createElement('h3');
      titulo.className = 'text-warning mb-3';
      titulo.textContent = 'Fotos vinculadas';
      fotosContainer.appendChild(titulo);

      const row = document.createElement('div');
      row.className = 'row row-cols-1 row-cols-md-3 g-4';

      item.fotos.forEach(f => {
        const col = document.createElement('div');
        col.className = 'col';

        col.innerHTML = `
          <div class="card h-100 bg-dark border-warning text-light">
            <img src="${f.imagem}" class="card-img-top" alt="${escapeHtml(f.titulo)}" onerror="this.src='assets/img/placeholder.png'">
            <div class="card-body">
              <h5 class="card-title text-warning">${escapeHtml(f.titulo)}</h5>
              <p class="card-text small text-muted">${escapeHtml(f.descricao || '')}</p>
            </div>
          </div>
        `;
        row.appendChild(col);
      });

      fotosContainer.appendChild(row);
    } else {

      fotosContainer.innerHTML = `<p class="text-muted">Nenhuma foto vinculada a este item.</p>`;
    }
  }

  document.title = `${item.titulo} - Games Retrô`;
}

function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatContent(text) {
  if (!text) return '';
  
  return escapeHtml(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

document.addEventListener('DOMContentLoaded', () => {
 
  if (document.body && document.body.id === 'home-page') {
    montarCarouselJogosDestaque();

    montarSecaoCards('cards-unificados', ['Console', 'Jogo', 'Curiosidade', 'Notícia']);

  }

  if (document.body && document.body.id === 'detalhes-page') {
    carregarDetalhesPagina();
  }
});

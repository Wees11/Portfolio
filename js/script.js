// Dados dos projetos (simulando um banco de dados)
const projectsData = {
    'supra-mk4': {
        title: 'Toyota Supra MK4',
        description: 'Render 3D do icônico Toyota Supra MK4, um dos carros mais emblemáticos da cultura tuning e dos filmes de Velozes e Furiosos. Este modelo foi criado com atenção especial aos detalhes da carroceria e acabamentos.',
        year: '1993',
        images: [
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '1.2 milhões',
            'Texturas': '4K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '8 horas',
            'Motor': '2JZ-GTE Twin-Turbo',
            'Potência': '320 HP'
        }
    },
    'audi': {
        title: 'Audi R8 TwinTurbo',
        description: 'Modelo 3D do Audi R8 TwinTurbo',
        year: '2007',
        images: [
            'images/r8/r8_1.jpg',
            'images/r8/r8_2.jpg',
            'images/r8/r8_3.jpg',
            'images/r8/r8_3.jpg',
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '1.5 milhões',
            'Texturas': '4K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '10 horas',
            'Motor': 'RB26DETT',
            'Potência': '280 HP'
        }
    },
    'rx7': {
        title: 'Mazda RX7 RocketBunny',
        description: 'Render 3D do elegante Mazda RX7 RocketBunny, com seu design atemporal e motor rotativo único. Este modelo captura a essência do design japonês dos anos 90 com linhas fluidas e proporções perfeitas.',
        year: '1992',
        images: [
            'images/rx7/rx7_1.jpg',
            'images/rx7/rx7_2.jpg',
            'images/rx7/rx7_3.jpg',
            'images/placeholder-rx7-interior.jpg'
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '1.3 milhões',
            'Texturas': '4K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '9 horas',
            'Motor': '13B-REW Rotary',
            'Potência': '255 HP'
        }
    },
    'LaFerrari': {
        title: 'LaFerrari',
        description: 'Modelagem do iconico e primeiro carro com motor hibrido - LaFerrari',
        year: '2013',
        images: [
            'images/laferrari/laferrari_1.jpg',
            'images/placeholder-gta-side.jpg',
            'images/placeholder-gta-rear.jpg',
            'images/placeholder-gta-interior.jpg'
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '1.8 milhões',
            'Texturas': '8K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '12 horas',
            'Jogo': 'Grand Theft Auto V',
            'Inspiração': 'Lamborghini/Pagani'
        }
    },
    'future': {
        title: 'future',
        description: 'Modelo 3D ultra-detalhado do McLaren Senna como visto no Forza Horizon 5, recriado com níveis de detalhe superiores ao jogo original, incluindo interior completo e sistema de suspensão.',
        year: '2021',
        images: [
            'images/placeholder-forza-main.jpg',
            'images/placeholder-forza-side.jpg',
            'images/placeholder-forza-rear.jpg',
            'images/placeholder-forza-interior.jpg'
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '2.2 milhões',
            'Texturas': '8K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '14 horas',
            'Jogo': 'Forza Horizon 5',
            'Motor': 'V8 Twin-Turbo'
        }
    },
    'future': {
        title: 'future',
        description: 'Recriação do icônico BMW M3 GTR do Need for Speed Most Wanted e Heat, com a pintura e modificações exatas do carro do jogo, incluindo o kit de carroceria completo e detalhes de corrida.',
        year: '2019',
        images: [
            'images/placeholder-nfs-main.jpg',
            'images/placeholder-nfs-side.jpg',
            'images/placeholder-nfs-rear.jpg',
            'images/placeholder-nfs-interior.jpg'
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '1.7 milhões',
            'Texturas': '4K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '11 horas',
            'Jogo': 'Need for Speed Heat',
            'Motor': 'P60B40 V8'
        }
    },
    'concept-1': {
        title: 'future',
        description: 'Conceito original de um hipercarro futurista com linhas agressivas e aerodinâmica avançada. Este design explora novas possibilidades em termos de estética e performance.',
        year: '2025',
        images: [
            'images/placeholder-concept1-main.jpg',
            'images/placeholder-concept1-side.jpg',
            'images/placeholder-concept1-rear.jpg',
            'images/placeholder-concept1-interior.jpg'
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '2.5 milhões',
            'Texturas': '8K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '16 horas',
            'Conceito': 'Hipercarro Elétrico',
            'Potência Teórica': '1800 HP'
        }
    },
    'concept-2': {
        title: 'future',
        description: 'Conceito original de um GT de luxo com influências de design clássico e tecnologia futurista. Este modelo explora a fusão entre tradição e inovação no design automotivo.',
        year: '2025',
        images: [
            'images/placeholder-concept2-main.jpg',
            'images/placeholder-concept2-side.jpg',
            'images/placeholder-concept2-rear.jpg',
            'images/placeholder-concept2-interior.jpg'
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '2.3 milhões',
            'Texturas': '8K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '15 horas',
            'Conceito': 'Grand Tourer Híbrido',
            'Potência Teórica': '950 HP'
        }
    },
    'concept-3': {
        title: 'Future GT Vision',
        description: 'Visão futurista de um veículo de corrida para competições virtuais, com aerodinâmica extrema e soluções de design que desafiam as limitações da física do mundo real.',
        year: '2030',
        images: [
            'images/placeholder-concept3-main.jpg',
            'images/placeholder-concept3-side.jpg',
            'images/placeholder-concept3-rear.jpg',
            'images/placeholder-concept3-interior.jpg'
        ],
        specs: {
            'Software': 'Blender 3.5',
            'Polígonos': '2.8 milhões',
            'Texturas': '8K PBR',
            'Renderizador': 'Cycles',
            'Tempo de Render': '18 horas',
            'Conceito': 'Vision Gran Turismo',
            'Potência Teórica': '2200 HP'
        }
    }
};

// Função para abrir os detalhes do projeto
function openProjectDetails(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    // Limpar e preencher a galeria
    const galleryEl = document.querySelector('.details-gallery');
    galleryEl.innerHTML = '';
    
    project.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = project.title;
        galleryEl.appendChild(img);
    });
    
    // Preencher as informações
    const infoEl = document.querySelector('.details-info');
    let specsHTML = '';
    
    for (const [key, value] of Object.entries(project.specs)) {
        specsHTML += `
            <div class="specs-item">
                <div class="specs-label">${key}</div>
                <div class="specs-value">${value}</div>
            </div>
        `;
    }
    
    infoEl.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p>Ano: ${project.year}</p>
        
        <div class="specs">
            <h3>Especificações</h3>
            ${specsHTML}
        </div>
    `;
    
    // Mostrar a seção de detalhes
    document.getElementById('project-details').classList.add('active');
    
    // Desabilitar o scroll da página principal
    document.body.style.overflow = 'hidden';
}

// Função para fechar os detalhes do projeto
function closeProjectDetails() {
    document.getElementById('project-details').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Adicionar event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners para os itens do projeto
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectDetails(projectId);
        });
    });
    
    // Event listener para o botão de fechar
    document.getElementById('close-details').addEventListener('click', function(e) {
        e.preventDefault();
        closeProjectDetails();
    });
    
    // Event listeners para navegação de página
    const navUp = document.querySelector('.nav-up');
    const navDown = document.querySelector('.nav-down');
    
    navUp.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth'
        });
    });
    
    navDown.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
    
});
// Função para filtrar projetos por categoria
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Adicionar event listeners aos links do menu quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listeners para os itens do menu
    const menuLinks = document.querySelectorAll('.main-nav a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obter a categoria do href (remover o #)
            const category = this.getAttribute('href').substring(1);
            
            // Filtrar projetos (se for "projects", mostrar todos)
            if (category === 'projects') {
                filterProjects('all');
            } else {
                filterProjects(category);
            }
            
            // Atualizar classe ativa
            setActiveLink(this);
        });
    });
    
    // Função para destacar o link ativo
    function setActiveLink(activeLink) {
        const menuLinks = document.querySelectorAll('.main-nav a');
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }
});


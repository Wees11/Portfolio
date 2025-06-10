// Dados dos projetos (simulando um banco de dados)
const projectsData = {
    'supra-mk4': {
        title: 'Toyota Supra MK4',
        description: 'Render 3D do icônico Toyota Supra MK4',
        year: '1993',
        images: [
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
            'images/supra/supra1.jpg',
        ],
        specs: {
            'Software': 'teste',
            'Polígonos': 'testee',
            'Texturas': 'teste',
            'Renderizador': 'teste',
            'Tempo de Render': 'test',
            'Motor': 'teste',
            'Potência': 'teste'
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
            'Software': 'Teste',
            'Polígonos': 'Teste',
            'Texturas': 'Teste',
            'Renderizador': 'Teste',
            'Tempo de Render': 'Teste',
            'Motor': 'Teste',
            'Potência': 'Testee'
        }
    },
    'rx7': {
        title: 'Mazda RX7 RocketBunny',
        description: 'Render 3D do Mazda RX7 RocketBunny',
        year: '1992',
        images: [
            'images/rx7/rx7_1.jpg',
            'images/rx7/rx7_2.jpg',
            'images/rx7/rx7_3.jpg',
            'images/placeholder-rx7-interior.jpg'
        ],
        specs: {
            'Software': 'teste',
            'Polígonos': 'testee',
            'Texturas': 'teste',
            'Renderizador': 'testee',
            'Tempo de Render': 'teste',
            'Motor': 'teste',
            'Potência': 'teste'
        }
    },
    'LaFerrari': {
        title: 'LaFerrari',
        description: 'Modelagem do iconico e primeiro carro com motor hibrido - LaFerrari',
        year: '2013',
        images: [
            'images/laferrari/laferrari_1.jpg',
        ],
        specs: {
            'Software': 'teste',
            'Polígonos': 'teste',
            'Texturas': 'teste',
            'Renderizador': 'teste',
            'Tempo de Render': 'teste',
            'Jogo': 'testeV',
            'Inspiração': 'teste'
        }
    },
    'future': {
        title: 'future',
        description: '',
        year: 'teste',
        images: [
            'images/placeholder-forza-main.jpg',
        ],
        specs: {
            'Software': 'teste',
            'Polígonos': 'teste',
            'Texturas': 'teste',
            'Renderizador': 'teste',
            'Tempo de Render': 'teste',
            'Jogo': 'teste',
            'Motor': 'testee'
        }
    },
    'future': {
        title: 'future',
        description: '.',
        year: '2019',
        images: [
            'images/placeholder-nfs-main.jpg',
            'images/placeholder-nfs-side.jpg',
            'images/placeholder-nfs-rear.jpg',
            'images/placeholder-nfs-interior.jpg'
        ],
        specs: {
            'Software': 'testee',
            'Polígonos': 'teste',
            'Texturas': 'teste',
            'Renderizador': 'teste',
            'Tempo de Render': 'testee',
            'Jogo': 'teste',
            'Motor': 'teste'
        }
    },
    'concept-1': {
        title: 'future',
        description: '.',
        year: '.',
        images: [
            'images/placeholder-concept1-main.jpg',
            'images/placeholder-concept1-side.jpg',
            'images/placeholder-concept1-rear.jpg',
            'images/placeholder-concept1-interior.jpg'
        ],
        specs: {
            'Software': 'teste',
            'Polígonos': 'teste',
            'Texturas': 'teste',
            'Renderizador': 'teste',
            'Tempo de Render': 'teste',
            'Conceito': 'teste',
            'Potência Teórica': 'teste'
        }
    },
    'concept-2': {
        title: 'future',
        description: '.',
        year: '2025',
        images: [
            'images/placeholder-concept2-main.jpg',
            'images/placeholder-concept2-side.jpg',
            'images/placeholder-concept2-rear.jpg',
            'images/placeholder-concept2-interior.jpg'
        ],
        specs: {
            'Software': 'teste',
            'Polígonos': 'teste',
            'Texturas': 'teste',
            'Renderizador': 'teste',
            'Tempo de Render': 'teste',
            'Conceito': 'teste',
            'Potência Teórica': 'teste'
        }
    },
    'concept-3': {
        title: 'Future',
        description: '.',
        year: '.',
        images: [
            'images/placeholder-concept3-main.jpg',
            'images/placeholder-concept3-side.jpg',
            'images/placeholder-concept3-rear.jpg',
            'images/placeholder-concept3-interior.jpg'
        ],
        specs: {
            'Software': 'teste',
            'Polígonos': 'teste',
            'Texturas': 'teste',
            'Renderizador': 'teste',
            'Tempo de Render': 'teste',
            'Conceito': 'teste',
            'Potência Teórica': 'teste'
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


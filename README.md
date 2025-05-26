# Portfólio 3D Underground

Este é um portfólio HTML minimalista e underground para exibição de renders 3D de games e carros, com um grid de 3 colunas e navegação detalhada para cada projeto.

## Características

- Design minimalista e underground com tema escuro
- Layout responsivo para desktop e dispositivos móveis
- Grid de 3 colunas para exibição de projetos
- Navegação detalhada para cada render 3D
- Box de informações com tamanho proporcional à imagem
- Animações suaves e efeitos de hover
- Compatibilidade com dispositivos touch

## Como Usar

1. Substitua as imagens placeholder na pasta `images/` pelos seus renders 3D
2. Atualize os dados dos projetos no arquivo `js/script.js` com as informações dos seus modelos
3. Personalize as cores e estilos no arquivo `css/style.css` conforme necessário
4. Abra o arquivo `index.html` em um navegador para visualizar o portfólio

## Estrutura de Arquivos

```
portfolio/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (seus renders 3D aqui)
└── index.html
```

## Adicionando Seus Renders

Para cada projeto no grid, você precisa adicionar:

1. Uma imagem principal para o grid (recomendado: proporção 3:2)
2. Imagens adicionais para a galeria de detalhes (recomendado: pelo menos 4 por projeto)

Atualize o objeto `projectsData` no arquivo `js/script.js` com os caminhos das suas imagens e informações dos seus modelos 3D.

## Personalização

- Altere as cores no arquivo CSS para combinar com sua identidade visual
- Modifique o menu lateral para incluir categorias específicas dos seus trabalhos
- Atualize os ícones de redes sociais no rodapé da barra lateral

## Compatibilidade

O portfólio é compatível com os seguintes navegadores:
- Chrome (versão 60+)
- Firefox (versão 60+)
- Safari (versão 12+)
- Edge (versão 79+)
- Opera (versão 47+)

const projetos = [
    {
        titulo: "Relógio",
        descricao: "Projeto Front-End criado com HTML, CSS e JavaScript, a cor que escolhe é salva no host pelo localhost uma bela junção de dois projetos, palheta de cores e relógio digital.",
        imagem: "./img/projetos/Relogio.png",
        link: "https://felypedantas.github.io/Rel-gio_JS/index.html"
    },
    {
        titulo: "Portfólio Cartão",
        descricao: "Projeto Front-End criado com Tailwind, este projeto se trata do treino de uma habilidade que aprendi nos cursos da Alura, usando o Tailwind para criar um cartão com links de acesso a algumas de minhas mídias sociais.",
        imagem: "./img/projetos/cartao.png",
        link: "https://felypedantas.github.io/Tailwind_Cartao/"
    },
    {
        titulo: "Mixa-Games",
        descricao: "Projeto usado para acoplar todos os jogos que fiz em um espaço, para que o publico possa se divertir e fique mais facil ao compartilhar podendo enviar apenas um link para que a diversão começe",
        imagem: "./img/projetos/Mixa-Games.gif",
        link: "https://felypedantas.github.io/Mixa_Games/"
    },
    {
        titulo: "Svelte-Perfis",
        descricao: "Projeto desenvolvido durante o curso da Alura sobre Svelte, um framework Front-End, neste curso foi abordado diversas habilidades incluindo mexer com GitHubAPI.",
        imagem: "./img/projetos/SveltePerfis.gif",
        link: "https://svelte-perfis-two.vercel.app/"
    },
    {
        titulo: "Lista de Compras",
        descricao: "Projeto desenvolvido durante um curso da Alura sobre Front-End, as habilidades que adquiri durante o projeto foram: listas, localStorage, objetos dinamicos.",
        imagem: "./img/projetos/Lista_de_Mercado.gif",
        link: "https://felypedantas.github.io/Lista_Compras/"
    },
    // Adicione os outros projetos aqui...
];

const cardsContainer = document.getElementById('cards-container');

projetos.forEach(projeto => {
    const card = document.createElement('div');
    card.className = 'card m-4';
    card.style.width = '20rem';

    card.innerHTML = `
        <img src="${projeto.imagem}" class="card-img-top" alt="Projeto ${projeto.titulo}">
        <div class="card-body">
            <h5 class="card-title py-2 fw-bold">${projeto.titulo}</h5>
            <p class="card-text">${projeto.descricao}</p>
            <a href="${projeto.link}" class="btn botao-padrao w-100 fw-bold">Quero detalhes</a>
        </div>
    `;

    cardsContainer.appendChild(card);
});

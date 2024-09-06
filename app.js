function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //camel case
    let campoPesquisa = document.getElementById 
    ("campo-pesquisa").value
    //se campoPesquisa for uma string sem nada
    //if(campoPesquisa == "")
    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um jogador de futebol</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Imprime a seção no console para fins de depuração (opcional)
    console.log(section);
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        //se titulo includes campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa))  {
        //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }                
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}



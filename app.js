
// console.log (dados); // Descomente esta linha para visualizar os dados no console

//console.log(section); // Descomente esta linha para verificar se a seção foi encontrada

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção HTML com o ID "resultados-pesquisa"
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if(campoPesquisa == ""){
        section.innerHTML="<p>NADA FOI ENCONTRADO</p>";
        return
    }
    //campoPesquisa=campoPesquisa.toLowerCase()
    //console.log(campoPesquisa);
    let resultados = "";    // Percorre cada objeto (dado) dentro do array 'dados'
    let titulo = "";
    let descricao = "";
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase
    descricao = dado.descricao.toLowerCase
    if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
    //console.log(dado.titulo.includes(campoPesquisa))
    // Cria uma nova div para cada dado e adiciona o conteúdo dentro da seção
    
  }
  
  /*//console.log (dados);
  let section = document.getElementById("resultados-pesquisa")
  console.log (section);
  //para cada dado dentro da lista de dados
  for(let dado of dados){
      section.innerHTML += `
  <div class="item-resultado">
          <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
              
          </h2>
          
          <p class="descricao-meta">${dado.descricao} </p>
          <a href=${dado.link} target="_blank">Mais informações 
          </a>
          </div>
  `
  }
  */
  section.innerHTML = resultados 
}


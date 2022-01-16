gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }

    }).then((response) => response.json()).then((data) => {
        const page = document.getElementById("page"); 

       const caixa_personagem = document.createElement("div");
       const imagem_personagem = document.createElement("img");
       imagem_personagem.setAttribute("src", data.image);
       caixa_personagem.insertAdjacentElement("beforeend", imagem_personagem);

       const lista_detalhes = document.createElement("ul");
       const detalhe_nome = document.createElement("li");
       detalhe_nome.innerHTML = `Nome: ${data.name}`;
       lista_detalhes.insertAdjacentElement("beforeend", detalhe_nome);

       const detalhe_especie = document.createElement("li");
       detalhe_especie.innerHTML = `Especie: ${data.species}`;
       lista_detalhes.insertAdjacentElement("beforeend", detalhe_especie);
       
       const detalhe_status = document.createElement("li");
       detalhe_status.innerHTML = `Status: ${data.status}`;
       lista_detalhes.insertAdjacentElement("beforeend", detalhe_status);

       caixa_personagem.insertAdjacentElement("beforeend", lista_detalhes);
      console.log(data)
       
       page.insertAdjacentElement("beforeend", caixa_personagem);

            });
}
 const botao = document.querySelector('button');
 botao.onclick = function(){
    const page = document.getElementById("page"); 
     page.innerHTML="";
     const max = 3;
     for(let qtd = 1; qtd <= max; qtd++){
         pegarPersonagem();
     }
 };
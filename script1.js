const imagem1 = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');

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
        imagem1.src = data.image1;
        imagem1.alt = data.name1;
        nomeDoPersonagem1.innerHTML = data.name1;
        especie1.innerHTML = data.species1;
        condicao1.innerHTML = data.status1;      
    });
}

 botao.onclick = pegarPersonagem;
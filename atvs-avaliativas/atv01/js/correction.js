const clubes = [];

const inClube = document.querySelector('#inTeam')
const btnAdicionar = document.querySelector('#btnAddTeam')
const btnListar = document.querySelector('#btnListTeams')
const btnMontar = document.querySelector('#btnMakeBrackets');
const outLista = document.querySelector('#outTeams');

const adicionarClube = () => {
    const clube = inClube.value;
    if (clube === '') {
        alert('Preencha o campo!')
        inClube.focus()
        return;
    }

    clubes.push(clube)
    console.log(clubes);
    
    inClube.value = ''
    inClube.focus();
}
btnAdicionar.addEventListener('click', adicionarClube)

const listarClubes = () => {
    if (clubes.length === 0) {
        alert('Não existem clubes cadastrados!')
        inClube.focus()
        return;
    }

    let lista = '';
    clubes.forEach((clube, index) => {
        return lista += `${index+1}. ${clube}\n`
    })
    
    outLista.textContent = lista;
}
btnListar.addEventListener('click', listarClubes)

const montarJogos = () => {
    if(clubes.length % 2 != 0 || clubes.length <= 0) {
        alert('Impossível fazer a tabulação com essa quantidade de elementos.')
        return;
    }

    const metadeInicio = clubes.slice(0, clubes.length/2)
    const metadeFim = clubes.slice(clubes.length/2, clubes.length).reverse()

    let lista = '';
    for (let i = 0; i < metadeInicio.length; i++) {
        lista += `${i+1}. ${metadeInicio[i]} X ${metadeFim[i]}\n`
    }
    outLista.textContent = lista;
}
btnMontar.addEventListener('click', montarJogos)

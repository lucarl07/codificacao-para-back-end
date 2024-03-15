/** REVENDA DE CARROS USADOS 
 * Feito por lucarl07.
 * Iniciado em 15/03/2024.
*/

// Declarar campos de entrada (inputs)
const inModelo = document.getElementById('inModelo')
const inPreco = document.getElementById('inPreco')

// Declarar botão de adicionar carros
const btnAdicionar = document.getElementById('btnAdicionar')

// Declarar botões de busca de resultados
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

// Declarar a lista de carros na página e a array de carros:
const outLista = document.getElementById('outLista')
const carros = [];

// Função para adicionar um carro
const adicionarCarro = () => {
    let modelo = inModelo.value;
    let preco = inPreco.value;

    if (modelo === "" || preco <= 0 || isNaN(preco)) {
        alert('Informe os dados corretamente.')
        inModelo.focus()
        limparInputs();
        return;
    }

    carros.push({
        modelo: modelo,
        preco: preco
    });
    limparInputs();
}

// Limpar os inputs do que foi digitado
const limparInputs = () => {
    inModelo.value = '';
    inPreco.value = '';
}

// Retornar todos os carros
const listarCarros = () => {
    if(carros.length === 0) {
        alert('Nenhum carro ainda foi adicionado.')
        btnAdicionar.focus();
    }

    let lista = "";
    carros.forEach((carro) => {
        return (lista += `${carro.modelo} ---- ${carro.preco} \n`)
    })
    enviarListaDOM(outLista, lista);
}

// Filtrar carros por preço
const filtrarPorPreco = () => {
    if(carros.length === 0) {
        alert('Nenhum carro ainda foi adicionado.')
        btnAdicionar.focus()
        return;
    }
    
    let precoMaximo = prompt('Digite o preço máximo dos carros que você deseja ver:')

    const filtrados = carros.filter((carro) => {
        return carro.preco <= precoMaximo;
    })

    let lista = "";
    filtrados.forEach((carro) => {
        return (lista += `${carro.modelo} ---- ${carro.preco} \n`)
    })
    enviarListaDOM(outLista, lista);
}

// Escrever os dados da lista no elemento #outLista
const enviarListaDOM = (elemento, lista) => {
    elemento.innerHTML = '';
    elemento.textContent = lista;
}

// Adicionar os event listeners
btnAdicionar.addEventListener('click', adicionarCarro)
btnListar.addEventListener('click', listarCarros)
btnFiltrar.addEventListener('click', filtrarPorPreco)
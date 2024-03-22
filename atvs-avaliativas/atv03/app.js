const candidatos = [];
const inCandidato = document.getElementById('inCandidato')
const inAcertos = document.getElementById('inAcertos')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnAprovados = document.getElementById('btnAprovados')

const outLista = document.getElementById('outLista')

const adicionarCandidato = () => {
    const candidato = inCandidato.value
    const acertos = Number(inAcertos.value)

    if (candidato === '' || acertos === 0 || isNaN(acertos)) {
        alert("Digite valores válidos")
        return;
    }
    candidatos.push({nome: candidato, nota: acertos});

    let lista = '';
    candidatos.forEach(candidato => {
        return lista += `${candidato.nome} - Nota ${candidato.nota}\n`
    })

    outLista.textContent = lista
    inCandidato.value = '';
    inAcertos.value = '';
}
btnAdicionar.addEventListener('click', adicionarCandidato)

const listarCandidatos = () => {}
btnListar.addEventListener('click', listarCandidatos)

const apvSegundaEtapa = () => {
    const notaMinima = Number(prompt('Digite a nota para a 2º aprovação'))

    if (notaMinima == 0 || isNaN(notaMinima)) {
        alert('Nota inválida inserida!')
        return;
    }

    btnListar.style.display = 'initial';

    const filtrarCandidatos = candidatos.filter(candidato => {
        return candidato.nota >= notaMinima
    }).sort((a, b) => {
        return b.nota - a.nota;
    });

    let lista = '';
    filtrarCandidatos.forEach(candidato => {
        return lista += `${candidato.nome} - Nota ${candidato.nota}\n`
    });

    outLista.textContent = lista;
}
btnAprovados.addEventListener('click', apvSegundaEtapa)

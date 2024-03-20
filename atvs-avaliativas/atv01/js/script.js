/** CHAVEAMENTO DE TORNEIO
 * Feito por lucarl07.
 * Início: 20-03-2024
 */

// Adicionar campo de entrada:
const inTeam = document.querySelector('#inTeam');

// Adicionar botões para executar as funções:
const btnAddTeam = document.querySelector('#btnAddTeam')
const btnListTeams = document.querySelector('#btnListTeams')
const btnMakeBrackets = document.querySelector('#btnMakeBrackets');

// Adicionar o campo de saída das funções:
const outTeams = document.querySelector('#outTeams');

// Criar a array geral, com todas as equipes:
const allTeams = [];

// Função para adicionar os clubes na array geral:
const adicionarClube = () => {
    let team = inTeam.value;

    if (team === '') {
        alert('Erro: Informe um nome para a equipe.')
        inTeam.focus();
        return;
    }

    allTeams.push(team)
    inTeam.value = "";
}

// Função para retornar todos os clubes adicionados:
const listarClubes = () => {
    outTeams.textContent = "";

    if (allTeams.length === 0) {
        alert('Erro: Número insuficiente de clubes. \nAdicione no mínimo 1 (um) time para visualizar a lista.')
        inTeam.focus()
        return;
    }

    allTeams.forEach((team, i) => {
        outTeams.textContent += `${i+1}. ${team}\n`
    })
}

// Função para fazer as chaves com os clubes disponíveis:
const chavearClubes = () => {
    let teams = allTeams.length;
    let bracketLeft = [], bracketRight = [];
    
    outTeams.textContent = "";
    
    if (teams < 2) {
        alert('Erro: Número insuficiente de clubes. \nAdicione no mínimo 2 (dois) times para visualizar a lista.')
        inTeam.focus()
        return;
    } else if (teams % 2 !== 0) {
        alert('Erro: O número de clubes é impar. \nPor favor, adicione mais um time ou atualize a página para fazer um novo chaveamento.')
        inTeam.focus()
        return;
    }

    // Partir a array allTeams na metade em duas arrays:
    bracketLeft = allTeams.slice(0, (teams / 2))
    bracketRight = allTeams.slice((teams / 2)).reverse();

    let matches = teams / 2;
    for (let i = 0; i < matches; i++) {
        outTeams.textContent += `${i+1}. ${bracketLeft[i]} x ${bracketRight[i]}\n`
    }
}

// Adicionar detectores de evento aos botões:
btnAddTeam.addEventListener('click', adicionarClube)
btnListTeams.addEventListener('click', listarClubes)
btnMakeBrackets.addEventListener('click', chavearClubes)

// =:=:=:=:= FIM DO CÓDIGO =:=:=:=:=

/*** CALCULADORA SALARIAL 
 * Por: Luiz Carlos Jr.
*/
/*** Lógica:
 * botão.quando("click") -> ler dados inseridos em formulário -> retornar como card HTML
 */

// Declarando os campos de entrada:
const codigoFuncionario = document.querySelector('#getEmployeeId');
const horasTrabalhadas = document.querySelector('#getWorkedHours');
const turnoTrabalho = document.querySelector('#getShift');
const categoria = document.querySelector('#getCategory');

// Declarando o campo de resultados:
const campoColaboradores = document.querySelector('.employee-data-response');

// Declarando o array de funcionários:
const funcionarios = [];

// Declarando o contador de funcionários:
let qtdFuncionarios = 0;

document.getElementById('btnSubmit').addEventListener('click', () => {

   // Aumenta o número de funcionários:
   qtdFuncionarios++
   const indexAtual = qtdFuncionarios - 1;

   // Adiciona suas propriedades na array funcionarios:
   funcionarios.push({
      código: codigoFuncionario.value,
      horas_trabalhadas: horasTrabalhadas.value,
      turno_trabalho: turnoTrabalho.value,
      categoria: categoria.value,
      valor_hora: calcularValorHora(categoria.value, turnoTrabalho.value)
   })

   // console.log(`Quantidade de funcionários: ${qtdFuncionarios} \n`, funcionarios)
   const caixaFuncionario = document.createElement('div')
   caixaFuncionario.innerHTML = `
      <p class="employee-id">
         <strong>Código identificador:</strong>
         ${funcionarios[indexAtual].código}
      </p>

      <p class="worked-hours">
         <strong>Horas trabalhadas:</strong>
         ${funcionarios[indexAtual].horas_trabalhadas}
      </p>

      <p class="work-shift">
         <strong>Turno de trabalho:</strong>
         ${funcionarios[indexAtual].turno_trabalho}
      </p>

      <p class="category">
         <strong>Categoria:</strong>
         ${funcionarios[indexAtual].categoria}
      </p>

      <p class="salary-per-hour">
         <strong>Valor-hora:</strong>
         ${funcionarios[indexAtual].valor_hora}
      </p>
   `;
   
   caixaFuncionario.classList.add = 'card'
   campoColaboradores.appendChild(caixaFuncionario);
})

function calcularValorHora(categoria, turno) {
   const salarioMinimo = 450;

   if (categoria === 'G' && turno === 'N') {
      return salarioMinimo * 0.18;
   } else if (categoria === 'G' && (turno === 'M' || turno === 'V')) {
      return salarioMinimo * 0.15;
   } else if (categoria === 'O' && turno === 'N') {
      return salarioMinimo * 0.13;
   } else if (categoria === 'O' && (turno === 'M' || turno === 'V')) {
      return salarioMinimo * 0.10;
   }
}
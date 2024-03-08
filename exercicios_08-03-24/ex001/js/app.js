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
      codigo: codigoFuncionario.value,
      horas_trabalhadas: horasTrabalhadas.value,
      turno_trabalho: turnoTrabalho.value,
      categoria: categoria.value,
      valor_hora: calcularValorHora(categoria.value, turnoTrabalho.value),
      salario_inicial: calcularSalario(categoria.value, turnoTrabalho.value, horasTrabalhadas.value)
   })

   // console.log(`Quantidade de funcionários: ${qtdFuncionarios} \n`, funcionarios)
   const caixaFuncionario = document.createElement('div')
   caixaFuncionario.innerHTML = `
      <div class="title-area">
         <h2 class="employee-id">
            Funcionário(a) ${funcionarios[indexAtual].codigo}
         </h2>
         <h3 class="worked-hours">
            ${funcionarios[indexAtual].horas_trabalhadas} horas trabalhadas
         </h3>
      </div>

      <div class="attributes">
         <div class="left-attributes">
            <p class="work-shift">
               <strong>Turno de trabalho:</strong>
               ${funcionarios[indexAtual].turno_trabalho}
            </p>

            <p class="category">
               <strong>Categoria:</strong>
               ${funcionarios[indexAtual].categoria}
            </p>
         </div>
         
         <div class="right-attributes">
            <p class="hourly-rate">
               <strong>Valor-hora:</strong>
               ${funcionarios[indexAtual].valor_hora}
            </p>
         </div>
      </div>
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

function calcularSalario(categoria, turno, horas) {
   const valorHora = calcularValorHora(categoria, turno);

   return valorHora * horas;
}
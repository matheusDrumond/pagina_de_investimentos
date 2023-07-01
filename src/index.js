'use strict'

// Página de rendimentos

// Funções 
function jurosSimples(valor, taxa, tempo) {
    let juros = (valor * (taxa / 100) * tempo).toFixed(2)
    let montante = parseFloat(valor) + parseFloat(juros);
    let mensagem = `O total de juros foi R$${juros} e o montante final é R$${montante}`;
  
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = mensagem;
    resultado.classList.replace('text-white', 'text-green-500');
  }

function jurosCompostos(valor, taxa, time){
    let juros = (valor * Math.pow(1 + (taxa / 100), time) - valor).toFixed(2);
    let montante = (parseFloat(valor) + parseFloat(juros)).toFixed(2);
    let mensagem = `O total de juros foi ${juros} e o montante final é ${montante}`;
  
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = mensagem;
    resultado.classList.replace('text-white', 'text-green-500');
}


// Lógica dos cálculos

// Espera do DOM carregar o conteúdo
document.addEventListener('DOMContentLoaded', function() {
    let botaoCalcular = document.querySelector('#calcular');
  
    botaoCalcular.addEventListener('click', function() {
      // Juros simples

      // Tudo por mês
      if (
        document.querySelector('#periodo').value === 'p-month' &&
        document.querySelector('#type').value === 'simples' &&
        document.querySelector('#time-type').value === 'month'
      ) {
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value;
        let tempo = document.querySelector('#time').value;
        jurosSimples(valor, taxa, tempo);
      }
      // Tudo por ano
      else if(
        document.querySelector('#periodo').value === 'p-year' &&
        document.querySelector('#type').value === 'simples' &&
        document.querySelector('#time-type').value === 'year'
      ){
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value;
        let tempo = document.querySelector('#time').value;
        jurosSimples(valor, taxa, tempo);
      }
      // Juros por mês e tempo em anos
      else if(
        document.querySelector('#periodo').value === 'p-month' &&
        document.querySelector('#type').value === 'simples' &&
        document.querySelector('#time-type').value === 'year'
      ){
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value * 12;
        let tempo = document.querySelector('#time').value;
        jurosSimples(valor, taxa, tempo);
      }
      // Juros por ano e tempo em meses
      else if(
        document.querySelector('#periodo').value === 'p-year' &&
        document.querySelector('#type').value === 'simples' &&
        document.querySelector('#time-type').value === 'month'
      ){
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value;
        let tempo = document.querySelector('#time').value / 12;
        jurosSimples(valor, taxa, tempo);
      }
      // Juros compostos
      // Tudo em meses
      else if(
        document.querySelector('#periodo').value === 'p-month' &&
        document.querySelector('#type').value === 'composto' &&
        document.querySelector('#time-type').value === 'month'
      ){
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value;
        let tempo = document.querySelector('#time').value;
        jurosCompostos(valor, taxa, tempo)
      }
      // Tudo por ano
      else if(
        document.querySelector('#periodo').value === 'p-year' &&
        document.querySelector('#type').value === 'composto' &&
        document.querySelector('#time-type').value === 'year'
      ){
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value;
        let tempo = document.querySelector('#time').value;
        jurosSimples(valor, taxa, tempo);
      }
      // Juros por mês e tempo em anos
      else if(
        document.querySelector('#periodo').value === 'p-month' &&
        document.querySelector('#type').value === 'composto' &&
        document.querySelector('#time-type').value === 'year'
      ){
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value * 12;
        let tempo = document.querySelector('#time').value;
        jurosSimples(valor, taxa, tempo);
      }
      // Juros por ano e tempo em meses
      else if(
        document.querySelector('#periodo').value === 'p-year' &&
        document.querySelector('#type').value === 'composto' &&
        document.querySelector('#time-type').value === 'month'
      ){
        let valor = document.querySelector('#valorInicial').value;
        let taxa = document.querySelector('#juros').value;
        let tempo = document.querySelector('#time').value / 12;
        jurosSimples(valor, taxa, tempo);
      }
    });
  });




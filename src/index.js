'use strict'

let botaoCalcular = document.querySelector('#calcular');

// botaoCalcular.addEventListener('click', ()=>{
    // let valor = document.querySelector('#valorInicial').value;
    // let taxa = document.querySelector('#juros').value;
//     let periodo = document.querySelector('#periodo').value;
//     let tipo = document.querySelector('#type').value;
//     let tempo = document.querySelector('#time').value;
//     let tipoTempo = document.querySelector('#time-type').value;
//     console.log(valor);
//     console.log(taxa);
//     console.log(periodo);
//     console.log(tipo);
//     console.log(tempo);
//     console.log(tipoTempo);
// })

//funções 
function jurosSimples(valor, taxa, tempo) {
    let juros = (valor * (taxa / 100) * tempo).toFixed(2)
    let montante = parseFloat(valor) + parseFloat(juros);
    let mensagem = `O total de juros foi ${juros} e o montante final é ${montante}`;
  
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = mensagem;
    resultado.classList.replace('text-white', 'text-green-500');
  }
  
  // Wait for the DOM to be loaded before accessing the elements
  
  


function jurosCompostos(valor, taxa, time){
    let juros = (valor * Math.pow(1 + (taxa / 100), time) - valor).toFixed(2);
    let montante = (parseFloat(valor) + parseFloat(juros)).toFixed(2);
    let mensagem = `O total de juros foi ${juros} e o montante final é ${montante}`;
  
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = mensagem;
    resultado.classList.replace('text-white', 'text-green-500');
}


//lógica dos cálculos
document.addEventListener('DOMContentLoaded', function() {
    let botaoCalcular = document.querySelector('#calcular');
  
    botaoCalcular.addEventListener('click', function() {
      //juros simples
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
      //juros compostos
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
    });
  });




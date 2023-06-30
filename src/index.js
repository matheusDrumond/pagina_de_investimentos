'use strict'

let botaoCalcular = document.querySelector('#calcular');

// botaoCalcular.addEventListener('click', ()=>{
//     let valor = document.querySelector('#valorInicial').value;
//     let taxa = document.querySelector('#juros').value;
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
function jurosSimples(valor, taxa, time){
    let juros = (valor * (taxa / 100) * time).toFixed(2);
    let montante = (valor + parseFloat(juros)).toFixed(2);
    return `O total de juros foi ${juros} e o montante final é ${montante}`;
}


function jurosCompostos(valor, taxa, time){
    let juros = (valor * Math.pow(1 + (taxa / 100), time) - valor).toFixed(2);
    let montante = (valor + parseFloat(juros)).toFixed(2);
    return `O total de juros foi ${juros} e o montante final é ${montante}`;
}



// juros simples
// if(document.querySelector('#type').value == 'simples' 
// && document.querySelector('#periodo').value == 'p-month'
// && document.querySelector('#time-type').value == 'month'){
// }


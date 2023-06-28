'use strict'

//delcaraçao dos campos do formulário de rendimento
const valorInicial   = document.querySelector('#valorInicial').value;
const taxaDeJuros    = document.querySelector('#juros').value;
const porMes         = document.querySelector('#p-month').value;
const porAno         = document.querySelector('#p-year').value;
const tipoJuros      = document.querySelector('#type').value;
const tempo          = document.querySelector('#time').value;


// Cálculo de juros simples
function jurosSimples(valor, taxa, time){
    let juros = (valor * (taxa / 100) * time).toFixed(2);
    let montante = (valor + parseFloat(juros)).toFixed(2);

    let resultado = document.querySelector('#resultado');
    resultado.textContent = montante;
    resultado.classList.remove('text-white');
    resultado.classList.add('text-black');

    // teste: console.log(jurosSimples(300, 5, 12));
}


// Cálculo de juros compostos 
function jurosCompostos(valor, taxa, time){
    let juros = (valor * Math.pow(1 + (taxa / 100), time) - valor).toFixed(2);
    let montante = (valor + parseFloat(juros)).toFixed(2);
    return `O total de juros foi ${juros} e o montante final é ${montante}`;
    //console.log(jurosCompostos(300, 5, 12));
}


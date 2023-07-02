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


// Página de cotações 

// Link da API
const url = 'https://economia.awesomeapi.com.br/json/last/'
// Moedas
const coins = 'USD-BRL,EUR-BRL,CAD-BRL,JPY-BRL,GBP-BRL,ARS-BRL'

// Dólar
const valorDolar = document.querySelector('#dolar-value');
const dolarName = document.querySelector('#dolar-name');

// Euro
const valorEuro = document.querySelector('#euro-value');
const euroName = document.querySelector('#euro-name');

// Dólar Canadense
const valorDolarCanadense = document.querySelector('#dolarCanadense-value');
const dolarCanadenseName = document.querySelector('#dolarCanadense-name');


// Iene
const valorIene = document.querySelector('#iene-value');
const ieneName = document.querySelector('#iene-name');


// Libra
const valorLibra = document.querySelector('#libra-value');
const libraName = document.querySelector('#libra-name');


// Pesos Argentinos
const valorPesoArgentino = document.querySelector('#pesoArgentino-value');
const pesoArgentinoName = document.querySelector('#pesoArgentino-name');

// Pegar as cotações
async function getValues(){
  const response = await fetch(url + coins);
  console.log(response);

  const data = await response.json();
  console.log(data);

  // Dólar Americano
  let valueDolar = data.USDBRL.bid;
  valorDolar.innerHTML = 'R$ ' + valueDolar;
  let nameDolar = data.USDBRL.name;
  dolarName.innerHTML = nameDolar;
  // Euro
  let valueEuro = data.EURBRL.bid;
  valorEuro.innerHTML = 'R$ ' + valueEuro;
  let nameEuro = data.EURBRL.name;
  euroName.innerHTML = nameEuro;
  // Dólar Canadense
  let valueDolarCanadense = data.CADBRL.bid;
  valorDolarCanadense.innerHTML = 'R$ ' + valueDolarCanadense;
  let nameDolarCanadense = data.CADBRL.name;
  dolarCanadenseName.innerHTML = nameDolarCanadense;
  // Iene
  let valueIene = data.JPYBRL.bid;
  valorIene.innerHTML = 'R$ ' + valueIene;
  let nameIene = data.JPYBRL.name;
  ieneName.innerHTML = nameIene;
  // Libra
  let valueLibra = data.GBPBRL.bid;
  valorLibra.innerHTML = 'R$ ' + valueLibra;
  let nameLibra = data.GBPBRL.name;
  libraName.innerHTML = nameLibra;
  // Pesos Argentinos
  let valuePesoArgentino = data.ARSBRL.bid;
  valorPesoArgentino.innerHTML = 'R$ ' + valuePesoArgentino;
  let namePesoArgentino = data.ARSBRL.name;
  pesoArgentinoName.innerHTML = namePesoArgentino;

  // Cálculo de conversão
  function converter(valorReal, coin, coinName){
    let result = (valorReal / coin).toFixed(2);

    let resultadoReal = document.querySelector('#resultadoReal');
    resultadoReal.innerHTML = valorReal;

    let resultadoEstrangeiro = document.querySelector('#resultadoEstrangeiro');
    resultadoEstrangeiro.innerHTML = `${result} ${coinName}`

    console.log(a, result)
  }

  let converterBotao = document.querySelector('#converterBotao');

  converterBotao.addEventListener('click', function(){

    // Dólar
    if(document.querySelector('#moedaConverter').value === 'dolar'){
      let valorReal = document.querySelector('#valorReal').value ;
      converter(valorReal, valueDolar, data.USDBRL.code);
    }
    // Euro
    else if(document.querySelector('#moedaConverter').value === 'euro'){
      let valorReal = document.querySelector('#valorReal').value ;
      converter(valorReal, valueEuro, data.EURBRL.code);
  }
  // Dólar Canadense
  else if(document.querySelector('#moedaConverter').value === 'dolarCanadense'){
    let valorReal = document.querySelector('#valorReal').value ;
    converter(valorReal, valueDolarCanadense, data.CADBRL.code);
  }
  // Iene
  else if(document.querySelector('#moedaConverter').value === 'iene'){
    let valorReal = document.querySelector('#valorReal').value ;
    converter(valorReal, valueIene, data.JPYBRL.code);
  }
  // Libra
  else if(document.querySelector('#moedaConverter').value === 'libra'){
    let valorReal = document.querySelector('#valorReal').value ;
    converter(valorReal, valueLibra, data.GBPBRL.code);
  }
  // Pesos Argentinos
  else if(document.querySelector('#moedaConverter').value === 'pesoArgentino'){
    let valorReal = document.querySelector('#valorReal').value ;
    converter(valorReal, valuePesoArgentino, data.ARSBRL.code);
  }
  })
  

  console.log(data);
};

document.addEventListener('DOMContentLoaded', getValues());


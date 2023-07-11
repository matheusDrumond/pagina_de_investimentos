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

  function jurosCompostos(valor, aporte, taxa, tempo){
    // Aportes 
    let aportes = aporte * (Math.pow((1 + (taxa / 100)), tempo) - 1) / (taxa / 100);
    let jurosAPortes = aportes - (aporte * tempo);
    // VP
    let juros = ((valor * Math.pow(1 + (taxa / 100), tempo) - valor) + jurosAPortes).toFixed(2);
    let montante = ((parseFloat(valor) + parseFloat(juros)) + aportes - jurosAPortes).toFixed(2);
    let totalInvestido = ((aporte * tempo) + parseFloat(valor)).toFixed(2);
    let mensagem = 
      `O total investido foi ${(parseFloat(totalInvestido)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
      o total de juros foi ${(parseFloat(juros)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} 
      e o montante final é ${(parseFloat(montante)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
  
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
      let aporte = document.querySelector('#aportes').value;
      let taxa = document.querySelector('#juros').value;
      let tempo = document.querySelector('#time').value;
      jurosCompostos(valor, aporte, taxa, tempo)
    }
    // Tudo por ano
    else if(
      document.querySelector('#periodo').value === 'p-year' &&
      document.querySelector('#type').value === 'composto' &&
      document.querySelector('#time-type').value === 'year'
    ){
      let valor = document.querySelector('#valorInicial').value;
      let tempo = document.querySelector('#time').value * 12;
      let aporte = document.querySelector('#aportes').value;
      let taxa = ((((document.querySelector('#juros').value  / 100) + 1) ** (1 / 12)) - 1) * 100;
      jurosCompostos(valor, aporte, taxa, tempo);
    }
    // Juros por mês e tempo em anos
    else if(
      document.querySelector('#periodo').value === 'p-month' &&
      document.querySelector('#type').value === 'composto' &&
      document.querySelector('#time-type').value === 'year'
    ){
      let valor = document.querySelector('#valorInicial').value;
      let taxa = document.querySelector('#juros').value;
      let tempo = document.querySelector('#time').value * 12;
      let aporte = document.querySelector('#aportes').value;
      jurosCompostos(valor, aporte, taxa, tempo);
    }
    // Juros por ano e tempo em meses
    else if(
      document.querySelector('#periodo').value === 'p-year' &&
      document.querySelector('#type').value === 'composto' &&
      document.querySelector('#time-type').value === 'month'
    ){
      let valor = document.querySelector('#valorInicial').value;
      let taxa = ((((document.querySelector('#juros').value  / 100) + 1) ** (1 / 12)) - 1) * 100;
      let tempo = document.querySelector('#time').value;
      let aporte = document.querySelector('#aportes').value;
      jurosCompostos(valor, aporte, taxa, tempo);
    };
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
  valorDolar.innerHTML = 'R$ ' + parseFloat(valueDolar).toFixed(3);
  let nameDolar = data.USDBRL.name;
  dolarName.innerHTML = nameDolar;
  // Euro
  let valueEuro = data.EURBRL.bid;
  valorEuro.innerHTML = 'R$ ' + parseFloat(valueEuro).toFixed(3);
  let nameEuro = data.EURBRL.name;
  euroName.innerHTML = nameEuro;
  // Dólar Canadense
  let valueDolarCanadense = data.CADBRL.bid;
  valorDolarCanadense.innerHTML = 'R$ ' + parseFloat(valueDolarCanadense).toFixed(3);
  let nameDolarCanadense = data.CADBRL.name;
  dolarCanadenseName.innerHTML = nameDolarCanadense;
  // Iene
  let valueIene = data.JPYBRL.bid;
  valorIene.innerHTML = 'R$ ' + parseFloat(valueIene).toFixed(3);
  let nameIene = data.JPYBRL.name;
  ieneName.innerHTML = nameIene;
  // Libra
  let valueLibra = data.GBPBRL.bid;
  valorLibra.innerHTML = 'R$ ' + parseFloat(valueLibra).toFixed(3);
  let nameLibra = data.GBPBRL.name;
  libraName.innerHTML = nameLibra;
  // Pesos Argentinos
  let valuePesoArgentino = data.ARSBRL.bid;
  valorPesoArgentino.innerHTML = 'R$ ' + parseFloat(valuePesoArgentino).toFixed(3);
  let namePesoArgentino = data.ARSBRL.name;
  pesoArgentinoName.innerHTML = namePesoArgentino;

  // Cálculos de conversão
  // Real p/ moeda estrangeira
  function converter(valorReal, coin, coinName){
    let result = (valorReal / coin).toFixed(2);

    let resultadoReal = document.querySelector('#resultadoReal');
    resultadoReal.innerHTML = valorReal;

    let resultadoEstrangeiro = document.querySelector('#resultadoEstrangeiro');
    resultadoEstrangeiro.innerHTML = `${result} ${coinName}`

  }
  // Moeda estrangeira p/ real
  function converterInverso(valorEstrangeiro, cotacao, coinName){
    let result = (valorEstrangeiro * cotacao).toFixed(2);

    // Alterar a forma de mostrar o resultado
    let realInverter = document.querySelector('#realInverter');
    realInverter.classList.remove('hidden');

    let resultadoReal = document.querySelector('#resultadoReal');
    resultadoReal.innerHTML = `${valorEstrangeiro} ${coinName}`;

    let resultadoEstrangeiro = document.querySelector('#resultadoEstrangeiro');
    resultadoEstrangeiro.innerHTML = result

  }

  let botaoInverter = document.querySelector('#botaoInverter');
  let converterBotao = document.querySelector('#converterBotao');


  // Controle de layouts da div de conversão
  botaoInverter.addEventListener('click', function() {

    // Layout padrão
    if (botaoInverter.classList.contains('inactive')) {
      botaoInverter.classList.replace('inactive', 'active');
      // Alterar os inputs
      let pPara = document.querySelector('#para');
      pPara.classList.add('hidden');
  
      let paraReal = document.querySelector('#paraReal');
      paraReal.classList.remove('hidden');
  
      let realConverter = document.querySelector('#realConverter');
      realConverter.classList.add('hidden');

      let realInverter = document.querySelector('#realInverter');
      realInverter.classList.remove('hidden');

      let rsInicial = document.querySelector('#rs-inicial');
      rsInicial.classList.add('hidden');

    } 
    // Layout Invertido
    else if (botaoInverter.classList.contains('active')) {
      botaoInverter.classList.replace('active', 'inactive');
      // Alterar os inputs
      let pPara = document.querySelector('#para');
      pPara.classList.remove('hidden');
  
      let paraReal = document.querySelector('#paraReal');
      paraReal.classList.add('hidden');
  
      let realConverter = document.querySelector('#realConverter');
      realConverter.classList.remove('hidden');

      let realInverter = document.querySelector('#realInverter');
      realInverter.classList.add('hidden');

      let rsInicial = document.querySelector('#rs-inicial');
      rsInicial.classList.remove('hidden');

    }
  });
  
  // Conversão padrão

    converterBotao.addEventListener('click', function conversao(){
      if(botaoInverter.classList.contains('inactive')){
      // Dólar
      if (document.querySelector('#moedaConverter').value === 'dolar') {
        let valorReal = document.querySelector('#valorReal').value;
        converter(valorReal, valueDolar, data.USDBRL.code);
      }
      // Euro
      else if (document.querySelector('#moedaConverter').value === 'euro') {
        let valorReal = document.querySelector('#valorReal').value;
        converter(valorReal, valueEuro, data.EURBRL.code);
      }
      // Dólar Canadense
      else if (document.querySelector('#moedaConverter').value === 'dolarCanadense') {
        let valorReal = document.querySelector('#valorReal').value;
        converter(valorReal, valueDolarCanadense, data.CADBRL.code);
      }
      // Iene
      else if (document.querySelector('#moedaConverter').value === 'iene') {
        let valorReal = document.querySelector('#valorReal').value;
        converter(valorReal, valueIene, data.JPYBRL.code);
      }
      // Libra
      else if (document.querySelector('#moedaConverter').value === 'libra') {
        let valorReal = document.querySelector('#valorReal').value;
        converter(valorReal, valueLibra, data.GBPBRL.code);
      }
      // Pesos Argentinos
      else if (document.querySelector('#moedaConverter').value === 'pesoArgentino') {
        let valorReal = document.querySelector('#valorReal').value;
        converter(valorReal, valuePesoArgentino, data.ARSBRL.code);
      }
    }
    // Função de conversão inversa
    else if(botaoInverter.classList.contains('active')){
      if (document.querySelector('#moedaConverter').value === 'dolar') {
        let valorReal = document.querySelector('#valorReal').value;
        converterInverso(valorReal, valueDolar, data.USDBRL.code);
      }
      // Euro
      else if (document.querySelector('#moedaConverter').value === 'euro') {
        let valorReal = document.querySelector('#valorReal').value;
        converterInverso(valorReal, valueEuro, data.EURBRL.code);
      }
      // Dólar Canadense
      else if (document.querySelector('#moedaConverter').value === 'dolarCanadense') {
        let valorReal = document.querySelector('#valorReal').value;
        converterInverso(valorReal, valueDolarCanadense, data.CADBRL.code);
      }
      // Iene
      else if (document.querySelector('#moedaConverter').value === 'iene') {
        let valorReal = document.querySelector('#valorReal').value;
        converterInverso(valorReal, valueIene, data.JPYBRL.code);
      }
      // Libra
      else if (document.querySelector('#moedaConverter').value === 'libra') {
        let valorReal = document.querySelector('#valorReal').value;
        converterInverso(valorReal, valueLibra, data.GBPBRL.code);
      }
      // Pesos Argentinos
      else if (document.querySelector('#moedaConverter').value === 'pesoArgentino') {
        let valorReal = document.querySelector('#valorReal').value;
        converterInverso(valorReal, valuePesoArgentino, data.ARSBRL.code);
      }
    }
    });
  
};

getValues();
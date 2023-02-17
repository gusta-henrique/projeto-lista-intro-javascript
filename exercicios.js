// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('digite a altura'))
  const largura = Number(prompt('digite a largura'))
  const retangulo = altura * largura

  console.log(retangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('informe o ano que estamos:'))
  const anoNascimento = Number(prompt('informe sua data de nascomento:'))
  const idade = anoAtual - anoNascimento

  console.log(idade)

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura).toFixed(2)

  return IMC
}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt('digite seu nome:')
  const idade = Number(prompt('digite sua idade:'))
  const email =  prompt('informe seu email:')
  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt('qual a sua cor favorita?')
  const cor2 = prompt('qual a sua cor favorita?')
  const cor3 = prompt('qual a sua cor favorita?')
  const listaTresCoresUsuario = [cor1, cor2, cor3]

  console.log(listaTresCoresUsuario)

}

// EXERCÍCIO 06 
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringEmMaiscula = string.toUpperCase()

  return(stringEmMaiscula)


} 


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custoEspetaculo = 3000
  const valorUnitarioIngresso = 100

  const quantiaDeIngressosASeremVendidos = custo / valorIngresso

  return(quantiaDeIngressosASeremVendidos)


}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const comparaString1 = string1.length
  const comparaString2 = string2.length
  
  const  comparacao = comparaString1 === comparaString2

  return(comparacao)
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  const primeiroElemento = array[0]

  return(primeiroElemento)
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length-1]
  
  return(ultimoElemento)

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const copiaArray = array 
 const a = copiaArray[0]
 const b = copiaArray[array.length-1]

 copiaArray.pop()
 copiaArray.shift()

 const primeiraTroca = copiaArray.unshift(b)
 const segundaTroca = copiaArray.push(a)

 return(copiaArray)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt('digite o ano em que esta:'))
const anoDeNascimento = Number(prompt('digite sua data de nascimento:'))
const emissaoRG = Number(prompt('ano em que foi emitido seu RG:'))

const idade = anoAtual - anoDeNascimento
const dataEmissao = anoAtual - emissaoRG


const pessoasCom20OuMenos = (idade <= 20) && (dataEmissao >= 5)
const pessoasCom20E50 = (idade > 20) && (idade <= 50) && (dataEmissao >= 10)
const pessoasAcima50 = (idade > 50) && (dataEmissao >= 15)

console.log(pessoasCom20OuMenos || pessoasCom20E50 || pessoasAcima50)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 != 0
  return(anoBissexto)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maioridade = prompt('voce tem mais de 18 anos? RESPONDA SIM ou NÃO')
  const ensinoMedioCompleto = prompt('voc possui ensino medio completo?RESPONDA SIM ou NÃO')
  const disponibilidadeDeHorario = prompt('Você possui disponibilidade exclusiva durante os horários do curso? RESPONDA SIM ou NÃO')
  const checaRespostaUser = maioridade.toLowerCase() === 'sim' && ensinoMedioCompleto.toLowerCase() === 'sim' && disponibilidadeDeHorario.toLowerCase() === 'sim'

  console.log(checaRespostaUser)

}





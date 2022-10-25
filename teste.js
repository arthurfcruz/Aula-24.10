var num1 = parseInt(prompt("insira o primeiro numero"))
var num2 = parseInt(prompt("insira o segundo numero"))
var continuar = "s"
var index = 0
var resultado = []

function somar(num1, num2){
    var soma = num1 + num2
    return soma
}

function subtrair(num1, num2){
    var subtracao = num1 - num2
    return subtracao
}

function multiplicar(num1, num2){
    var multiplicacao = num1 * num2
    return multiplicacao
}

function dividir(num1, num2){
    var divisao = num1 / num2
    return divisao
}

function exibirResultados(){
    console.log(resultado)
}

while (continuar == "s") {
    var operacao = prompt("o que deseja fazer 1-somar, 2-subtrair, 3-multiplicar, 4-dividir")
    if (operacao == "1") {
       resultado[index] = (somar(num1, num2))
       index++ 
       console.log(somar(num1, num2))
    } else if (operacao == "2") {
        resultado[index] = (subtrair(num1, num2)) 
        index++
        console.log(subtrair(num1, num2))
    } else if (operacao == "3") {
        resultado[index] = (multiplicar(num1, num2))
        index++
        console.log(multiplicar(num1, num2))
    } else 
    resultado[index] = (dividir(num1, num2))
    index++
    console.log(dividir(num1, num2))
    
    continuar = prompt("deseja continuar? s ou n")
}
exibirResultados()
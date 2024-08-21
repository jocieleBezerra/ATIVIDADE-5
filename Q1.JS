// Função para calcular o IMC
function calculaIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); 
}


let peso = 80; 
let altura = 1.69; 

let imc = calcularIMC(peso, altura);
console.log("Seu IMC é: " + imc);

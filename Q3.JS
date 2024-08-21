function calcularPerimetro(a, b, c) {
    return a + b + c;
}

function calcularArea(base, altura) {
    return (base * altura) / 2;
}


let a = 5; 
let b = 6; 
let c = 7; 
let base = 6; 
let altura = 4;

let perimetro = calcularPerimetro(a, b, c);
let area = calcularArea(base, altura);

console.log(`O perímetro do triângulo é: ${perimetro}`);
console.log(`A área do triângulo é: ${area}`);

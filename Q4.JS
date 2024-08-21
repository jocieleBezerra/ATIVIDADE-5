function calcularBhaskara(a, b, c) {
   
    let delta = b * b - 4 * a * c;

   
    if (delta < 0) {
        return "A equação não possui raízes reais.";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return `A equação possui uma raiz real: x = ${x}`;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `A equação possui duas raízes reais: x1 = ${x1}, x2 = ${x2}`;
    }
}


let a = 1;
let b = -3;
let c = 2;

let resultado = calcularBhaskara(a, b, c);
console.log(resultado);

function verificarPalindromo(palavra) {
   
    let palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    
    
    let palavraInvertida = palavraLimpa.split('').reverse().join('');
    
    return palavraLimpa === palavraInvertida;
}


function lerPalavra() {
    let palavra = prompt("Digite uma palavra:");
    if (verificarPalindromo(palavra)) {
        console.log(`"${palavra}" é um palíndromo.`);
    } else {
        console.log(`"${palavra}" não é um palíndromo.`);
    }
}


lerPalavra();

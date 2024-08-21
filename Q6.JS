function verificarAnagrama(palavra1, palavra2) {
   
    function ordenarPalavra(palavra) {
        return palavra.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    }
    
   
    return ordenarPalavra(palavra1) === ordenarPalavra(palavra2);
}


function lerPalavras() {
    let palavra1 = prompt("Digite a primeira palavra:");
    let palavra2 = prompt("Digite a segunda palavra:");
    
    if (verificarAnagrama(palavra1, palavra2)) {
        console.log(`"${palavra2}" é um anagrama de "${palavra1}".`);
    } else {
        console.log(`"${palavra2}" não é um anagrama de "${palavra1}".`);
    }
}


lerPalavras();

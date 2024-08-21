function contarEspacos(frase) {
   
    let espacos = frase.match(/\s/g);
   
    return espacos ? espacos.length : 0;
}


function lerFrase() {
    let frase = prompt("Digite uma frase:");
    let quantidadeEspacos = contarEspacos(frase);
    console.log(`A frase contém ${quantidadeEspacos} espaços em branco.`);
}


lerFrase();

const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularVolumeEsfera(raio) {
    let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    return volume.toFixed(2); 
}


rl.question("Digite o valor do raio da esfera: ", function(raio) {
   
    raio = parseFloat(raio);

  
    let volume = calcularVolumeEsfera(raio);

    
    console.log("O volume da esfera é: " + volume + " unidades cúbicas.");

   
    rl.close();
});

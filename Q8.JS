function extrairSobrenome(nomeCompleto) {
  
    let partes = nomeCompleto.trim().split(/\s+/);
    
   
    if (partes.length > 1) {
       
        let sobrenome = partes.pop();
      
        let nomeRestante = partes.join(' ');
        return `${sobrenome}, ${nomeRestante}`;
    } else {
       
        return nomeCompleto;
    }
}


function lerNomeCompleto() {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let resultado = extrairSobrenome(nomeCompleto);
    console.log(`Sobrenome primeiro: ${resultado}`);
}


lerNomeCompleto();

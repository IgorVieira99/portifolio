
/*-----VARIÁVEIS-----*/
var textoEntrada = document.getElementById('textoEntrada');
var menuOpçoes = document.querySelector('#menuOpçoes');
var numeral = document.getElementById('numeral');
var btncodificar = document.getElementById('codificar');
var btndecodificar = document.getElementById('decodificar');
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var enviar = document.querySelector('#enviar');
var textoSaida = document.querySelector('.textoSaida')
var codeRadio = document.querySelector('#codeRadio');
var decodeRadio = document.getElementById('decodeRadio')
var radio = document.querySelector('.radio');


/*-----CONDICIONAIS E EVENTOS-----*/
menuOpçoes.addEventListener("change", function () {

    
    if(menuOpçoes.value == 'cifraCesar') {
        numeral.style.display = 'block';
    
        
    }else if (menuOpçoes.value == 'base64') {
        numeral.style.display = 'none';
    
    }else {
        alert('Selecione um tipo de codificação')
    }
    })

  btncodificar.addEventListener("click", function () {
     enviar.style.display = 'block';
     enviar.value = 'Codificar'

  })

  btndecodificar.addEventListener("click", function () {
    enviar.style.display = 'block';
    enviar.value = 'Decodificar'

 })


/* -----BASE64----- */
function codBase(){
    let mensagem = document.querySelector('#textoEntrada').value
    let codificado = btoa(mensagem)
    return codificado
}

function decBase(){
    let mensagem = document.querySelector('#textoEntrada').value
    let decodificado = atob(mensagem)
    return decodificado
}

enviar.addEventListener('click', function(e){
    e.preventDefault();
    if(btncodificar.checked && menuOpçoes.value === "base64"){
        
        textoSaida.innerText = codBase();
    } else if(btndecodificar.checked && menuOpçoes.value === "base64"){
        
        textoSaida.innerText = decBase();
    } else if(btncodificar.checked && menuOpçoes.value === "cifraCesar"){
        
        textoSaida.innerText = codCesar()
    } else if(btndecodificar.checked && menuOpçoes.value === "cifraCesar"){
        
        textoSaida.innerText = decCesar()
    } else{
        textoSaida.innerText = "Por favor, digite algo na caixa de texto."
    }
})


/*-----CIFRA DE CESAR-----*/
function codCesar() {
  var elementoDaMensagem = textoEntrada.value;
  var mensagemMinuscula = elementoDaMensagem.toLowerCase();
  var transformarNumero = (Number(numeral.value) % 26);
  var mensagemCodificada = '';

  for(var i = 0; i < mensagemMinuscula.length; i++){
     for(var j =0; j < alfabeto.length; j++){
       if(mensagemMinuscula[i] == alfabeto[j]){
         mensagemCodificada += alfabeto [j + transformarNumero]
         break;
     } else if (mensagemMinuscula[i] == ' ') {
         mensagemCodificada += ' ';
         break;
     }
    }
  

}
return mensagemCodificada
}

  function decCesar() {
    var elementoDaMensagem = textoEntrada.value;
    var mensagemMinuscula = elementoDaMensagem.toLowerCase()
    var transformarNumero = (Number(numeral.value) % 26)
    var mensagemCodificada = '';
  
    for(var i = 0; i < mensagemMinuscula.length; i++){
       for(var j = alfabeto.length - 1; j >= 0; j--){
         if(mensagemMinuscula[i] == alfabeto[j]){
           mensagemCodificada += alfabeto [j - transformarNumero]
           break;
       }  else if (mensagemMinuscula[i] == ' ') {
           mensagemCodificada += ' ';
           break;
   }
      }
  
  }
  return mensagemCodificada
}
  









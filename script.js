function calculate(){
    var height=document.getElementById ("altura").value
    var weight=document.getElementById ("peso").value 
    var nome=document.getElementById ("nome").value

    var imc=weight/height**2
    if(imc<18.5){
        document.querySelector('#resultado').innerText=(nome+" Você está abaixo do peso.");
    } else if (imc <24.9){
        document.querySelector('#resultado').innerText=(nome+" Você está no peso ideal. Parabéns!!");
    } else if (imc > 29.9){
        document.querySelector('#resultado').innerText=(nome+" Você está além do seu peso ideal.");
    }
}


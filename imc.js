
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura != '' && peso != ''){
        const valorIMC = (peso / (altura*altura)).toFixed(0);

        let classificacao = "";

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if(valorIMC < 25 ){
            classificacao = 'com peso ideal. Parabens'
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau 1'
        }else if(valorIMC <40){
            classificacao = 'com obsedidade grau 2'
        }else{
            classificacao = 'com obesidade grau 3, ja morreu'
        }

        resultado.textContent = `${nome} your IMC is ${valorIMC} and you is ${classificacao}` ;
    }else{
        resultado.textContent = 'Preencha todos os campos'
    }

}

calcular.addEventListener('click', imc);

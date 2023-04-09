function CalcuIMC() {

    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    imc = peso / (altura) **2
    console.log(imc)

    return imc
}



function Obesidade(){
    let imprimir

    CalcuIMC()

    if (imc < 18.5){

        imprimir = 'magro'

    }

    else if(imc > 18.6 && imc < 24.9){
        imprimir = 'normal'
    }
    else if(imc > 25 && imc < 29.9){
        imprimir = 'Sobrepeso'
    }

    else if(imc > 30){
        imprimir = 'obeso'
    }

    document.getElementById('resultImc').innerHTML = Math.round(imc)
    document.getElementById('resultObesidade').innerHTML = imprimir

    console.log(imprimir)
    return imprimir
}



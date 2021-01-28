//Ejercicio # 3

let busOne;
let busTwo;
let pasajerosA;
let pasajerosB;
let valorPasajeA;
let valorPasajeB;
let valorTotalA;
let valorTotalB;

mayorIngreso();

function mayorIngreso(){

    busOne = document.getElementById('plateOne').value;
    busTwo = document.getElementById('plateTwo').value;
    
    pasajerosA = Number(document.getElementById('usuariosA').value);
    pasajerosB = Number(document.getElementById('usuariosB').value);

    valorPasajeA = Number(document.getElementById('valorPasaje1').value);
    valorPasajeB = Number(document.getElementById('valorPasaje2').value);
    
    valorTotalA = pasajerosA*valorPasajeA;
    valorTotalB = pasajerosB*valorPasajeB;
    
    
    if(valorTotalA>valorTotalB){
        document.getElementById('ValorTotal').value= busOne;
    }
    
    else {
        document.getElementById('ValorTotal').value= busTwo;
    }

}
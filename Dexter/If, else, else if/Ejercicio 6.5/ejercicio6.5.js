//Ejercicio # 3

let busOne;
let rutaA;
let rutaB;
let pasajerosA;
let pasajerosB;
let valorPasajeA;
let valorPasajeB;
let valorTotalA;


mayorIngreso();

function mayorIngreso(){

    busOne = document.getElementById('plateOne').value;
    
    rutaA = document.getElementById('rutaA').value;
    rutaB = document.getElementById('rutaB').value;
    
    pasajerosA = Number(document.getElementById('usuariosA').value);
    pasajerosB = Number(document.getElementById('usuariosB').value);

    valorPasajeA = Number(document.getElementById('valorPasaje1').value);
    valorPasajeB = Number(document.getElementById('valorPasaje2').value);
    
    valorTotalA = (pasajerosA*valorPasajeA) + (pasajerosB*valorPasajeB);
    
    
    
    if(valorTotalA){
        document.getElementById('ValorTotal').value= valorTotalA;
        return valorTotalA;
    }
    
    else {
        document.getElementById('ValorTotal').value= "Error";
    }

}
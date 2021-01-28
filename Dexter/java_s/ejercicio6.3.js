//Ejercicio # 3

let nameOne;
let nameTwo;
let salarioWorkerA;
let salarioWorkerB;
const deduccionesMes= 0.08;
const bonificacionesMes = 0.30;
let valorDeduccionA;
let valorDeduccionB;
let valorBonoA;
let valorBonoB;
let valorTotalA;
let valorTotalB;

mayorIngreso();

function mayorIngreso(){

    nameOne = document.getElementById('nameOne').value;
    nameTwo = document.getElementById('nameTwo').value;
    
    salarioWorkerA = Number(document.getElementById('salarioA').value);
    salarioWorkerB = Number(document.getElementById('salarioB').value);
    
    valorDeduccionA = salarioWorkerA*deduccionesMes;
    valorBonoA = salarioWorkerA*bonificacionesMes;
    valorTotalA = (salarioWorkerA - valorDeduccionA) + valorBonoA; 
    
    valorDeduccionB = salarioWorkerB*deduccionesMes;
    valorBonoB = salarioWorkerB*bonificacionesMes;
    valorTotalB = (salarioWorkerB - valorDeduccionB) + valorBonoB; 

    
    if(valorTotalA>valorTotalB){
        document.getElementById('ValorTotal').value= nameOne;
        document.getElementById('moneyMore').value= valorBonoA;
        document.getElementById('moneyLess').value= valorDeduccionA;
        document.getElementById('moneyMore2').value= valorBonoB;
        document.getElementById('moneyLess2').value= valorDeduccionB;
    }
    
    else {
        document.getElementById('ValorTotal').value= nameTwo;
        document.getElementById('moneyMore2').value= valorBonoB;
        document.getElementById('moneyLess2').value= valorDeduccionB;
        document.getElementById('moneyMore').value= valorBonoA;
        document.getElementById('moneyLess').value= valorDeduccionA;
    }

}
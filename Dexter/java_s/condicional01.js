//Ejercicio # 0

//Inicio.

//Declarar variables.

let horasWork;
let horasExtra;
const valorHora = 400;
const valorExtra = 500;
let sueldoSem;
let sueldoExtra;
let totalaPagar;

Calcular (horasWork);

function Calcular()
{

    horasWork = Number(document.getElementById('time').value);

    if(horasWork <= 40)  
    { 
    sueldoSem = horasWork*valorHora;
    sueldoExtra = 0;
    totalaPagar = sueldoSem;
    //alert('El valor a pagar es:' + ' '  +  totalaPagar);
    document.getElementById('ValorSem').value= sueldoSem;    
    document.getElementById('ValorTotal').value= totalaPagar;
    return totalaPagar;
    }

    else if (horasWork <= 80)
        {
        sueldoSem = (40*valorHora);
        sueldoExtra = (horasWork - 40)*valorHora;
        totalaPagar = sueldoSem + sueldoExtra;
        //alert('El valor a pagar es:' + ' '  +  totalaPagar);
        document.getElementById('ValorSem').value= sueldoSem;    
        document.getElementById('ValorExtra').value= sueldoExtra;    
        document.getElementById('ValorTotal').value= totalaPagar;
        return totalaPagar;
        }

    else 
        {
        sueldoSem = (40*valorHora);
        sueldoExtra = (40*valorHora) + (horasWork - 80)*valorExtra;
        totalaPagar = sueldoSem + sueldoExtra;
        //alert('El valor a pagar es:' + ' '  +  totalaPagar);
        document.getElementById('ValorSem').value= sueldoSem;    
        document.getElementById('ValorExtra').value= sueldoExtra;    
        document.getElementById('ValorTotal').value= totalaPagar;
        return totalaPagar;
        }
    
}        
   
//------------------------------------------------------------------------------------->


//Ejercicio # 1

 let ageBro;
 let nameBro;
 let nameMayor = 'Hugo Alberto';
 let nameMenor = 'Carlos Mario';

 edad(ageBro);

 function edad(){

    ageBro = Number(document.getElementById('age').value);

     if(ageBro == 47){
     alert(nameMayor);
     document.getElementById('nombre').value= nameMayor;
    }

    else if(ageBro == 43){
        alert(nameMenor);
        nameBro = document.querySelector('h4');
        nameBro.innerHTML = 'El nombre de tu hermano menor es'; 
        document.getElementById('nombre').value= nameMenor;
    }

    else{
        alert('Inserta la edad correcta');
    }
 }

//------------------------------------------------------------------------------------------------------------> 


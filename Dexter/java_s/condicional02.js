'use strict'

//Ejercicio # 2

let edadPersona;
let etapaIndividuo;

etapaEdad(edadPersona);

function etapaEdad(){

    edadPersona = Number(document.getElementById('agepeople').value);
    

    if(edadPersona<=10){
        etapaIndividuo = document.querySelector('h3');
        etapaIndividuo.innerHTML = 'Usted es un niño con ' + edadPersona + ' años de edad '; 
        
    }
    

    else if(edadPersona<=15){
        etapaIndividuo = document.querySelector('h3');
        etapaIndividuo.innerHTML = 'Usted es un preadolescente con ' + edadPersona + ' años de edad '; 
       
    }

    else if(edadPersona<=18){
        etapaIndividuo = document.querySelector('h3');
        etapaIndividuo.innerHTML = 'Usted es un adolescente con ' + edadPersona + ' años de edad '; 
        
    }

    else if(edadPersona<=50){
        etapaIndividuo = document.querySelector('h3');
        etapaIndividuo.innerHTML = 'Usted es un adulto con ' + edadPersona + ' años de edad '; 
        
    }

    else if(edadPersona<0){
        etapaIndividuo = document.querySelector('h3');
        etapaIndividuo.innerHTML = 'Aún no has sido engendrado o estás en gestación'; 
        
    }

    else{
        etapaIndividuo = document.querySelector('h3');
        etapaIndividuo.innerHTML = 'Usted es un adulto mayor con ' + edadPersona + ' años de edad '; 
        
    }

    
}
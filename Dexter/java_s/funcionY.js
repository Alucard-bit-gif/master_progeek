'use strict'
//Ejercicio #1

//Inicio

//Declarar Variables
//Nota: aplicar float;

let area;
let base;
let altura;

function Calcular(){

//Leer variables

//Ingresar base.
base= parseFloat(document.getElementById('base').value);

//Ingresar altura.
altura= parseFloat(document.getElementById('altura').value);

//Invocar función
area = areaRectangulo(base,altura);

//Imprimir

document.getElementById('totalarea').value= area;

}

//Procedimiento


function areaRectangulo(base,altura){

    area = base*altura;
    return area;
}


//Final

//-------------------------------------------------------------------------------------------------------->

//Ejercicio #2//

//Inicio

//Declarar Variables
///Nota: aplicar float

let radio;
let radio2;
let areaCirc;
let numeroPi=3.1416;

function CalcularA(){

//Leer variables

//Ingresar radio
radio = Number(document.getElementById('radio').value); 


//Invocar Función
areaCirc = areaCircunferencia(numeroPi,radio2);
radio2 = calculoRadio2(radio); 


//Imprimir
document.getElementById('totalarea2').value= numeroPi*radio2;

}

//Procedimiento

function areaCircunferencia(numeroPi,radio2){

areaCirc = numeroPi*radio2;
return areaCirc;

}

function calculoRadio2(radio){

    radio2 = radio*radio;
    return radio2;
    
    }

//Final

//---------------------------------------------------------------------------------------------------------->

//Ejercicio # 3//

//Inicio

//Declarar variables

//Nota: aplicar float;

let areaT;
let baseB;
let alturaA;

function CalcularB(){

//Leer variables

//Ingresar base.
baseB= parseFloat(document.getElementById('base1').value);

//Ingresar altura.
alturaA= parseFloat(document.getElementById('altura1').value);

//Invocar función
areaT = areaTriangulo(baseB,alturaA);

//Imprimir

document.getElementById('totalarea3').value= areaT;

}

//Procedimiento


function areaTriangulo(baseB,alturaA){

    areaT = (baseB*alturaA)/2;
    return areaT;
}

//Final

//-------------------------------------------------------------------------------------------------->

//Ejercicio #4//

//Inicio

//Declarar Variables
///Nota: aplicar float

let metrosTela;
const numeroPulgas=0.0254;
let pulgadaTela;

function CalcularC(){

//Leer variables

//Ingresar metros
metrosTela = parseFloat(document.getElementById('metros').value); 


//Invocar Función
pulgadaTela = calculoPulgada(metrosTela);
 

//Imprimir
document.getElementById('totalarea4').value= pulgadaTela;

}

//Procedimiento

function calculoPulgada(metrosTela){

pulgadaTela = metrosTela/numeroPulgas;
return pulgadaTela;

}

//Final

//-------------------------------------------------------------------------------------------------->

//Ejercicio # 5//


// Declarar Variables


let valorHora;
let num_horas;
let num_minutes;
let horaCompleta;
let cobroEstacion;



function CalcularD(){

//Leer Variables

//Registrar valor hora
valorHora = Number(document.getElementById('precio').value); 

//Registrar número de horas
num_horas = Number(document.getElementById('horas').value); 

//Registrar número minutos
num_minutes = Number(document.getElementById('mints').value); 

//Invocar función
horaCompleta = calculoHoraC(num_horas, num_minutes);
cobroEstacion = calculoPrecioE(horaCompleta, valorHora);

//Imprimir
document.getElementById('totalarea5').value= cobroEstacion;

}


//Procedimiento

function calculoHoraC(num_horas,num_minutes){

    horaCompleta= num_horas + (num_minutes/60) + (1 - (num_minutes/60)); 
    return horaCompleta;

}

function calculoPrecioE(horaCompleta,valorHora){

    cobroEstacion= valorHora*horaCompleta;
    return cobroEstacion;

}

//Final 

//-------------------------------------------------------------------------------------------------------->

// Ejercicio # 6

//Inicio

//Declarar variables

const pSandalias= 267000;
let qSandalias;
const pTenis= 355000;
let qTenis;
const pMocasines=244000;
let qMocasines;
const porcentajeiva = 0.19;
const porcentajedesc = 1.08;
let totalvzap;
let ventadesc;
let desc;
let iva;
let ventaFinal;
let nameCliente;

function CalcularG(){

    //Leer variables
    
    //Ingresar nombre cliente.
    nameCliente = document.getElementById('user').value;
    
    //Ingresar cantidad Sandalias.
    qSandalias = Number(document.getElementById('sandia').value); 

    //Ingresar cantidad Tenis.
    qTenis = Number(document.getElementById('tenis').value); 

    //Ingresar cantidad Mocasines.
    qMocasines = Number(document.getElementById('mocas').value); 

    //Invocar función.

    totalvzap = sumazap(qSandalias,qTenis,qMocasines);
    ventadesc = zapatosDesc(totalvzap, porcentajedesc);
    desc= totalDesc(totalvzap,ventadesc);
    iva= totalIVA(ventadesc, porcentajeiva);
    ventaFinal = sumaIVAZAP(ventadesc, iva);

    //Imprimir.

    document.getElementById('factura').value= `Cliente: ${nameCliente}
                                               Venta sin descuento: COP$ ${totalvzap} 
                                               Descuento: COP$ ${desc} 
                                               Venta con descuento: COP$ ${ventadesc} 
                                               Venta Neta: COP$ ${ventaFinal}`;
    
    
}

    //Procedimiento.
    
    var sumazap = function(qSandalias,qTenis,qMocasines){
    totalvzap = (qSandalias*pSandalias) + (qTenis*pTenis) + (qMocasines*pMocasines);
    return totalvzap;
    }

    function zapatosDesc(totalvzap, porcentajedesc){
        ventadesc= parseInt(totalvzap/porcentajedesc);
        return ventadesc;
    }

    function totalDesc(totalvzap, ventadesc){
    desc= totalvzap - ventadesc;
    return desc;
    }

    function totalIVA(ventadesc, porcentajeiva){
        iva= ventadesc*porcentajeiva;
        return iva;
    }

    function sumaIVAZAP(ventadesc, iva){
        ventaFinal= ventadesc + iva;
        return parseInt(ventaFinal);
    }

//Final

//--------------------------------------------------------------------------------------------------------->

    //Ejercicio # 7//

    //Inicio

    //Declarar variables

    let litros;
    let precioGalon;
    let litrosGalon;
    let ventaGalon;
    const qGalon = 3.785;

    function proyectarF(){

    //Leer variables

    //Ingresar numero litros
    litros = Number(document.getElementById('cubicos').value); 

    //Ingresar precio galon
    precioGalon = Number(document.getElementById('galon7').value);

    //Invocar función
    ventaGalon = sumaPrecioGalon(litrosGalon, precioGalon);
    litrosGalon = totalLitrosGalon(litros);

    //Imprimir

    document.getElementById('totalarea7').value= litrosGalon*precioGalon;


}

    //Procedimiento

     function sumaPrecioGalon(litrosGalon, precioGalon){
         ventaGalon = litrosGalon*precioGalon;
         return ventaGalon;
     }

     function totalLitrosGalon(litros){
        litrosGalon = parseFloat(litros*qGalon);
        return litrosGalon;
    }

    //Final

    //-------------------------------------------------------------------------------------------------->

    //Ejercicio # 8//

    //Inicio

    //Declarar variables

    let kilm;
    let prekilm;
    let pasaje;

    function CalcularH(){

    //Ingresar numero kilómetros
    kilm = Number(document.getElementById('distn').value); 

    //Ingresar precio/kilómetro
    prekilm = Number(document.getElementById('precioK').value);

    //Invocar función
    pasaje= calcularTarifa(kilm, prekilm);
    

    //Imprimir

    document.getElementById('totalarea8').value= kilm*prekilm;


}

    //Procedimiento

     function calcularTarifa(kilm, prekilm){
         pasaje = kilm*prekilm;
         return pasaje;
     }


    //Final
//------------------------------------------------------------------------------------------------------->
    
//Ejercicio # 9//

    //Inicio

    //Declarar variables

    let numKilometros;
    let veloz; 
    let tiempo;

    function CalcularI(){

    //Ingresar numero litros
    numKilometros = Number(document.getElementById('distance').value); 

    //Ingresar precio galon
    veloz = Number(document.getElementById('speed').value);

    //Invocar función
    tiempo= calcularTiempo(numKilometros, veloz);
    

    //Imprimir

    document.getElementById('totalarea9').value= numKilometros/veloz;


}

    //Procedimiento

     function calcularTiempo(numKilometros, veloz){
         tiempo = numKilometros/veloz;
         return tiempo;
     }


    //Final
     //----------------------------------------------------------------------------------------------->
     
    //Ejercicio # 10//

    //Inicio

    //Declarar variables

    let timeMinutes;
    let costMinutes; 
    let totalCost;

    function CalcularJ(){

    //Ingresar numero minutos
    timeMinutes = Number(document.getElementById('twominutes').value); 

    //Ingresar precio minuto
    costMinutes = Number(document.getElementById('tomidnight').value);

    //Invocar función
    totalCost = calcularPago(timeMinutes, costMinutes);
    

    //Imprimir

    document.getElementById('totalarea10').value= timeMinutes*costMinutes;


}

    //Procedimiento

     function calcularPago(timeMinutes, costMinutes){
         totalCost = timeMinutes*costMinutes;
         return totalCost;
     }


    //Final

//------------------------------------------------------------------------------------------------->

//Ejercicio # 11//

    //Inicio

    //Declarar variables

    let kiloVatios;
    let valorKiloW; 
    let totalPagoKw;

    function CalcularK(){

    //Ingresar numero minutos
    kiloVatios = Number(document.getElementById('kilowatts').value); 

    //Ingresar precio minuto
    valorKiloW = Number(document.getElementById('costwatts').value);

    //Invocar función
    totalPagoKw = calcularPagoKw(kiloVatios, valorKiloW);
    

    //Imprimir

    document.getElementById('totalarea11').value= kiloVatios*valorKiloW;


}

    //Procedimiento

     function calcularPagoKw(kiloVatios, valorKiloW){
         totalPagoKw = kiloVatios*valorKiloW;
         return totalPagoKw;
     }


    //Final

//-------------------------------------------------------------------------------------------------->

//Ejercicio # 12//

    //Inicio

    //Declarar variables

    let priceObjectX;
    const porcentLess=1.20; 
    let priceLess;
    const taxIVA=0.19;
    let ivaObjectX;
    let finalObjectX;

    function CalcularL(){

    //Ingresar precio artículo
    priceObjectX = Number(document.getElementById('SuperX').value); 


    //Invocar función
    priceLess = calcularLess(priceObjectX, porcentLess);
    ivaObjectX = calcularIVA(priceLess, taxIVA)
    finalObjectX = calcularFinal(priceLess, taxIVA);
    
    //Imprimir

    document.getElementById('PriceX').value= priceLess;
    document.getElementById('totalarea12').value= priceLess + ivaObjectX;


}

    //Procedimiento

    function calcularFinal(priceLess, ivaObjectX){
        finalObjectX = priceLess + ivaObjectX;
        return parseInt(finalObjectX);
    }

    function calcularIVA(priceLess, taxIVA){
        ivaObjectX = priceLess * taxIVA
        return parseInt(ivaObjectX)
    }

    
    function calcularLess(priceObjectX, porcentLess){
         priceLess = priceObjectX/porcentLess;
         return parseInt(priceLess);
     }


    //Final
     //------------------------------------------------------------------------------------------------>

    //Ejercicio # 13//

    //Inicio

    //Declarar variables

    let salarioMes;
    const ahorroPorcent = 1.15;
    let qahorroSem;
    const semanasMes = 4; 
    let qahorroMes;
    const mesesAño = 12;
    let ahorroAnual;


    function CalcularX14(){

    //Leer variables

    //Ingresar salario por Mes
    salarioMes = Number(document.getElementById('EnterX').value); 


    //Invocar función
    qahorroSem = calcularSem(salarioMes, ahorroPorcent)
    qahorroMes = calcularMes(qahorroSem, semanasMes);
    ahorroAnual = calcularAnual(qahorroMes, mesesAño);
   
    
    //Imprimir

    document.getElementById('EnterX14').value= qahorroMes*mesesAño;
    


}

    //Procedimiento

    function calcularSem(salarioMes, ahorroPorcent){
        qahorroSem = salarioMes  - (salarioMes/ahorroPorcent);
        return parseInt(qahorroSem);
    }

    function calcularMes(qahorroSem, semanasMes){
        qahorroMes = qahorroSem * semanasMes
        return parseInt(qahorroMes)
    }

    
    function calcularAnual(qahorroMes,mesesAño){
         ahorroAnual = qahorroMes*mesesAño;
         return parseInt(ahorroAnual);
     }


    //Final

     

//Archivo para funciones a entregar miércoles*/

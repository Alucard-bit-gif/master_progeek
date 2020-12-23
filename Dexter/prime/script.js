'use strict';

//Ejercicio # 1//

const rQOne= document.querySelector('.rQOne');

const xNúmero1= 5;
const wNúmero2= 7;
const zZZZZZZ3= true;
const rParcial11= `${xNúmero1+wNúmero2}`;
const rParAlfa= zZZZZZZ3 && rParcial11;
const zZZZZZZ4= false;
const rParcial22= `${2*wNúmero2}`;
const rParZeta= zZZZZZZ4 || rParcial22;
const rFinalGama= `${parseInt(rParAlfa) / parseInt(rParZeta)}`;


rQOne.innerHTML= ("El resultado es" + "  " + (rFinalGama));

//----------------------------------------------------------->//

//Ejercicio # 2//


let rQTwo= document.querySelector('.rQTwo');

let a = 6;
let b = 66;
let r = a*b;

rQTwo.innerHTML= ("El producto final de las variables a*b es igual a " + "" + (r));

//-------------------------------------------------------------->//

//Ejercicio # 3//

let rQThree= document.querySelector('.rQThree');

let bC = 1977;
const aD = 2020;
let rAdBc = aD - bC

rQThree.innerHTML= "Yo Sebastián tengo " + " " + rAdBc + "años muy bien cumplidos";

//-------------------------------------------------------------------->//

//Ejercicio # 4//

let rQFour= document.querySelector('.rQFour');

let n1= 4.3;
let n2 = 3.5;
let n3 = 2.8;

let rQ4= n1+n2+n3;

let Promedio = (rQ4)/3;
let PromedioF = Promedio.toFixed(2);
 
rQFour.innerHTML= "He obtenido como promedio" + " " + PromedioF + " " + "pasé con lo preciso, pero pasé."

//----------------------------------------------------------------------------------->


//Ejercicio # 5//


let rQFive= document.querySelector('.rQFive');


var gradosC= 30;
const gradosF= (gradosC*1.8) + 32;

rQFive.innerHTML= "30 C° grados celcius equivalen a" + " "  + gradosF + "F° farenheit." 


//Final

//---------------------------------------------------------------------------------------->

//Ejercicio # 6//

/*var usuario= parseInt(prompt('Ingresa el número 666'));

let rQSix= document.querySelector('.rQSix');

var nUsuario = usuario;
var rUsuario = nUsuario + 10;

rQSix.innerHTML = rUsuario;*/

//Final

//------------------------------------------------------------------------------------------>

//Ejercicio # 7//

//Declarar usuario, temperatura y resultado;
//Aplicar parseInt y prompt

/*var usuario2= parseInt(prompt('Ingresa tu temperatura'));*/

var rQSeven= document.querySelector('.rQSeven');

var cUsuario= usuario2; 
var tUsuario = cUsuario + 10;

rQSeven.innerHTML= "Tu temperatura es de" + " " + tUsuario + " grados C° " + "no olvides llamar a la EPS."

/*Resultado = ej. 36+10;
Resultado = 46 C°
Mostrar resultado*/

//----------------------------------------------------------------------------------------------->

//Ejercicio # 8//

//Inicio

// Declarar nombre, horas, valor;

//Leer horas y valor;

   var nEmpleado = "Thomas Gabriel Warrior";
   var horasW =  240;
   var valorH = 30000;

//Proceso;
   var eSueldo = horasW*valorH;
 
 //Resultado;  

   var rQEight = document.querySelector('.rQEight');
   
   rQEight.innerHTML = `El señor ${nEmpleado} 
                        ha ganado la suma de COP$ ${eSueldo} 
                        producto de ${horasW} horas, a razón de COP$ ${valorH} hora/labor`;

//Sueldo = ej.horas(240)*ej.valor(30.000)
//Sueldo = 7.200.000

//Final.

//------------------------------------------------------------------------------------------------->

//Ejercicio # 9//

//Inicio

//Declarar pPdto e iva;

//Leer pPdto e iva;

var pPdto = 25000;
var iva = 0.19;

//Proceso(multiplicación) = pPdto * 0,19;

var pIVA= parseInt(`${pPdto*iva}`);

//Proceso(suma) = pPdto + pIVA;  

var pGravado= `${pIVA + pPdto}`;

/*Resultado1 = ej. pPdto = 25000*0,19;
Resultado1 = 4750;
Resultado2(suma) = 25.000 + 4750;.
Resultado(pdto.gravado) = 29750*/

var rQNine = document.querySelector('.rQNine');
rQNine.innerHTML = `El valor final del producto es de COP$ ${pGravado} respectivamente`;

//Final

//--------------------------------------------------------------------------------------->

//Ejercicio # 10//

//Declarar b1; a1; r1.

/*
var b1;
var a1;
var r1;
*/

//Leer b; a;
var b1 = 43;
var a1 = 72;

//Proceso

var r1 = b1*a1;

//Resultado (r1) = ej. 43*72;
//Resultado (r1) = ej. 3096

var rQTen = document.querySelector('.rQTen');
rQTen.innerHTML = `El área de un rectangulo es de ${r1} unidad de medida (m. || cm.)`;

//Final

//Ejercicio # 11//

//Declarar r, d, Pi;


/*
let rr;
let r2;
let d;
let Pi;
let cArea;
*/


//Leer d, Pi

let d = 24;
let Pi = 3.1416;

//Procedimiento

let rr = d/2;
let rr2 = (rr*rr);
let cArea = Pi*(rr2);

//Resultado

const rQOnce = document.querySelector('.rQOnce');
rQOnce.innerHTML = "El área obtenida de la circunferencia es" + " "+ cArea + " " +
                    "metros o centimetros, según sea el caso";

//Final

/*Leer r = d/2; 
Leer Pi = 3,1416;
Leer d = ej. 24
Leer cArea = Pi*(r2);
Resultado r (división) = 24/2;
r = 12;
Resultado r2 (potenciación)  = 12*12;
r2 = 144;
c.Área (multiplicación) = 3,1416*(144);  
c.Área = 452.3904
*/

//------------------------------------------------------------------------------------------------------>

//Ejercicio # 12//

/*
Declarar base; alt; aTr.
Leer b = 43;
Leer a = 72;
Resultado = (b*a)/2;
aTr = (43*72)/2;
aTr = 3096/2;
Resultado(aTr) = 1548 
*/

//Inicio

/*

//Declarar

let base;
let alt;
let aTr;   

*/

//Leer

let base = 43;
let alt = 72;

//Procedimiento

let aTr = (base*alt)/2;

//Resultado

let rQDoce = document.querySelector('.rQDoce');
rQDoce.innerHTML = "El area del triangulo es igual a" + " " +  aTr + " " + 
                    "según los datos ingresados";

//Final

//-------------------------------------------------------------------------------------------------->

//Ejercicio # 13//


/*
Declarar m; p;
Leer m = ej. 60;
Leer p = 0.0254;
Resultado (p) = m/p;
p = 60/0.0254;
Resultdo(p) = 2362.20
*/

//Inicio

//Declarar

/*
const pulg;
let metro;
let rP;
*/

//Leer

let metro = 60;
let pulgada = 0.0254;

//Procedimiento
let rP =  metro/pulgada;
let rP2 = rP.toFixed(2);

//Resultado

let rQ13 = document.querySelector('.rQ13');
rQ13.innerHTML = "La cantidad de pulgadas que debes pedir es de " + " " + rP2 + " " + 
                  "de acuerdo a los metros requeridos";

//Final

//--------------------------------------------------------------------------------------->

//Ejercicio # 14//

/*
Declarar valorH; horaI; horaS; horaM;
Leer  valorH= 2000;
Leer horaI = 7:25;
Leer horaS = 9:45;
Resultado (tiempoG) = 9:45 - 7:25 = 2h 20m;
horas(h) = 2;
minutos(m) = 20;
Resultado (fH) = 2 + (20/60) + (1 - (20/60)) ;
totalfH = 2 + 0.33 + (1 - 0.33)
totalfH = 2.33 + 0.67 = 3h.
Resultado (cobroE) = 2000 * 3;
cobroE = 6000.*/

//Inicio

//Declarar

/* let valorH1;
   let horaI;
   let horaS;
   let tiempoG;
   let horas;
   let minutos;
   let cobroE;
   let fH;
*/

//Leer

let valorH1 = 2000;
let horaI = 7.25;
let horaS = 9.45;


//Procedimiento

let tiempoG = 9.45 - 7.25;
let horas = 2;
let minutos = 20;
let fH = (2 + (20/60)) + (1 - (20/60));
let cobroE = fH * valorH1;

//Resultado

let rQ14 = document.querySelector('.rQ14');
rQ14.innerHTML = "El valor del estacionamiento es de " + " " + "COP$" + cobroE + " pesos" + " " + 
                "por 2h 20 min";    

//Final 

//---------------------------------------------------------------------------------------------->

//Ejercicio # 15

/*
declarar variables psand; ptenis; pmocas; desc; iva.
leer psand = 267.000;
leer ptenis = 355.000;
leer pmocas = 244.000;
leer iva = 0,19;
leer desc = 1,08;
(totalvzap) = 267.000 + 355.000 + 244.000 = 866.000;
parseInt(ventadesc) = 866.000/1.08 = 801851
(desc) = 866000 - 801851 = 64149;
ventafinal = 801851 * 0,19 = 152352
ventafinal = 801851+152352 = 954203.
*/

//Inicio

//Declarar

/*
let psand;
let ptenis;
let pmocas;
let desc;
let niva;
*/

//Leer
let psand = 267000;
let ptenis = 355000;
let pmocas = 244000;
let niva = 0.19;
let desc = 1.08;

//Procedimiento

let cliente= "José Afonso Madrigal Llamas";
let totalvzap = psand + ptenis + pmocas;
let ventadesc = totalvzap/desc;
let descT = totalvzap - ventadesc;
let ventafinal = ventadesc * niva;
let ventaTotal = ventadesc + ventafinal;
let dos_decimales = ventaTotal.toFixed(2);

//Resultado


 

let rQ15 = document.querySelector('.rQ15');
rQ15.innerHTML = `Cliente: ${cliente} <br> 
                  Venta sin descuento: COP$ ${totalvzap} <br>
                  Descuento: COP$ ${descT} <br>
                  Venta con descuento: COP$ ${ventadesc} <br>
                  Venta Neta: COP$ ${dos_decimales}`;










/*Fichero 3 para completar laboratorio*/

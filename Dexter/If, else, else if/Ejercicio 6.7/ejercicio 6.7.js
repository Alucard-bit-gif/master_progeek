//Ejercicio # 3//

document.getElementById('resultado').style.display="none";

let numeroUno;
let numeroDos;
let numeroTres;
let numeroMayor;

function Calcular(){


    document.getElementById('resultado').style.display="block";
    document.getElementById('survey-form').style.display="none";    

    //Leer variables.

//Ingresar numero.

numeroUno = Number(document.getElementById('numero1').value);
numeroDos = Number(document.getElementById('numero2').value);
numeroTres = Number(document.getElementById('numero3').value);



//Invocar funcion.

numeroMayor = totalNumero();

//Imprimir


document.querySelector('#numeroMayor').innerHTML = numeroMayor;    

}

function totalNumero()
{
    if (numeroUno>numeroDos && numeroUno>numeroTres)
    {
        numeroMayor = numeroUno;
        return numeroMayor;
    }

    else if(numeroDos>numeroUno && numeroDos>numeroTres)
    {
        numeroMayor = numeroDos;
        return numeroMayor;
    }

    else if(numeroTres>numeroUno && numeroTres>numeroDos)
    {
        numeroMayor = numeroTres;
        return numeroMayor;
    }

    else
    {
        alert('error');
    }


}







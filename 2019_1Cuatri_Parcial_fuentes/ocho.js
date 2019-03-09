function mostrar()
{
    var letra; 
    var numero; 
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var promedioPositivos;
    var acumuladorNegativos = 0;
    var numMax;
    var numMin;
    var letraMax;
    var letraMin;
    var flag = 1; 

    do
    {
        letra = prompt("Ingrese una letra");

        numero = parseInt(prompt("Ingrese un número"));
            while ( !(numero >= -100 && numero <= 100) || isNaN(numero)) // o se puede poner while ( numero < -100 || numero > 100)
            {
                numero = parseInt(prompt("Error. Ingrese un número válido"));
            }
        
        //Evaluo si es cero
        if ( numero == 0)
        {
            contadorCeros++;
        }
        else
        {   //Evaluar positivos y negativos
            if ( numero > 0)
            {
                acumuladorPositivos = acumuladorPositivos + numero;
                contadorPositivos++;
            }
            else
            {
                acumuladorNegativos = acumuladorNegativos + numero;
            }  
            //Evaluo los pares e impares
            if ( numero % 2 == 0)
            {
            contadorPares++;
            }    
            else 
            {
            contadorImpares++; 
            }
        }

        if (flag == 1 || numero > numMax)
        {
            numMax = numero;
            letraMax = letra;
        }
        if ( flag == 1 || numero < numMin)
        {
            numMin = numero;
            letraMin = letra;
            flag = 0;
        }

        
    }while (confirm("¿Quiere seguir ingresando datos?"));

    if (contadorPositivos > 0)
    {
        promedioPositivos = acumuladorPositivos / contadorPositivos;
    }
    

    document.write("La cantidad de números pares es de: " + contadorPares + "<br>");
    document.write("La cantidad de números impares es de: " + contadorImpares + "<br>");
    document.write("La cantidad de ceros es de: " + contadorCeros + "<br>");
    document.write("El promedio de todos los positivos es de: " + promedioPositivos + "<br>");
    document.write("La suma de todos los números negativo es de: " + acumuladorNegativos + "<br>");
    document.write("El numero máximo es: " + numMax + " y su letra máximo es: " + letraMax + "<br>");
    document.write("El numero mínimo es: " + numMin + " y su letra mínima es: " + letraMin);



}

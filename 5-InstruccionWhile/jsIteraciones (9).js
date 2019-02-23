function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta = 'si';
	var cantidad = 0;

	while(respuesta != 'no')
	{
		numero = prompt("Ingrese un numero");
        if (cantidad == 0)
        	{ 
        		maximo = numero;
        	    minimo = numero;
        } 
        else 
        {
        	if (numero > maximo)
        {  
	        maximo = numero;
	    }
	    if (numero < minimo)
        { 
             minimo = numero;
        }         	
	cantidad++;
	respuesta = prompt("Desea ingresar otro numero?");
    }
    document.getElementById("minimo").value;
    document.getElementById("maximo").value;
     
}




}//FIN DE LA FUNCIÓN
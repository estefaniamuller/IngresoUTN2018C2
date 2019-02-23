
function Mostrar()
{
	var numero = prompt ("ingrese un numero entre 0 y 9. ");
	while (!(numero >= 0 && numero <= 9) )
	{
		alert ("No ha ingresado un numero correcto. ");
		numero = prompt("ingrese un numero entre 0 y 9. ");
	}
		document.getElementById("Numero").value = numero;
}


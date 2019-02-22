function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(!( numero >= 0 && numero <= 9) ){

		numero = prompt("no ha ingreso un numero correcto, ingreselo nuevamente. ");
		}
		document.getElementById("Numero").value = numero;






}//FIN DE LA FUNCIÓN
function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
while ( !(sexo == "f" || sexo == "m" ) )
    {
    sexo = prompt (" Usted no ha ingresado una opcion incorrecta. Ingrese f ó m ");
    }
      document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
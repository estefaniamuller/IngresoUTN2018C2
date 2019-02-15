function mostrar()
{
var edad = parseInt(document.getElementById("edad").value);
var estado = document.getElementById("estadoCivil").value;
if (edad < 18 && estado != "Soltero"){
    alert(" Usted es muy pequeño para no ser Soltero");}

	


}//FIN DE LA FUNCIÓN
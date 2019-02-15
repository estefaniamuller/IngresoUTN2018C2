function mostrar()
{
    var edad;
    edad = parseInt(document.getElementById("edad").value);
    if (edad >=18)
     {
        alert ( "usted es un adultx");
        }
        else {
           if (edad < 13){
                alert ("usted es un niñx");
                }
                else{
                   alert   ("usted es un adolescente");
                    }
    }






}//FIN DE LA FUNCIÓN
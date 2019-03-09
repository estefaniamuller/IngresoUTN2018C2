function mostrar()
{
    var altura;
    var sexo;
    var acumuladorAltura = 0;
    var contadorAltura = 0;
    var promedio;
    var alturaMin;
    var sexoMin;
    var femeninoMayor190 = 0;
    var flag = 1;

    for ( var i = 0; i < 5; i++)
    {
        altura = parseInt(prompt("Ingrese la altura"));

            while(altura < 0 || altura > 250)
            {
                altura = parseInt(prompt("Error. Ingrese una altura válida"));
            }

        sexo = prompt("Ingrese el sexo");

            while(!(sexo == "f" || sexo == "m"))
            {
                sexo = prompt("Error. Ingrese un sexo válido");
            }

        if ( altura >= 0 && altura <= 250)
        {
            acumuladorAltura = altura + acumuladorAltura;
            contadorAltura++;
        }
    
        if (sexo == "f" && altura >= 190)
        {
            femeninoMayor190++;
        }    

        if (altura < alturaMin || flag == 1)
        {
            alturaMin = altura;
            sexoMin = sexo;
            flag = 0;
        }


    }

    promedio = acumuladorAltura / contadorAltura;

    alert ( "A- " + promedio + "\nB- " + alturaMin + " y " + sexoMin + "\nC- " + femeninoMayor190);

}

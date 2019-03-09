/*Bienvenidos (SOLO SWITCH). 
una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de dias , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es america tiene un 50% de descuento y si ademas paga por debito se le agrega un 10% mas de descuento 
Si es africa tiene un 60% de descuento y si ademas paga por mercadoPago o efectivo se le agrega un 15% mas de descuento 
Si es europa tiene un 20% de descuento y si ademas paga por debito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20%*/

function mostrar()
{
    var continente = document.getElementById("Contienente").value;
    var dias = parseInt(prompt("Ingrese la cantidad de días:"));
    var medioDePago = document.getElementById("MedioDePago").value;
    var descuento = 0;
    var precioPorDia = 100;
    var precioInicial = 0;
    var precioFinal = 0;
    var descuentoText = "porcentaje";

    precioPorDia = dias * 100;

    switch(continente)
    {
        case "América":
            descuento = 50;

                switch(medioDePago)
                {
                    case "Débito": 
                        descuento += 10;
                break;
                }
            precioFinal = precioInicial - precioInicial * descuento / 100;
        break;
        
        case "África":
            descuento = 60;
                switch(medioDePago)
                {
                    case "MercadoPago":
                    case "Efectivo":
                        descuento += 15;
                    break;
                }

            precioFinal = precioInicial - precioInicial * descuento / 100;
        break;
        
        case "Europa":
                descuento = 20;

                    switch(medioDePago)
                    {
                        case "Débito":
                            descuento += 15;
                            break;
                        case "MercadoPago":
                            descuento += 10;
                            break;
                        default:
                            descuento += 5;
                            break;
                    }

            precioFinal = precioInicial - precioInicial * descuento / 100;
        break;

        default: 
           descuento = -20;
           descuentoText = "aumento";
        break;  

    }
	

    alert("Precio Inicial: " + precioInicial + ". Porcentaje de " + descuentoText + " : " + Math.abs(descuento) + "%. Precio Final: " + precioFinal);

}

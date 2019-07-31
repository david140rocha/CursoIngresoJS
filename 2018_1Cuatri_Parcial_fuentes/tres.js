function mostrar()
{
    var precio;
    var descuento;
    var porcentaje;
    var resultado;

    precio = parseInt(prompt("presio"));
    
    descuento = parseInt(prompt("porsentaje de descuento"));

    porcentaje = precio * descuento / 100 ;
    resultado = precio - porcentaje;
    
    alert ("El descuento es de : " + porcentaje);
    document.getElementById("elPrecioFinal").value = resultado;






}
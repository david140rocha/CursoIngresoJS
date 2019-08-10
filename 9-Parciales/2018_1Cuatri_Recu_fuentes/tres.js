function mostrar()
{

    var precio = parseInt(prompt('ingrese el precio'));
    var descuento = parseInt(prompt('ingres el descuento'));
    porcentaje = precio * descuento / 100;
    preciofinal = precio + porcentaje;

    document.getElementById('elPrecioFinal').value = preciofinal

}

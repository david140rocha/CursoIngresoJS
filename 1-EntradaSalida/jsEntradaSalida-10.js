/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var porcentaje;

    sueldo = parseInt(document.getElementById("importe").value);

    porcentaje = 10 * sueldo / 100 ;

    sueldo = sueldo - porcentaje;

    resultado = document.getElementById("resultado").value = sueldo;


	
}

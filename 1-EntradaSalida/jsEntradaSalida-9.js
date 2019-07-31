/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var sueldo;
 var porcentaje;

 sueldo = parseInt(document.getElementById("sueldo").value);

 porcentaje = 10 * sueldo / 100 ;

 alert ("EL porcentaje de 10% de su sueldo es: " + porcentaje )
  
 sueldo = sueldo + porcentaje ;

 resultado = document.getElementById("resultado").value = sueldo;
	
}

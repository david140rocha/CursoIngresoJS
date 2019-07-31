/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
   var nombre;

	nombre = prompt(document.getElementById("elNombre").value);

	document.getElementById("elNombre").value = nombre;
    //alert ("su nombre es "+ nombre); ESTO ESTABA MAL PERO ....BUENO LO DEJO PARA recordar 
}


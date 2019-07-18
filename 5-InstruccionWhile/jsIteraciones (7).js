function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var seguir ='si';

	while(seguir == "si")  {
	numero = parseInt(prompt("ingrese el numero deseado"));
    while (isNaN(numero)){
		alert ("no ingresaste un numero");
		numero = parseInt(prompt("ingrese el numero deseado"));
	}
		acumalador = acumulador + numero ;
		contador = contador + 1;
		seguir = prompt("¿ quiere continuar sumando?");
		}               
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
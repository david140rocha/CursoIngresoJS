function mostrar()
{
    var numero;
	var acumulador= 0;
	var contador= 0;
	var seguir ='si';

	 do {
	numero = parseInt(prompt("ingrese el numero"));

        while (isNaN(numero))  {
		alert ("no ingresaste un numero");
		numero = parseInt(prompt("ingrese un numero"));
		 }
		 
		acumulador = acumulador + numero ;
		contador = contador + 1;
		seguir = prompt("¿quiere continuar sumando?");
	}while(seguir == "si");          
	     
 document.getElementById('suma').value=acumulador;
 document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/// TAMBIEN SE PUEDE HACER DE ESTA MANERA,DE LAS DOS MANERAS ESTA BIEN 


//while(seguir == "si")  {
///	numero = parseInt(prompt("ingrese el numero"));

   //     while (isNaN(numero))  {
	//	alert ("no ingresaste un numero");
	//	numero = parseInt(prompt("ingrese un numero"));
	//	 }
	//	 
	//	acumulador = acumulador + numero ;
	//	contador = contador + 1;
	//	seguir = prompt("¿quiere continuar sumando?");
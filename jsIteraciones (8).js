function mostrar()
{
	var positivo =0;
	var negativo =1;
	var numero ;          
	var contadorNeg = 0;        //numero que se va ingresar en la caja de texto 
	var respuesta ='s';
	
	while (respuesta == "s") {     
		numero = parseInt(prompt("ingrese un numero"));
		 while (isNaN(numero)) { 
		 alert("el dato que ingresaste no es numero ")
		 numero = parseInt(prompt("ingrese un numero"));
		 }
	 if (numero < 0)  {
	 negativo = negativo * numero ;
	 contadorNeg = contadorNeg + 1 ;      // averiguar como usar el contador de negativos
	 
	 } 
	 else  {                           // if (numero > 0 )  { tambien puede funcionar de esta manera
	 positivo = positivo + numero ; 
	  }
	 respuesta = prompt("¿quiere continuar sumando?");	
	}

    document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
	//document.getElementById('producto').value = contadorNeg;

}//FIN DE LA FUNCIÓN        
//
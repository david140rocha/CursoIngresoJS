function mostrar()
{  
	 var respuesta = 's';
	var numero = 0 ;
	var negativos = 0;
	var positivos = 0;
	var cantPos = 0 ;
	var cantNeg = 0;
	var cantCeros = 0;
	var numPares = 0;
	var promPos ;
	var promNeg;
	var diferencia;	
	
	do{
	    numero = parseInt(prompt("ingrese un numero"));
	    while (isNaN(numero)) { 
	     alert("el dato que ingresaste no es numero ");
	     numero = parseInt(prompt("ingrese un numero"));
		 } 
		 if ( numero >= 1) {
			positivos = positivos + numero ;
			cantPos = cantPos + 1 ;
		}
		 else if (numero < 0) { 
			negativos = negativos + numero ;
			cantNeg = cantNeg + 1 ;
		 }
		 else if (numero == 0)  {
			 cantCeros = cantCeros + 1 ;
		 }
		 else if ( numero % 2 == 0)  {
			 numPares = numPares + 1;
		 }
	 respuesta = prompt("quiere ingresar otro numero?");
	}while (respuesta == 's');
	
	promPos = positivos / cantPos ;
	promNeg = negativos / cantNeg ;
	diferencia = positivos + negativos ;

	console.log
	(" 1-La suma de positivos es: " + positivos,
	"\ 2-La suma de negativos es: " + negativos,
	"\ 3-Cantidad de positivos es: " + cantPos,
	"\ 4-Cantidad de negativos es: " + cantNeg,
	"\ 5-Cantidad de ceros es: " + cantCeros,
	"\ 6-Cantidad de numeros pares es: " + numPares,
	"\ 7-El promedio de los positivos es: " + promPos,
	"\ 8-El promedio de Negativos es: " + promNeg,
	"\ 9-Diferencia entre Positivos y Negativos es: " + diferencia);
}//FIN DE LA FUNCIÓN
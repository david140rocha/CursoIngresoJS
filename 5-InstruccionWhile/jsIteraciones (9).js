function mostrar()
{

	var numero;
	var minimo;
	var maximo;// declarar variables
	var seguir = "s";
	var flag = 0;
	 do{
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero)) { 
		alert("el dato que ingresaste no es numero ");
		numero = parseInt(prompt("ingrese un numero"));
		}
		 if (numero > maximo || flag == 0){
			maximo = numero; 
		 } 
		 if (numero < minimo || flag == 0){
			minimo = numero;
			flag = 1 ;
		 }
	    seguir = prompt("quiere ingresar otro numero?");
		
	  } while(seguir == 's'); // es igual a decir que si la "respuesta" es distinta a "no" se va ejecutar lo que este en corchets dentro del if/

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN
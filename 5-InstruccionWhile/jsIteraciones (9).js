function mostrar()
{

	var numero;
	var minimo;
	var maximo;// declarar variables
	var seguir;
	//var flag = 0;
	 do{
		numero = parseInt(prompt("Ingrese un numero"));
		 if (numero > maximo ){//|| flag == 0){
			maximo = numero; 
		 } 
		 if(numero < minimo ){//|| falg == 0){
			minimo = numero;
			//flag =1
		 }
	    seguir = prompt("quiere ingresar otro numero?");
		
	  } while( == 's'); // es igual a decir que si la "respuesta" es distinta a "no" se va ejecutar lo que este en corchets dentro del if/

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN
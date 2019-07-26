function mostrar()
{
	var numero ;//numero que s eva ingresar en la caja de texto 
	var suma = 0; // se crea esta variable dandoles un valor para despues usarla en el repetidor para hacer las cuentas
	var contador = 0; // se crea esta variable dandoles un valor para despues usarla en el repetidor para hacer las cuentas
	var promedio; ///no le asignamos un valor para despues darselo en el repetidor
	
	while(contador <5) { // condicion ó valor asignado que se va a repetir el repetidor/
	numero = parseInt(prompt("ingrese el promedio")); ///numero que se escribe en la caja de texto//
	suma = suma + numero;  //se puede resumir en...   suma += numero;   //se suma el "acumulador" que se llama "suma" en este caso" con el numero que se ingresa en el prompt
    contador = contador + 1; 		//tambien se lo puede resumir en.... //   contador++;   // el contador suma ó cuenta las veces que el repetidor es ejecutado
	}
	promedio = suma / 5;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}
function mostrar()
{
	var numero ;//numero que s eva ingresar en la caja de texto 
	var suma = 0;
	var contador = 0;
	var promedio;
	
	while(contador <5) { // numero que se le va a pedir al usuario que ingresa un numero/
	numero = parseInt(prompt("ingrese el promedio")); ///numero que se escribe en la caja de texto//
	suma += numero;   //la suma es el acumulador 
    contador = contador + 1; 		
	}
	promedio = suma / 5;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}
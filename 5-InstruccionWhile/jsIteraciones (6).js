function mostrar()
{
	var numero ;
	var suma = 0;
	var contador = 0;
	var promedio;
	
	while(contador <5) {
	numero = parseInt(prompt("ingrese el promedio"));
    suma += numero;
    contador = contador + 1; 

		
	}
	promedio = suma / 5;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}
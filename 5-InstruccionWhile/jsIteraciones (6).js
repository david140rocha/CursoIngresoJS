function mostrar()
{

	var numero ;
	var suma = 0;
	var contador=0;
	var promedio;
	white(contador <5)
	{
		numero = parseInt(prompt("ingrese el promedio"));
		suma += numero;
		contador +1 ; 

		
	}
	promedio = suma / 5;



document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio/5;

}//FIN DE LA FUNCIÓN
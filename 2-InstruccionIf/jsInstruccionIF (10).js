function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    // en la variable nota voy a guardar el numero aleatorio
	var numeroRamdom;
	 numeroRandom = Math.floor ( Math.random () * 10 + 1); 

	 if (numeroRandom >=9 )
	 {
		 alert ("NOTA: " + numeroRandom +" EXELENTE");

	 }
	else if (numeroRandom >4  ) 
	{
		alert ("NOTA: "+ numeroRandom + " Aprobado");

		

	}
	else {
		alert ("NOTA: "+ numeroRandom + " Vamos, la proxima se puede");
	}
	

}//FIN DE LA FUNCIÓN

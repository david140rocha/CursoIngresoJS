function mostrar()
{
//tomo la edad  
var hora = document.getElementById('hora').value;

    if (hora >= 7 && hora <=11 )
    {
      alert ('Es de mañana.');
    }
    else if ( hora >= 12 && hora <= 19)
     {
        alert ('Es de tarde.');
    }
    else if ( hora >= 20 && hora <= 24 || hora >= 0 && hora <= 6) 
    {
        alert('Es de noche');
    }
    if (!(hora >= 0 && hora <= 24)) 
    { 
        alert ('la hora no existe.');
    }


}//FIN DE LA FUNCIÓN
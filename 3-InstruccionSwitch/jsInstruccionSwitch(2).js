function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes) {
    case "junio":
    case "Julio" :
    case "Agosto":
    alert ("Abrigate que hace frio");
    break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    alert ("Ya pasamos el frio, ahora calor!!!.");
    break;

    default : // } funciona igual
    alert ("Falta para el invierno.");
    break;
 // }

    
}







}//FIN DE LA FUNCIÓN
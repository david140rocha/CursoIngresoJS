function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value; // en java scrip solo se puede usar comillas simples pero es recomendable para mi que comienzo,usar las dobles/ 

switch (mes){
    case "Enero":
    alert ("Que comiences bien el año!!!");
    break;
    case "Marzo":
    alert ("a clases!!!");
    break;
    case "Julio":
    alert ("se vienen las vacaciones!!!");
    break;
    case "Diciembre":
    alert ("Felices fiesta!!!");
    break;
    default: 
    alert ("Esta en el mes de : " + mes);
    break;
}


}//FIN DE LA FUNCIÓN
function mostrar()
{
// hacer en casa desde aca//
 var mes;
 mes = document.getElementById("mes").value;

 switch (mes){
   case "Febrero":
     alert ("si tiene 28 dias");
     break;

     case 'Abril':
     case 'Junio':
     case 'Septiembre':
     case 'Noviembre':
     alert ("si tiene 30 dias.")
     break;

    default:
     alert ("si tiene 31 dias");
      break; }
  
}//FIN DE LA FUNCIÓN
//Enero">Enero</option>

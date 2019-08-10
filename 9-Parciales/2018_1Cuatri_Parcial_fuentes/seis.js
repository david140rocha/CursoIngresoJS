function mostrar()
{
var hora = parseInt(document.getElementById("laHora").value);
        while(hora < 1 || hora > 24 && isNaN(hora)){ 
                alert('ERROR,ingrese un numero valido del 1 al 24');
        }
        
 switch (hora){
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        alert("es de mañana"); 
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        alert ('es tarde');
        break;

        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        alert('es de noche');

        if(hora < 24 && hora > 20)  {
        alert('a dormir'); 
        }
        break;
        default:
                alert ('numero invalido');


         
  }

}

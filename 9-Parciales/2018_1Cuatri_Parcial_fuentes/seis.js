function mostrar()
{
var hora = parseInt(document.getElementById("laHora").value);

switch(hora) {
     case '6':
     case '7':
     case '8':
     case '9':
     case '10':
     case '11':
     if(hora >= 6 && hora <= 11)
    {
     alert("es de mañana");
    }
     break; 

     case '12':
     case '13':
     case '14':
     case '15':
     case '16':
     case '17':
     case '18':
     case '19':
     if(hora >= 12 && hora <= 19)
     {
     alert ("es de tarde");
     }
     break;

        case '20':
        case '21':
        case '22':
        case '23':
        case '24':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        if(hora >= 0 && hora <= 6  )
        {
        alert ("es de noche a dormir");
        }
        break;
}
}

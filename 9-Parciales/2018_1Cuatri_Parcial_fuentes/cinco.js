function mostrar()
{
    var planeta = prompt("ingrese un planeta del sistema solar");
    planeta = planeta.toLocaleLowerCase();

    switch (planeta) {
        case "tierra":
        alert("acá vivimos");
        break;

        case "mercurio":
        case "venus":
        alert ("acá hace más calor");
        break;

        case "marte":
        case "jupiter":
        case "saturno":
        case "urano": 
        case "neptupno":
        alert("acá hace más frio");
        break; 

        default:
        alert(" este no es un planeta");
        break;



    }
 

}

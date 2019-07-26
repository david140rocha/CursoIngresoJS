function mostrar()
{


var clave = prompt("ingrese el número clave.");

while ( clave != "utn750") { //// EL SIMBOLO DE DIFERENTE SE ESCRIBE "!=" ,NO SE ESCRIBE "|="

    alert ("la clave es incorrecta")

    clave = prompt("ingrese el número clave nuevamente.");
}
alert("la clave es correcta: " + clave);


}//FIN DE LA FUNCIÓN
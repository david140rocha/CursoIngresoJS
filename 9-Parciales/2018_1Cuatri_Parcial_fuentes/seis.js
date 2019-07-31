function mostrar()
{
var hora = parseInt(document.getElementById("laHora").value);
if(hora >= 6 || hora <= 11){
    alert("es de mañana");
}
}

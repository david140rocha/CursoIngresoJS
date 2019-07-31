function mostrar()
{
//tomo la edad  
var edad;
edad = parseInt(document.getElementById("edad").value);

if (edad < 13 || edad > 17)
{

    alert ("usted no es un adolecente");
}
else     // en el punto no pedia poner (else), lo puse porque quize, porque puedo y queria probarlo we :v//
 {
     alert("Usted es un adolecente")
 }

}//FIN DE LA FUNCIÓN
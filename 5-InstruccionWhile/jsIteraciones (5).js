function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo =sexo.toLowerCase();           // esto sirve para convertir las palabras o letras en MAYUSCULA en minuscula//

while (sexo  !='f' && sexo != 'm' ){
    alert ("sexo incorrecto")
    sexo = prompt("ingrese f ó m .");
    sexo = sexo.toLowerCase();    //sexo = sexo.toUpperCase();       //para convertir los letras que vienen en minuscula  a mayusculas
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
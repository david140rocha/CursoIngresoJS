function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo =sexo.toUpperCase();

while (sexo  !='f' && sexo!= 'm' ){
    alert ("sexo incorrecto");
    sexo = prompt("ingrese f ó m .");
    sexo = sexo.toUpperCase();// esto sirve para convertir las palabras o letras en MAYUSCULA en minuscula//
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
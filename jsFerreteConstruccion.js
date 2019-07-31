/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById('Largo').Value);
    var ancho = parseFloat(document.getElementById('Ancho').value);
    var alambre;
    var perimetro ;
    perimetro = (largo + ancho)* 2 ;
    alambre = perimetro * 3;
    alert('la cantidad de alambre necesaria es: ' + alambre);
}
function Circulo () 
{

    var largo = parseFloat(document.getElementById('Largo').Value);
    var ancho = parseFloat(document.getElementById('Ancho').value);
    var radio = parseFloat(document.getElementById('Radio').value);
  
	
}
function Materiales () 
{

    var largo = parseFloat(document.getElementById('Largo').Value);
    var ancho = parseFloat(document.getElementById('Ancho').value);
    var radio = parseFloat(document.getElementById('Radio').value);
	
}
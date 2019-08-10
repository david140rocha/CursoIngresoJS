function mostrar()
{
var numero1 = parseInt(prompt('ingrese numero'));
var numero2 = parseInt(prompt('ingrese otro numero'));
var division;
var suma ;

if(numero1 == numero2 ){
    alert ('los numeros ' + numero1 + ' y '+ numero2 + ' son iguales');
}
if(numero1 > numero2 ){
    division = numero1 / numero2;
    alert ('la division da: ' + division);
}
if(numero1< numero2) {
    suma = numero1 + numero2 ;
    alert ('la suma da: ' + suma);
}
if( suma < 50) {
    alert ('las suma es: '+ suma + ' y es menor a 50');
}

}
function mostrar()
{
    var suma;
    var resta;
    var suma ;
    var numero1 = parseInt(prompt("ingrese un nunmero"));
    var numero2 = parseInt(prompt("ingrese otro numero"));
if(numero1 == numero2) {
    alert ("los numero ingresados son: " + numero1 +" y "+ numero2);
}
if(numero1 > numero2) {
    resta = numero1 - numero2;
    alert("La suma de los numeros es: "+ resta);
}
if (numero1 < numero2 ) {
    suma = numero1 + numero2;
    alert ("La resta de los numeros es: "+ suma);
}
if (suma > 10 ) { 
    alert ("la suma es "+ suma + " y supero el 10");

   }


    


}

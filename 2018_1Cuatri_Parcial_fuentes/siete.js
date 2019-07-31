function mostrar()
{
var nota;
 var sexo;
 var contFem = 0;
 var contMas = 0;
 var promedio = 0;
 var notSexo ; 
 var acumulador = 0;
 var contador = 0 ;
 var minimo = 0 ;

 while(contador < 5){
     nota = parseInt(prompt("ingrese una nota"));
     while(isNaN(nota)){
         alert("no has ingresado un numero");
         nota = parseInt(prompt("ingrese una nota"));
     }
     while (nota <= 0 || nota >= 10){
        alert("ingrese un numero entre 0 y 10");
        nota = parseInt(prompt("ingrese una nota"));
     }
    sexo = prompt("ingrese un sexo");
    while(sexo != "f" && sexo != "m") {
        alert("no ingresaste un sexo corecto,ingrese f ó m");
        sexo = prompt("ingrese un sexo");
    }
    if(sexo == "f") {
        contFem = contFem + 1 ;
    }
    if(sexo == "m"){
        contMas =contMas + 1 ;
    }
    
    acumulador = acumulador + nota ;
    contador = contador +1;

 }
 promedio = acumulador / 5;
    
 alert (promedio);
}

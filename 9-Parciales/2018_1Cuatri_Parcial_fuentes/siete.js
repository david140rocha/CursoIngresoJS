function mostrar()
{
var nota;
 var sexo;
 var promedio = 0;
 var acumulador = 0;
 var contador = 0 ;
 var minimo = 0 ;

 while(contador < 5){
     nota = parseInt(prompt("ingrese una nota"));
     while(isNaN(nota)){
         alert("no has ingresado un numero");
         nota = parseInt(prompt("ingrese una nota"));
     }
     while (nota <= 0 || nota >= 10 ){
        alert("ingrese un numero entre 0 y 10");
        nota = parseInt(prompt("ingrese una nota"));
     }
    sexo = prompt("ingrese un sexo");
    if(sexo == m && sexo == m ){ 
    }
    if(nota)
    acumulador= acumulador + nota ;
    contador = contador +1;

 }
 promedio = acumulador / 5;
    
 alert (promedio);
}

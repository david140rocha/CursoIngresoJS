function mostrar()
{
 var nota;
 var sexo;
 var promedio ;
 var acumulador = 0;
 var contador = 0 ;
 var contm6 = 0;
 var Sbajo ;
 var Nbaja = 0;
 var flag = 0;

 for(R = 0 ;R < 5; R++){

     nota = parseInt(prompt("ingrese una nota"));

     while(isNaN(nota)|| nota < 0 || nota > 10 ){
         alert("no has ingresado un numero");
         nota = parseInt(prompt("ingrese una nota"));
     }
     sexo = prompt("ingrese un sexo"); 
     while( sexo != 'm' && sexo != "f"){
         alert('sexo no existente');
         sexo = prompt("ingrese un sexo");
     }
     if(sexo == 'm' && nota >= 6 ){
         contm6++;

     }
    acumulador = acumulador + nota ;
    contador ++;

     if(nota < Nbaja || flag == 0 ) {
        Nbaja = nota;
        Sbajo = sexo;
        flag = 1;
      }
    }

 promedio = acumulador / contador;
//para sacar  el alert y que las lineas que se escriban una abajo de la otra se debe usar '/n....' en la oracion .
 alert("El promedio de las notas es: " + promedio +"\nla nota mas baja es: " + Nbaja + " y su sexo es: " + Sbajo + '\ncantidad de varones >=6: ' + contm6);   
}

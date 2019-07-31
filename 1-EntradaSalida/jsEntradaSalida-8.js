/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //var dividiendo ;          ES LO MISMO HACER ESTO O RESUMIRLO COMO ESTA ABAJO ,se puede dar el valor a la variable en la misma linea 
    //var divisor; 

    var dividendo = document.getElementById("numeroDividendo").value;

    var divisor = document.getElementById("numeroDivisor").value;
     
  
    alert("El resto de la operacion es " + (parseInt(dividendo) / parseInt(divisor)));






}

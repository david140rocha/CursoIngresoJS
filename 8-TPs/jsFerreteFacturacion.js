/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1 = parseFloat(document.getElementById('PrecioUno').value);
    var precio2 = parseFloat(document.getElementById('PrecioDos').value);
    var precio3 = parseFloat(document.getElementById('PrecioTres').value);
    var suma; 

    suma = precio1 + precio2 + precio3; 
    alert("La suma es : " + suma); 
}
function Promedio ()
{
    var precio1 = parseFloat(document.getElementById('PrecioUno').value);
    var precio2 = parseFloat(document.getElementById('PrecioDos').value);
    var precio3 = parseFloat(document.getElementById('PrecioTres').value);
    var promedio;
    var suma;
    suma = precio1 + precio2 + precio3; 
    promedio = suma / 3;  // tambien se puede hacer... promedio = (precio1 + precio2 + precio3)/3;  
    alert("El promedio es: " + promedio);
}
function PrecioFinal () 
{
    var precio1 = parseFloat(document.getElementById('PrecioUno').value);
    var precio2 = parseFloat(document.getElementById('PrecioDos').value);
    var precio3 = parseFloat(document.getElementById('PrecioTres').value);
    var IVA;
    var precioF;
    var suma; 

    suma = precio1 + precio2 + precio3; 
    IVA = suma * 21 / 100 ;
    precioF = suma + IVA ; 

    alert ("El precio FInal mas el IVA de 21% es: " + precioF);
	
}
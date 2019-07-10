/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    
    nombre = document.getElementById("elNombre").value; // document implica que podemos manipular el HTML a traves de JVS, getelementbyid es una funcion con la cual tomamos el dato que esta en el HTML "elnombre" es el valor que encontramos en el chrome y por ultimo "value" indica que tomamos un valor de el "document" a traves de la funcion   
                                                        //getElementById funcion que toma el valor
                                                        //document, nos permite manipular el archivvo HTML a través de JS
                                                        //Value es el nombre que sacamos desde el Chrome con el boton "Inspeccionar"
                                                        //"elNombre" lo sacamos
    alert(nombre);

}



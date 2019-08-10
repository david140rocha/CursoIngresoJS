function mostrar()
{
  
    var marca;
    var peso;
    var temp;
    var tempares = 0;
    var maspesado;
    var marcapesada;
    var menospesado;
    var menos0 = 0;
    var flag = 0; 
    var acumPeso = 0;
    var contador = 0;
    var pesototal;
    var promedio ;

    do{ 
    marca = prompt(" ingrese la marca del producto");
    peso = parseInt(prompt("ingrese peso del producto entre 1 y 100"));
    while(peso < 1 || peso > 100){
        peso = parseInt(prompt("ERROR : ingrese peso del producto entre 1 y 100"));
    }
    temp = parseInt(prompt('ingrese una temperatura entre -30 y 30'));

    while( temp< -30 || temp> 30){
        temp = parseInt(prompt('ERROR :ingrese una temperatura entre -30 y 30'));
    
    }
    if(temp % 2 == 0){
        tempares++;
    }
    if(temp < 0 ){
        menos0++;
    }
    if(peso > maspesado || flag == 0){
        maspesado = peso ;
        marcapesada = marca; 
        flag = 1;
    }
    else if (peso < menospesado || flag == 0){
        menospesado = peso ;
        flag = 1 ;
    }
    acumPeso = acumPeso + peso;
    contador++;

    seguir= prompt('¿desea continuar ingresando datos?');

}while(seguir == 's');

promedio = acumPeso / contador,

document.write('cantidad de temperaturas pares: '+ tempares + '<br>');
document.write('marca del producto mas pesado : '+ marcapesada + '<br>');
document.write('cantidad de productos a - 0°: '+ menos0 + '<br>');
document.write('promedio del peso de todo los productos:  '+ promedio+ '<br>');
document.write('peso maximo: '+ maspesado + '  '+ ' peso minimo: '+ menospesado +'<br>');







}

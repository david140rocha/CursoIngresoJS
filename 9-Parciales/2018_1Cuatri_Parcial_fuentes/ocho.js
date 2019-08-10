function mostrar()
{
    var seguir;
    var letra;
    var numero;
    var positivos = 0;
    var numpares = 0;
    var numimpares = 0;
    var contceros = 0;
    var contPos = 0;
    var numMIN ;
    var numMAX;
    var letraMIN ;
    var letraMAX ;
    var promPos ;
    var acumuladorNeg = 0;
    var flag = 0 ;


    
    do{ 
        letra = prompt('Ingrese una letras');
        numero = prompt('ingrese un número entre -100 y 100');
        
        while(numero <= -100 || numero >= 100 && isNaN(numero)){
            numero = prompt('ERROR.ingrese un número entre -100 y 100');
        }
        if ( numero % 2 == 0){
            numpares++;
        }
        else {
            numimpares++;
        }
        if(numero == 0){
            contceros++;
        }
        else if(numero > 0){
            positivos = positivos + numero ;
            contPos++;
        }
        else{
            acumuladorNeg = acumuladorNeg + numero ;
        }
        if(numero < numMIN || flag == 0 ) { 
        numMIN = numero ;
        letraMIN = letra;
        flag = 1; 
        }
       if(numero > numMAX || flag == 0){
           numMAX = numero ;
           letraMAX = letra ;
           flag = 1
       }

       seguir = prompt('¿desea seguir ingresando datos?')
    }while(seguir == 's')

    if(positivos != 0) { 
    promPos = positivos  / contPos ;
    }

    document.write('cantidad de numeros pares: '+ numpares +'</br>');
    document.write('cantidad de numeros impares: '+ numimpares +'</br>');
    document.write('cantidad de ceros: '+ contceros +'</br>');
    document.write('El promedio de los numeros positivos es: '+ promPos +'</br>');
    document.write('suma de negativos: '+ acumuladorNeg +'</br>');
    document.write('numero maximo es: '+ numMAX + ' y su letras es: ' + letraMAX + '</br>');
    document.write('numero minimo es: '+ numMIN + ' y su letras es: ' + letraMIN + '</br>');

}

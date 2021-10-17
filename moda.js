const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,

];

// Creamos un objeto donde se almacenaran los valores de frecuencua para cada elemento de lista1
const lista1Count = {};

// Usando la funcion map, se accede a cada elemento de la lista, si ese elemento no se encuentra, 
// se crea y se le asigna valor 1, si ya existe entonces se le suma 1 
lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] +=1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);


// Para ordenar se emplea un función de comparacion dentro de la función sort
// esta funcion de comparacion resta a - b, donde a y b son elementos de la listaCount
// accedemos al valor númerico mediante [1]
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
);


// se calcula la moda tomando el elemento que quedo al final de la lista ordenada anteriormente
const moda =lista1Array[lista1Array.length -1 ] 
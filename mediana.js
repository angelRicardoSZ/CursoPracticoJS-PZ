const lista1 = [
    100,
    200,
    500,
    4000000000,
];

// Función para calcular promedio usando reduce
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento;
        }
    ); 

    const PromedioLista = sumaLista / lista.length;
    return PromedioLista;
};

// Punto medio de la lista
const mitadLista1= parseInt(lista1.length / 2);

// Funcion para saber si un numero es par
function esPar(numero) {
    if (numero % 2 == 0){
        return true;
    } else {
        return false; 
    }
}

let mediana;

// Caluculo de mediana depenediendo si la lista tiene tamaño par o impar
if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];
    // se llama a la función que calcula el promedio 
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];

}
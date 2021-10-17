
// Helpers
function esPar(numero) {
    return (numero % 2 == 0);    
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento;
        }
    ); 

    const PromedioLista = sumaLista / lista.length;
    return PromedioLista;
};


// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        const mediana =calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad; 
    }

}

// Mediana General
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
); 

const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryb) {
        return salaryA - salaryb;
    }
);


const medianaGeneralCol = medianaSalarios(salariosColSorted );

// mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
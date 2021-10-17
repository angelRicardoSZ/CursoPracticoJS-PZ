const lista1 = [
    100,
    200,
    300,
    500,
];
let sumaLista1 = 0;
for(let i =0; i<lista1.length;i++){
    sumaLista1 = sumaLista1 + lista1[i];
}

const PromedioLista1 = sumaLista1 / lista1.length;


function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
    //for(let i =0; i<lista.length;i++){
     //   sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = lista.reduce(
        function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento;
        }
    ); 

    const PromedioLista = sumaLista / lista.length;
    return PromedioLista;
};


/** OPERADORES CONDICIONALES */


let opcion ;
opcion = prompt('OPERADOR CONDICIONAL: \n 1- &&\n 2- ||')

let continente, edad;
let dia, mes, anio;
if (opcion == 1) {

    // Operadores AND (&&)
    continente = prompt('INTRODUZCA SU CONTINENTE...')
    edad = prompt('INTRODUZCA SU EDAD...')
    
    if (continente.toLowerCase() == 'america' && edad >= 18) {
        document.write('Eres un adulto americano');
    }else {
        document.write('No eres un adulto o un americano');
    }
}
else if (opcion == 2) {
    
    // Operadores OR (||)
    dia = prompt('INTRODUZCA DIA...')
    mes = prompt('INTRODUZCA MES...')
    anio = prompt('INTRODUZCA AÑO...')
    
    if (mes == 1 || mes == 2 || mes == 3) {
        document.write('Pertenece al primer trimestre');
    }else {
        document.write('No pertenece al primer trimestre');
    }
}
else {
    document.write('ERROR, opcion no valida');
}



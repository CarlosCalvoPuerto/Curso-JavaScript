

/** BUCLES (DO WHILE) */

// Introduce un numero
// let valor;

// do {
//     valor = parseInt(prompt('Introduce el numero 1...'));
//     document.write('Ha introducido el valor: ',valor,'<br>');
// }
// while (valor != 1);
// document.write('Fin del bucle');

let usuario, clave, control;

control = 0;
usuario = prompt('Introduce su usuario...');
clave = prompt('Introduce su contraseña...');

do {
    if(clave != 'MIacceso33') {
        clave = prompt('Contraseña incorrecta.\n'+
            'Intentelo de nuevo...');
        control = 0;
    }
    else {
        control = 1
    }
}
while (control != 1)
    document.write('Accaeso concedido')
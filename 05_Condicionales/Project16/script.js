

/** CONDICIONALES */

let nombre, edad;
nombre = prompt('INGRESE SU NOMBRE...');
edad = parseInt(prompt('INGRESE SU EDAD...'));

// Condicional "if"
if (edad >= 18) {
    document.write('BIENVENIDO! ', nombre);
}
else if (edad < 18) {
    document.write(nombre, ' ERES MENOR DE EDAD!');
}
else {
    document.write('NO HAS INTRODUCIDO DATOS');
}




/** ARRAYS */

// Crear un array
let frutas = ["naranja","melon","kiwi"];
//               0    ,   1   ,   2

// AÑADIR ELEMENTOS AL ARRAY
document.write("--AÑADIR elementos al ARRAY--");
document.write('<br>');

// Añadir al inicio
frutas.unshift("pera");
document.write("El 1er elemento nuevo es: ",frutas[0]);
document.write('<br>');
// Añadir al final
frutas.push("manzana");
document.write("El ultimo elemento nuevo es: ",frutas[frutas.length-1]);
document.write('<br>');
document.write('<br>');

// ELIMINAR ELEMENTOS AL ARRAY
document.write("--ELIMINAR elementos del ARRAY--");
document.write('<br>');

// Eliminar al inicio
frutas.shift();
document.write("El 1er elemento es de nuevo: ",frutas[0]);
document.write('<br>');
// Eliminar al final
frutas.pop();
document.write("El ultimo elemento es de nuevo: ",frutas[frutas.length-1]);
document.write('<br>');
// Eliminar una seleccion
frutas.splice(1,2); // 1º es el indice / 2º es el numero de elementos
document.write("El ultimo elemento es de nuevo: ",frutas[frutas.length-1]);
document.write('<br>');

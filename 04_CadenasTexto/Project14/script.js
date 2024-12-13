

/** FUNCIONES STRING */




let palabra = 'JavaScript';
document.write('La palabra es: ',palabra);
document.write('<br>');

// Tamaño de un texto
document.write('Tamaño de la palabra: ',palabra.length);
document.write('<br>');

// Sacar caracteres entre dos posiciones
document.write('Primeras 4 letras: ',palabra.slice(0,4));
document.write('<br>');

// Sacar caracteres entre dos posiciones
document.write('Primeras 4 letras: ',palabra.substring(0,4));
document.write('<br>');

// Reemplazar valores de un texto
let saludo = 'Hola a todos';
let despedida = saludo.replace('Hola', 'Adios')
document.write('Saludo: ',saludo);
document.write('<br>');
document.write('Despedida: ',despedida);
document.write('<br>');

// Convertir texto a Mayusculas
document.write('Mayusculas: ',palabra.toUpperCase());
document.write('<br>');

// Convertir texto a Minusculas
document.write('Mayusculas: ',palabra.toLowerCase());
document.write('<br>');

// Unir palabras
let palabra2 = 'Curso de ';
document.write('Unir palabras: ',palabra2.concat(palabra));
document.write('<br>');



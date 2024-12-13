

/** BUCLES (FOR) */

// Aumenta de 1 en 1
for (let i = 1 ; i<=5 ; i++){
    document.write('vuelta n<sup>o</sup> ',i,'<br>');
}
document.write('FIN DE BUCLE','<br>','<br>');

// Aumenta de x en x
for (let i = 1 ; i<=20 ; i+=2){
    document.write('vuelta n<sup>o</sup> ',i,'<br>');
}
document.write('FIN DE BUCLE','<br>','<br>');

// Crear un if dentro del bucle
for (let i = 1 ; i<=20 ; i+=2){
    if(i == 15) {
        document.write('Aquie el valor es: ',i,'<br>')
    }
}
document.write('FIN DE BUCLE','<br>','<br>');

// Leer un array
const FRUTAS = ['manzanas','peras','uvas','naranjas'];
for (let i = 0 ; i<FRUTAS.length ; i++){
    document.write('Fruta: ',FRUTAS[i],'<br>')
}
document.write('FIN DE BUCLE','<br>','<br>');

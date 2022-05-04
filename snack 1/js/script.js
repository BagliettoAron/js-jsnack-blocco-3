// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


const array2 = [1122, 55, 4, 65, 1, 58];
const array1 = [5, 257, 84, 3, ];


if (array1.length > array2.length ) {
    for (let i = array2.length; i < array1.length; i++) {
        const randomNumber = getRndInteger (1, 1000);
        array2.push(randomNumber);
    }

} else if (array1.length < array2.length) {
    for (let i = array1.length; i < array2.length; i++) {
        const randomNumber = getRndInteger (1, 1000);
        array1.push(randomNumber);
    }
}

console.log(array1, array2);


// FUNCTION
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}









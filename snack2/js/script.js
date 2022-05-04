// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.


const numbersArray = [0];

let sum = 0;

for (let i = 0; i < 50; i++) {

    sum += numbersArray[i];
    
    if (sum <= 50) {
        const newNumber = parseInt(prompt("digita un numero"));
        numbersArray.push(newNumber)
        console.log("somma", sum);
    } else if (sum >= 50) {
        alert("hai superato la somma uguale a 50")
    }
}
console.log(numbersArray);

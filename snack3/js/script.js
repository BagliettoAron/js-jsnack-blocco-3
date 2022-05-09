// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.



const soccerTeams = [
    
    {
        nome: "nome1",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "nome2",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "nome3",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "nome4",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]; 

soccerTeams.forEach(team => {
    const falliRnd = getRndInteger(0, 1000);
    const puntiRnd = getRndInteger(0, 1000);

    team.puntiFatti = puntiRnd;
    team.falliSubiti = falliRnd;
});

console.log(soccerTeams);

// FUNCTION
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




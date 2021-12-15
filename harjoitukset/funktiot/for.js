let numerot = [1, 2, 3, 4, 5];

/* for (const n of numerot) {
    console.log(n);
} */

numerot.forEach(handle); //käy läpi kaikki arvot ja suorittaa niille funktion handle

function handle(n) {
    console.log(n);
}

numerot.forEach(n => console.log(n)); //tuottaa saman tuloksen
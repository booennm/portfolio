let numerot = ["jotain", "ja mitä", "kuinka"];

let muokattu = numerot.map( x => {
    if(x.includes("ja")) {
        return "uusiteksti";
    }

    return x;
});

console.log(muokattu);

let ages = [17, 22, 50, 70, 4];

let adults = ages.filter( age => age >= 18 ); //filter ottaa listan arvot jotka toteuttavat funktion

console.log(adults);

let oldFound = ages.some( age => age > 60); //palauttaa true tai false sen perusteella löytyykö joku arvo joka toteuttaa funktion, every palauttaa true vain kun kaikki arvot toteuttaa funktion, find on kuin some, mutta palauttaa ensimmäisen funktion toteuttavan arvon

//reduce tekee saman funktion jokaiselle arvolle prev ja cur parametrien avulla

//map muokkaa jokaisen taulukon arvon funktion mukaisella tavalla


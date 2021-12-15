let numbers = ["one", "two", "three", "four", "five"];

numbers.forEach( n => console.log(n));


let prices = [12.59, 20, 45.55, 128.49, 7.99];

let sale80 = prices.map( n => {
    n *= 0.8;
    return n.toFixed(2);
});

console.log(sale80);


let names = ["John", "Matti", "John", "John", "Liisa"];

let noJohns = names.map( name => {
    if(name == "John") {
        name = "Matti";
    }
    return name;
})

console.log(noJohns);


let numbers2 = [1, -2, 3, 4, -5, -6, 7, -8, -9, 10];

let pos = numbers2.filter( n => n >= 0);

console.log(pos);


let names2 = ["John", "Tim", "Matti", "Theodore", "Christina", "Timmothy"];

let longT = names2.filter( name => name.length >= 8 && name[0] === 'T' );

console.log(longT);


if(names2.every( name => name.length > 0)) {
    let lengths = names2.map( name => name.length);
    let sum = lengths.reduce( (prev, cur) => prev + cur );
    console.log(sum);
}
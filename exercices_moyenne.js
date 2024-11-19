//exercice 11:
let tab11 = [1,2,3,4,5];

for (let i of tab11){
    console.log(i)
}

//exercice 12:
let tab12 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

function EstPair(n) {
    return n%2 === 0;
}

let resultat = tab12.filter(EstPair);
console.log(resultat)
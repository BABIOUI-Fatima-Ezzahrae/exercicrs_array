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

//exercice 13:
let a = [1,2,3];
let b = [4,5,6];

let fussion = a.concat(b);

console.log(fussion);

// exercice 14:
let tab14 = ["apple", "banana", "cherry", "date"];

let index = tab14.indexOf("banana");

if (index !== -1){
    tab14.splice(index,1);
}

console.log(tab14);

//exercice 15: (methode 1)
let  numbers = [5, 1, 8, 4, 7];

let x = numbers.sort((a,b) => a-b);

console.log(x);

//exercice 15: (methode 2)
let number = [25, 7, 89, 4, 17];

function Tri(m,n) {
    return m-n;
}

let y = number.sort(Tri);
console.log(y);

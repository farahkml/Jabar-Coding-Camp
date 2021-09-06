//soal 1


let keliling = (p,l) => 2+(p*l)
let luas = (p,l) => p*l

console.log(keliling(4,3));
console.log(luas(4,3));

//soal 2

const fullNamee = {
     firstNamee: 'William',
     lastNamee: 'Imoh',
}

const {firstNamee, lastNamee} = fullNamee
console.log(firstNamee, lastNamee)

//soal 3

const newObject = {
        firstName: "Muhammad",
        lastName: "Iqbal Mubarok",
        address: "Jalan Ranamanyar",
        hobby: "playing football",
}

const {firstName, lastName,address,hobby} = newObject
    
console.log(firstName, lastName, address, hobby)
    
//soal 4

const west = ['Will', 'Chris', 'Sam', 'Holly']
const east = ['Gill', 'Brian', 'Noel', 'Maggie']
const combined = [...west, ...east]
console.log(combined)

//soal 5

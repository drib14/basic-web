// Arrays

// Creating arrays
let hobbies = ["singing", "coding", "sleeping"]

// Array length functionality
console.log(hobbies.length)

// Reading Array
// Syntax
// identifier[index]
// index starts in 0 && length starts in 1
console.log(hobbies[0])

// Looping(3 types of for loop)
// 1. For loop
console.log('// For Loop')
for (let i = 0; i <= hobbies.length; i++) {
    console.log(hobbies[i])
    if (i == 2) {
        break; // breaks the loop whether it is finished or not
    }
}

// 2. for-in loop - used for iterating over JSON or Arrays. it returns key or index of each item
console.log('// For-in Loop')
for (let i in hobbies) {
    console.log(`${parseInt(i) + 1}. ${hobbies[i]}`)
}

// 3. for-of loop - used for iterating over Arrays. it returns the value of each element
console.log('// For-of Loop')
let count = 1;
for (let i of hobbies) {
    console.log(`${count}. ${i}`)
    count++;
}

// Challenge
let names = ['Drib', 'Shien', 'Feitan', 'Bella']
let search = prompt("Name to Search: ")

// For loop
let isFound = false

for (let i = 0; i < names.length; i++) {
    if (names[i] === search) {
        isFound = true
        alert(`Using for-loop Found ${names[i]}`)
        break;
    }
}

if (!isFound) alert(`Using for-loop ${search} Not Found`);

// For-in loop

for (let i in names) {
    if (names[i] === search) {
        isFound = true
        alert(`Using for-in Found ${names[i]}`)
        break;
    }
}

if (!isFound) alert(`Useing for-in loop ${search} Not Found`);

// For-of Loop
for(let i of names) {
    if(i === search) {
        isFound = true
        alert(`Using for-of Loop Found ${i}`)
        break;
    }
}

if (!isFound) alert(`Using for-of Loop ${search} Not Found`);
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

try {
    let hobbies = ["singing", "coding", "sleeping"]
    console.log(hobbies.length)
    console.log(hobbies[10].length); 
} catch(err) {
    console.error('Error: ',err)
}
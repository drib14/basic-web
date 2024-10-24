// JSON
let person = {
    // JSON with Arrays
    firstNames: [
        "Drib",
        "Trixcy Shien",
        "Feitan",
        "Bella"
    ],
    lastNames: [
        "Ramirez",
        "Cobarde",
        "Ramirez",
        "Ramirez"
    ],
    middleNames: [
        "Hortelano",
        "Maglasang",
        "Cobarde",
        "Cobarde"
    ],
    ages: [
        31, 31, 3, 1
    ],
    // Nested JSON with Arrays
    favSocMeds: {
        sites: [
            "https://fb.com",
            "https://x.com",
            "https://youtube.com",
            "https://tiktok.com",
            "https://instagram.com"
        ],
    },
    pets: {
        dogs: [
            "Pitou",
            "Gon",
            "Ging"
        ],
        cats: [
            "Killua",
            "Pouf",
            "Kurapika"
        ]
    }
}

// Accessing JSON in 2 ways

// 1st Way of accessing JSON
console.log(person)
console.log(person.firstNames)
console.log(person.lastNames)
console.log(person.middleNames)
console.log(person.ages)
console.log(person.favSocMeds.sites)
console.log(person.pets.dogs)
console.log(person.pets.cats)

// 2nd way of accessing JSON
console.log(person)
console.log(person["firstNames"])
console.log(person["lastNames"])
console.log(person["middleNames"])
console.log(person["ages"])
console.log(person["favSocMeds"].sites)
console.log(person["pets"].dogs)
console.log(person["pets"].cats)

// Using `` in combining JSON's
for (let i in person.firstNames) {
    console.log(`${person.firstNames[i]} ${person.middleNames[i]} ${person.lastNames[i]}`);
    console.log(`Age: ${person.ages[i]}`);
    
    // Display all favorite social media sites
    console.log(`Favorite Social Media Sites:`);
    for (let site of person.favSocMeds.sites) {
        console.log(`- ${site}`);
    }

    // Display pets (dogs and cats)
    console.log(`Pets:`);
    console.log(`Dogs: ${person.pets.dogs.join(", ")}`);
    console.log(`Cats: ${person.pets.cats.join(", ")}`);
    
    console.log("------------"); // separator for each person
}

// JSON Stringify = JSON -> String
let strPerson = JSON.stringify(person)
console.log(strPerson)

// JSON Parse = String -> JSON
strPerson = `{"firstName": "Drib", "lastNam": "Ramirez"}`
let parsePerson = JSON.parse(strPerson)
console.log(parsePerson)

// Array of JSON
let character = [
    {
        firstName: "New",
        lastName: "Character",
        age: 21,
        health: 100,
        level: 5
    },
    {
        firstName: "New",
        lastName: "Boss",
        age: 21,
        health: 5000,
        level: 100
    }
]

console.log(character)
console.log(character[0])
console.log(character[0].firstName)
console.log(character[0].lastName)
console.log(character[0].age)
console.log(character[0].health)
console.log(character[0].level)
console.log(character[1].firstName)
console.log(character[1].lastName)
console.log(character[1].age)
console.log(character[1].health)
console.log(character[1].level)

// Challenge for JSON
for(let i = 0; i < character.length; i++) {
    console.log(character[i].firstName)
}

// JSON & for-in loop
let mainCharacter = {
    firstName: "Shadow",
    lastName: "Fiend",
    level: 20,
    hp: 10000
}
for(i in mainCharacter) {
    console.log(mainCharacter[i])
}

// Object.keys Method
let keys = Object.keys(mainCharacter)
console.log(keys)

// Tutorial JSON for-in / Object.keys Method
let grades = {
    PE: 98,
    OOPROG: 90,
    DIGILOG: 89,
    ACCTG: 78,
    SOCIO: 87,
    ITSAD: 90,
    RIZAL: 92,
    TWRITE: 90
}

let avg = 0

for(let keys in grades) {
    console.log(`${keys} : ${grades[keys]}`)
    avg += grades[keys]
}

avg /= Object.keys(grades).length
console.log(`Final Total Grade: ${avg}`)

if(avg >= 95) {
    console.log("With Highest Honors!")
} else if(avg >= 90) {
    console.log("With High Honors!")
} else if(avg >= 89) {
    console.log("With Honors!")
} else if(avg >= 75) {
    console.log("Passed!")
} else {
    console.log("FAILED!")
}
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
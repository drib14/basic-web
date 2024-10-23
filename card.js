const person = {
    firstNames: ["Drib", "Trixcy Shien", "Feitan", "Bella"],
    lastNames: ["Ramirez", "Cobarde", "Ramirez", "Ramirez"],
    middleNames: ["Hortelano", "Maglasang", "Cobarde", "Cobarde"],
    ages: [31, 31, 3, 1],
    contacts: ["drib@example.com", "trixcy@example.com", "feitan@example.com", "bella@example.com"],
    locations: ["New York", "Los Angeles", "Tokyo", "Paris"],
    hobbies: ["Photography", "Traveling", "Gaming", "Reading"],
    favSocMeds: {
        sites: [
            { name: "Facebook", url: "https://fb.com", logo: "https://simpleicons.org/icons/facebook.svg", followers: "1K" },
            { name: "X (Twitter)", url: "https://x.com", logo: "https://simpleicons.org/icons/x.svg", followers: "500" },
            { name: "YouTube", url: "https://youtube.com", logo: "https://simpleicons.org/icons/youtube.svg", followers: "200" },
            { name: "TikTok", url: "https://tiktok.com", logo: "https://simpleicons.org/icons/tiktok.svg", followers: "800" },
            { name: "Instagram", url: "https://instagram.com", logo: "https://simpleicons.org/icons/instagram.svg", followers: "1.5K" }
        ]
    },
    pets: {
        dogs: ["Pitou", "Gon", "Ging", "Cheedle"],
        cats: ["Killua", "Pouf", "Kurapika", "Pariston"]
    }
};

// Ensure that the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    createPersonProfile();
    createSocialMediaProfile();
    createPetProfiles();
});

function createPersonProfile() {
    const profileContainer = document.getElementById('person-profile');
    const defaultImage = "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png";

    person.firstNames.forEach((firstName, index) => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');
        profileCard.innerHTML = `
            <img src="${defaultImage}" alt="Default Avatar" class="profile-avatar">
            <h3>${firstName} ${person.middleNames[index]} ${person.lastNames[index]}</h3>
            <p>Age: ${person.ages[index]}</p>
            <p>Contact: ${person.contacts[index]}</p>
            <p>Location: ${person.locations[index]}</p>
            <p>Hobbies: ${person.hobbies[index]}</p>
        `;
        profileContainer.appendChild(profileCard);
    });
}

function createSocialMediaProfile() {
    const socialMediaContainer = document.getElementById('social-media-profile');
    person.favSocMeds.sites.forEach((site) => {
        const siteCard = document.createElement('div');
        siteCard.classList.add('social-media-card');
        siteCard.innerHTML = `
            <img src="${site.logo}" alt="${site.name} Logo">
            <h3>${site.name}</h3>
            <p>Followers: ${site.followers}</p>
            <a href="${site.url}" target="_blank">Visit</a>
        `;
        socialMediaContainer.appendChild(siteCard);
    });
}

function createPetProfiles() {
    const catContainer = document.getElementById('cat-profile');
    const dogContainer = document.getElementById('dog-profile');

    if (!catContainer || !dogContainer) {
        console.error('Pet containers not found');
        return;
    }

    // Fetch and append cat images
    person.pets.cats.forEach(cat => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const catCard = document.createElement('div');
                catCard.classList.add('pet-card');
                catCard.innerHTML = `
                    <img src="${data[0].url}" alt="Cat Image">
                    <h3>${cat}</h3><p>Type: Cat</p>`;
                catContainer.appendChild(catCard);
            })
            .catch(err => {
                console.error('Error fetching cat image:', err);
                const catCard = document.createElement('div');
                catCard.classList.add('pet-card');
                catCard.innerHTML = `<p>Error fetching cat image: ${err.message}</p>`;
                catContainer.appendChild(catCard);
            });
    });

    // Fetch and append dog images
    person.pets.dogs.forEach(dog => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const dogCard = document.createElement('div');
                dogCard.classList.add('pet-card');
                dogCard.innerHTML = `
                    <img src="${data.message}" alt="Dog Image">
                    <h3>${dog}</h3><p>Type: Dog</p>`;
                dogContainer.appendChild(dogCard);
            })
            .catch(err => {
                console.error('Error fetching dog image:', err);
                const dogCard = document.createElement('div');
                dogCard.classList.add('pet-card');
                dogCard.innerHTML = `<p>Error fetching dog image: ${err.message}</p>`;
                dogContainer.appendChild(dogCard);
            });
    });
}

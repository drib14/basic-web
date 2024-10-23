const socialMediaData = [
    {
        "name": "Facebook",
        "url": "./images/facebook.svg",
        "link": "https://www.facebook.com"
    },
    {
        "name": "Twitter",
        "url": "./images/twitter.png",
        "link": "https://www.twitter.com"
    },
    {
        "name": "Instagram",
        "url": "./images/instagram.png",
        "link": "https://www.instagram.com"
    },
    {
        "name": "LinkedIn",
        "url": "./images/linked-in.png",
        "link": "https://www.linkedin.com"
    },
    {
        "name": "Snapchat",
        "url": "./images/snapchat.svg",
        "link": "https://www.snapchat.com"
    },
    {
        "name": "TikTok",
        "url": "./images/tiktok.svg",
        "link": "https://www.tiktok.com"
    },
    {
        "name": "Pinterest",
        "url": "./images/pinterest.png",
        "link": "https://www.pinterest.com"
    },
    {
        "name": "Reddit",
        "url": "./images/reddit.png",
        "link": "https://www.reddit.com"
    },
    {
        "name": "WhatsApp",
        "url": "./images/whatsapp.png",
        "link": "https://www.whatsapp.com"
    },
    {
        "name": "Telegram",
        "url": "./images/telegram.svg",
        "link": "https://telegram.org"
    },
    {
        "name": "Discord",
        "url": "./images/discord.svg",
        "link": "https://discord.com"
    },
    {
        "name": "Tumblr",
        "url": "./images/tumblr.png",
        "link": "https://www.tumblr.com"
    },
    {
        "name": "WeChat",
        "url": "./images/wechat.png",
        "link": "https://www.wechat.com"
    },
    {
        "name": "Viber",
        "url": "./images/viber.png",
        "link": "https://www.viber.com"
    },
    {
        "name": "Flickr",
        "url": "./images/flickr.svg",
        "link": "https://www.flickr.com"
    },
    {
        "name": "Clubhouse",
        "url": "./images/clubhouse.png",
        "link": "https://www.joinclubhouse.com"
    },
    {
        "name": "MeWe",
        "url": "./images/mewe.png",
        "link": "https://mewe.com"
    },
    {
        "name": "Parler",
        "url": "./images/parler.png",
        "link": "https://parler.com"
    },
    {
        "name": "Gab",
        "url": "./images/gab.svg",
        "link": "https://gab.com"
    },
    {
        "name": "Nextdoor",
        "url": "./images/nextdoor.png",
        "link": "https://nextdoor.com"
    },
    {
        "name": "Foodpanda",
        "url": "./images/foodpanda.png",
        "link": "https://foodpanda.ph"
    },
    {
        "name": "Grab",
        "url": "./images/grab.svg",
        "link": "https://grab.com"
    },
    {
        "name": "Move It",
        "url": "./images/move-it.jpg",
        "link": "https://moveit.com.ph"
    },
    {
        "name": "Uber",
        "url": "./images/uber.svg",
        "link": "https://uber.com"
    },
    {
        "name": "Netflix",
        "url": "./images/netflix.svg",
        "link": "https://netflix.com"
    }, 
    {
        "name": "Reelix",
        "url": "./images/reelix.png",
        "link": "https://reelix.netlify.app"
    }, 
    {
        "name": "Disney+",
        "url": "./images/disneyplus.png",
        "link": "https://disneyplus.com"
    }, 
    {
        "name": "Hulu",
        "url": "./images/hulu.svg",
        "link": "https://hulu.com"
    }, 
    {
        "name": "DuoLingo",
        "url": "./images/doulingo.png",
        "link": "https://duolingo.com"
    },
    {
        "name": "Messenger",
        "url": "./images/messenger.png",
        "link": "https://messenger.com"
    }
];

// Function to display social media logos in cards
const displayLogos = () => {
    const container = document.getElementById('social-media-logos');

    socialMediaData.forEach(media => {
        const logoCard = document.createElement('div');
        logoCard.classList.add('logo-card');
        logoCard.setAttribute('data-name', media.name); // Set the data-name attribute

        const logoLink = document.createElement('a');
        logoLink.href = media.link;
        logoLink.target = '_blank'; // Open in new tab

        const logoImg = document.createElement('img');
        logoImg.src = media.url;
        logoImg.alt = `${media.name} logo`;
        logoImg.classList.add('logo');

        const logoName = document.createElement('p'); // Create a paragraph for the name
        logoName.textContent = media.name; // Set the text content to the name
        logoName.classList.add('logo-name'); // Add a class for styling

        logoLink.appendChild(logoImg);
        logoCard.appendChild(logoLink);
        logoCard.appendChild(logoName); // Append the name to the card
        container.appendChild(logoCard);
    });
};

// Call the function to display logos
displayLogos();

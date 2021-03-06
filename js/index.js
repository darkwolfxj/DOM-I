const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
let thenav = Array.from(document.querySelectorAll('nav a'));
thenav[0].textContent=siteContent.nav["nav-item-1"];
thenav[1].textContent=siteContent.nav["nav-item-2"];
thenav[2].textContent=siteContent.nav["nav-item-3"];
thenav[3].textContent=siteContent.nav["nav-item-4"];
thenav[4].textContent=siteContent.nav["nav-item-5"];
thenav[5].textContent=siteContent.nav["nav-item-6"];
let too = document.createElement("a");
too.textContent="Too";
document.querySelector('nav').appendChild(too);
let many = document.createElement("a");
many.textContent="many";
document.querySelector('nav').appendChild(many);
let links = document.createElement("a");
links.textContent="links";
document.querySelector('nav').appendChild(links);
let wholenav = Array.from(document.querySelectorAll('nav a'));
console.log(wholenav);
wholenav.forEach((a)=> a.style.color='green');

//cta
document.querySelector('.cta .cta-text h1').textContent=siteContent.cta["h1"];
let h1 = document.querySelector('.cta .cta-text h1');
h1.style.color='red';
document.querySelector('.cta button').textContent=siteContent.cta["button"];
document.querySelector('.cta img').src=siteContent.cta["img-src"];

//main content:top content
document.querySelector('.main-content .top-content .text-content h4').textContent=siteContent["main-content"]["features-h4"];
document.querySelector('.main-content .top-content .text-content p').textContent=siteContent["main-content"]["features-content"];
document.querySelector('.main-content .top-content .text-content:nth-child(2) h4').textContent=siteContent["main-content"]["about-h4"];
document.querySelector('.main-content .top-content .text-content:nth-child(2) p').textContent=siteContent["main-content"]["about-content"];

//main content:middle image
document.querySelector('.middle-img').src=siteContent["main-content"]["middle-img-src"];
let midImg = document.querySelector('.middle-img');
midImg.style.borderRadius='10px';

//main content:bottom content
document.querySelector('.main-content .bottom-content .text-content h4').textContent=siteContent["main-content"]["services-h4"];
document.querySelector('.main-content .bottom-content .text-content p').textContent=siteContent["main-content"]["services-content"];
document.querySelector('.main-content .bottom-content .text-content:nth-child(2) h4').textContent=siteContent["main-content"]["vision-h4"];
document.querySelector('.main-content .bottom-content .text-content:nth-child(2) p').textContent=siteContent["main-content"]["vision-content"];

//contact
document.querySelector('.contact h4').textContent=siteContent.contact["contact-h4"];
document.querySelector('.contact p').textContent=siteContent.contact.address;
document.querySelector('.contact p:nth-child(3)').textContent=siteContent.contact.phone;
document.querySelector('.contact p:nth-child(4)').textContent=siteContent.contact.email;

//footer
document.querySelector('.container footer p').textContent=siteContent.footer.copyright;

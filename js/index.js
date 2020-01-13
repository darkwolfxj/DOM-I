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


let thenav = Array.from(document.querySelectorAll('nav a'));
console.log(thenav);
thenav[0].textContent=siteContent.nav["nav-item-1"];
thenav[1].textContent=siteContent.nav["nav-item-2"];
thenav[2].textContent=siteContent.nav["nav-item-3"];
thenav[3].textContent=siteContent.nav["nav-item-4"];
thenav[4].textContent=siteContent.nav["nav-item-5"];
thenav[5].textContent=siteContent.nav["nav-item-6"]



// //nav
// let nav = document.querySelector('header nav'); //selecting nav in the DOM

// let nav1 = document.querySelector('nav a'); //selecting first link in the DOM
// nav1.textContent=siteContent.nav["nav-item-1"];

// nav.prepend(nav1);
// console.log(nav1);
// console.log('is nav1')

// let nav2 = document.querySelector('nav a:nth-child(2)');  //selecting second link in the DOM
// nav2.textContent=siteContent.nav["nav-item-2"];
// nav.append(nav2);
// console.log(nav2);
// console.log('is nav2')

// let nav3 = document.querySelector('nav a:nth-child(3)');  //selecting third link in the DOM
// nav3.textContent=siteContent.nav["nav-item-3"];
// nav.append(nav3);
// console.log(nav3);
// console.log('is nav3')

// let nav4 = document.querySelector('nav a:nth-child(4)');  //selecting fourth link in the DOM
// nav4.textContent=siteContent.nav["nav-item-4"];
// nav.append(nav4);
// console.log(nav4);
// console.log('is nav4')

// let nav5 = document.querySelector('nav a:nth-child(5)'); //selecting fifth link in the DOM
// nav5.textContent=siteContent.nav["nav-item-5"];
// nav.append(nav5);
// console.log(nav5);
// console.log('is nav5')

// let nav6 = document.querySelector('nav a:nth-child(6)'); //selecting sixth link in the DOM
// nav6.textContent=siteContent.nav["nav-item-6"];
// nav.append(nav6);
// console.log(nav6);
// console.log('is nav6');

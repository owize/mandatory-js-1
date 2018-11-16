// Change to body color
let bodyColor = document.querySelector("body")
bodyColor.style.backgroundColor = "#039cda";

//Conpany name fixed
let headTitle = document.querySelector("h1");
headTitle.textContent = "Fruits & Vegetables Corp";

// textcontent and href attribute fixed
let aTag = document.createElement('a');
aTag.setAttribute('href', "#vegetables");
aTag.innerHTML = "Vegetables";

let vegetables = document.querySelectorAll("li");
for (let i = 0; i < vegetables.length; i++) {
  vegetables[2].textContent = "";
  vegetables[2].appendChild(aTag);
}

// contact and about order fixed
let main = document.querySelector('#main');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
about.textContent = "";
main.insertBefore(about, contact);


// Section h2 tags fixed
let h2About = document.createElement("h2");
h2About.textContent = "About";
about.appendChild(h2About);

let h2Contact = document.createElement("h2");
h2Contact.textContent = "Contact";
contact.appendChild(h2Contact);
contact.insertBefore(h2Contact, contact.querySelector("p"));

// ptag under about fixed
let pTag = document.createElement('p');
about.appendChild(pTag);
pTag.textContent = ("We're the best in fruits & vegetables");

// th elements in thead
let replace = document.querySelectorAll("thead td");
for (let td of replace) {
  let thText = document.createElement("th");
  thText.textContent = td.textContent;
  td.replaceWith(thText);
}

// the main.css file is included
let headTag = document.querySelector('head');
let linkCSS = document.createElement('link');
linkCSS.setAttribute("rel", "stylesheet");
linkCSS.setAttribute("href", "main.css");
headTag.appendChild(linkCSS);

// Head title is fixed
let titleTab = document.querySelector("title");
titleTab.textContent = "Fruits & Vegetables Corp"
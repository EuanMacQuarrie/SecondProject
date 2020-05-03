/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
const nav = document.querySelector("#nav_links");
const sections = document.querySelectorAll("section");

function activeSection() {
    maxSection = sections[0];
    minVal = 1000;
    for (item of sections) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -100 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;
        };
    };
    return maxSection;
};

// build the nav
function buildNav() {
    for (let item of sections){
        let section = document.createElement("li");
        section.className = 'menu';
        section.dataset.nav = item.id;
        section.textContent = item.dataset.name;
        nav.appendChild(section);
    };
};

buildNav();

function setActive () {
    window.addEventListener('scroll', function (event) {
        let section = activeSection();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of sections) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        // set corresponding header style
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // remove from other headers
        const headers = document.querySelectorAll('.menu');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};
setActive();

// add scroll to event
function scrollToAnchor() {
    nav.addEventListener('click', function (scroll) {
        const selected = document.querySelector('#' + scroll.target.dataset.nav);
        selected.scrollIntoView();
    });
};
scrollToAnchor();

// //Tried to change color of nav icons when clicked
// function myFunction() {
//     nav.addEventListener('click', function () {
//         const selected = document.querySelector('#' + dataset.nav);
//         selected.style.color = "rgb(136, 203, 171)"
//     });
// };
// myFunction();


// change default curser to pointer cursor
function cursor() {
    document.getElementById("nav_links").style.cursor = "pointer";
}
cursor();







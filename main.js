
/** Tasks
 * click about,... thi se co background(active) & active se duoc remove
 * hover vao item active co background(shadow)
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const linkItems = $$(".sidebar__left-link")
const contentItems = $$(".content-item")

const linkItemActive = $(".sidebar__left-link--active")

var nav = document.querySelector('.nav');
var home = document.getElementById('home');
var about = document.getElementById('about');
var photos = document.getElementById('photos');
var projects = document.getElementById('projects');
var contact = document.getElementById('contact');

window.addEventListener('scroll', function (e) {
    var scroll = this.scrollY;
    console.log(scroll);
})



linkItems.forEach((linkItem, index) => {
    const contentItem = contentItems[index];
    linkItem.onclick = function () {
        $(".sidebar__left-link--active").classList.remove("sidebar__left-link--active")
        console.log(contentItem);

        this.classList.add("sidebar__left-link--active");
    }
})

// handle mobile-menu
function handleMobileMenu() {
    var menu = document.getElementById("myLinks");
    console.log(menu)
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
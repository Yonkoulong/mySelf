import { TECHNOLOGIES, PROJECT_DATA } from './constant.js';


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

//variables
let currentTabTechnology = TECHNOLOGIES.ALL;

//handle Intro Overlay
window.addEventListener('load', handleIntroBeforeAccessPage());


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

function handleIntroBeforeAccessPage() {
    const overlay = document.querySelector('.intro-overlay');
    const mainContent = document.querySelector('.main-content');

    setTimeout(() => {
        overlay.classList.add('fade-out');
        mainContent.style.display = 'block'; // Show main content
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }, 2000); // Adjust timing as needed
}

function handleFilterProjects(tabItem) {
    if(PROJECT_DATA && PROJECT_DATA.length > 0) {

        if(tabItem === TECHNOLOGIES.ALL) {
            handleRenderProjectHTML(PROJECT_DATA);
        } else {
            const projectDataFilter = PROJECT_DATA.filter((item) => item.mainTechnology === tabItem);
            handleRenderProjectHTML(projectDataFilter);
        }
    }
}

function onClickTabTechnology() {
    const listTabTechnologies = $$('.work__detail-category-item');
    if(!listTabTechnologies && listTabTechnologies.length <= 0) return;

    listTabTechnologies.forEach((tab) => {
      
        tab.addEventListener('click', (e) => {
            //reset
            listTabTechnologies.forEach((tab) => {
                tab.classList.remove("work__detail-category-item--active");
            });
            tab.classList.add("work__detail-category-item--active");
            const tabItem = tab.getAttribute("tab-item");
            handleFilterProjects(tabItem);
        })
    })

}

function handleRenderProjectHTML(projects) {
    let projectHtml = projects.map((project) => {
        return `
           <div class="work__detail-content-item" 
              style="background-image: url('${project.imagePreview || ''}')"
           >
                <div class="work__detail-content-item-box">
                    <h4 class="work__detail-content-item-title">${project.title || ""}</h4>
                    <p  class="work__detail-content-item-desc">${project.description || ""}</p>
                </div>
            </div>
        `
    }).join('');

    const workDetailContentWrapper = $('.work__detail-content-wrapper');

    if(workDetailContentWrapper) {
        workDetailContentWrapper.innerHTML = projectHtml;
    }

}

function handleInit() {
    handleFilterProjects(TECHNOLOGIES.ALL);
    onClickTabTechnology();
}



handleInit();
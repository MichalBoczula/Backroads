//DOMs
class Navbar {
    constructor(){
        this.navBtn = document.querySelector('#navBtn');
        this.navlinks = document.querySelectorAll('.navbar-link');
        this.navbarLinksContainer = document.querySelector('.navbar-links-container');
        this.navContainer = document.querySelector('.navbar-container');
        this.navIcons = document.querySelectorAll('.navbar-icon');
    }
}
class Header {
    constructor() {
        this.heroBtn = document.querySelector('.heroBtn');
    }
}
class Offer {
    constructor() {
        this.offerCards = document.querySelectorAll('.offer-card');
    }
}
class Newsletter {
    constructor() {
        this.form = document.querySelector('#contactForm');
        this.input = document.querySelector('#email');
        this.newsletterTitle = document.querySelector('.newsletter-title-title');
    }
}
class Page {
    constructor() {
        this.sectionAbout = document.querySelector('#about');
        this.sectionService = document.querySelector('#service');
        this.singleServices = document.querySelectorAll('.single-service');
    }
}
//VARs
const navbar = new Navbar();
const header = new Header();
const newsletter = new Newsletter();
const offer = new Offer();
const page = new Page();
//FUNCTIONs
const scrollToSection = function(e) {
    e.preventDefault();
    let sectionId;
    if (e.target.id === 'heroBtn'){
        sectionId = 'about';
    } else {
        sectionId = 
            e.target
                .getAttribute('href')
                        .slice(1);
        handleWithNavbarApper();
    }
    const sectionPostion = 
        document.querySelector(`#${sectionId}`)
            .offsetTop;
    window.scrollTo({
        left: 0,
        top: sectionPostion,
        behavior: 'smooth'
    });
}
const handleWithNavbarApper = () => {
    navbar.navContainer
        .classList
            .toggle('navbar-container-active');
    navbar.navbarLinksContainer
        .classList
            .toggle('navbar-links-container-active');
    navbar.navBtn
        .classList
            .toggle('active')
    navbar.navlinks
        .forEach(navlink => {
            navlink.classList
                .toggle('navbar-link-active');
            setTimeout(() => {
                navlink.classList
                    .toggle('navbar-link-active-appear')
            }, 400)
        });
    navbar.navIcons
        .forEach(icon => {
            icon.classList
                .toggle('navbar-link-icon-appear')
        });
}
const validateForm = (e) => {
    e.preventDefault();
    const titleContent = 
        newsletter.newsletterTitle
            .innerHTML;
    if (newsletter.input
            .value === '') {
        newsletter.newsletterTitle
            .textContent = 'Pls input you email propertly';
        setTimeout(() => {
            newsletter.newsletterTitle
                .textContent = '';
            newsletter.newsletterTitle
                .innerHTML  = titleContent;
        }, 2000)
    } else {
        newsletter.newsletterTitle
            .textContent = 'Your message has been sent :)';
        setTimeout(() => {
            newsletter.newsletterTitle
                .textContent = '';
            newsletter.newsletterTitle
                .innerHTML = titleContent;
        }, 2000)
    }
}
const showDescriptionInCard = function (card) {
    const description = card.querySelector('.offer-description');
    if (!description.classList.contains('offer-description-appear')) {
        description.classList
            .toggle('offer-show-description');
        setTimeout(()=> {
            description.classList
                .toggle('offer-description-appear');
        }, 400);
    }
}
const hideDescriptionInCard = function (card) {
    const description = card.querySelector('.offer-description');
    if (description.classList.contains('offer-description-appear')) {
        description.classList
            .toggle('offer-description-appear');
        setTimeout(() => {
            description.classList
                .toggle('offer-show-description');
        }, 400);
    }
}
const displayTextInAboutSection = function(){
    if (page.sectionAbout.offsetTop -10 < window.pageYOffset){
        page.sectionAbout
            .querySelector('.about-text')
                .classList
                    .add('about-text-appear');
    }
}
const displayService = () => {
    let flag = true;
    let iterator = 0;
    if (flag && page.sectionService.offsetTop -200 < window.pageYOffset){
        flag = false;
        const interval = setInterval(() => {
            page.singleServices[iterator].classList.add('single-service-appear');
            iterator++;
        }, 1000);
        setTimeout(()=> {
            clearInterval(interval);
        }, 3000)
    }
}
//EVENTs
navbar.navlinks
        .forEach(element =>
            element.addEventListener('click', scrollToSection));
navbar.navBtn
    .addEventListener('click', handleWithNavbarApper);
header.heroBtn
    .addEventListener('click', scrollToSection);
newsletter.form
    .addEventListener('submit', validateForm);
offer.offerCards
    .forEach(card => {
        card.addEventListener('click', () => showDescriptionInCard(card));
        card.addEventListener('click', () => hideDescriptionInCard(card));
    });
window.addEventListener('scroll', () => {
    displayTextInAboutSection();
    displayService();
});
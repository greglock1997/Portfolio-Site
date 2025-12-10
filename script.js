/* NAVBAR */

// RESET POSITIONS AFTER RELOADING PAGE
window.scrollTo(0, 0);

// DEFINE NAVBAR ELEMENTS
const navbar = document.querySelector('.navbar');
const navbarLinksHome = document.querySelector('#navbar-home');
const navbarLinksSkills = document.querySelector('#navbar-skills');
const navbarLinksWork = document.querySelector('#navbar-work');
const navbarLinksProjects = document.querySelector('#navbar-projects');

// DEFINE PAGE POSITIONS
const homePosition = document.querySelector('.aboutMe').getBoundingClientRect();
const skillsPosition = document.querySelector('.skills').getBoundingClientRect();
const workPosition = document.querySelector('#work').getBoundingClientRect();
const projectsPosition = document.querySelector('#projects').getBoundingClientRect();

// ADD SCROLL EVENT LISTENERS TO LINKS
navbarLinksHome.addEventListener('click', function() {
    window.scrollTo({ top: homePosition.y, behavior: 'smooth' });    
});

navbarLinksSkills.addEventListener('click', function() {
    window.scrollTo({ top: skillsPosition.y, behavior: 'smooth' });
});

navbarLinksWork.addEventListener('click', function() {
    window.scrollTo({ top: workPosition.y, behavior: 'smooth' });
});

navbarLinksProjects.addEventListener('click', function() {
    window.scrollTo({ top: projectsPosition.y, behavior: 'smooth' });
});

/* SKILLS */

// DEFINE SKILL ITEMS
const skillItems = document.querySelectorAll('.skills-item');

// ADD OPEN TO SKILLS THAT HAVE INNER CONTENT
skillItems.forEach((skill) => {
    // CHECK TO SEE IF SKILL CONTAINS INNER CONTENT
    if (skill.classList.contains('expandable')) {
        skill.addEventListener('click', () => {
            // TOGGLE OPEN CLASS FOR THIS ELEMENT
            skill.classList.toggle('skills-item-open');
            skill.querySelector('p').classList.toggle('skills-paragraph-open');
        })
    };
})

/* DYNAMIC NAVBAR */
// DEFINE NAVBAR LINKS
const navbarLinks = navbar.querySelectorAll('li');

// CREATE FUNCTIONS TO CHANGE NAVBAR CSS
const invertNavbar = () => {
    navbar.classList.add('navbar-inverted');
    navbarLinks.forEach(navbarLink => {
        navbarLink.classList.add('li-inverted');
    });
}

const resetNavbar = () => {
    navbar.classList.remove('navbar-inverted');
    navbarLinks.forEach(navbarLink => {
        navbarLink.classList.remove('li-inverted');
    });
}

// ADD EVENT LISTENERS TO DECIDE WHEN TO INVERT NAVBAR COLORS
window.addEventListener ('scroll', () => {    
    // navbar.clientHeight used to offset the height of the navbar
    // when scrolling to a new page
	if (window.scrollY > (homePosition.top - navbar.clientHeight))  {
        resetNavbar();
	};

    if (window.scrollY > (skillsPosition.top - navbar.clientHeight)) {
        invertNavbar();
    };

    if (window.scrollY > (projectsPosition.top - navbar.clientHeight))  {
        resetNavbar();
	};

    if (window.scrollY > (workPosition.top - navbar.clientHeight)) {
        resetNavbar();
    };
})
// Selectors
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const homeMenu = document.querySelector('#home-page');
const aboutMenu = document.querySelector('#about-page');
const servicesMenu = document.querySelector('#services-page');

// Mobile Menu Functionality
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click', toggleMobileMenu);

// Highlight Menu Items on Scroll
const highlightMenu = () => {
  const scrollPos = window.scrollY;
  const highlightClass = 'highlight';

  // Remove highlight class from all menu items
  [homeMenu, aboutMenu, servicesMenu].forEach((menuItem) => menuItem.classList.remove(highlightClass));

  // Add highlight class to current menu item based on scroll position
  if (window.innerWidth > 960) {
    if (scrollPos < 600) {
      homeMenu.classList.add(highlightClass);
    } else if (scrollPos < 1400) {
      aboutMenu.classList.add(highlightClass);
    } else if (scrollPos < 2345) {
      servicesMenu.classList.add(highlightClass);
    }
  }
};

window.addEventListener('scroll', highlightMenu);

// Close Mobile Menu on Menu Item Click
const closeMobileMenu = () => {
  if (window.innerWidth <= 768 && mobileMenu.classList.contains('is-active')) {
    mobileMenu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', closeMobileMenu);
navLogo.addEventListener('click', closeMobileMenu);
'use strict';

//navbar buttons variables
const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

//navbar variables
const navBar = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.navbar-nav ul li a');

//navbar toggle function
const showNavbar = () => navBar.classList.add('active');
const hideNavbar = () => navBar.classList.remove('active');

// added toggle function on navbar buttons
hamburger.addEventListener('click', showNavbar);
closeBtn.addEventListener('click', hideNavbar);

// hide navbar when any link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', hideNavbar);
});

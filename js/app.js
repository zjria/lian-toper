

// Navigation bar
function navBartoggleBtn() {
    const toggle = document.querySelector('.navbar-toggler-btn');
    const navbarNavLink = document.getElementById('navbar-nav-link');
    const headerSocialLink = document.getElementById('header-social-link');

    toggle.addEventListener('click', function (e) {
        this.classList.toggle('opened');
        navbarNavLink.classList.toggle('close-element');
        headerSocialLink.classList.toggle('close-element');
    });

};

navBartoggleBtn();

// owl carousel js
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 10,
        dots: false,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                navText: false,
            },
            576: {
                items: 1,
                dots: true,
                nav: false,
                navText: false,
            },
            768: {
                items: 1,
                dots: true,
                nav: false,
                navText: false,
            },
            992: {
                items: 1,
                // dots: true,
                // nav: false,
                // navText: false,
            }
        }
    })
});


// Aos Animation
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// form validation

// const form = document.getElementById('form');
// const fname = document.getElementById('fname');
// const lName = document.getElementById('lName');
// const email = document.getElementById('email');
// const error = document.getElementById('error');


// fname.addEventListener('mouseover', () => {
//     fname.classList.add('border-style-add');

// });
// fname.addEventListener('click', () => {
//     fname.classList.add('border-color');
// });


// form.addEventListener('submit', (e) => {
//     let message = [];
//     if (fname.value === '' || fname.value === null) {
//         message.push('Type your name');
//         fname.classList.add('border-color');
//     };


//     if (message.length > 0) {
//         e.preventDefault();
//         error.innerText = message.join(', ');
//     };

//     console.log('addd');
// });


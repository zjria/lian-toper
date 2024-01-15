

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

// owl carousel js
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: false,
        navText: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    })
});
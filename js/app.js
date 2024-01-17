

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
    offset: 120,
    delay: 200,
    duration: 2000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

});


// owl carousel js
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 10,
        dots: false,
        mouseDrag: false,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>'
        ],
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            576: {
                items: 1,
                dots: true,
            },
            768: {
                items: 1,
                dots: true,
            },
            992: {
                items: 1,
                dots: false,
            },
            1200: {
                items: 1,
                dots: false,
            }
        }
    })
});


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
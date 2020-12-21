$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scrool-up-btn').addClass("show");
        } else {
            $('.scrool-up-btn').removeClass("show");
        }
    });

    // slide-up script 
    $('.scrool-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Gamers", "Presiden", "Tukang Joki Online"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Gamers", "Presiden", "Tukang Joki Online"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1000,
    reset: true
});

// Home
sr.reveal('.home', { delay: 500 });

// Profile
sr.reveal('.about', { delay: 500 });

// Services
sr.reveal('.services', { delay: 500 });

// Skilss
sr.reveal('.skills', { delay: 500 });

// Teams
sr.reveal('.teams', { delay: 500 });

// Contact
sr.reveal('.contact', { delay: 500 });

// Address
sr.reveal('.address', { delay: 500 });
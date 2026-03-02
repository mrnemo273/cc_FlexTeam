// Chameleon Bench - Interactive Script

(function () {
    'use strict';

    // --- Navbar scroll effect (hide on scroll down, show on scroll up) ---
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    let scrollUpAccumulated = 0;
    const navHeight = 72;
    const scrollUpThreshold = 50;

    function handleNavbarScroll() {
        var currentScrollY = window.scrollY;
        var delta = currentScrollY - lastScrollY;

        if (currentScrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Always show nav near the top of the page
        if (currentScrollY <= navHeight) {
            navbar.classList.remove('navbar-hidden');
            scrollUpAccumulated = 0;
        } else if (delta > 0) {
            // Scrolling down — hide the nav and reset upward accumulator
            navbar.classList.add('navbar-hidden');
            scrollUpAccumulated = 0;
        } else {
            // Scrolling up — accumulate distance before showing
            scrollUpAccumulated += Math.abs(delta);
            if (scrollUpAccumulated >= scrollUpThreshold) {
                navbar.classList.remove('navbar-hidden');
            }
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // --- Scroll-triggered animations ---
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(function (el) {
        observer.observe(el);
    });

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = navbar.offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Active nav link highlighting ---
    var sections = document.querySelectorAll('section[id], header[id], footer[id]');

    function updateActiveNav() {
        var scrollPos = window.scrollY + navbar.offsetHeight + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navMenu.querySelectorAll('a').forEach(function (link) {
                    link.classList.remove('active');
                });
                var activeLink = navMenu.querySelector('a[href="#' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
})();

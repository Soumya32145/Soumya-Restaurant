// ===============================
// ===== SOUMYA RESTAURANT JS ====
// ===============================



// ================= HEADER STICKY =================

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 50);

});



// ================= MOBILE MENU TOGGLE =================

function toggleMenu() {

    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}



// ================= CLOSE MENU WHEN CLICK LINK =================

document.querySelectorAll('.navigation a').forEach(link => {

    link.addEventListener('click', () => {

        document.querySelector('.menuToggle').classList.remove('active');

        document.querySelector('.navigation').classList.remove('active');

    });

});



// ================= FULL MENU OPEN =================

function openMenu() {

    const fullMenu = document.getElementById('fullMenu');

    fullMenu.classList.add('active');

    document.body.classList.add('no-scroll');

}



// ================= FULL MENU CLOSE =================

function closeMenu() {

    const fullMenu = document.getElementById('fullMenu');

    fullMenu.classList.remove('active');

    document.body.classList.remove('no-scroll');

}



// ================= CLOSE FULL MENU ON ESC =================

document.addEventListener('keydown', function(e){

    if(e.key === "Escape"){

        const fullMenu = document.getElementById('fullMenu');

        fullMenu.classList.remove('active');

        document.body.classList.remove('no-scroll');

    }

});



// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(

    '.box, .contactForm, .infoCard, .title, .row'
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            el.classList.add('activeReveal');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();



// ================= TYPING EFFECT HERO TEXT =================

const heroText = document.querySelector('.banner .content h2');

if(heroText){

    const text = "Authentic Odia Seafood Experience";

    heroText.innerHTML = "";

    let i = 0;

    function typingEffect(){

        if(i < text.length){

            heroText.innerHTML += text.charAt(i);

            i++;

            setTimeout(typingEffect, 70);

        }

    }

    typingEffect();

}



// ================= SMOOTH ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");

        }

    });

});



// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll('.count');

const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {

        const target = +counter.getAttribute('data-target');

        const count = +counter.innerText;

        const increment = target / speed;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCount, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCount();

});



// ================= FLOATING PARALLAX EFFECT =================

window.addEventListener('mousemove', (e) => {

    document.querySelectorAll('.floating').forEach(layer => {

        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed) / 100;

        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;

    });

});



// ================= LOADER =================

window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');

    if(loader){

        loader.classList.add('hideLoader');

    }

});



// ================= BACK TO TOP BUTTON =================

const topBtn = document.querySelector('.topBtn');

window.addEventListener('scroll', () => {

    if(window.scrollY > 500){

        topBtn.classList.add('showTopBtn');

    }else{

        topBtn.classList.remove('showTopBtn');

    }

});

if(topBtn){

    topBtn.addEventListener('click', () => {

        window.scrollTo({

            top: 0,
            behavior: 'smooth'

        });

    });

}



// ================= TESTIMONIAL AUTO ANIMATION =================

const testimonialCards = document.querySelectorAll('.testimonials .box');

testimonialCards.forEach((card, index) => {

    card.style.animationDelay = `${index * 0.2}s`;

});



// ================= IMAGE HOVER 3D EFFECT =================

document.querySelectorAll('.imgBx').forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20);

        const rotateY = ((centerX - x) / 20);

        card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
        `rotateX(0deg) rotateY(0deg)`;

    });

});



// ================= FORM SUBMIT EFFECT =================

const form = document.querySelector('.contactForm form');

if(form){

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const button =
        form.querySelector('input[type="submit"]');

        button.value = "Reservation Sent ✓";

        button.style.background =
        "linear-gradient(135deg,#16a34a,#15803d)";

        setTimeout(() => {

            button.value = "Reserve Table";

            button.style.background =
            "linear-gradient(135deg,#2cb3aa,#16746e)";

            form.reset();

        }, 3000);

    });

}
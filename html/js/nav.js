// Selecteer de knoppen en het mobiele menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

// Open het mobiele menu wanneer op de hamburger wordt geklikt
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
});

// Sluit het mobiele menu wanneer de sluitknop wordt aangeklikt
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
});

// Stel automatisch de actieve link in bij het laden van de pagina
const navLinks = document.querySelectorAll('#menu a, #mobile-menu a');
let currentPage = window.location.pathname.split('/').pop();

// Als we op de root van de site zijn, beschouwen we index.html als standaard
if (currentPage == ""){
    currentPage = "index.html";
}

// Voeg de actieve klasse toe aan de link die overeenkomt met de huidige pagina
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('text-blue-700', 'font-bold');
    }
});
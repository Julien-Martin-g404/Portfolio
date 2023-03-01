const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;

    console.log(scrollTop, clientHeight);
});


navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // event.preventDefault(); // Empêcher le comportement par défaut du lien

        // Récupérer l'élément cible à partir de l'attribut "href" du lien
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Ajouter la classe "active" au lien cliqué et supprimer la classe "active" de tous les autres liens
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // Faire défiler la page vers l'élément cible
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});


let barre = document.querySelector('#Skill-HTML');
let barre2 = document.querySelector('#Skill-CSS');
let barre3 = document.querySelector('#Skill-BOOTSTRAP');
let barre4 = document.querySelector('#Skill-PHP');
let barre5 = document.querySelector('#Skill-SQL');
let barre6 = document.querySelector('#Skill-JS');

window.addEventListener('scroll', () => {
    const { scrollTop } = document.documentElement;

    if (scrollTop >= 650 && scrollTop <= 800) {

        barre.classList.add('Skill-HTML');
        barre2.classList.add('Skill-CSS');
        barre3.classList.add('Skill-BOOTSTRAP');
        barre4.classList.add('Skill-PHP');
        barre5.classList.add('Skill-SQL');
        barre6.classList.add('Skill-JS');


        console.log('Animation déclenchée!');
    }
});


// Récupération des éléments HTML
const nav = document.getElementById('sidebar');
const burgerMenu = document.getElementById('burger-menu');

// Ajout d'un événement au clic sur le burger menu
burgerMenu.addEventListener('click', function () {
    // Affichage de la nav
    nav.style.display = 'block';
});

// Ajout d'un événement au clic sur un lien de la nav
nav.addEventListener('click', function (event) {
    // Vérification que le clic a eu lieu sur un lien de la nav
    if (event.target.tagName === 'A') {
        // Vérification de la largeur de l'écran
        if (window.innerWidth <= 800) {
            // Disparition de la nav
            nav.style.display = 'none';
        }
    }
});
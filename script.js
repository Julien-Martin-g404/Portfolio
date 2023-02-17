const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement;

  console.log(scrollTop, clientHeight);
});

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

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




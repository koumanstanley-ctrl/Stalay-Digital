/* ======================================
   STALAY DIGITAL
   Menu mobile, formulaire et année
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    // MENU MOBILE
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fermer le menu" : "Ouvrir le menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Fermer le menu après avoir choisi une rubrique
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Ouvrir le menu");

                menuToggle.textContent = "☰";
            });

        });
    }


    // ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // FORMULAIRE DE CONTACT VERS WHATSAPP
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const activity = document.getElementById("activity").value.trim();
            const projectType = document.getElementById("project-type").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !activity || !projectType || !message) {
                alert("Merci de remplir tous les champs.");
                return;
            }

            const whatsappNumber = "2250103510738";

            const whatsappMessage =
                "Bonjour Stalay Digital !\n\n" +
                "Je souhaite vous présenter mon projet.\n\n" +
                "Nom : " + name + "\n" +
                "Activité : " + activity + "\n" +
                "Besoin : " + projectType + "\n\n" +
                "Description du projet :\n" + message;

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank", "noopener,noreferrer");
        });
    }

});

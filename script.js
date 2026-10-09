/* ==============================
   STALAY DIGITAL
   INTERACTIONS DU SITE
================================ */

document.addEventListener("DOMContentLoaded", function () {

    // ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // MENU POUR TÉLÉPHONES ET TABLETTES

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fermer le menu" : "Ouvrir le menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        // FERMER LE MENU APRÈS UN CLIC SUR UN LIEN

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Ouvrir le menu");

                menuToggle.textContent = "☰";

            });

        });


        // FERMER LE MENU SI L'UTILISATEUR APPUIE SUR ÉCHAP

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Ouvrir le menu");

                menuToggle.textContent = "☰";

            }

        });

    }

});

//// Submit Contact Form Message \\\\

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userID = 'service_pc6du9g';
    const templateID = 'template_i6ro7p7';

    emailjs.sendForm(userID, templateID, this)
    .then(function() {
        console.log('SUCCESS!');
        alert('Thanks for sending the message! You\'ll hear back from me soon.');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Sorry, an error occurred while sending the message. Please try again later.');
      });
  });

//// Theme toggling \\\\

    let themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    let themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    let themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function() {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }

    });


//// Open/Close Mobile Menu \\\\

document.addEventListener("DOMContentLoaded", function () {
    const closeMenuButton = document.querySelector("#close-menu-button");
    const openMenuButton = document.querySelector("#open-menu-button");
    const mobileMenu = document.querySelector(".lg\\:hidden[role='dialog']");

    closeMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        const expanded = mobileMenu.classList.contains("hidden") ? "false" : "true";
        closeMenuButton.setAttribute("aria-expanded", expanded);
    });

    openMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        const expanded = mobileMenu.classList.contains("hidden") ? "false" : "true";
        openMenuButton.setAttribute("aria-expanded", expanded);
    });

    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach((link) => {
        link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        closeMenuButton.setAttribute("aria-expanded", "false");
        });
    });
});
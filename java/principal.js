document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navLinks = document.getElementById("navLinks");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

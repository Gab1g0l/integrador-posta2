document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginContainer = document.getElementById("loginContainer");
    const mainContent = document.getElementById("mainContent");
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navLinks = document.getElementById("navLinks");

    const USERNAME = "admin";
    const PASSWORD = "123456";

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === USERNAME && password === PASSWORD) {
            loginContainer.classList.add("hidden");
            mainContent.classList.remove("hidden");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

function redirectToPrincipal(url) {
    window.location.href = url;
}

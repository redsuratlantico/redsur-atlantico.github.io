// script.js - Funcionalidad básica

// Simulación de login (usa localStorage para "autenticación" básica)
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logout');
    const message = document.getElementById('message');

    // En login.html
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // Simulación: cualquier email/password funciona
            if (email && password) {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                message.textContent = 'Credenciales inválidas.';
            }
        });
    }

    // En dashboard.html
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        });
    }

    // Verificar si está logueado en dashboard
    if (window.location.pathname.includes('dashboard.html')) {
        if (!localStorage.getItem('loggedIn')) {
            window.location.href = 'login.html';
        }
    }
});
// Menú hamburguesa (mobile)
function toggleMenu() {
    const nav = document.getElementById("mainNav");
    if (nav) {
        nav.classList.toggle("active");
    }
}

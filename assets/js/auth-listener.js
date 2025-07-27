document.addEventListener('DOMContentLoaded', function() {
    // Solo ejecutar en player.html
    if(!window.location.pathname.includes('index.html')) {
        const auth = new Auth();
        
        // Verificar autenticación al cargar
        if(!auth.isAuthenticated()) {
            auth.logout();
            return;
        }

        // Configurar evento de logout
        const logoutBtn = document.getElementById('logoutBtn');
        if(logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                auth.logout();
            });
        }
    }
});
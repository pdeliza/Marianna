class Auth {
    constructor() {
        this.storageKey = 'musicPlayerSession_v4';
        this.sessionDuration = 24 * 60 * 60 * 1000; // 24 horas exactas
    }

    login(password) {
        if(password.toLowerCase() === "enriquecedor") { // Cambia esta contraseña
            const sessionData = {
                valid: true,
                sessionStart: Date.now(),
                // Eliminamos lastActivity para no cerrar por inactividad
                persistent: true // Marcar como sesión persistente
            };
            localStorage.setItem(this.storageKey, JSON.stringify(sessionData));
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem(this.storageKey);
        window.location.href = 'index.html?from=logout';
    }

    checkSession() {
        const sessionData = JSON.parse(localStorage.getItem(this.storageKey)) || {};
        
        // Verificación simple: ¿Existe sesión y no ha expirado?
        const sessionActive = sessionData.valid && 
                            (Date.now() - sessionData.sessionStart) < this.sessionDuration;
        
        if(!sessionActive) {
            return this.logout();
        }
        
        return true;
    }

    // Nueva función para verificación en segundo plano
    setupBackgroundChecks() {
        // Verificar cada hora (ajustable)
        setInterval(() => this.checkSession(), 60 * 60 * 1000);
        
        // Verificación adicional al recuperar el foco
        document.addEventListener('visibilitychange', () => {
            if(!document.hidden) {
                this.checkSession();
            }
        });
    }
}
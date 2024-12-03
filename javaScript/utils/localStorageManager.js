
    function saveField(key, value) {
    try {
        const data = typeof value === 'object' ? JSON.stringify(value) : value;
        localStorage.setItem(key, data);
        console.log(`Campo guardado: ${key}`);
    } catch (error) {
        console.error(`Error guardando el campo "${key}":`, error);
    }
}

    function getField(key) {
        try {
            const data = localStorage.getItem(key);
            return this.isJson(data) ? JSON.parse(data) : data;
        } catch (error) {
            console.error(`Error obteniendo el campo "${key}":`, error);
            return null;
        }
    }

    function isJson(str) {
        try {
            JSON.parse(str);
            return true;
        } catch {
            return false;
        }
    }

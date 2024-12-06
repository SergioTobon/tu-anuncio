import CategoriaRepository from "../repositories/categoria-repository.js";  // Importamos el repositorio

class CategoriaService {
    constructor() {
        this.categoriaRepository = new CategoriaRepository();  // Instanciamos el repositorio
    }

    // Método para obtener todas las categorías
    async getAllCategories() {
        return await this.categoriaRepository.getAllCategories();  // Llamamos al repositorio para obtener las categorías
    }

    // Método para obtener una categoría por su nombre
    async validarCategoriaPorNombre(nombre) {
        try {
    
            const categorias = await this.categoriaRepository.obtenerCategoriaPorNombre(nombre);
    
            // Validar si se encontró la categoría
            if (categorias.length === 0) {
                throw new Error(`No se encontró una categoría con el nombre ${nombre}.`);
            }
    
            return categorias[0]; // Retornamos la categoría encontrada
        } catch (error) {
            console.error("Error al validar la categoría:", error.message);
            throw error;
        }
    }
    


}

export default CategoriaService;
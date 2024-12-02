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
    async validarCategoria(id) {
        try {
            // Validar que el ID no sea nulo ni vacío
            if (!id || isNaN(id) || id <= 0) {
                throw new Error("El ID de categoría debe ser un número válido mayor que cero.");
            }
    
            const categorias = await this.categoriaRepository.obtenerCategoriaPorId(id);
    
            // Validar si se encontró la categoría
            if (categorias.length === 0) {
                throw new Error(`No se encontró una categoría con el ID ${id}.`);
            }
    
            return categorias[0]; // Retornamos la categoría encontrada
        } catch (error) {
            console.error("Error al validar la categoría:", error.message);
            throw error;
        }
    }
    


}

export default CategoriaService;

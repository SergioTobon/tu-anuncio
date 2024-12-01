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
    async getCategoryByNombre(nombre) {
        return await this.categoriaRepository.getCategoryByNombre(nombre);  // Llamamos al repositorio para obtener la categoría por ID
    }

}

export default CategoriaService;

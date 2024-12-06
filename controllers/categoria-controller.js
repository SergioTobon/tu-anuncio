import CategoriaService from "../services/categoria-service.js";  // Importamos el servicio

// Controlador para obtener todas las categorías
export const getAllCategories = async (req, res) => {
     // Instanciamos el servicio
    const categoriaService = new CategoriaService(); 
    try {
        const categories = await categoriaService.getAllCategories();  // Llamamos al servicio para obtener las categorías
        return res.status(200).json(categories);  // Retornamos las categorías en formato JSON
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });  // Error
    }
};

// Controlador para obtener una categoría por ID
export const getCategoryByNombre = async (req, res) => {
     // Instanciamos el servicio
    const categoriaService = new CategoriaService(); 
    const { nombre } = req.params;  // Obtenemos el ID desde los parámetros de la URL
    try {
        const category = await categoriaService.validarCategoriaPorNombre(nombre);  // Llamamos al servicio
        if (category) {
            return res.status(200).json(category);  // Retornamos la categoría si existe
        } else {
            return res.status(404).json({ success: false, message: "Categoría no encontrada" });  // Error 404 si no existe
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });  // Error
    }
};
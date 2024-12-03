import { log } from 'console';
import fs from 'fs';
import path from 'path';

export const saveImagenEnXampp = async (sourcePath,rutaRelativa,fileName) => {
    //http://localhost/imagenes-anuncios/img2.jpg
    
    const folderPath = "imagenes-anuncios"
    const targetDir = path.join('C:', 'xampp', 'htdocs', folderPath); // Ruta a la carpeta de XAMPP
    const rutaCompleta = path.join(targetDir,rutaRelativa);
    const targetPath = path.join(rutaCompleta, fileName);

    console.log("SE IMPRE LA RUTA TARGETDIR",targetDir);
    console.log("SE IMPRE LA RUTA TARGETPATH",targetPath);
    console.log("SE IMPRE LA RUTACOMPLETA",rutaCompleta);
    
    

    // Verificar si la carpeta destino existe
    if (!fs.existsSync(rutaCompleta)) {
        fs.mkdirSync(rutaCompleta, { recursive: true }); // Crear la carpeta si no existe
    }
    

    try {
        // Mover el archivo a la carpeta destino
        await fs.promises.rename(sourcePath, targetPath);
        // Borrar el archivo temporal de la carpeta 'uploads'
        //await fs.promises.unlink(sourcePath); // Eliminar archivo temporal
        return targetPath; // Retornar la ruta del archivo en su ubicación final
    } catch (error) {
        console.error('Error moviendo el archivo:', error);
        throw new Error('Error al guardar la imagen en XAMPP.');
    }
};

export const saveImagenNegocio = async (sourcePath,idNegocio) => {

    const fileName = "foto-negocio.jpg";
    const urlNegocio = path.join('negocios', idNegocio); // Ruta a la carpeta de XAMPP 
    console.log(sourcePath);
    console.log(urlNegocio);
    const url = "http://localhost/" + "imagenes-anuncios/" + "negocios/" + idNegocio + "/" + fileName;
    
    saveImagenEnXampp(sourcePath,urlNegocio,fileName);
    return url;
}

export const saveImagenAnuncio = async(sourcePath,idNegocio,idAnuncio) => {

    /*Negocio/[idNegocio]/anuncio/[idAnuncio].jpg
        
    */

    const fileName = idAnuncio + ".jpg";
    const urlAnuncio = path.join('negocios',idNegocio,'anuncios')
    console.log(sourcePath);
    console.log(urlAnuncio);
    const url = "http://localhost/" + "imagenes-anuncios/" + "negocios/" + idNegocio + "/" + "anuncios" + "/" + fileName;
    saveImagenEnXampp(sourcePath,urlAnuncio,fileName);
    return url;
    

}
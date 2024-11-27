// script.js
document.getElementById('business-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtención de los valores de los campos
    const businessName = document.getElementById('business-name').value;
    const businessDescription = document.getElementById('business-description').value;
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const businessCategory = document.getElementById('business-category').value;
  
    // Validación de campos requeridos
    if (businessName === "" || businessDescription === "" || productName === "" || productPrice === "" || businessCategory === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    // Verificar que el precio sea un número válido
    if (productPrice <= 0) {
      alert("El precio debe ser un número mayor que 0.");
      return;
    }
  
    // Aquí puedes enviar los datos a un servidor o almacenarlos
    console.log("Formulario enviado:");
    console.log({
      businessName,
      businessDescription,
      productName,
      productPrice,
      businessCategory
    });
  
    // Limpiar el formulario después de enviar
    document.getElementById('business-form').reset();
    alert("¡Negocio creado con éxito!");
  });
  
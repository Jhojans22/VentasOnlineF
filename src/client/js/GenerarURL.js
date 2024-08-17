 // Selecciona todos los productos en la página
 const productos = document.querySelectorAll('.producto');

 productos.forEach((producto, index) => {
     // Obtiene el nombre, precio y la ruta de la imagen desde los atributos de datos
     const nombre = producto.getAttribute('data-name');
     const precio = producto.getAttribute('data-price');
     const imagenSrc = producto.querySelector('img').getAttribute('src');
     

     // Supongamos que la categoría se determina de alguna manera (por ejemplo, la posición del producto)
     const categoriaId1 = Math.floor(index / 4) + 1; // Primer número de categoría (puedes modificar esta lógica)
     const categoriaId2 = 10; // Segundo número de categoría, estático en este caso
     const productoId = index + 1; // Número de producto basado en el índice del bucle

     // Crea la URL con los parámetros del producto
     const url = `/src/client/html/producto.html?name=${encodeURIComponent(nombre)}&price=${encodeURIComponent(precio)}&img=${encodeURIComponent(imagenSrc)}&cat1=${categoriaId1}&cat2=${categoriaId2}&prod=${productoId}`;

     // Selecciona el enlace existente dentro del producto
     const enlaceExistente = producto.querySelector('a');

     // Si existe un enlace, reemplaza el atributo href con la nueva URL
     if (enlaceExistente) {
         enlaceExistente.setAttribute('href', url);
     }
 })
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreProducto = decodeURIComponent(urlParams.get('name') || 'Producto');
    const precioProducto = parseFloat(urlParams.get('price') || '0.00');
    const codigoProducto = `${urlParams.get('cat1')}-${urlParams.get('cat2')}-${urlParams.get('prod')}`;
    const descripcionProducto = decodeURIComponent(urlParams.get('desc') || 'Descripción no disponible');
    
    // Porcentaje de descuento, puedes cambiar este valor según sea necesario
    const porcentajeDescuento = 20; // 20% de descuento
    
    // Calcular el precio anterior
    const precioAnterior = (precioProducto / (1 - (porcentajeDescuento / 100))).toFixed(2);

    // Actualizar la página con los valores correctos
    document.querySelector('.product-name').textContent = nombreProducto;
    document.querySelector('.product-price').textContent = `$${precioProducto.toFixed(2)}`;
    document.querySelector('.product-code').textContent = `Código de Producto: ${codigoProducto}`;
    document.querySelector('.product-description').textContent = descripcionProducto;
    document.querySelector('.price-old').textContent = `$${precioAnterior}`;
});
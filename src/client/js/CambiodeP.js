  // Función para obtener los parámetros de la URL
  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return decodeURIComponent(urlParams.get(name) || '');
}

// Obtener los datos de la URL
const productName = getUrlParameter('name') || 'Nombre del Producto';
const productPrice = parseFloat(getUrlParameter('price')) || 0.00;
const productImg = getUrlParameter('img') || 'ruta/de/imagen/default.jpg';
const productCode = `${getUrlParameter('cat1')}-${getUrlParameter('cat2')}-${getUrlParameter('prod')}` || '000-000-000';
const productDescription = getUrlParameter('desc') || 'Descripción no disponible';

// Porcentaje de descuento
const porcentajeDescuento = 1; // Cambia este valor según el porcentaje de descuento que quieras aplicar

// Calcular el precio anterior
const precioAnterior = (productPrice / (1 - (porcentajeDescuento / 100))).toFixed(2);

// Asignar los valores a los elementos correspondientes
document.getElementById('product-title').textContent = productName;
document.getElementById('product-price').textContent = `Precio Actual: $${productPrice.toFixed(2)}`;
document.getElementById('product-main-image').src = productImg;
document.getElementById('product-code').textContent = `Código de Producto: ${productCode}`;
document.getElementById('product-description').textContent = productDescription;
document.getElementById('price-old').textContent = `Precio Anterior: $${precioAnterior}`;
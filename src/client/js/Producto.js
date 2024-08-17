function scrollLeft(sectionId) {
    const section = document.getElementById(sectionId);
    const container = section.querySelector('.productos-lista');
    container.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight(sectionId) {
    const section = document.getElementById(sectionId);
    const container = section.querySelector('.productos-lista');
    container.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

// Ejemplo de cómo agregar productos al historial de productos vistos
function addToViewedProducts(product) {
    const viewedProductsContainer = document.getElementById('viewed-products');
    const productElement = document.createElement('div');
    productElement.classList.add('producto');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.rating}</p>
        <p>${product.price}</p>
    `;
    viewedProductsContainer.appendChild(productElement);
}

// Ejemplo de producto visto
const product = {
    image: 'product-image.jpg',
    name: 'Producto Visto',
    rating: '⭐⭐⭐⭐⭐',
    price: '$100.00'
};
addToViewedProducts(product);

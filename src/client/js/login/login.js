
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos los elementos de las pestañas
    const tabs = document.querySelectorAll('.contenedor-tabs li');
    const tabLinks = document.querySelectorAll('.contenedor-tabs li a');
    const tabContents = document.querySelectorAll('.contenido-tab > div');

    // Función para desactivar todas las pestañas y ocultar el contenido
    function deactivateTabs() {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');
    }

    // Función para activar la pestaña seleccionada y mostrar su contenido
    function activateTab(tab) {
        deactivateTabs();
        tab.classList.add('active');
        const target = document.querySelector(tab.querySelector('a').getAttribute('href'));
        target.style.display = 'block';
    }

    // Añadimos el evento de clic a cada pestaña
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            activateTab(tab);
        });
    });

    // Activamos la primera pestaña por defecto
    activateTab(tabs[0]);
});

    //BOTON VOLVER
document.querySelector('.volver').addEventListener('click', function() {
    const tabs = document.querySelectorAll('.contenedor-tabs li');
    activateTab(tabs[0]); // Activa la primera pestaña (Iniciar Sesión)
});



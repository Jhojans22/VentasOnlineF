document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        const label = this.previousElementSibling;
        if (label) {
            label.classList.add('active');
        }
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            const label = this.previousElementSibling;
            if (label) {
                label.classList.remove('active');
            }
        }
    });

    // Activar la etiqueta si ya hay texto al cargar
    if (input.value !== '') {
        const label = input.previousElementSibling;
        if (label) {
            label.classList.add('active');
        }
    }
});

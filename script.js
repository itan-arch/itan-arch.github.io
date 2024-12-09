

function toggleSection(id) {
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(seccion => {
        if (seccion.id === id) {
            seccion.style.display = seccion.style.display === 'block' ? 'none' : 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
}

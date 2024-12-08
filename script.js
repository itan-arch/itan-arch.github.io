function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(seccion => seccion.classList.add('oculto'));
    document.getElementById(id).classList.remove('oculto');
}

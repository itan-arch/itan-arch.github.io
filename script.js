function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(seccion => seccion.classList.add('oculto'));  // Oculta todas las secciones
    document.getElementById(id).classList.remove('oculto');  // Muestra la sección seleccionada
}


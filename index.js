// Función para cambiar entre secciones (Inicio y Dashboard)
function toggleSection(id) {
    const sections = document.querySelectorAll('.contenido');
    sections.forEach(section => {
        if (section.id === id) {
            section.style.display = section.style.display === 'block' ? 'none' : 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Función para mostrar/ocultar los detalles de cada pregunta en el Dashboard
function toggleDetail(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}


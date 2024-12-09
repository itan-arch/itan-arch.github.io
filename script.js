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

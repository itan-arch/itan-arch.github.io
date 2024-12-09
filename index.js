function toggleSection(id) {
    const sections = document.querySelectorAll('.contenido');
    sections.forEach(section => {
        if (section.id === id) {
            section.style.display = section.style.display === 'block' ? 'none' : 'Aquí está el código completo actualizado, con el **dashboard** de la página principal (`index.html`) y la página de **servicios** (`servicios.html`), junto con los correspondientes archivos **JavaScript** y **CSS**. He ajustado todo para que las funcionalidades de los botones, el despliegue de contenido y las animaciones sean fluidas, además de incorporar citas **APA** y explicaciones detalladas.

---

### **1. Página Principal (index.html)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campaña Ética: Ansiedad Laboral</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header class="background-header">
        <h1>Campaña Ética: Ansiedad Laboral</h1>
        <p>Promoviendo la salud mental en el trabajo mediante sensibilización y prevención.</p>
    </header>

    <nav>
        <button onclick="toggleSection('inicio')">Inicio</button>
        <button onclick="toggleSection('dashboard')">Dashboard</button>
        <a href="servicios.html"><button>Servicios</button></a>
    </nav>

    <main>
        <!-- Inicio -->
        <section id="inicio" class="contenido">
            <h2>Bienvenidos</h2>
            <p>
                En esta campaña buscamos sensibilizar y visibilizar la ansiedad laboral, un problema crítico que afecta la salud y productividad de los empleados. 
                Es esencial abordarlo mediante una intervención ética y profesional.
            </p>
        </section>

        <!-- Dashboard -->
        <section id="dashboard" class="contenido oculto">
            <h2>Dashboard: ¿Por qué es importante abordar la ansiedad laboral?</h2>
            <p>
                La ansiedad laboral es un factor crítico en el ambiente organizacional que afecta tanto el rendimiento como la salud de los empleados. 
                Según Martínez (2006), el estrés crónico puede generar trastornos psicológicos graves, afectar las relaciones interpersonales en el trabajo 
                y reducir la productividad organizacional.
            </p>

            <button onclick="toggleDetail('porque')">¿Por qué es importante?</button>
            <div id="porque" class="detalle oculto">
                <p>
                    Las intervenciones deben enfocarse en visibilizar y sensibilizar sobre los efectos de la ansiedad, utilizando principios éticos que respeten 
                    la confidencialidad y el bienestar de los empleados. Las consecuencias del estrés laboral incluyen agotamiento, disminución del rendimiento, 
                    y problemas de salud mental (UNESCO, 2005).
                </p>
            </div>

            <button onclick="toggleDetail('como')">¿Cómo lo haremos?</button>
            <div id="como" class="detalle oculto">
                <p>
                    A través de programas de prevención, talleres y terapia individual, brindando herramientas prácticas para reducir el estrés laboral y mejorar 
                    el bienestar psicológico de los empleados.
                </p>
            </div>

            <button onclick="toggleDetail('paraque')">¿Para qué lo hacemos?</button>
            <div id="paraque" class="detalle oculto">
                <p>
                    Para reducir el estrés laboral, mejorar el bienestar psicológico y la productividad organizacional. Según la APA (2017), el bienestar emocional 
                    de los empleados es crucial para mantener un rendimiento óptimo y evitar consecuencias graves como el agotamiento y la depresión.
                </p>
            </div>

            <h3>Incidente Crítico</h3>
            <p>
                El incidente crítico que nos lleva a crear esta campaña es el caso de Sara, quien sufre ansiedad debido a la carga excesiva de trabajo. Esta situación 
                pone de manifiesto la necesidad urgente de intervenir para prevenir problemas de salud mental en el entorno laboral.
            </p>
        </section>
    </main>

    <footer>
        <p>© 2024 - Campaña Ética en Psicología Organizacional</p>
    </footer>

    <script src="index.js"></script>
</body>
</html>

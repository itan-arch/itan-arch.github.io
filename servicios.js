// Function to toggle visibility of service details
function toggleDetail(id) {
    const section = document.getElementById(id);
    // Toggle between display 'none' and 'block' to show or hide the section
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

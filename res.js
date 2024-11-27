function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}
function toggleSection() {
    const section = document.getElementById('skills-details');
    const arrow = document.getElementById ('skills-arrow');

    if (section && arrow) { // Check if elements exist
        if (section.style.display === "none") {
            section.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
        } else {
            section.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    } else {
        console.error("Element not found.");
    }
}
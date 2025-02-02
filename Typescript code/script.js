function toggleSection() {
    var h2 = document.getElementById('skills-details');
    var arrow = document.getElementById('skills-arrow');
    if (h2 && arrow) {
        var isHidden = h2.style.display === "none";
        h2.style.display = isHidden ? 'block' : 'none';
        arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}

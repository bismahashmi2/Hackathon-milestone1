function toggleSection(h2Id) {
    var h2 = document.getElementById(h2Id);
    var arrow = document.getElementById('skills-arrow');
    if (h2 && arrow) {
        var isHidden = h2.style.display === "none";
        h2.style.display = isHidden ? 'block' : 'none';
        arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}

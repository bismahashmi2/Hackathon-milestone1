function toggleSection(h2Id:string) {
    const h2 = document.getElementById(h2Id);
    const arrow = document.getElementById ('skills-arrow')
    if (h2 && arrow) {
        const isHidden = h2.style.display === "none";
        h2.style.display = isHidden ? 'block' : 'none';
        arrow.style.transform = isHidden? 'rotate(180deg)' : 'rotate(0deg)'
    }
}
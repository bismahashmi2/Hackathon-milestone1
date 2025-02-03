// function toggleSection() {
//     const section = document.getElementById('skills-details');
//     const arrow = document.getElementById ('skills-arrow');

//     if (section && arrow) { // Check if elements exist
//         if (section.style.display === "none") {
//             section.style.display = "block";
//             arrow.style.transform = "rotate(180deg)";
//         } else {
//             section.style.display = "none";
//             arrow.style.transform = "rotate(0deg)";
//         }
//     } else {
//         console.error("Element not found.");
//     }
// }
function toggleSection(h2Id:string) {
    const h2= document.getElementById(h2Id);
    const arrow = document.getElementById ('skills-arrow');

    if (h2 && arrow) { // Check if elements exist
        const isHidden = h2.style.display === "none";
         h2.style.display = isHidden ? 'block' : 'none';
        arrow.style.transform = isHidden? 'rotate(180deg)' : 'rotate(0deg)'
    }
}
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing dashboard..."); // Debug
    
    // Initialize the slider
    initializeSlider();
    
    // Initialize detail views
    initializeDetailViews();
    
    // Add easter egg
    document.querySelector(".camille-note").addEventListener("click", () => {
        alert("You found the easter egg! As the transcript creator would say: 'You've got to be kidding me, you're too good at this!'");
    });
    
    // Fix for images that might not load
    handleImageErrors();
});

function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            // Replace broken image with a placeholder
            const componentName = this.alt || 'Component';
            this.src = `https://via.placeholder.com/600x360/333333/ffffff?text=${componentName.replace(/ /g, '+')}`;
            console.log("Fixed broken image:", componentName); // Debug
            this.onerror = null; // Prevent infinite loop
        };
    });
}
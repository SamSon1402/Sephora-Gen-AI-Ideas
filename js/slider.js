function initializeSlider() {
    console.log("Initializing slider..."); // Debug
    
    const track = document.querySelector(".image-track");
    const images = track.querySelectorAll(".image-container");
    
    // Initialize animation parameters
    const animateOptions = {
        duration: 1200,
        fill: "forwards",
        easing: "cubic-bezier(0.33, 1, 0.68, 1)"
    };

    // Function to handle mouse down event
    window.onmousedown = e => {
        track.dataset.mouseDownAt = e.clientX;
        clickStartTime = new Date().getTime();
        isDragging = false;
        console.log("Mouse down at:", e.clientX); // Debug
    }

    // Function to handle mouse up event
    window.onmouseup = () => {
        console.log("Mouse up, isDragging:", isDragging); // Debug
        
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage || "0";
    }

    // Function to handle mouse move event
    window.onmousemove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        // Calculate the distance we've dragged
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
        
        // If we've moved a significant amount, consider it a drag
        if (Math.abs(mouseDelta) > 10) {
            isDragging = true;
            console.log("Dragging detected"); // Debug
        }
        
        const maxDelta = window.innerWidth / 2;
        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage || "0") + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
        
        // Store the percentage for later use
        track.dataset.percentage = nextPercentage;

        // Animate the track position
        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, animateOptions);

        // Animate each image with a parallax effect
        images.forEach(image => {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, animateOptions);
        });
    }

    // Prevent default drag behavior
    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("draggable", "false");
    });
}
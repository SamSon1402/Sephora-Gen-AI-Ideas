// Declare isDragging as a global variable to be accessible across files
let isDragging = false;
let clickStartTime = 0;

function initializeDetailViews() {
    console.log("Initializing detail views..."); // Debug
    
    // Add click listeners to cards
    const cards = document.querySelectorAll('.image-container');
    console.log("Found cards:", cards.length); // Debug
    
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            const elapsed = new Date().getTime() - clickStartTime;
            console.log("Click detected, isDragging:", isDragging, "Elapsed:", elapsed); // Debug
            
            if (!isDragging && elapsed < 300) {
                const viewId = card.dataset.view;
                console.log("Showing view:", viewId); // Debug
                showDetailView(viewId);
            }
        });
    });
}

function showDetailView(viewId) {
    const detailView = document.getElementById(viewId);
    console.log("Looking for view:", viewId, "Found:", detailView); // Debug
    
    const mainContainer = document.querySelector(".track-container");
    const instruction = document.querySelector(".instruction");
    
    if (detailView) {
        // Hide main dashboard
        mainContainer.style.display = "none";
        instruction.style.display = "none";
        
        // Show detail view
        detailView.style.display = "flex";
        
        // Scroll to top
        window.scrollTo(0, 0);
    } else {
        console.error("Detail view not found:", viewId);
    }
}

function hideDetailView() {
    console.log("Hiding detail views..."); // Debug
    
    const detailViews = document.querySelectorAll(".detail-view");
    const mainContainer = document.querySelector(".track-container");
    const instruction = document.querySelector(".instruction");
    
    // Hide all detail views
    detailViews.forEach(view => {
        view.style.display = "none";
    });
    
    // Show main dashboard
    mainContainer.style.display = "flex";
    instruction.style.display = "block";
}
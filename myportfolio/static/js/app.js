// Get a reference to the floating button
const backButton = document.getElementById('back-to-top');

// Add an event listener to the button
backButton.addEventListener('click', function(event) {
    // Prevent the default behavior of the anchor element
    event.preventDefault();
    
    // Scroll back to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});
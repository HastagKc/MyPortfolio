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

// responsive hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);



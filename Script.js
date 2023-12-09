// Show/hide the "Back to Top" button based on scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");

    // Calculate the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Calculate the maximum scroll position, i.e., the bottom of the page
    var maxScrollPosition = document.body.scrollHeight - window.innerHeight;

    // Adjust the condition to show/hide the button
    if (scrollPosition >= maxScrollPosition) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// JavaScript function to scroll to the top of the page for Chrome,Firefox, IE, and Opera
function scrollToTop() {
    document.documentElement.scrollTop = 0; 
}

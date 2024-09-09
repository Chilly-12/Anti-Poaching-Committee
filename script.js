// script.js
window.onscroll = function() {
    const button = document.getElementById('jumpToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = 'block'; // Show the button
    } else {
        button.style.display = 'none'; // Hide the button
    }
};

document.getElementById('jumpToTop').onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
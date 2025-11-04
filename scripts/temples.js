// Function to handle the dynamic footer content
function setDynamicFooterContent() {
    // Set the current year for the copyright
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set the last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastmodified').textContent = lastModified;
}

// Function to handle the responsive hamburger menu
function setupMobileMenu() {
    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    // Add a click event listener to the menu button
    menuButton.addEventListener('click', () => {
        // Toggle the 'show' class on the navigation menu
        navigation.classList.toggle('show');
        // Toggle the 'open' class on the button for the 'X' symbol
        menuButton.classList.toggle('open');
    });
}

// Execute the functions once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setDynamicFooterContent();
    setupMobileMenu();
});
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

// Event listener for checkbox change
darkModeToggle.addEventListener('change', function() {
  toggleDarkMode();
});
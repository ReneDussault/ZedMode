// injectScript.js
function toggleDarkMode() {
    console.log("toggle_dark_mode received");
    document.body.classList.toggle("dark-mode");
}

// Listen for messages from the injected script
window.addEventListener("message", function (event) {
    if (event.source === window && event.data.message === "toggle_dark_mode") {
        toggleDarkMode();
    }
});

// Trigger the toggleDarkMode function
toggleDarkMode();

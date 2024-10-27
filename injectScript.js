function toggleDarkMode() {
    console.log("toggle_dark_mode received");
    document.body.classList.toggle("dark-mode");
}

window.addEventListener("message", function (event) {
    if (event.source === window && event.data.message === "toggle_dark_mode") {
        toggleDarkMode();
    }
});

toggleDarkMode();

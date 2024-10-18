// Function to update the icon based on the state (enabled or disabled)
function updateIcon(darkModeEnabled) {
    const iconPath = darkModeEnabled ? "images/icon" : "images/inactive-icon";
    browser.action.setIcon({
        path: {
            "16": iconPath + "16.png",
            "48": iconPath + "48.png",
            "128": iconPath + "128.png"
        }
    });
}

// On extension load, get the saved state from storage and update the icon
browser.storage.local.get("darkModeEnabled").then((result) => {
    const darkModeEnabled = result.darkModeEnabled || false; // Default to false if undefined
    updateIcon(darkModeEnabled);  // Set the icon based on the state
});

// When the extension icon is clicked, toggle dark mode
browser.action.onClicked.addListener((tab) => {
    // Get the current state from storage
    browser.storage.local.get("darkModeEnabled").then((result) => {
        const darkModeEnabled = !result.darkModeEnabled; // Toggle the state

        // Save the new state in storage
        browser.storage.local.set({ darkModeEnabled });

        // Update the icon based on the new state
        updateIcon(darkModeEnabled);

        // Send a message to the content script to enable/disable dark mode
        browser.tabs.sendMessage(tab.id, { action: "toggleDarkMode", enabled: darkModeEnabled });
    });
});

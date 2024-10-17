// When the extension icon is clicked, toggle dark mode
browser.action.onClicked.addListener((tab) => {
    // Get the current state from storage
    browser.storage.local.get("darkModeEnabled").then((result) => {
        const darkModeEnabled = !result.darkModeEnabled; // Toggle the state

        // Save the new state in storage
        browser.storage.local.set({ darkModeEnabled });

        // Send a message to the content script to enable/disable dark mode
        browser.tabs.sendMessage(tab.id, { action: "toggleDarkMode", enabled: darkModeEnabled });
    });
});

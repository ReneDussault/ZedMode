// update the icon based on the state (enabled or disabled)
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

// get the saved state from storage and update the icon
browser.storage.local.get("darkModeEnabled").then((result) => {
    const darkModeEnabled = result.darkModeEnabled || false;
    updateIcon(darkModeEnabled);
});

// toggle dark mode
browser.action.onClicked.addListener((tab) => {
    browser.storage.local.get("darkModeEnabled").then((result) => {
        const darkModeEnabled = !result.darkModeEnabled; 
        browser.storage.local.set({ darkModeEnabled });
        updateIcon(darkModeEnabled);
        browser.tabs.sendMessage(tab.id, { action: "toggleDarkMode", enabled: darkModeEnabled });
    });
});

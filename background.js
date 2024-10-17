// background.js
browser.action.onClicked.addListener(function (tab) {
    browser.tabs.sendMessage(tab.id, { action: "toggleDarkMode" });
});

// content.js
function toggleDarkMode() {
  const darkModeStyleId = 'dark-mode-style';
  let darkModeStyleElement = document.getElementById(darkModeStyleId);

  if (darkModeStyleElement) {
    // If the style element exists, toggle its presence
    darkModeStyleElement.disabled = !darkModeStyleElement.disabled;
  } else {
    // If it doesn't exist, create it and append to head
    darkModeStyleElement = document.createElement('style');
    darkModeStyleElement.id = darkModeStyleId;
    darkModeStyleElement.textContent = `
          body {
              background-color: #121212 !important;
              color: #e8e6e3 !important;
          }
          /* Add more selectors and rules to handle specific elements */
      `;
    document.head.appendChild(darkModeStyleElement);
  }
}

// Listen for the message from the background script
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleDarkMode") {
    toggleDarkMode();
  }
});

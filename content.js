// Function to force the color of all SVG text elements with class 'apexcharts-title-text'
function forceSvgTextColor(enabled) {
  const svgTextElements = document.querySelectorAll('text.apexcharts-title-text');

  svgTextElements.forEach((svgText) => {
    if (enabled) {
      svgText.setAttribute('fill', '#ffffff'); // Dark mode: Change to white
    } else {
      svgText.setAttribute('fill', '#000000'); // Light mode: Reset to black or any default color
    }
  });
}

// Function to force the color of specific elements
function forceTextColor(enabled) {
  const textElements = document.querySelectorAll(
    'div.size-18.text-black.bold.mb-2, ' +
    'h5.bold.text-black.size-18, ' +
    'div.d-flex.justify-content-between.align-items-center.mb-2 h5.bold.text-black.size-18.m-0, ' +
    'div#level-progress div.text-right.faded span#progression-level-to.level.level-9::after, ' +
    '.hIyNDR, ' +
    '.dbWdsk, ' +
    '.dOvFlm, ' +
    '.bdVqPL, ' +
    '.hECPcH'
  );

  textElements.forEach((element) => {
    if (enabled) {
      element.style.color = '#ffffff'; // Dark mode: Change to white
    } else {
      element.style.color = ''; // Light mode: Reset to default
    }
  });
}

// Function to apply dark mode styles
function toggleDarkMode(enabled) {
  const darkModeStyleId = 'dark-mode-style';
  let darkModeStyleElement = document.getElementById(darkModeStyleId);

  if (enabled) {
    forceSvgTextColor(true); // Apply dark mode to SVG text
    forceTextColor(true); // Apply dark mode to specified text elements
    if (!darkModeStyleElement) {
      darkModeStyleElement = document.createElement('style');
      darkModeStyleElement.id = darkModeStyleId;
      darkModeStyleElement.textContent = `
        body {
          background-color: #121212 !important;
          color: #e8e6e3 !important;
        }
        .nav-link {
          color: #ffffff !important;
        }
        h5.text-black.bold.mb-0 {
          color: #ffffff !important;
        }
        div#dashboard-streak span {
          color: #ffffff !important;
        }
        div#level-progress div.text-right.faded span#progression-level-to.level.level-9::after {
          color: #ffffff !important;
        }
        .dbWdsk {
          color: #ffffff !important;
        }
        .hIyNDR {
          background-color: #121212 !important;
          color: #ffffff !important;
        }
        .bdVqPL {
          background-color: #121212 !important;
          color: #ffffff !important;
        }
        .hECPcH {
          background-color: #121212 !important;
          color: #ffffff !important;
        }
      `;
      document.head.appendChild(darkModeStyleElement);
    }
  } else {
    forceSvgTextColor(false); // Reset SVG text color when dark mode is disabled
    forceTextColor(false); // Reset specified text elements to default
    if (darkModeStyleElement) {
      darkModeStyleElement.remove();
    }
  }
}

// Check the current state of dark mode from storage and apply it
browser.storage.local.get("darkModeEnabled").then((result) => {
  const darkModeEnabled = result.darkModeEnabled || false; // Default to false if not set
  toggleDarkMode(darkModeEnabled); // Apply the state
});

// Listen for the message from the background script
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  toggleDarkMode(request.enabled); // Apply or remove dark mode based on the toggle state
});

// Observer to monitor DOM changes and reapply styles if necessary
const observer = new MutationObserver(() => {
  const darkModeStyleElement = document.getElementById('dark-mode-style');
  if (darkModeStyleElement) {
    toggleDarkMode(true);  // Reapply dark mode styles if DOM changes
  } else {
    toggleDarkMode(false); // Ensure reset if dark mode is disabled
  }
});

// Start observing the body for changes, including newly added elements
observer.observe(document.body, { childList: true, subtree: true });

// Function to force the color of specific elements with a fallback on more stable selectors
function forceTextColor(enabled) {
  const textElements = document.querySelectorAll(
    '[data-sentry-element="StyledQuestionTitle"], ' +
    '[data-sentry-element="StyledQuestionsTitle"], ' +
    '[data-sentry-element="StyledQuestionsSubtitle"], ' +
    '[data-sentry-element="StyledTitle"], ' +
    '[data-sentry-element="GreetingContainer"], ' +
    '[data-sentry-component="Greeting"], ' +
    '[data-sentry-element="StyledButton"], ' +
    '[data-sentry-element="StyledMainButton"], ' +
    '[data-sentry-element="StyledUserWrapper"] p, ' +
    '[data-sentry-element="Tabs"], ' +
    '[data-sentry-element="TabPanel"], ' +
    '[data-sentry-element="StyledTab"], ' +
    '[data-sentry-element="StyledLearningRoomsWrapper"] h3, ' +
    '[data-sentry-element="StyledFriends"] p, ' +
    '[data-sentry-element="StyledRecordsWrapper"], ' +
    '[data-sentry-component="determineRankDisplay"], ' +
    '[data-testid="record-item-rank"] p, ' +
    '[data-sentry-element="StyledFlexContainer"] h2'
  );

  textElements.forEach((element) => {
    if (enabled) {
      element.style.color = '#FFFFFF'; // Dark mode: Change to white
    } else {
      element.style.color = ''; // Reset to default
    }
  });
}


// Function to force the color of specific bg with a fallback on more stable selectors
function forceBgColor(enabled) {
  const bgElements = document.querySelectorAll(
    '#animation.animation, ' +
    '[data-sentry-element="StyledAccordionDetailsMain"], ' +
    '[data-sentry-component="QuestionAndAnswerSection"], ' +
    '[data-sentry-element="StyledQuestionsSection"], ' +
    '[data-sentry-element="StyledMyLearning"], ' +
    '[data-sentry-element="StyledFriends"], ' +
    '[data-sentry-element="StyledSectionBox"], ' +
    '[data-sentry-element="GreetingContainer"], ' +
    '[data-sentry-component="Greeting"], ' +
    '[data-sentry-element="StyledUserWrapper"], ' +
    '[data-sentry-component="RoomDetailsFooter"], ' +
    '[data-sentry-element="StyledInnerSection"] p, ' +
    '[data-sentry-element="StyledFlexContainer"]'
  );

  bgElements.forEach((bg) => {
    if (enabled) {
      bg.style.backgroundColor = '#121212'; // Dark mode: Change bg to black
      bg.style.color = '#FFFFFF'; // Dark mode: Change text to white
    } else {
      bg.style.backgroundColor = ''; // Reset to default
      bg.style.color = ''; // Reset to default
    }
  });
}


// Function to apply dark mode styles
function toggleDarkMode(enabled) {
  const darkModeStyleId = 'dark-mode-style';
  let darkModeStyleElement = document.getElementById(darkModeStyleId);

  if (enabled) {
    // forceSvgTextColor(true); // Apply dark mode to SVG text
    forceTextColor(true); // Apply dark mode to specified text elements
    forceBgColor(true); // Apply dark mode to specified background elements

    // Create and insert the dark mode style only if it doesn't exist yet
    if (!darkModeStyleElement) {
      darkModeStyleElement = document.createElement('style');
      darkModeStyleElement.id = darkModeStyleId;
      darkModeStyleElement.textContent = `
        body {
          background-color: #000000 !important;
          color: #FFFFFF !important;
        }
      `;
      document.head.appendChild(darkModeStyleElement);
    }
  } else {
    forceTextColor(false); // Reset specified text elements to default
    forceBgColor(false); // Reset specified background elements to default

    // Remove the dark mode style element if it exists
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
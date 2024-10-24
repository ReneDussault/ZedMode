// Function to force the color of specific elements with a fallback on more stable selectors
function forceTextColor(enabled) {
  const textElements = document.querySelectorAll(
    '[data-sentry-element="StyledQuestionTitle"], ' +
    '[data-sentry-element="StyledQuestionsTitle"], ' +
    '[data-sentry-element="StyledQuestionsSubtitle"], ' +
    '[data-sentry-element="StyledTabHeading"], ' +
    '[data-sentry-element="StyledTitle"], ' +
    '[data-sentry-element="GreetingContainer"], ' +
    '[data-sentry-component="Greeting"], ' +
    '[data-sentry-element="StyledButton"], ' +
    '[data-sentry-element="StyledMainButton"], ' +
    '[data-sentry-element="StyledBillingDetailWrapper"] p, ' +
    '[data-sentry-component="PaymentMethodDetails"], ' +
    '[data-sentry-component="PaymentMethodDetails"] h2, ' +
    '[data-sentry-element="StyledFlexWithRowGap"] h2, ' +
    '[data-sentry-element="StyledFlexWithRowGap"] p, ' +
    '[data-sentry-element="StyledFlexWithRowGap"] strong, ' +
    '[data-sentry-element="StyledUserWrapper"] p, ' +
    '[data-sentry-element="Tabs"], ' +
    '[data-sentry-element="TabPanel"], ' +
    '[data-sentry-element="TabPanel"] h3, ' +
    '[data-sentry-element="TabPanel"] li, ' +
    '[data-sentry-element="StyledTab"], ' +
    '[data-sentry-element="StyledLearningRoomsWrapper"] h3, ' +
    '[data-sentry-element="StyledLearningRoomsWrapper"] p, ' +
    '[data-sentry-element="StyledFriends"] p, ' +
    '[data-sentry-element="StyledRecordsWrapper"], ' +
    '[data-sentry-component="determineRankDisplay"], ' +
    '[data-testid="record-item-rank"] p, ' +
    '[data-sentry-element="StyledGridWrapper"] h2, ' +
    '[data-sentry-element="StyledGridWrapper"] p, ' +
    '[data-sentry-element="StyledImageWrapper"] p, ' +
    '[data-content="position"], ' +
    '[data-sentry-element="StyledFlexWithRowGap"] div, ' +
    '[data-sentry-element="StyledContent"], ' +
    '[data-sentry-component="SubscriptionSection"] button, ' +
    '[data-sentry-component="OccupationDetails"] h2, ' +
    '[data-sentry-component="Socials"] h2, ' +
    '[data-sentry-component="ExperienceLevel"] h2, ' +
    '[data-sentry-component="Discord"] h2, ' +
    '[data-sentry-component="DeleteAccount"] h2, ' +
    '[role="tab"], ' +
    '[data-sentry-component="StyledPathProgress"] span, ' +
    '[data-sentry-element="StyledFlexContainer"] h2'
  );

  textElements.forEach((element) => {
    if (enabled) {
      element.style.color = '#FFFFFF'; // Dark mode: Change to white
    } else {
      element.style.backgroundColor = ''; // Reset to default
      element.style.color = ''; // Reset to default
    }
  });
}


// Function to force the color of specific bg with a fallback on more stable selectors
function forceBgColor(enabled) {
  const bgElements = document.querySelectorAll(
    '#animation.animation, ' +
    '[data-sentry-component="Greeting"], ' +
    '[data-sentry-component="PathCardContainer"], ' +
    '[data-sentry-component="QuestionAndAnswerSection"], ' +
    '[data-sentry-component="RoomDetailsFooter"], ' +
    '[data-sentry-element="GreetingContainer"], ' +
    '[data-sentry-element="StyledAccordionDetailsMain"], ' +
    '[data-sentry-element="StyledQuestionsSection"], ' +
    '[data-sentry-element="StyledMyLearning"], ' +
    '[data-sentry-element="StyledFriends"], ' +
    '[data-sentry-element="StyledSectionBox"], ' +
    '[data-sentry-element="StyledUserWrapper"], ' +
    '[data-sentry-element="StyledInnerSection"] p, ' +
    '[data-sentry-element="StyledGridWrapper"] a, ' +
    '[data-sentry-element="StyledGridWrapper"], ' +
    '[data-sentry-element="StyledPathCardContainerWrapper"], ' +
    '[data-sentry-element="StyledTabPaper"] a, ' +
    '[data-sentry-element="StyledTabPaper"] h2, ' +
    '[data-sentry-element="LearningPathCard"], ' +
    '[data-sentry-element="TabPanel"], ' +
    '[data-testid="learning-path"] a, ' +
    '[data-testid="learning-path"] div, ' +
    '[data-testid="learning-path"] p, ' +
    '[data-testid="learning-path"] h3, ' +
    '[data-testid="user-rank-card"], ' +
    '[data-testid="user-rank-card"] p, ' +
    '[data-testid="user-rank-card"] a, ' +
    '[data-testid="user-rank-card"] small, ' +
    '[data-testid="user-rank-card"] span, ' +
    '[data-testid="user-rank-card"] svg, ' +
    '[data-sentry-element="Tabs"] a, ' +
    '[data-content="content"] p, ' +
    '[data-sentry-element="Tabs"] h2, ' +
    '[role="rowgroup"], ' +
    '[role="rowgroup"] span, ' +
    '[role="rowgroup"] div, ' +
    '[role="table"] div, ' +
    '[class="card"], ' +
    '[class="table table-sm table-hover"], ' +
    '[data-sentry-element="StyledDropdownMenuTrigger"] p, ' +
    '[data-sentry-component="ManagementDashboardNavigation"], ' +
    '[data-sentry-component="ManagementDashboardNavigation"] a, ' +
    '[data-sentry-component="ManagementDashboardNavigation"] div, ' +
    '[data-sentry-component="ManagementDashboardNavigation"] nav, ' +
    '[data-sentry-component="ManagementDashboardNavigation"] button, ' +
    '[data-sentry-element="StyledManageAccountContentSection"], ' +
    '[data-sentry-element="StyledInputFieldsWrapper"] label, ' +
    '[data-sentry-component="OccupationDetails"] label, ' +
    '[data-sentry-component="Socials"] label, ' +
    '[data-sentry-component="Discord"] p, ' +
    '[data-sentry-component="DeleteAccount"] p, ' +
    '[data-testid="upload-avatar-image"] div, ' +
    '[data-sentry-element="StyledFlexContainer"]'
  );

  bgElements.forEach((bg) => {
    if (enabled) {
      bg.style.backgroundColor = '#222222'; // Dark mode: Change bg to black
      bg.style.color = '#FFFFFF'; // Dark mode: Change text to white
    } else {
      bg.style.backgroundColor = ''; // Reset to default
      bg.style.color = ''; // Reset to default
    }
  });
}


// Function to force the color of specific bg with a fallback on more stable selectors
function forceSecondBgColor(enabled) {
  const ScndbgElements = document.querySelectorAll(
    '[data-sentry-element="StyledGridWrapper"], ' +
    '[data-sentry-element="StyledHeadingWrapper"] h2, ' +
    '[data-sentry-element="StyledHeadingWrapper"] p, ' +
    '[data-sentry-component="Modules"], ' +
    '[data-heading="first"], ' +
    '[data-sentry-element="StyledGeneralHeading"], ' +
    '[data-sentry-element="StyledGeneralHeading"] div, ' +
    '[data-sentry-element="StyledFooter"], ' +
    '[data-sentry-component="Series"], ' +
    '[data-sentry-component="Series"] p, ' +
    '[data-sentry-element="StyledTabPaper"], ' +
    '[data-sentry-component="Series"] div, ' +
    '[role="tablist"] div, ' +
    '[data-sentry-component="BadgesTab"] p, ' +
    '[data-sentry-component="YearlyActivityTab"] text, ' +
    '[data-sentry-element="StyledKeyContainer"] div, ' +
    '[data-sentry-element="StyledTotalContainer"], ' +
    '[data-sentry-element="StyledYearContainer"] div, ' +
    '[data-sentry-element="StyledHeaderTitleWithIcon"], ' +
    '[data-sentry-element="StyledGrid"]'
  );

  ScndbgElements.forEach((bg) => {
    if (enabled) {
      bg.style.backgroundColor = '#000000'; // Dark mode: Change bg to black
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
    document.querySelectorAll('[data-sentry-element="StyledGeneralHeading"]').forEach((element) => {
      element.style.margin = 'unset';
    });

    document.querySelectorAll('[data-sentry-element="StyledFooter"]').forEach((element) => {
      element.style.margin = 'unset';
    });

    forceTextColor(true); // Apply dark mode to specified text elements
    forceBgColor(true); // Apply dark mode to specified background elements
    forceSecondBgColor(true); // Apply dark mode to specified 2nd background elements

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
    forceSecondBgColor(false); // Reset specified 2nd background elements

    document.querySelectorAll('[data-sentry-element="StyledGeneralHeading"]').forEach((element) => {
      element.style.margin = '';
    });

    document.querySelectorAll('[data-sentry-element="StyledFooter"]').forEach((element) => {
      element.style.margin = '';
    });

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
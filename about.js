//EXAMPLE OF USING JS TO REDIRECT TO ANOTHER PAGE USING BUTTONS
/* <button onclick="openIndex()">
  <img
    src="res/WordPress-logotype-wmark-white.png"
    alt="WordPress-logotype-wmark"
  />
</button>; */

//Button Click Redirection
const openIndex = () => {
  window.location.href = "index.html";
};
const openHosting = () => {
  window.location.href = "hosting.html";
};
const openNews = () => {
  window.location.href = "news.html";
};
const openShowCase = () => {
  window.location.href = "showcase.html";
};
//EXTEND DROPDOWN START
const openThemes = () => {
  window.location.href = "";
};
const openPlugins = () => {
  window.location.href = "";
};
const openPatterns = () => {
  window.location.href = "";
};
const openBlocks = () => {
  window.location.href = "";
};
//EXTEND DROPDOWN END

//LEARN DROPDOWN START
const openLearnWordPress = () => {
  window.location.href = "";
};
const openDocumentation = () => {
  window.location.href = "";
};
const openForums = () => {
  window.location.href = "";
};
const openDevelopers = () => {
  window.location.href = "";
};
//LEARN DROPDOWN END

//COMMUNITY DROPDOWN START
const openMakeWordPress = () => {
  window.location.href = "";
};
const openPhotoDirectory = () => {
  window.location.href = "";
};
const openFiveForTheFuture = () => {
  window.location.href = "";
};
const openEvents = () => {
  window.location.href = "";
};
//COMMUNITY DROPDOWN END

//ABOUT DROPDOWN START
const openAboutWordPress = () => {
  window.location.href = "about.html";
};
const openEnterprise = () => {
  window.location.href = "enterprise.html";
};

//ABOUT-TECH DROPDOWN START
const openRequirements = () => {
  window.location.href = "";
};
const openFeatures = () => {
  window.location.href = "";
};
const openSecurity = () => {
  window.location.href = "";
};
const openRoadmap = () => {
  window.location.href = "";
};
const openHistory = () => {
  window.location.href = "";
};
//ABOUT-TECH DROPDOWN END

//ABOUT-DETAILS DROPDOWN START
const openDomains = () => {
  window.location.href = "";
};
const openLicense = () => {
  window.location.href = "";
};
const openAccessibility = () => {
  window.location.href = "";
};
const openPrivacyPolicy = () => {
  window.location.href = "";
};
const openStatistics = () => {
  window.location.href = "";
};
//ABOUT-DETAILS DROPDOWN END

//ABOUT-PEOPLE DROPDOWN START
const openPhilosophy = () => {
  window.location.href = "";
};
const openEtiquette = () => {
  window.location.href = "";
};
const openSwag = () => {
  window.location.href = "";
};
const openLogos = () => {
  window.location.href = "";
};
const openPeopleofWordPress = () => {
  window.location.href = "";
};
//ABOUT-PEOPLE DROPDOWN END

//DROPDOWNABOUT FUNCTION
document.addEventListener("click", (e) => {
  const isDropdownButtonAbout = e.target.matches("#dropdown_btnab");
  if (!isDropdownButtonAbout && e.target.closest("#dropdownabout") != null) return;

  let curDropDownAb;
  if (isDropdownButtonAbout) {
    curDropDownAb = e.target.closest("#dropdownabout");
    curDropDownAb.classList.toggle("active");
  }

  document.querySelectorAll("#dropdownabout.active").forEach((dropdownabout) => {
    if (dropdownabout == curDropDownAb) return;
    dropdownabout.classList.remove("active");
  });
});




// Dropdown Function
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("#dropdown_btn");
  // console.log('Clicked element: ', e.target);
  // console.log('Is dropdown button: ', isDropdownButton);
  if (!isDropdownButton && e.target.closest("#dropdown") != null) return;

  let curDropDown;
  if (isDropdownButton) {
    curDropDown = e.target.closest("#dropdown");
    curDropDown.classList.toggle("active");
    // console.log('Current dropdown: ', curDropDown);
  }

  document.querySelectorAll("#dropdown.active").forEach((dropdown) => {
    if (dropdown === curDropDown) return;
    dropdown.classList.remove("active");
  });
});

//EXAMPLE OF USING JS TO REDIRECT TO ANOTHER PAGE USING BUTTONS
/* <button onclick="openIndex()">
  <img
    src="res/WordPress-logotype-wmark-white.png"
    alt="WordPress-logotype-wmark"
  />
</button>; */
// When the user scrolls the page, execute toggleStickyNavbar
window.onscroll = function() { toggleStickyNavbar(); };

// Get the navbar (now identified by the ID 'fav')
var navbar = document.getElementById("fav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky style to the navbar when you reach its scroll position. Remove it when you leave the scroll position
function toggleStickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.width = '100%';
    document.querySelector('.content').style.paddingTop = '60px'; // Adjust the padding as needed
  } else {
    navbar.style.position = 'relative';
    navbar.style.top = 'auto';
    navbar.style.width = '100%';
    document.querySelector('.content').style.paddingTop = '16px'; // Reset the padding
  }
}


const openDownload = () => {
  window.location.href = "download.html";
};

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
  window.location.href = "";
};
const openEnterprise = () => {
  window.location.href = "";
};

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

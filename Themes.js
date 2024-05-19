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



function tabHosting(evt) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with id starting with "tablink" and remove the active style
  tablinks = document.querySelectorAll('[id^="tablink"]');
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }

  // Get all elements with data-content attribute and hide them
  tabcontent = document.querySelectorAll('[id^="Popular"], [id^="Latest"], [id^="Commercial"], [id^="Community"], [id^="BlockThemes"]');
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Show the current tab, and add an active style to the button that opened the tab
  var contentName = evt.currentTarget.getAttribute('data-content');
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#ccc";
}

// Initialize the first tab as active on page load
document.getElementById('tablink1').click();

function applyStyles(boxId) {
  const box = document.getElementById(boxId);

  
  const beforeStyle = `
      #${boxId}::before {
          content: "MORE INFO";
          background-color: rgba(0, 0, 0, 0.800);
          padding: 15px 25px;
          border-radius: 5px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          text-align: center;
          font-size: 18px;
          color: White;
          transition: opacity 0.3s ease;
      }

      #${boxId}:hover::before {
          opacity: 1;
        
      }
    
  `;

  // CSS rules for ::after pseudo-element
  const afterStyle = `
      #${boxId}::after {
          content: "Download";
          position: absolute;
          bottom: 10px;
          right: 10px;
          background-color:rgb(54, 127, 211);
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease;
      }

      #${boxId}:hover::after {
          opacity: 1;
          background: 0 0 0 200px rgba(255,255,255,0.5);
          
      }
      #${boxId}:hover img {
  opacity: 0.3; /* Change opacity when hovering over the box */
}
  `;
  
  // Create style elements
  const beforeStyleElement = document.createElement('style');
  const afterStyleElement = document.createElement('style');

  beforeStyleElement.innerHTML = beforeStyle;
  afterStyleElement.innerHTML = afterStyle;

  // Append style elements to the document head
  document.head.appendChild(beforeStyleElement);
  document.head.appendChild(afterStyleElement);
}

// Apply styles to individual boxes by their IDs
applyStyles("box1");
applyStyles("box2");
applyStyles("box3");
applyStyles("box4");
applyStyles("box5");
applyStyles("box6");
applyStyles("box7");
applyStyles("box8");
applyStyles("box9");

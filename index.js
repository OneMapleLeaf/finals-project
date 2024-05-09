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

document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches('#dropdown_btn');
  if (!isDropdownButton && e.target.closest('#dropdown') != null) return;

  let curDropDown;
  if (isDropdownButton){
    curDropDown = e.target.closest('#dropdown');
    curDropDown.classList.toggle('active');
  }

  document.querySelectorAll('#dropdown.active').forEach(dropdown => {
    if (dropdown === curDropDown) return;
    dropdown.classList.remove('active');
  });
});

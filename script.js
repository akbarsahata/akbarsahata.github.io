function updateSelectedMobileHeader(selectElement) {
  const hash = window.location.hash;
  const options = selectElement.options;
  if (!hash) {
    selectElement.selectedIndex = 0;
  } else {
    for (const option of options) {
      if (hash === option.value) {
        selectElement.selectedIndex = option.index;
        break;
      }
    }
  }
}

const mobileHeader = document.getElementById("pages");

window.onload = function () {
  updateSelectedMobileHeader(mobileHeader);
};

window.onhashchange = function () {
  updateSelectedMobileHeader(mobileHeader);
};

mobileHeader.onchange = function (event) {
  window.location.hash = event.target.value;
};

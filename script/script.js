let themeSwitch = document.querySelector(".themeSwitch");
let body = document.querySelector("body");

//theme switch toggle
themeSwitch.onclick = function () {
  body.classList.toggle("dark");
};

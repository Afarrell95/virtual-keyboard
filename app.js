const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const darkMode= document.querySelector('.dark-mode')
const delete_btn = document.querySelector(".delete");
const caps_btn = document.querySelector(".caps");
const space_btn = document.querySelector(".space");
const dark_btn = document.querySelector(".dark-mode");
const body = document.querySelector('body');

let chars = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

delete_btn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

space_btn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

caps_btn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});


darkMode.addEventListener('click', ()=> {
 body.classList.toggle('dark')
})
const header = document.getElementById("header");
const menu = document.getElementById("menu");
menu.onclick = () => {
  header.classList.toggle("open");
};

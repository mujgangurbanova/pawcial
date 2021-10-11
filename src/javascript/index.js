//*Variables
const feedBack = document.querySelector('.feedback')
const locationBtn = document.querySelector(".add-location-btn");
const learnMore = document.querySelectorAll(".btn");
const linkList = document.querySelectorAll(".list-link");
const dropdownIcon = document.querySelector(".chevron");
const dropdownContainer = document.querySelector(".dropdown__container");
const language = document.querySelector(".language");
const element = document.querySelector(".app-container");
const addLocation = document.querySelector(".add-location");
const findPetMatcher = document.querySelector(".title-match");
const dog = document.querySelector(".dog");
const categoryInformation = document.querySelectorAll(".child-categories");
const cardItems = document.querySelectorAll(".card-items");
const footerContent = document.querySelector(".footer-content");
const appGroup = document.querySelector(".app-group");
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider-inner");
const overlay = document.querySelector('.overlay')

//* Click design
locationBtn.addEventListener("click", () => {
  locationBtn.style.color = "#fff";
  locationBtn.style.backgroundColor = "#3c096c";
});

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
  });
});
document.querySelectorAll(".btn-first").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.textDecoration = "underline";
  });
});
document.querySelectorAll(".list-link").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.color = "#ff0a54";
  });
});

//*Hamburger button
function openNav() {
  document.getElementById("mySidenav").style.width = "375px";
  document.getElementById("mySidenav").style.opacity = "1";
  document.getElementById("mySidenav").style.visibility = "visible";
  overlay.style.position = "fixed";
  window.scrollTo(0, 0);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0";
  document.getElementById("mySidenav").style.visibility = "hidden";
  overlay.style.position = "initial";

}

document.querySelectorAll(".sidenav-link").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    item.style.color = "#ff0a54";
  });
});

//*Dropdown
language.addEventListener("click", () => {
  dropdownContainer.classList.toggle("show");
  dropdownIcon.classList.toggle("rotate180");
});



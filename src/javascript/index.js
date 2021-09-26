let locationBtn = document.querySelector(".add-location-btn");
let learnMore = document.querySelectorAll(".btn");
let linkList = document.querySelectorAll(".list-link");
let dropdownIcon = document.querySelector(".chevron");
let dropdownContainer = document.querySelector(".dropdown__container");
let language = document.querySelector(".language");

locationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  locationBtn.style.color = "#fff";
  locationBtn.style.backgroundColor = "#3c096c";
});

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
document.querySelectorAll(".btn-first").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    item.style.textDecoration = "underline";
  });
});
document.querySelectorAll(".list-link").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    item.style.color = "#ff0a54";
  });
});

//*Hamburger button
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  window.scrollTo(0, 0);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll(".sidenav-link").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    item.style.color = "#ff0a54";
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
});

language.addEventListener("click", () => {
  dropdownContainer.classList.toggle("show");
  dropdownIcon.classList.toggle("rotate180");
});

window.addEventListener("scroll", () => {
  const element = document.querySelector(".app-container");
  const addLocation = document.querySelector(".add-location");
  const findPetMatcher = document.querySelector(".title-match");
  const dog = document.querySelector(".dog");
  const categoryInformation = document.querySelectorAll(".items");
  const footerContent = document.querySelector(".social-icons");

  const elementTop = element.getBoundingClientRect().top;

  const viewportHeight = window.innerHeight;

  if (elementTop + 200 < viewportHeight) {
    element.classList.add("animate__animated", "animate__fadeIn");
    element.style.setProperty("--animate-duration", "0.5s");
    addLocation.classList.add("animate__animated", "animate__shakeY");
    addLocation.style.setProperty("--animate-duration", "1s");
    findPetMatcher.classList.add("animate__animated", "animate__shakeX");
    findPetMatcher.style.setProperty("--animate-duration", "1s");
    dog.classList.add("animate__animated", "animate__fadeIn");
    dog.style.setProperty("--animate-duration", "1s");
    footerContent.classList.add("animate__animated", "animate__fadeIn");
    footerContent.style.setProperty("--animate-duration", "6s");
    categoryInformation.forEach((item) => {
      item.classList.add("animate__animated", "animate__fadeIn");
      item.style.setProperty("--animate-duration", "3s");
    });
  }
});

const locationBtn = document.querySelector(".add-location-btn");
const learnMore = document.querySelectorAll(".btn");
const linkList = document.querySelectorAll(".list-link");
const dropdownIcon = document.querySelector(".chevron");
const dropdownContainer = document.querySelector(".dropdown__container");
const language = document.querySelector(".language");

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

let swiper = new Swiper(".mySwiper", {
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
  const socialIcons = document.querySelector(".social-icons");
  const footerContent = document.querySelector(".footer-content");
  const appLocation = document.querySelector('.app-location')

  const elementTop = element.getBoundingClientRect().top;

  const viewportHeight = window.innerHeight;

  if (elementTop < viewportHeight) {
    element.classList.add("animate__animated", "animate__fadeIn");
    element.style.setProperty("--animate-duration", "2s");
    addLocation.classList.add("animate__animated", "animate__backInDown");
    addLocation.style.setProperty("--animate-duration", "1s");
    findPetMatcher.classList.add("animate__animated", "animate__backInLeft");
    findPetMatcher.style.setProperty("--animate-duration", "1s");
    dog.classList.add("animate__animated", "animate__fadeIn");
    dog.style.setProperty("--animate-duration", "1s");
    socialIcons.classList.add("animate__animated", "animate__fadeIn");
    socialIcons.style.setProperty("--animate-duration", "6s");
    categoryInformation.forEach((item) => {
      item.classList.add("animate__animated", "animate__backInUp");
      item.style.setProperty("--animate-duration", "3s");
    });
    appLocation.classList.add("animate__animated", "animate__backInLeft");
    footerContent.classList.add("animate__animated", "animate__fadeInTopLeft");
    footerContent.style.setProperty("--animate-duration", "4s");
  }
});

// const startQueries = () => {
//   let newQuery = window.matchMedia("(min-width: 320px) and (max-width: 1024px)");
//   if (newQuery.matches) {
//     const mySwiper = document.querySelector('.mySwiper')
//     const feedCards = document.querySelector('.feedback-cards')
//     const cardItems = document.querySelectorAll('.card-items')
//     mySwiper.classList.remove('swiper')
//     feedCards.classList.remove('swiper-wrapper')
//     cardItems.forEach((item)=>{
//       item.classList.remove('swiper-slide')
//     })
//   }else{
//     return;
//   }
// };

// startQueries();

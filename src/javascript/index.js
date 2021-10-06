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

//* Click design
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

//*Dropdown
language.addEventListener("click", () => {
  dropdownContainer.classList.toggle("show");
  dropdownIcon.classList.toggle("rotate180");
});

//*Animations
//*****1*/
const observer1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeIn");
      element.style.setProperty("--animate-duration", "2s");
    } else {
      entry.target.classList.remove("animate__animated", "animate__fadeIn");
    }
  });
};

const myObserver = new IntersectionObserver(observer1);
myObserver.observe(element);
//*****2*/
const observer2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
    } else {
      entry.target.classList.remove("animate__animated", "animate__fadeInUp");
    }
  });
};

const myObserver2 = new IntersectionObserver(observer2);
myObserver2.observe(addLocation);

//****3*/
const observer3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__swing");
    } else {
      entry.target.classList.remove("animate__animated", "animate__swing");
    }
  });
};

const myObserver3 = new IntersectionObserver(observer3);
myObserver3.observe(findPetMatcher);

//*****4*/
const observer4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__swing");
    } else {
      entry.target.classList.remove("animate__animated", "animate__swing");
    }
  });
};

const myObserver4 = new IntersectionObserver(observer4);
myObserver4.observe(dog);

//***5*/
const observer5 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeIn");
    } else {
      entry.target.classList.remove("animate__animated", "animate__fadeIn");
    }
  });
};

const myObserver5 = new IntersectionObserver(observer5);
categoryInformation.forEach((item) => {
  myObserver5.observe(item);
});

//***6*/
const observer6 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeIn");
    } else {
      entry.target.classList.remove(
        "animate__animated",
        "animate__fadeIn"
      );
    }
  });
};

const myObserver6 = new IntersectionObserver(observer6);
cardItems.forEach((item) => {
  myObserver6.observe(item);
});

//***7*/
const observer7 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInLeft");
    } else {
      entry.target.classList.remove(
        "animate__animated",
        "animate__slideInLeft"
      );
    }
  });
};

const myObserver7 = new IntersectionObserver(observer7);
myObserver7.observe(footerContent);

//***8*/
const observer8 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInUp");
    } else {
      entry.target.classList.remove("animate__animated", "animate__slideInUp");
    }
  });
};

const myObserver8 = new IntersectionObserver(observer8);
myObserver8.observe(appGroup);

const scrollToTop = document.querySelector(".scrollToTop")

const bottomToTop = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToTop.style.bottom = "3rem"
      scrollToTop.classList.add("showScrollToTop")
    } else {
      if (scrollToTop.classList.contains("showScrollToTop") && entry.boundingClientRect.y > 0) {
        scrollToTop.classList.remove("showScrollToTop")
        scrollToTop.addEventListener("transitionend", removeScrollFromView)
      }
    }
  })
})

function removeScrollFromView() {
  scrollToTop.removeEventListener("transitionend", removeScrollFromView)
  if (scrollToTop.classList.contains("showScrollToTop")) return;
  scrollToTop.style.bottom = "30px"
}

bottomToTop.observe(feedBack)

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})





//*Slider
let swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween:20,
  breakpoints: {
    320:{
      cssMode: true,
      direction: 'vertical',
      
    },
    768:{
      cssMode: true,
      direction: 'vertical',
      
    },
    1024:{
      direction: 'horizontal',
      cssMode: true,
      
      
    },
    1280: {
      grabCursor: true,
      mouseWheel: true,
      cssMode: false,
      direction: 'horizontal',
    },
  },
});


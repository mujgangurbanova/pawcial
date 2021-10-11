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
  
  //**********Scroll to top animation */
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
  
  
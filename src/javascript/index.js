let locationBtn = document.querySelector(".add-location-btn");
locationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  locationBtn.style.color = "#fff";
  locationBtn.style.backgroundColor = "#3c096c";
});

let learnMore = document.querySelectorAll(".btn");

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    item.style.color = "#240046";
  });
});

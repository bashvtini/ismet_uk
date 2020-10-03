// Nav dropdown menu
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const bc = document.querySelector(".bc");
let dropdownState = false;

const dropdownSwitch = () => {
  dropdownMenu.classList.toggle("open");
  bc.classList.toggle("open");

  dropdownState = !dropdownState;
};

bc.addEventListener("click", () => {
  if (dropdownState) {
    dropdownSwitch();
  }
});

dropdownButton.addEventListener("click", dropdownSwitch);

dropdownMenu.querySelectorAll("li").forEach((e) => {
  e.addEventListener("click", dropdownSwitch);
});

window.addEventListener("resize", (e) => {
  const width = window.innerWidth;
  if (dropdownState && width > 600) {
    dropdownSwitch();
  }
});

const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  const navHeight = navbar.offsetHeight;

  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

  if (scrollTop > 100) {
    if (!navbar.classList.contains("sticky")) {
      navbar.classList.add("sticky");
      document.querySelector("body").style.paddingTop = navHeight + "px";
    }
  } else {
    navbar.classList.remove("sticky");
    document.querySelector("body").style.paddingTop = "0px";
  }
});

window.addEventListener("click", (e) => {
  if (e.target == !dropdownMenu) {
    dropdownSwitch();
  }
});

// Gallery Modal
const modal = document.querySelector("#modal");
// const modalContent = document.querySelector("#modal .content");
const galleryPictures = document.querySelectorAll(".gallery ul li");
let modalStatus = false;

modal.addEventListener("click", (e) => {
  modal.classList.remove("open");
});

galleryPictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    modal.classList.add("open");
    // modalContent.innerHTML = `<img src="${picture.getAttribute(
    //   "src"
    // )}" alt="Modal Image" />`;
    modal.textContent = picture.textContent;
  });
});

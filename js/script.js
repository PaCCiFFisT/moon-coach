const swiper = new Swiper(".swiper", {
  // Optional parameters
  preventInteractionOnTransition: true,
  direction: "horizontal",
  loop: true,
  speed: 10000,
  slidesPerView: "auto",
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    859: {
      direction: "vertical",
      autoHeight: true,
    },
  },
});

const swiper1 = new Swiper(".swiper-1", {
  // Optional parameters
  preventInteractionOnTransition: true,
  // autoHeight: true,
  direction: "horizontal",
  loop: true,
  speed: 10000,
  slidesPerView: "auto",
  autoplay: {
    reverseDirection: true,
    delay: 0,
  },
  breakpoints: {
    860: {
      direction: "vertical",
      autoHeight: true,
    },
  },
});

const goUpBtn = document.getElementById("go-top");

document.addEventListener("scroll", (e) => {
  scrollPosition = window.scrollY;

  if (scrollPosition > 500) {
    goUpBtn.classList.remove("hidden");
  } else if (scrollPosition <= 500 && !goUpBtn.classList.contains("hidden")) {
    goUpBtn.classList.add("hidden");
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  preventInteractionOnTransition: true,
  autoHeight: true,
  direction: "vertical",
  loop: true,
  speed: 10000,
  slidesPerView: "auto",
  autoplay: {
    delay: 0,
  },
});

const swiper1 = new Swiper(".swiper-1", {
  // Optional parameters
  preventInteractionOnTransition: true,
  autoHeight: true,
  direction: "vertical",
  loop: true,
  speed: 10000,
  slidesPerView: "auto",
  autoplay: {
    reverseDirection: true,
    delay: 0,
  },
});

// const body = document.getElementsByTagName("body");
const goUpBtn = document.getElementById("go-top");

document.addEventListener("scroll", (e) => {
  scrollPosition = window.scrollY;
  console.log(scrollPosition);
  if (scrollPosition > 500) {
    goUpBtn.classList.remove("hidden");
  } else if (scrollPosition <= 500 && !goUpBtn.classList.contains("hidden")) {
    goUpBtn.classList.add("hidden");
  }
});

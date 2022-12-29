//sliders config
const swiper = new Swiper(".swiper", {
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

//scroll up
const goUpBtn = document.getElementById("go-top");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    goUpBtn.classList.remove("hidden");
  } else if (window.scrollY <= 500 && !goUpBtn.classList.contains("hidden")) {
    goUpBtn.classList.add("hidden");
  }
});

//validation email input
function emailValidation(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/gi;
  return email.match(regex);
}

/*
form processing
*/
const popup = document.getElementById("popup");
const requestForm = document.forms.namedItem("request-form");

requestForm.onsubmit = (e) => {
  e.preventDefault();
  const name = requestForm.elements.name.value;
  const email = requestForm.elements.email.value;
  const message = requestForm.elements.message.value;

  if (name.length < 1) {
    alert("Please enter valid name");
    return;
  }

  if (!emailValidation(email)) {
    alert("Please enter valid email");
    requestForm.elements.email.focus();
    return;
  }

  if (message.length < 1) {
    alert("Please enter message");
    return;
  }

  popupShow();

  if (!popup.classList.contains("hidden")) {
    scrollLock();
    popup.addEventListener("click", popupClose);
  }
};

/*
popup handling
*/
const popupBtn = document.getElementById("popup-btn");
const popupCross = document.getElementById("popup-close");

//close popup
const popupClose = function (e) {
  console.log(e.target);
  if (e.target == popup || e.target == popupCross || e.target == popupBtn) {
    popup.classList.add("hidden");
    scrollUnlock();
  }
};

//show popup
function popupShow() {
  popup.classList.remove("hidden");
}

//lock body scroll when popup is visible
function scrollLock() {
  const paddingOffset = window.innerWidth - document.body.offsetWidth + "px";

  document.body.style.overflowY = "hidden";
  document.body.style.paddingRight = paddingOffset;
}

//unlock scroll
function scrollUnlock() {
  document.body.style.overflow = "auto";
  document.body.style.paddingRight = "0";
}

import "../css/mplus1p.css";
import "../css/noticia-text.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/swiper.css";
import "../scss/main.scss";

import "swiper/js/swiper.js";
import Swiper from "swiper";

//Anchors scroll
var $page = $("html, body");
$('a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    750
  );
  return false;
});

//burger menu
let navBurger = () => {
  const menu = document.getElementsByClassName("nav-menu")[0];
  const links = document.getElementsByClassName("nav-menu_small-device_link");

  menu.addEventListener("click", () => {
    menu.classList.toggle("nav-menu_active");
  });
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
      menu.classList.toggle("nav-menu_active");
    });
  }
};
navBurger();
//Footer

let footerMenu = () => {
  const footerMenu = document.getElementsByClassName(
    "footer-header_menu-mobile"
  )[0];

  const menuList = document.getElementsByClassName(
    "footer-list_menu-mobile"
  )[0];

  const footerServises = document.getElementsByClassName(
    "footer-header_services-mobile"
  )[0];
  const servicesList = document.getElementsByClassName(
    "footer-list_services-mobile"
  )[0];

  const footerContact = document.getElementsByClassName(
    "footer-header_contact-mobile"
  )[0];

  const contactList = document.getElementsByClassName("footer-contact_wrap-mobile")[0];

  footerMenu.addEventListener("click", () => {
    footerMenu.classList.toggle("footer-header_menu-mobile-active");
    if (menuList.style.maxHeight) {
      menuList.style.maxHeight = null;
    } else {
      menuList.style.maxHeight = menuList.scrollHeight + "px";
    }
  });

  footerServises.addEventListener("click", () => {
    footerServises.classList.toggle("footer-header_services-mobile-active");
    if (servicesList.style.maxHeight) {
      servicesList.style.maxHeight = null;
    } else {
      servicesList.style.maxHeight = servicesList.scrollHeight + "px";
    }
  });

  footerContact.addEventListener("click", () => {
    footerContact.classList.toggle("footer-header_contact-mobile-active");
    if (contactList.style.maxHeight) {
      contactList.style.maxHeight = null;
    } else {
      contactList.style.maxHeight = contactList.scrollHeight + "px";
    }
  });
};
footerMenu();
//Swiper slider

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 400,

  pagination: {
    el: ".slider-navigation_pagination",
    type: "fraction",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".next-arrow",
    prevEl: ".prev-arrow",
  },
  autoplay: {
    delay: 5000,
  },
});

//Bubble slider

var bubble1 = new Swiper(".bubble-container-1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 600,
  effect: "fade",
});
var bubble2 = new Swiper(".bubble-container-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 600,
  // Navigation arrows
  navigation: {
    nextEl: ".bubble-slider_next",
    prevEl: ".bubble-slider_prev",
  },
  autoplay: {
    delay: 5000,
  },
});

//bind control of sliders
bubble1.controller.control = bubble2;
bubble2.controller.control = bubble1;

// Chahnge active bubble
const bubble_list = [];

for (let i = 1; i <= 7; i++) {
  let el = document.getElementById(`flying-bubble-${i}`);
  bubble_list.push(el);
}
bubble1.on("slideChange", () => {
  for (let i = 0; i < 7; i++) {
    bubble_list[i].classList.remove("active-bubble");
  }
  let active = bubble1.activeIndex;
  bubble_list[active - 1].classList.add("active-bubble");
});

// Click on bubble
let goToSlide = () => {
  const bubbleBtn_1 = document.getElementById("flying-bubble-1");
  const bubbleBtn_2 = document.getElementById("flying-bubble-2");
  const bubbleBtn_3 = document.getElementById("flying-bubble-3");
  const bubbleBtn_4 = document.getElementById("flying-bubble-4");
  const bubbleBtn_5 = document.getElementById("flying-bubble-5");
  const bubbleBtn_6 = document.getElementById("flying-bubble-6");
  const bubbleBtn_7 = document.getElementById("flying-bubble-7");

  bubbleBtn_1.addEventListener("click", (e) => {
    e.preventDefault();
    bubble1.slideToLoop(0); // go to slide 1
  });
  bubbleBtn_2.addEventListener("click", (e) => {
    e.preventDefault();
    bubble1.slideToLoop(1); // go to slide 2
  });
  bubbleBtn_3.addEventListener("click", (e) => {
    e.preventDefault();
    bubble1.slideToLoop(2); // go to slide 3
  });
  bubbleBtn_4.addEventListener("click", (e) => {
    e.preventDefault();
    bubble1.slideToLoop(3); // go to slide 4
  });
  bubbleBtn_5.addEventListener("click", (e) => {
    e.preventDefault();
    bubble1.slideToLoop(4); // go to slide 5
  });
  bubbleBtn_6.addEventListener("click", (e) => {
    e.preventDefault();
    bubble1.slideToLoop(5); // go to slide 6
  });
  bubbleBtn_7.addEventListener("click", (e) => {
    e.preventDefault();
    bubble1.slideToLoop(6); // go to slide 7
  });
};

goToSlide();

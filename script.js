// GSAP Animations
gsap.from(".hero-content h2", { duration: 1.5, opacity: 0, y: -50 });
gsap.from(".hero-content p", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  delay: 0.5,
});
gsap.from(".about-img", {
  duration: 1.5,
  opacity: 0,
  scale: 0.8,
  ease: "bounce.out",
  scrollTrigger: "#about",
});

gsap.from(".our-writer", {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  x: -100,
});

gsap.from(".gallery-slide", {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  y: -100,
});

gsap.from(".about-history", {
  duration: 1.5,
  delay: 0.5,
  y: 50,
  opacity: 0,
});

gsap.from(".gallery img", {
  duration: 1.5,
  opacity: 0,
  scale: 0.9,
  stagger: 0.3,
  scrollTrigger: "#gallery",
});

//slider
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let slideItem = document.querySelectorAll(".slide-item");
  document.querySelector(".slide").appendChild(slideItem[0]);
});

prev.addEventListener("click", function () {
  let slideItem = document.querySelectorAll(".slide-item");
  document.querySelector(".slide").prepend(slideItem[slideItem.length - 1]); // here the length of items = 6
});

//modal

// Open the modal and display the clicked image
function openModal(imgElement) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imgElement.src;
}

// Close the modal when clicked outside the image or on the close button
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Move the image based on scroll position
const scrollingImage = document.getElementById("scrollingImage");

ScrollTrigger.create({
  trigger: "#home",
  start: "top top",
  onEnter: () => {
    gsap.to(scrollingImage, {
      duration: 0.5,
      x: 200,
      y: 20,
      ease: "power1.out",
    });
  },
  onLeave: () => {
    gsap.to(scrollingImage, {
      duration: 0.5,
      x: window.innerWidth - 120,
      y: 20,
      ease: "slow.out",
    }); // Move to #about position
  },
});

ScrollTrigger.create({
  trigger: "#about",
  start: "top ",
  delay: 5,
  onEnter: () => {
    gsap.to(scrollingImage, {
      duration: 2.5,
      ease: "elastic.out(1,0.3)",
      x: window.innerWidth - 120,
      y: 20,
      ease: "slow.out",
    });
  },
  onLeave: () => {
    gsap.to(scrollingImage, {
      duration: 5,
      x: 20,
      y: window.innerHeight - 120,
      ease: "elastic.out",
    }); // Move to #gallery position
  },
});

ScrollTrigger.create({
  trigger: "#gallerySlide",
  start: "top top",
  onEnter: () => {
    gsap.to(scrollingImage, {
      duration: 5,
      x: 20,
      y: window.innerHeight - 120,
      ease: "slow.out",
    });
  },
  onLeave: () => {
    gsap.to(scrollingImage, {
      duration: 5,
      x: window.innerWidth - 120,
      y: window.innerHeight - 120,
      ease: "slow.out",
    }); // Move to #contact position
  },
});

ScrollTrigger.create({
  trigger: "#contact",
  start: "top top",
  onEnter: () => {
    gsap.to(scrollingImage, {
      duration: 5,
      x: window.innerWidth - 120,
      y: window.innerHeight - 120,
      ease: "slow.out",
    });
  },
  onLeaveBack: () => {
    gsap.to(scrollingImage, {
      duration: 0.5,
      x: 20,
      y: 20,
      ease: "slow.out",
    }); // Move back to #home position
  },
});

// Select the social media icons
const socialMediaIcons = document.querySelectorAll(".social-media img");

// Create a bounce effect using GSAP
gsap.fromTo(
  socialMediaIcons,
  { y: 0 }, // Starting position
  {
    y: -10, // Move up by 10px
    ease: "bounce.inOut", // Bounce easing
    repeat: -1, // Repeat infinitely
    yoyo: true, // Reverse the animation each time
    duration: 0.6, // Duration of one bounce
  }
);

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.getElementById("hamburger");

  // Toggle the active class on the menu
  menu.classList.toggle("active");

  // Change the icon based on the menu state
  if (menu.classList.contains("active")) {
    hamburger.innerHTML = "&times;"; // Change to X icon when menu is open
  } else {
    hamburger.innerHTML = "&#9776;"; // Change back to hamburger icon when menu is closed
  }
}

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    menuLinks.forEach((link) => link.classList.remove("active"));
    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

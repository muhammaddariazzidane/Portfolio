// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// klick luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindah posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// form
const scriptURL = "https://script.google.com/macros/s/AKfycbwnA9Ah1kr9lbmQ4ZOMAKHFbzl1Jk34zOo5nWSO_TrNtHeh3QbC0TMhTdITpRJr0HMS/exec";
const form = document.forms["zidane-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // tampilkan loading
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      myAlert.classList.toggle("hidden");

      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

gsap.registerPlugin(TextPlugin);
gsap.to(".mhs", { duration: 4, delay: 1.5, text: "Mahasiswa | Freelancer" });
gsap.from(".z-10", { duration: 1.5, y: "-100%", opacity: 0, ease: "back" });
gsap.from(".hi", { duration: 1.5, x: "-50", opacity: 0, delay: 0.5, ease: "back" });

myAlert.addEventListener("click", function () {
  myAlert.style.display = "none";
});

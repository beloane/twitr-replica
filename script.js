////////////////////////////Make mobile navigation//////
const btnNav = document.querySelector(".mobile-header");
const lay = document.querySelector(".layout");
const mobileNavWindow = document.querySelector(".header-container-mobile-nav");
const mobileNav = document.querySelector(".header-mobile-nav");

mobileNavWindow.addEventListener("click", function (e) {
  const clicked = e.target.closest(".header-mobile-nav");
  console.log(clicked);
  if (!clicked) lay.classList.remove("nav-open");
});

btnNav.addEventListener("click", function () {
  lay.classList.add("nav-open");
});
//// Making right side sticky
const targetEl = document.querySelector(".target-int");
const sectionRightEl = document.querySelector(".controls");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    console.log(ent);

    if (ent.isIntersecting) {
      sectionRightEl.classList.add("sticky-right-bar");
    }
    if (!ent.isIntersecting) {
      sectionRightEl.classList.remove("sticky-right-bar");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(targetEl);

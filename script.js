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

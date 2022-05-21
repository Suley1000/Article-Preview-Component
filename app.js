const shareEl = document.querySelector(".share-container");
const socialsEl = document.querySelector(".socials");
const arrowEl = document.querySelector('[name="arrow-redo"]');

shareEl.addEventListener("click", () => {
  socialsEl.classList.toggle("active");
  shareEl.classList.toggle("active");
  arrowEl.classList.toggle("active");
});

let lis = document.querySelectorAll("li");
lis.forEach((li) =>
    li.addEventListener("click", () => {
        li.parentElement.querySelectorAll(".active").forEach((active) => active.classList.remove("active"));
        li.classList.add("active");
    })
);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 250,
  reset: true,
});

sr.reveal(`.info`);
sr.reveal(`.img`, { delay: 500 });
sr.reveal(`.cv`, { delay: 600 });
sr.reveal(`.r`, { origin: "left" });
sr.reveal(`.l`, { origin: "right" });
sr.reveal(`.t`, { origin: "top" });
sr.reveal(`.b`, { origin: "bottom" });
sr.reveal(`.project`, { interval: 150 });
const elementaccordions = document.querySelectorAll(".elementAccordion");

const firstAccordion = document.querySelector(".firstAccordion .content");

elementaccordions.forEach((accordion) => {
  const header = accordion.querySelector(".content");
  header.addEventListener("click", () => {
    const content = accordion.querySelector(".content");

    const isAccordionOpen = content.classList.contains("active");

    closeAllAccordions();

    if (!isAccordionOpen) {
      header.classList.add("active");
      content.classList.add("active");
    }
    const accordionContent = accordion.querySelector(".content");
    const accordionContentActive =
      accordionContent.classList.contains("active");
    if (!accordionContentActive) {
      firstAccordion.classList.add("active");
    }
  });
});

function closeAllAccordions() {
  elementaccordions.forEach((accordion) => {
    const header = accordion.querySelector(".header");
    const content = accordion.querySelector(".content");

    header.classList.remove("active");
    content.classList.remove("active");
  });
}

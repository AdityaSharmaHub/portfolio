// ------------------------- Creating scroll to top component ---------------------------

const heroSection = document.querySelector(".hero_section");
const footerElem = document.querySelector("footer");
const scrollElement = document.querySelector(".scroll-to-top");

scrollElement.classList.add("scrollTopStyle");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-top"></i>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behaviour: "smooth" });
}

scrollElement.addEventListener("click", scrollTop);

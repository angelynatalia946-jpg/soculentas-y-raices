const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const plantCards = document.querySelectorAll(".plant-card");
const modal = document.getElementById("plantModal");
const modalClose = document.getElementById("closeModal");

const modalType = document.getElementById("modalType");
const modalName = document.getElementById("modalName");
const modalCare = document.getElementById("modalCare");
const modalPlace = document.getElementById("modalPlace");

plantCards.forEach(card => {
    card.addEventListener("click", () => {
        modalType.textContent = card.dataset.type;
        modalName.textContent = card.dataset.name;
        modalCare.textContent = card.dataset.care;
        modalPlace.textContent = card.dataset.place;

        modal.classList.add("active");
    });
});

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});
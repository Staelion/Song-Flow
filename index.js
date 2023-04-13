/* script scroll bar */
window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.scrollY / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);


/* script swiper */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* script menu d'options déroulant */

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".option-container")

const optionsList = document.querySelectorAll(".option")
const fleche = document.querySelector(".fleche")
selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active")
    fleche.classList.toggle("active")
})

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
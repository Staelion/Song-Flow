window.addEventListener(
    "scroll",
    ()=>{
        document.body.style.setProperty(
            "--scroll",
            window.scrollY / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);


    var swiper = new Swiper(".slide-content", {
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
let btn = document.querySelector("#menuIcon");
let menu = document.querySelector(".lg-view");

btn.addEventListener('click', () => {
    menu.classList.toggle('show')
})

$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    nextArrow: ".next",
    prevArrow: ".prev",

    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // autoplay: true,
                // autoplaySpeed: 2000,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let scroll_to_top = document.querySelector(".scroll");
document.addEventListener("scroll", () => {
    let scrollpnt = 200;
    if (window.scrollY > scrollpnt) {
        scroll_to_top.classList.add("svg-box");
    } else {
        scroll_to_top.classList.remove("svg-box");
    }
});


scroll_to_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

gsap.from(".scroll", {
    y: 15,
    duration: 1,
    repeat: -1,
    yoyo: true,
});

const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnails img');

function changeSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}
const carouselSlide = document.querySelector('.carousel-track');
const carouselImages = document.querySelectorAll('.carousel-image');

let counter = 0;
const size = carouselImages[0].clientWidth;

function moveCarousel() {
    counter++;
    if (counter >= carouselImages.length) {
        counter = 0;
    }
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

setInterval(moveCarousel, 2000);

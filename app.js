const carouselSlide = document.querySelector('.carousel-slide');
const carouselCards = document.querySelectorAll('.card')

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselCards[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselCards.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselCards[counter].id === 'lastClone'){
        counter = carouselCards.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselCards[counter].id === 'firstClone'){
        counter = carouselCards.length - counter ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
const slider = document.querySelector('.slider'),
      leftBtn = document.querySelector('.left-arrow'),
      rightBtn = document.querySelector('.right-arrow'),
      indicators = document.querySelectorAll('.slider-indicator')

let activeItem = 0;

indicators[activeItem].classList.add('active-indicator')

indicators.forEach((item) => {
    item.addEventListener('click', ({target}) => {
        activeItem = Array.prototype.slice.call(indicators).indexOf(target)
        scrollSlider(activeItem)
    })
})

leftBtn.addEventListener('click', () => {
    if(activeItem > 0){
        activeItem--;
    }
    else {
        activeItem = 2
    }
    scrollSlider(activeItem);


})
rightBtn.addEventListener('click', () => {
    if(activeItem < 2){
        activeItem++;
    }
    else {
        activeItem = 0
    }
    scrollSlider(activeItem);

})


const scrollSlider = activeItem => {

    slider.style.left = `-${window.innerWidth * activeItem}px`;

    indicators.forEach((item) => {
        item.classList.remove('active-indicator');
    })
    indicators[activeItem].classList.add('active-indicator')
}
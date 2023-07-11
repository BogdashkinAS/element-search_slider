const sliderItem = Array.from(document.querySelectorAll('.slider__item'))
const sliderPrev = document.querySelector('.slider__arrow_prev')
const sliderNext = document.querySelector('.slider__arrow_next')
const sliderDot = Array.from(document.querySelectorAll('.slider__dot'))

function removeElement(nextPosition) {
    let nextSlide = nextPosition
    let currentSlider = sliderItem.findIndex(slider => slider.classList.contains('slider__item_active'))
    sliderItem[currentSlider].classList.remove('slider__item_active')
    sliderDot[currentSlider].classList.remove('slider__dot_active')
    if (nextSlide < 0) {
        nextSlide = sliderItem.length - 1
    }
    if (nextSlide >= sliderItem.length) {
        nextSlide = 0
    }
    sliderItem[nextSlide].classList.add('slider__item_active')
    sliderDot[nextSlide].classList.add('slider__dot_active')
}

sliderPrev.onclick = () => {
    let currentSlider = sliderItem.findIndex(slider => slider.classList.contains('slider__item_active'))
    let nextSlide = currentSlider - 1
    removeElement(nextSlide)
}

sliderNext.onclick = () => {
    let currentSlider = sliderItem.findIndex(slider => slider.classList.contains('slider__item_active'))
    let nextSlide = currentSlider + 1
    removeElement(nextSlide)
}

sliderDot.forEach(function(dot) {
    dot.onclick = () => {
        let activeDot = sliderDot.indexOf(dot)
        let nextSlide = activeDot
        removeElement(nextSlide)
    }
})
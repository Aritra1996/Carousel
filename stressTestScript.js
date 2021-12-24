const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const previousButton = document.querySelector('.carousel__button--left')

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

nextButton.addEventListener('click', e=> {
    try {
        const currentSlide = track.querySelector('.current-slide')
        const nextSlide = currentSlide.nextElementSibling
        const amountToMove = nextSlide.style.left
        track.style.transform = 'translateX(-' + amountToMove + ')'
        currentSlide.classList.remove('current-slide')
        nextSlide.classList.add('current-slide')
    }
      catch(err) {
        console.log('Last Image')
    }
})

previousButton.addEventListener('click', e=> {
    try {
        const currentSlide = track.querySelector('.current-slide')
        const previousSlide = currentSlide.previousElementSibling
        const amountToMove = previousSlide.style.left
        track.style.transform = 'translateX(-' + amountToMove + ')'
        currentSlide.classList.remove('current-slide')
        previousSlide.classList.add('current-slide')
    } catch(err) {
        console.log('First Image')
    }
})
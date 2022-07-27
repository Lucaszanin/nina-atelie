let time = 2000,
    currentImageIndex = 0,
    imagemSlider = document.querySelectorAll('.img-slider')
max = imagemSlider.length;

const navMenu = document.getElementById('nav')
const arrowLeft = document.getElementById('btn-voltar')
const arrowRight = document.getElementById('btn-avancar')
const btnMobile = document.getElementById('btn-mobile')
const buttonTop = document.querySelector('#back-top')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    navMenu.classList.toggle('actived')
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function closedMenu() {
    if (screenY <= 400) navMenu.classList.remove('actived')
}

buttonTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

function backTheTop() {
    buttonTop.classList.add('show')
    if (scrollY < 500) {
        buttonTop.classList.remove('show')
    }
}


function nextImage() {
    imagemSlider[currentImageIndex].classList.remove('active')
    currentImageIndex++;
    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    imagemSlider[currentImageIndex].classList.add('active')
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

arrowRight.addEventListener('click', () => {

    imagemSlider[currentImageIndex].classList.remove('active')
    currentImageIndex++;

    if (currentImageIndex == max) {
        currentImageIndex = 0
    }
    imagemSlider[currentImageIndex].classList.add('active')
});


arrowLeft.addEventListener('click', () => {

    imagemSlider[currentImageIndex].classList.remove('active')
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = 0
    }
    imagemSlider[currentImageIndex].classList.add('active')
});


window.addEventListener("load", start)
window.addEventListener("scroll", closedMenu)
window.addEventListener("scroll", backTheTop)
const Y2022 = "../paintings/2022"
const Y2021 = "../paintings/2021"
const Y2020 = "../paintings/2020"
const buttons = document.querySelectorAll('[data-slideshow-button')


function displayPaintings2022() {
    const paintingMain = document.querySelector(".painting-main")
    const year = document.createElement('div')
    year.classList.add('year')
    paintingMain.appendChild(year)
    year.style.display = `flex`
    year.style.flexWrap = `wrap`
    year.style.gap =`1.2rem`
    for (let i = 1; i < 14; i++) {
        const PAINTING = document.createElement('img')
        PAINTING.src = Y2022 + `/${i}.jpg`
        PAINTING.classList.add(`year-img`)
        year.appendChild(PAINTING)
    }
}
displayPaintings2022()

function slider2022() {
    const slider = document.querySelector('[data-slides]')

    for (let i = 1; i < 14; i++) {
    const imagelist = document.createElement('li')
    imagelist.classList.add('slide')
    slider.append(imagelist)

    const image = document.createElement('img')
    image.src = Y2022 + `/${i}.jpg`
    image.classList.add(`img${i}`)
    image.style.width = `auto`
    image.style.height = `50vh`
    imagelist.append(image)
    }
}
slider2022()



// slideshow functionality
let activeSlide = document.querySelector('[data-slides').firstElementChild
activeSlide.setAttribute('data-active', '')

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.slideshowButton === 'next' ? 1 : -1
        const slides = button.closest('[data-slideshow').querySelector('[data-slides]')

        const activeSlides = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlides) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlides.dataset.active
    })
})
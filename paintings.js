const Y2022 = "../paintings/2022"
const Y2021 = "../paintings/2021"
const Y2020 = "../paintings/2020"

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
    const slideshow = document.querySelector(".slideshow")
    const slider = document.createElement('ul')
    slideshow.appendChild(slider)

    for (let i = 1; i < 14; i++) {
    const imagelist = document.createElement('li')
    imagelist.classList.add('slide')
    slider.append(imagelist)

    const image = document.createElement('img')
    image.src = Y2022 + `/${i}.jpg`
    image.style.width = `auto`
    image.style.height = `50vh`
    imagelist.append(image)
    }
}
slider2022()
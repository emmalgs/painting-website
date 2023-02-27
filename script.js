const Y2022 = "../paintings/2022"
const Y2021 = "../paintings/2021"
const Y2020 = "../paintings/2020"

const main = document.querySelector(".main")

function homepageImage() {
    // randomly select painting
    let image = Math.floor(Math.random() * 13) + 1;
    const PAINTING = document.createElement('img');
    PAINTING.src = Y2022 + `/${image}.jpg`;
    main.appendChild(PAINTING)

}
function displayPaintings2022() {
    const year = document.createElement('div')
    year.classList.add('year')
    main.appendChild(year)
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



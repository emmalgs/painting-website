const Y2022 = "../paintings/2022"
const Y2021 = "../paintings/2021"
const Y2020 = "../paintings/2020"


function homepageImage() {
    // randomly select painting
    const main = document.querySelector(".main")
    let image = Math.floor(Math.random() * 13) + 1;

    const PAINTING = document.createElement('img');
    PAINTING.src = Y2022 + `/${image}.jpg`;
    PAINTING.classList.add(`main-img`)
    main.appendChild(PAINTING)
}
homepageImage()







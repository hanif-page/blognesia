// open new page without anchor tag
const daerahPage = (kota) => {
    let rawURL = "../daerah/"
    let URL = rawURL + kota 
    window.open(URL, "_self")
}

// FLIP CARD
const flipCard = document.querySelectorAll(".job-card")
flipCard.forEach(e => {
  e.addEventListener("click", () => {
    e.classList.toggle("flip")
  })
})
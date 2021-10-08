const daerahPage = (kota) => {
    let rawURL = "../daerah/"
    let URL = rawURL + kota 
    window.open(URL, "_self")
} 

// offset for customize on what height I want to make the animation active
const elInView = (el, offset) => {
    let elementTop = el.getBoundingClientRect().top
    
    // return true of false
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    )
}

const educativePageSecondaryTitle = document.querySelector(".educativepage-container h2")
const educativePageParagraph = document.querySelectorAll(".educativepage-content .text > *")
const educativepageImage = document.querySelectorAll(".educativepage-content .image-child")

const addAnimation = (el) => el.classList.add("animationScrolled")

const removeAnimation = (el) => el.classList.remove("animationScrolled")

const runAnimation = () => {
    if (elInView(educativePageSecondaryTitle, 100)) addAnimation(educativePageSecondaryTitle)

    // I keep all the forEach function above with normal syntax (not a one liner), because I want to keep it readable  
    educativePageParagraph.forEach(paragraph => {
        if(elInView(paragraph, 100)) addAnimation(paragraph)
    })

    educativepageImage.forEach(image => {
        if(elInView(image, 100)) addAnimation(image)
    })
}

window.addEventListener("scroll", () => {
    runAnimation()
})
// ANIMATE ON SCROLL


// open new page without anchor tag
const daerahPage = (kota) => {
    let rawURL = "pages/daerah/"
    let URL = rawURL + kota 
    window.open(URL, "_self")
}

// ANIMATE ON SCROLL
const aboutBlognesia = document.querySelector(".our-vision-content h1")
const ourVision = document.querySelector(".our-vision-content h2")
const ourVisionImage = document.querySelector(".textnimage .image-container")
const ourVisionParagraph = document.querySelectorAll(".textnimage p")
const dataIcons = document.querySelectorAll(".data-icon")
const dataNumberElements = document.querySelectorAll(".data-number span")
const ourChiefCards = document.querySelectorAll(".chief-card")

// offset for customize on what height I want to make the animation active
const elInView = (el, offset) => {
    let elementTop = el.getBoundingClientRect().top
    
    // return true of false
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
    )
}

const addAnimation = (el) => el.classList.add("animationScrolled")

const removeAnimation = (el) => el.classList.remove("animationScrolled")

const runAnimation = () => {
    if(elInView(aboutBlognesia, 100)) addAnimation(aboutBlognesia)
    if (elInView(ourVision, 100)) addAnimation(ourVision)
    if (elInView(ourVisionImage, 150)) addAnimation(ourVisionImage)

    // I keep all the forEach function above with normal syntax (not a one liner), because I want to keep it readable  

    ourVisionParagraph.forEach(paragraph => {
        if(elInView(paragraph, 150)) addAnimation(paragraph)
    })

    dataIcons.forEach(dataIcon => {
        if(elInView(dataIcon, 100)) addAnimation(dataIcon)
    })

    // the counting animation
    dataNumberElements.forEach(dataNumber => {
        if(elInView(dataNumber, 100)) addAnimation(dataNumber)
    })
    
    ourChiefCards.forEach(ourChiefCard => {
        if(elInView(ourChiefCard, 200)) addAnimation(ourChiefCard)
    })
}

window.addEventListener("scroll", () => {
    runAnimation()

    // counting animation on the data section
    const CountingDataNumberElements = document.querySelectorAll(".data-number span.animationScrolled")
    var speed = 25
    const activateCount = () => {
        CountingDataNumberElements.forEach( number => {
            const updateCount = () => {
                const target = +number.getAttribute("data-target")
                const count = +number.innerText
    
                // example. If the target number is 1000, then the number animation will be multiply by 100
                const increment = target / speed
    
                if(count < target)
                {
                    number.innerText = count + increment
                    setTimeout(updateCount, 200)
                }else number.innerText = target

            }
    
            // run the function
            updateCount()
        })
    } 

    setTimeout(activateCount, 750)
})
// ANIMATE ON SCROLL


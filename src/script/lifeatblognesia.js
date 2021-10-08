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

// ANIMATE ON SCROLL 
const joinusSubTitle = document.querySelectorAll(".joinus-content h2")
const joinusParagraph = document.querySelectorAll(".joinus-content p")
const joinusImage = document.querySelector(".joinus-content img")
const testimonialTitle = document.querySelector(".testimonial h1")
const testimonialCard = document.querySelectorAll(".testimonial .testimonial-card")
const jobCard = document.querySelectorAll(".job-card-container .job-card")

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

const runAnimationLoad = () => {
    if (elInView(joinusImage, 100)) addAnimation(joinusImage)

    // I keep all the forEach function above with normal syntax (not a one liner), because I want to keep it readable  
    joinusSubTitle.forEach(subTitle => {
        if(elInView(subTitle, 100)) addAnimation(subTitle)
    })

    joinusParagraph.forEach(paragraph => {
      if(elInView(paragraph, 100)) addAnimation(paragraph)
    })
}

const runAnimationScroll = () => {
    // in case there is an element that didn't get animated when loaded, then it will be or still get animated when get scrolled
    runAnimationLoad()
    
    if(elInView(testimonialTitle, 100)) addAnimation(testimonialTitle)

    testimonialCard.forEach(card => {
        if(elInView(card, 100)) addAnimation(card)
    })

    jobCard.forEach(card => {
        if(elInView(card, 200)) addAnimation(card)
    })
}

window.addEventListener("load", () => { runAnimationLoad() })
window.addEventListener("scroll", () => { runAnimationScroll() })
// ANIMATE ON SCROLL


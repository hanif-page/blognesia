// open new page without anchor tag
const daerahPage = (kota) => {
    let rawURL = "../daerah/"
    let URL = rawURL + kota 
    window.open(URL, "_self")
}

// GENERATING IMAGE GALLERY
const imageContainerMobile = document.querySelector("#imageContainerMobile")
const imageContainerTabletColumn1 = document.querySelector("#imageContainerTablet #col-1")
const imageContainerTabletColumn2 = document.querySelector("#imageContainerTablet #col-2")
const imageContainerDesktopColumn1 = document.querySelector("#col-desktop-1")
const imageContainerDesktopColumn2 = document.querySelector("#col-desktop-2")
const imageContainerDesktopColumn3 = document.querySelector("#col-desktop-3")
var minImageNumber = 1
var maxImageNumber = 12

// GENERATE IMAGE FUNCTION 
const generateImage = (index, device) => {
    const img = document.createElement('img')
    const imgSrc = "../../assets/blog-pict/all-daerah/" + index + ".jpg"
    const imgAlt = "Indonesian Culture or Nature Photos"
    img.src = imgSrc
    img.id = index - 1
    img.alt = imgAlt
    img.setAttribute("onclick", "openTouchSlider(this.id)")
    
    // what type is the device
    if(device === "mobile") imageContainerMobile.appendChild(img)
    else if(device === "tabletCol1") imageContainerTabletColumn1.appendChild(img)
    else if(device === "tabletCol2") imageContainerTabletColumn2.appendChild(img)
    else if(device === "desktopCol1") imageContainerDesktopColumn1.appendChild(img)
    else if(device === "desktopCol2") imageContainerDesktopColumn2.appendChild(img)
    else if(device === "desktopCol3") imageContainerDesktopColumn3.appendChild(img)
    else console.error("ERR : unknown device argument generateImage()")
}

// mobile gallery
for(var i = minImageNumber; i <= maxImageNumber; i++) generateImage(i, "mobile")

// tablet gallery
for(var i = minImageNumber; i <= maxImageNumber; i++)
{
    if(i <= maxImageNumber*1/2) generateImage(i, "tabletCol1")
    else if(i > maxImageNumber*1/2 && i <= maxImageNumber) generateImage(i, "tabletCol2")
    else console.error("ERR : while generating image (tablet gallery)")
}

// desktop gallery 
for(var i = minImageNumber; i <= maxImageNumber; i++)
{
    if(i <= maxImageNumber*1/3) generateImage(i, "desktopCol1")
    else if(i > maxImageNumber*1/3 && i <= maxImageNumber*2/3) generateImage(i, "desktopCol2")
    else if(i > maxImageNumber*2/3 && i <= maxImageNumber) generateImage(i, "desktopCol3")
    else console.error("ERR : while generating image (desktop gallery)")
}
// GENERATING IMAGE GALLERY

const allImages = document.querySelectorAll(".blog-photos img")
allImages.forEach(allImage => {
    allImage.addEventListener("dragstart", (e) => e.preventDefault())
})

// touch slider logic
const touchSlider = document.querySelector(".touch-slider")
const close = document.querySelector(".topslider-section i")
const body = document.querySelector("body")
const allElement = document.querySelectorAll("*")

close.addEventListener("click", () => {
    touchSlider.classList.remove("open")
    body.style.overflow = "auto"
    allElement.forEach(element => element.style.userSelect = "auto")
})

// imageID adalah id masing" image di bagian gallery/collection
const openTouchSlider = (imageID) => {

    touchSlider.classList.add("open")
    body.style.overflow = "hidden"
    allElement.forEach(element => element.style.userSelect = "none")

    
    const slider = document.querySelector(".slider-container"),
    slides = Array.from(document.querySelectorAll(".slide"))
    
    let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = imageID
    
    slides.forEach((slide, index) => {
        const slideImage = slide.querySelector("img")
        slideImage.addEventListener("dragstart", (e) => e.preventDefault())
    
        // Touch Event
        slide.addEventListener("touchstart", touchStart(index))
        slide.addEventListener("touchend", touchEnd)
        slide.addEventListener("touchmove", touchMove)
    
        // Mouse Event
        slide.addEventListener("mousedown", touchStart(index))
        slide.addEventListener("mouseup", touchEnd)
        slide.addEventListener("mouseleave", touchEnd)
        slide.addEventListener("mousemove", touchMove)
    })
    
    // langsung set gambar yang pertama tampil sesuai index gambar yg dipencet
    setPositionByIndex() 

    // Disable context menu
    window.oncontextmenu = function (e) {
        e.preventDefault()
        e.stopPropagation()
        return false;
    }

    // auto set when the window is resizing
    window.addEventListener("resizing", () => {
        setPositionByIndex()
    })
    
    function touchStart(index) 
    {
        return function(e)
        {
            currentIndex = index
            startPos = getPositionX(e)
            isDragging = true

            // const numberIndicator = document.querySelector(".number-indicator")
            // let textNumber = "Gambar Ke-" + currentIndex
            // numberIndicator.innerHTML = textNumber
    
            animationID = requestAnimationFrame(animation)
            slider.classList.add("grabbing")
        }
    }
    
    function touchEnd() 
    {
        isDragging = false
    
        cancelAnimationFrame(animationID)
    
        const movedBy = currentTranslate - prevTranslate
    
        if(movedBy < -100 && currentIndex < slides.length - 1)currentIndex += 1
    
        if(movedBy > 100 && currentIndex > 0)currentIndex -= 1
    
        setPositionByIndex()
    
        slider.classList.remove("grabbing")
    }
    
    function touchMove(e) 
    {
        if(isDragging)
        {
            const currentPosition = getPositionX(e)
    
            currentTranslate = prevTranslate + currentPosition - startPos
        }
    }
    
    function getPositionX(e)
    {
        return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX
    }
    
    function animation() 
    {
        setSliderPosition()
    
        if(isDragging) requestAnimationFrame(animation)
    }
    
    function setSliderPosition()
    {
        slider.style.transform = `translateX(${currentTranslate}px)`
    }
    
    function setPositionByIndex() 
    {
        currentTranslate = currentIndex * - window.innerWidth
        prevTranslate = currentTranslate 

        const numberIndicator = document.querySelector(".number-indicator")
        let textNumber = "Gambar Ke-" + (+currentIndex + 1) 
        numberIndicator.innerHTML = textNumber

        setSliderPosition()
    }
}


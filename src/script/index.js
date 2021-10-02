// hamburger/mobile nav open and close control
const header = document.querySelector(".header-container header")
const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("navOpen")
    header.classList.toggle("navOpen")
    mobileNav.classList.toggle("open")
})

// open and close the daerah search bar (mobile)
const mobileDaerah = document.querySelector(".mobile-nav li.daerah a")
const mobileSearchDaerah = document.querySelector(".mobile-nav .search-daerah")
const mobileCloseSearchDaerah = document.querySelector(".mobile-nav .search-daerah .fa-times")
mobileDaerah.addEventListener('click', (e) => {
    e.preventDefault()
    mobileSearchDaerah.classList.toggle("open")
})

mobileCloseSearchDaerah.addEventListener('click', () => {
    mobileSearchDaerah.classList.toggle("open")
})

// open and close the daerah search bar (desktop)
const desktopDaerah = document.querySelector(".normal-nav li.daerah a")
const desktopSearchDaerah = document.querySelector(".normal-nav .search-daerah")
const desktopCloseSearchDaerah = document.querySelector(".normal-nav .search-daerah .fa-times")
desktopDaerah.addEventListener('click', (e) => {
    e.preventDefault()
    desktopSearchDaerah.classList.toggle("open")
})

desktopCloseSearchDaerah.addEventListener('click', () => {
    desktopSearchDaerah.classList.toggle("open")
})

// Search bar recommendation list (mobile)
window.addEventListener("load", () => {
    let filterDaerah = document.querySelector(".mobile-nav .type-container input")

    filterDaerah.addEventListener("keyup", () => {
        var searchItem = filterDaerah.value.toLowerCase()
        var allItems = document.querySelectorAll(".mobile-nav .recommendation-list ul li")

        for (let i of allItems)
        {
            let item = i.innerHTML.toLowerCase()
            if(item.indexOf(searchItem) == -1) 
            {
                i.classList.add("hide")
            }
            else 
            {
                i.classList.remove("hide")
            }
        }
    })
})

// Search bar recommendation list (desktop)
window.addEventListener("load", () => {
    let filterDaerah = document.querySelector(".normal-nav .type-container input")

    filterDaerah.addEventListener("keyup", () => {
        var searchItem = filterDaerah.value.toLowerCase()
        var allItems = document.querySelectorAll(".normal-nav .recommendation-list ul li")

        for (let i of allItems)
        {
            let item = i.innerHTML.toLowerCase()
            if(item.indexOf(searchItem) == -1) 
            {
                i.classList.add("hide")
            }
            else 
            {
                i.classList.remove("hide")
            }
        }
    })
})
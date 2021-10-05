// open new page without anchor tag
const daerahPage = (kota) => {
    let rawURL = "../daerah/"
    let URL = rawURL + kota 
    window.open(URL, "_self")
}
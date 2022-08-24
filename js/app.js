let nav = document.querySelector(".navbaar");
let search = document.querySelector(".searchbar");
let loader = document.querySelector(".loader");

AOS.init();

const showNav = () => {
    nav.classList.add("active");
}
const closeNav = () => {
    nav.classList.remove("active")
}

const showSearch = () => {
    search.classList.add("active");
}

const closeSearch = () => {
    search.classList.remove("active");
}

let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
});




window.addEventListener("load", setTimeout(() => {
    loader.style.display = "none";
}, 1000))
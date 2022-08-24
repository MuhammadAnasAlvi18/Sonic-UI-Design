let nav = document.querySelector(".navbaar");
let search = document.querySelector(".searchbar");
let loader = document.querySelector(".loader");

AOS.init();

function showNav(){
    nav.classList.add("active");
}
function closeNav(){
    nav.classList.remove("active")
}

function showSearch(){
    search.classList.add("active");
}

function closeSearch(){
    search.classList.remove("active");
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed : 200,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });




// window.addEventListener("load" , ()=>{
//     loader.style.display = "none";
// })


window.addEventListener("load" , setTimeout(()=>{
    loader.style.display = "none";
},1000))
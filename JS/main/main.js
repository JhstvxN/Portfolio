window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})

const fecha = Date.now()
const hoy = new Date(fecha)
const year = hoy.getFullYear()

let footer =document.getElementById("year")
footer.innerHTML = year
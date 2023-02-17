const open = document.getElementById("open")
const close = document.getElementById("close")
const navbar = document.getElementsByClassName("navbar")
const nav = document.getElementById("nav")
const wrapper = document.getElementsByClassName("wrapper")

let vwidth = 0

window.addEventListener(`resize`, event => {
    let vwidth = window.innerWidth
    if (vwidth >= 700) {
        openit()
    }   
  }, false);






function openit() {
    nav.style = "display: flex"
    open.style = "display: none"
}



function closeit() {
    nav.style = "display: none"
    open.style = "display: flex"
}
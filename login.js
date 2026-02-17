setInterval(function() {
    document.getElementById("letreiro").innerText = "HTML"
}, 1000)

setInterval(function() {
    document.getElementById("letreiro").innerText = "JS"
}, 2000)

setInterval(function() {
    document.getElementById("letreiro").innerText = "CSS"
}, 3000);

function atualizarHora(){
let cale = new Date()

let hora = cale.toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})
document.getElementById("hora").innerText = hora
}
setInterval(atualizarHora,1000)

atualizarHora()

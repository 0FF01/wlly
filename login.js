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


document.getElementById("git").addEventListener("click", function() {
    window.open("https://github.com/0FF01", "_blank");
});

document.getElementById("insta").addEventListener("click", function() {
    window.open("https://instagram.com/weslley_xc7", "_blank");
});

document.getElementById("zap").addEventListener("click", function() {
    window.open("https://wa.me/5521959101005?text=Olá%20vim%20pela%20sua%20pagina%20de%20login", "_blank");
});

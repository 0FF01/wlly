function atualizarHora(){
let cale = new Date()

let hora = cale.toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})
document.getElementById("horas").innerText = hora
}
setInterval(atualizarHora,1000)

atualizarHora()

let caler = new Date()

document.getElementById("data").innerText = (caler.toLocaleDateString("pt-Br"))

let sauda = new Date()
let sauda3 = sauda.getHours()
let mensagem = ""

if(sauda < 12) {
    mensagem = "BOM DIA"
    document.body.style.backgroundImage = "linear-gradient( #f0f400, #ffb700"
} else if(sauda <= 18) {
    mensagem = "BOA TARDE"
    document.body.style.backgroundImage = "linear-gradient( #ff0000, #ffb700"
} else {
    mensagem = "BOA NOITE"
    document.body.style.backgroundImage = "linear-gradient( #000000, #0a0036"
}
document.getElementById("reverencia").innerText = mensagem



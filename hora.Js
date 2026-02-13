function atualizarHora(){
let cale = new Date()

let hora = cale.toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})
document.getElementById("hora3").innerText = hora
}
setInterval(atualizarHora,1000)

atualizarHora()

let caler = new Date()

document.getElementById("data1").innerText = (caler.toLocaleDateString("pt-Br"))

let sauda = new Date()
let sauda3 = sauda.getHours()
let mensagem = ""

if(sauda < 12) {
    mensagem = "BOM DIA"
} else if(sauda < 18) {
    mensagem = "BOA TARDE"
} else {
    mensagem = "BOA NOITE"
}
document.getElementById("mensagem").innerText = mensagem

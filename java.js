let botao1 = document.getElementById("botao-oqueeanetflix")
let menu1 = document.getElementById("texto-oqueeanetflix")
let imagem1 = document.getElementById("imagem-1") 

function girar1(){
    if(menu1.style.display == "block") {
        menu1.style.display = "none"
        imagem1.id = "imagem-1"
    } else {
        menu1.style.display = "block"
        imagem1.id = "imagem-1-girar"
    }

}
botao1.addEventListener("click", girar1)

let botao2 = document.getElementById("botao-quantocusta")
let menu2 = document.getElementById("texto-quantocusta")
let imagem2 = document.getElementById("imagem-2") 

function girar2(){
    if(menu2.style.display == "block") {
        menu2.style.display = "none"
        imagem2.id = "imagem-2"
    } else {
        menu2.style.display = "block"
        imagem2.id = "imagem-2-girar"
    }

}
botao2.addEventListener("click", girar2)


let botao3 = document.getElementById("botao-ondeassistir")
let menu3 = document.getElementById("texto-ondeassistir")
let imagem3 = document.getElementById("imagem-3") 

function girar3(){
    if(menu3.style.display == "block") {
        menu3.style.display = "none"
        imagem3.id = "imagem-3"
    } else {
        menu3.style.display = "block"
        imagem3.id = "imagem-3-girar"
    }

}
botao3.addEventListener("click", girar3)



let botao4 = document.getElementById("botao-comocancelar")
let menu4 = document.getElementById("texto-comocancelar")
let imagem4 = document.getElementById("imagem-4") 

function girar4(){
    if(menu4.style.display == "block") {
        menu4.style.display = "none"
        imagem4.id = "imagem-4"
    } else {
        menu4.style.display = "block"
        imagem4.id = "imagem-4-girar"
    }

}
botao4.addEventListener("click", girar4)

let botao5 = document.getElementById("botao-oqueassistir")
let menu5= document.getElementById("texto-oqueassistir")
let imagem5 = document.getElementById("imagem-5") 

function girar5(){
    if(menu5.style.display == "block") {
        menu5.style.display = "none"
        imagem5.id = "imagem-5"
    } else {
        menu5.style.display = "block"
        imagem5.id = "imagem-5-girar"
    }

}
botao5.addEventListener("click", girar5)



let botao6 = document.getElementById("botao-criancas")
let menu6= document.getElementById("texto-criancas")
let imagem6 = document.getElementById("imagem-6") 

function girar6(){
    if(menu6.style.display == "block") {
        menu6.style.display = "none"
        imagem6.id = "imagem-6"
    } else {
        menu6.style.display = "block"
        imagem6.id = "imagem-6-girar"
    }

}
botao6.addEventListener("click", girar6)
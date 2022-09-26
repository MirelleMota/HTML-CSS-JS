//var variável global*/
//let variável local e mais utilizada
//const variável que não muda*/

/*
JS linguagem case sensitive = reconhece letras maiúsculas e minúsculas
Podemos acesssar o DOM através de:
Por Tag: getElementByTagName()
Por Id: getElementById()
Por nome: getElementsByName()
Por Classe: getElementsByClasseName()
Por Seletor do CSS: querySeletor()
*/
// const perfil = document.getElementById('perfil') -> pega pelo perfil
// const perfil = document.getElementsByClassName('perfil') -> pega pela classe
// const perfil = document.getElementsByName('name') -> pega pelo atributo name
// const perfil = document.getElementsByTagName('name') -> pega pela tag
// const perfil = document.querySelector('.perfil')

// function aparecerNome() {
//   // let data = new Date()
//   // alert(data)
//   console.log(perfil)
// }

let nome  = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
       txtNome.innerHTML = "Nome Inválido"
       txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

// função de validação de e-mail utilizando Expressão Regular
function validaEmail2() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
  
    if(email.value.match(regex)){
      txtEmail.innerHTML = 'Email válido.'
      txtEmail.style.color = '#4A314D'
      emailOk = true
    } else {
      txtEmail.innerHTML = 'Email inválido.'
      txtEmail.style.color = '#EE2E31'
      emailOk = false
    }
  }

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito grande. Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk== true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }
    
}

function mapaZoom() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"

}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

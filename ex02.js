//O PROGRAMA NÃO ESTA LENDO A PROPRIEDADE "VALUE" DE TYAER
let tyear= document.querySelector("#tyear")
let sex= document.getElementsByName("sex")
var img= document.getElementById("img")

let yearnow= new Date().getFullYear()

function verificar(){
   let age= yearnow - Number(tyear.value)
   
   let vce= document.getElementById("vce")
   let r= document.getElementById("res")
  
  if (tyear.value.length == 0){ 
     alert("Erro! digite seu ano de nascimento")
  } else {
      if (sex[0].checked){
         if (age <= 12){  
            vce.innerText= `você é criança e tem ${age} anos`
            img.setAttribute("src", "img-baby-boy.png")
         } else if (age <= 18){
            vce.innerText= `você é jovem e tem ${age} anos`
            img.setAttribute("src", "img-yong-man.png")
         } else if (age <= 69){
            vce.innerText= `você é Homem e tem ${age} anos`
            img.setAttribute("src", "img-man.png")
         } else {
            vce.innerText= `você é idoso e tem ${age} anos`
            img.setAttribute("src", "img-old-man.png")
            r.appendChild(img)
         }
      } else {
         if (age <= 12){  
            vce.innerText= `você é criança e tem ${age} anos`
            img.setAttribute("src", "img-baby-girl.png")
            r.appendChild(img)
         } else if (age <= 18){
            vce.innerText= `você é jovem e tem ${age} anos`
            img.setAttribute("src", "img-yong-girl.png")
            r.appendChild(img)
         } else if (age <= 69){
            vce.innerText= `você é Mulher e tem ${age} anos`
            img.setAttribute("src", "img-woman.png")
            r.appendChild(img)
         } else {
            vce.innerText= `você é idosa e tem ${age} anos`
            img.setAttribute("src", "img-old-girl.png")
            r.appendChild(img)
         }
      }
  } 
}
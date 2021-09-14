// duplicar o menu e adc em copy 

const menu = document.querySelector('.menu');
const copy= document.querySelector('.copy')

const cloneMenu= menu.cloneNode(true);
copy.appendChild(cloneMenu)

// selecionar o primeiro Dt da dl de faq 

const faq = document.querySelector('.faq')
const primeiroDT = faq.querySelector('dt')
// console.log(primeiroDT)



// selecionar o primeiro DD referente ao primeiro DT
const proximoDD = primeiroDT.nextElementSibling;
console.log(proximoDD);
// console.log(proximoDD.remove());



// subs o conteudo html de .faq pelo de .animais

// const animais = document.querySelector('.animais');
// faq.innerHTML = animais.innerHTML;
// const menu = document.querySelector('.menu');

// menu.classList.add('ativo','testee')
// menu.classList.remove('testee')

// console.log(menu)
// menu.classList.add()
// menu.classList.toggle('azul')
// console.log(menu)

// const img = document.querySelector('img')

// img.setAttribute('alt','é uma raposa com s')

// const listaAnimais = document.querySelector('.animais-lista');

// function qualquernome () {
//   console.log('clicou222');
// }
// const img = document.querySelector('img')
// img.addEventListener('click',qualquernome);

// console.log(img)

  

// function callback(event) {
//   console.log(event);
// }
// img.addEventListener('click',callback);
// // target onde clicou exatamento , curren target 


// selecionar todas as listas
// const imgs = document.querySelectorAll('img');
// function handleImg(event) {
//   console.log(event.target.getAttribute('src'));
// }
// imgs.forEach((img) =>{
//   img.addEventListener('click',handleImg)
//   // console.log(img)
// })


// evento
// const h1 = document.querySelector('h1');
// function handleEvent(event){
//   console.log(event.type,event);
// }

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// window.addEventListener("scroll",handleEvent)

// mudando o background
function handleKeyboard(event){
  if(event.key ==='a'){
    document.body.classList.toggle("azul")
  }
}
window.addEventListener("keydown",handleKeyboard)

const imgs = document.querySelectorAll('img');
imgs.forEach((img =>{
  console.log(img)
}))
const animais = document.getElementById('animais');

const gridSelectionNode = document.querySelectorAll('.grid-section')

const primeiroLi = document.querySelector('li')
console.log(primeiroLi)
const primeiroUl = document.querySelector('ul')
console.log(primeiroUl)

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSecSelecionado = document.querySelectorAll('.grid-section');

gridSelectionNode.forEach(function(item, index){
  console.log(index);
});

const retorno = document.querySelectorAll('img[src^="img/imagem"]')
console.log(retorno);

const retornoH2= document.querySelector('.animais-descricao h2')
console.log(retornoH2)
// quando clicar no links adiciona uma classe ativo
// quando clicar em outra classe ja ativo remove uma 
//Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksinterno = document.querySelectorAll('a[href^="#"]');
// console.log(linksinterno)
function handleLink (event){
  event.preventDefault();
  linksinterno.forEach((link)=>{
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo');

}
linksinterno.forEach((link=>{
  link.addEventListener('click',handleLink);
}))


// Selecione todos os elementos do site começando a partir do
//body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event) {
//   console.log(event.currentTarget);
// }
// todosElementos.forEach((elemento=>{
//   elemento.addEventListener('click',handleElemento);
// }))

//2
// console.log(todosElementos);
// Utilizando o código anterior, ao invés de mostrar noconsole,
// remova o elemento que está sendo clicado, o método remove()remove um elemento
// function handleElemento(event) {
//  event.currentTarget.remove();
// }


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
//documentoElement == html 

// function handleCLickT(event) {
//   console.log(event.key)
//   if(event.key === 't'){ //adc quando apertar o t 
//     document.documentElement.classList.toggle('textomaior'); //adc se nao tiver toggle
//   }
// }

// window.addEventListener('keydown',handleCLickT);



function exibealerta () {
  alert('msgm teste onclick')
}
function initNavTab(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent= document.querySelectorAll('.js-tabcontent section');

// verificar se existe a CLASS LIST com nome de section 
if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add;

    //problema         quando carrega o site não esta nada ativo, ou adc a class Ativo no html ou por jS 
    tabContent[0].classList.add('ativo')

    //  p ativar a func activeTab . chamar ela passar o numero do array
    function activeTab(index) {
      tabContent.forEach((section )=>{
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    }

    // clicar ele vai adicionar o numero do array 
    tabMenu.forEach((itemMenu,index) =>{
      itemMenu.addEventListener('click',() =>{
        activeTab(index);
      })
    })
    // um loop para cada item da tab itemMenu é o item que est rodando, argumento index que mosta o index do array

}
}
initNavTab();

function initAccordion () {

const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';
// se houver alteraçao no nome ativo mudar so a variavel activeClass

if(accordionList.length) {
      accordionList[0].classList.add(activeClass); // deixa ativo o dt
      accordionList[0].nextElementSibling.classList.add(activeClass); // começa o DD ativo 

      
      function activeAccordion() {
        //console.log(this.nextElementSibling); // confere o proximo intem clicado 
        this.classList.toggle(activeClass); 
        // adicionando o ativo na classe DT se colocar o toggle ele confere se ja tem o ativo 
        this.nextElementSibling.classList.toggle(activeClass) ;
        // adic ativo na classe DT
      }

      accordionList.forEach((item) =>{
        item.addEventListener('click',activeAccordion)
      });
  }
}
// inicia a funç accordion
initAccordion();
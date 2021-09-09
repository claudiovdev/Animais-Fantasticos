
function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabConteudo = document.querySelectorAll('.js-tabconteudo section');


    if(tabMenu.length && tabConteudo.length){
        // Nesta ação, foi criando uma função para rodar todo o elemento de conteudo da section selecionada e adicionar ativo quando o evento for chamado
        function ativarTab(index){
            tabConteudo.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabConteudo[index].classList.add('ativo');
        }

        // Nesta ação foi criado um evento que ao cliclar no item selecionado ele ativa a função acima, colocando a classe ativo nela
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function(){
                ativarTab(index);
            })
    })
    }
}
initTabNav();

function initAcordion(){
    const acordionList = document.querySelectorAll('.js-acordion dt');

    function activeAcordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    acordionList.forEach((item) =>{
        item.addEventListener('click', activeAcordion);
    })
}
initAcordion();

const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    const topo = section.offsetTop;

    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    })
    
}

linksInterno.forEach((link)=>{
link.addEventListener('click', scrollToSection);
})
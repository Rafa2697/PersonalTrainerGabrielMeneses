

//efito do botão nav

let navList = document.querySelector('.nav_list');
let botao = document.querySelector('.bi-list');
botao.addEventListener('click', () => {
    if(navList.style.display === 'none'){
        navList.style.display = 'flex'
        botao.style.transform = 'rotate(90deg)';
        botao.style.transition = '.5s ease-in-out' 
    }else{
        navList.style.display = 'none'
        botao.style.transform = 'rotate(0)'
    }
})


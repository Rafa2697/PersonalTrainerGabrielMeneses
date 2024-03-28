

//efito do botão nav

let navList = document.querySelector('.nav_list');
document.querySelector('.bi-list').addEventListener('click', () => {
    if(navList.style.display === 'none'){
        navList.style.display = 'flex'
    }else{
        navList.style.display = 'none'
    }
})


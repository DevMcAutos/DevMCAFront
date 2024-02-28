
setTimeout(() => {
    const closeMenu = document.getElementById('menu-button')
    const openMenu = document.getElementById('boton-abrir-menu')
    const menu = document.getElementById('navbar')
    const body = document.getElementsByClassName('App')
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    closeMenu?.addEventListener('click', function(){    
        menu.classList.add('close-menu')
        menu.classList.remove('open-menu')
    })
    openMenu?.addEventListener('click', function(){
        menu.classList.add('open-menu')
        menu.classList.remove('close-menu')
    })

    body[0]?.addEventListener('touchstart', (e)=>{
        isDragging = true;
        startX = e.touches[0].clientX;
        currentX = startX;
    })
    
    

    body[0]?.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        if (diffX < -100) {
            menu.classList.add('open-menu')
            menu.classList.remove('close-menu')
        }else if(diffX > 100){
            menu.classList.add('close-menu')
            menu.classList.remove('open-menu')
        }
        e.preventDefault(); 
    });

}, 500);


        
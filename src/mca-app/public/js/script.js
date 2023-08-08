
setTimeout(() => {
    const closeMenu = document.getElementById('menu-button')
    const openMenu = document.getElementById('boton-abrir-menu')
    const menu = document.getElementById('navbar')
    closeMenu.addEventListener('click', function(){    
        menu.classList.add('close-menu')
        menu.classList.remove('open-menu')
    })
    openMenu.addEventListener('click', function(){
        menu.classList.add('open-menu')
        menu.classList.remove('close-menu')
    })

}, 500);





window.addEventListener('scroll', function() {
    
    const navbar = document.getElementById('navbar');  
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

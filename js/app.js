document.addEventListener("DOMContentLoaded", function() {

    const menu = document.querySelector(".page-nav-list");
    console.log(menu);

    const menuMobile = menu.cloneNode(true);
    document.body.appendChild(menuMobile);
    menuMobile.classList.remove('page-nav-list');
    menuMobile.classList.add('page-nav-list-mobile');

    const burger = document.querySelector('.page-nav-toggle');
    burger.addEventListener('click', function(e){
        e.preventDefault();

        document.body.classList.toggle('nav-show');
    })

})
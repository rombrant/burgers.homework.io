function openMenu(){
    const openBtn = document.querySelector('.burgers-menu-button');
    const closeBtn = document.querySelector('.burgers-menu-closed');
    const menu = document.querySelector('.hide-menu');
    


        openBtn.addEventListener('click', function () {
            menu.classList.remove('hide-menu');
            menu.classList.add('visible');
            menu.style.opacity= 0;
            let op = 0.1;
            setTimeout (function foo(){
                if (op < 1) {
                    op += 0.1;
                    menu.style.opacity= op;
                    setTimeout (foo, 50);
                }
            }, 50);
        });
        closeBtn.addEventListener('click', function () {
            menu.style.opacity= 1;
            let op = 1;
            setTimeout (function doo(){
                if (op > 0) {
                    op -= 0.1;
                    menu.style.opacity= op;
                    setTimeout (doo, 50);
                }
            },50)
            setTimeout (function (){
                menu.classList.add('hide-menu');
            }, 1000);
        })
}
openMenu();
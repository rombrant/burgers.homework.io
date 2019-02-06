function openMenu(){
    const openBtn = document.querySelector('.burgers-menu-button');
    const closeBtn = document.querySelector('.burgers-menu-closed');
    const menu = document.querySelector('.hide-menu');
    let op = 0.2;


        openBtn.addEventListener('click', function () {
            console.log("это работает");
            menu.style.opacity = 0;
            setTimeout (function foo() {
                if (op<1) {
                    op+=0.1;
                    menu.style.opacity= op;
                    setTimeout (foo, 100);
                }
            }, 100);
        });
}
openMenu();
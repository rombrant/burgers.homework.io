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


const menuItems = document.querySelectorAll('.team-block__content-accordeon__list-item');


        for (const Elem of menuItems) {
            const active = Elem.classList.contains('team-block__content-accordeon__list-item--active');
            Elem.addEventListener('click', r=> {
            if (active) {
                Elem.classList.remove('team-block__content-accordeon__list-item--active');
                Elem.querySelector('.team-block__content-accordeon__list-item__photo').style.height=0;
                Elem.querySelector('.team-block__content-accordeon__list-item__description').style.height=0;
            }
            });
        }


    for (const item of  menuItems) {
        item.addEventListener('click', e=> {
            const curItem = e.currentTarget;
            const photo = curItem.querySelector('.team-block__content-accordeon__list-item__photo');
            const photoBlock = photo.firstElementChild;
            const reqPhotoHeight = photoBlock.getBoundingClientRect().height;
            photo.style.height = reqPhotoHeight+'px';
            const content = curItem.querySelector('.team-block__content-accordeon__list-item__description');
            const textBlock = content.lastElementChild;
            const reqHeight = textBlock.getBoundingClientRect().height;
            content.style.height = reqHeight+'px';
            const active = item.classList.contains('team-block__content-accordeon__list-item--active');
            console.log(reqHeight);
            if (active) {
                item.classList.remove('team-block__content-accordeon__list-item--active');
                item.querySelector('.team-block__content-accordeon__list-item__photo').style.height=0;
                item.querySelector('.team-block__content-accordeon__list-item__description').style.height=0;
            }
            else {
                curItem.classList.add('team-block__content-accordeon__list-item--active');
            }
        })
    }




openMenu();
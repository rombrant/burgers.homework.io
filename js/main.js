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


    for (const item of  menuItems) {
        item.addEventListener('click', e=> {
            const curItem = e.currentTarget;
            const isClosedItem = curItem.classList.contains("team-block__content-accordeon__list-item--active");
            if (isClosedItem) {
                removeActiveClass(menuItems);
            }
            else {
                removeActiveClass(menuItems);
                openSlider(item);
            }
           
            
        })
    }


    function openSlider(item) {
        const photo = item.querySelector('.team-block__content-accordeon__list-item__photo');
        const photoBlock = photo.firstElementChild;
        const reqPhotoHeight = photoBlock.getBoundingClientRect().height;
        photo.style.height = reqPhotoHeight+'px';
        const content = item.querySelector('.team-block__content-accordeon__list-item__description');
        const textBlock = content.lastElementChild;
        const reqHeight = textBlock.getBoundingClientRect().height;
        content.style.height = reqHeight+'px';
        item.classList.add('team-block__content-accordeon__list-item--active');
    }
  
   function removeActiveClass(menuItems) {
    Array.from(menuItems).forEach(elem => {
        elem.classList.remove("team-block__content-accordeon__list-item--active");
        elem.querySelector('.team-block__content-accordeon__list-item__photo').style.height=0;
        elem.querySelector('.team-block__content-accordeon__list-item__description').style.height=0;
    });
   }


   const menuOffers = document.querySelectorAll('.menu-accordeon__list-item');
        
        for ( const offer of menuOffers) {
            offer.addEventListener('click', e=>{
                const curOffer = e.currentTarget;
                const active = curOffer.classList.contains('menu-accordeon__list-item--active');
                if  (active) {
                    offerRemoveActiveClass(menuOffers);
                }
                else {
                    offerRemoveActiveClass(menuOffers);
                    openOfferMenu(offer);
                }
            })
        }

        function openOfferMenu(offer) {
            const contentBlock = offer.querySelector('.menu-accordeon__list-item__content');
            const textBlock = contentBlock.firstElementChild;
            const reqWidth = textBlock.getBoundingClientRect().width;
            contentBlock.style.width = reqWidth+'px';
            offer.classList.add('menu-accordeon__list-item--active');
        }

        function offerRemoveActiveClass(menuOffers) {
            Array.from(menuOffers).forEach(elem=>{
                elem.classList.remove("menu-accordeon__list-item--active");
                elem.querySelector('.menu-accordeon__list-item__content').style.width=0;
            })
        }
openMenu();
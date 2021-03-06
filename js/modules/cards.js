function cards() {
   class MenuCard {
      constructor(src, alt, title, descr, cost, parent, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.cost = cost;
            this.parent = document.querySelector(parent);
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();
      }

      changeToUAH() {
            this.cost *= this.transfer;
      }

      render() {
            const element = document.createElement('div');

            if(this.classes.length === 0) {
               this.element = 'menu__item';
               element.classList.add(this.element);
            } else {
               this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
               <img src=${this.src} alt=${this.alt}>
               <h3 class="menu__item-subtitle">${this.title}</h3>
               <div class="menu__item-descr">${this.descr}</div>
               <div class="menu__item-divider"></div>
               <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
               </div>
            `;
         this.parent.append(element);
      }
   }

   new MenuCard(
      "img/tabs/vegy.jpg",
      "vegy",
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      9,
      '.menu .container',
      'menu__item'
   ).render();

   new MenuCard(
      "img/tabs/elite.jpg",
      "elite",
      'Меню “Премиум”',
      'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      12,
      '.menu .container',
      'menu__item'
   ).render();

   new MenuCard(
      "img/tabs/post.jpg",
      "post",
      'Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
      16,
      '.menu .container',
      'menu__item'
   ).render();

}

export default cards;
import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector, modalTimerId) {
   const forms = document.querySelectorAll(formSelector);

   forms.forEach(item => {
      postData(item);
   });

   const message = {
      loading: 'img/form/spinner.svg',
      success: 'Спасибо, скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так'
   };

   function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      prevModalDialog.classList.remove('show');
      openModal('.modal', modalTimerId);

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
         <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
         </div>
      `

      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         closeModal('.modal');
      }, 4000);
   }

   function postData(form) {
      form.addEventListener('submit', (e) => {
         e.preventDefault();
   
         const statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            padding-top: 10px;
         `;
         form.insertAdjacentElement('afterend', statusMessage);
   
         const formData = new FormData(form); //создает автоматически из полученых данных обьект
   
         const object = {};
         formData.forEach(function(value, key) {
            object[key] = value;
         });
   
         fetch('server1.php', {
            method: "POST",
            headers: {
                  'Content-type': 'multipart/form-data'
            },
            body: JSON.stringify(object)
         })
         .then(data => data.text())
         .then(data => {
            console.log(data);
            showThanksModal(message.success);
            statusMessage.remove();
         })
         .catch(() => {
            showThanksModal(message.failure);
         })
         .finally(() => {
            form.reset();
         });
      });
   };

   // fetch('http://localhost:3000/menu')
   // .then(data => data.json())
   // .then(res => console.log(res));
}

export default forms;
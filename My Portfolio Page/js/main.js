'use strict';

{
  const hammenu = document.querySelector('.hammenu');
  const menu0 = document.querySelector('.menu0')
  const closeham = document.querySelector('.closeham');
  
  
  // hammenu.addEventListener('click', () => {
  //   if (menu0.classList.contains('hidden')) {
  //     menu0.classList.remove('hidden');
  //     hammenu.classList.add('hidden');
  //     closeham.classList.remove('hidden');
  //   } else {
  //     menu0.classList.add('hidden');
  //   }
  
  hammenu.addEventListener('click', () => {
      menu0.classList.remove('hidden');
      menu0.classList.add('show');
      hammenu.classList.add('hidden');
      closeham.classList.remove('hidden');
      
  });
  
  closeham.addEventListener('click', () => {
    menu0.classList.add('hidden');
    hammenu.classList.remove('hidden');
    closeham.classList.add('hidden');
  });




  const submit = document.querySelector('.submit');

  submit.addEventListener('click', () => {
    alert('送信されました。ご利用いただきありがとうございます。');
  });
}


const modalBtn = document.querySelector('.buy-ticket'),
      modalWindow = document.querySelector('.modal-window');


modalBtn.addEventListener('click', () => {
    modalWindow.classList.add('active-modal');
})
modalWindow.addEventListener('click', ({ target }) => {
    if(target.classList.contains('modal-window')){
        modalWindow.classList.remove('active-modal')
    }
})
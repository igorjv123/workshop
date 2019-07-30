const burgerBtn = document.querySelector('.burger-button'),
      burgerMenu = document.querySelector('.burger-menu')

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('show-burger')
})
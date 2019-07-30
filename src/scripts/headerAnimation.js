var navBar = document.querySelector('.header-wrapper');

window.onscroll = () => {
    if (document.scrollingElement.scrollTop >= 10 || document.body.offsetTop >= 10) {
        navBar.classList.add("nav-colored");
    }
    else {
        navBar.classList.remove("nav-colored");
    }
};
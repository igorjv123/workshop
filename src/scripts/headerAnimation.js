var navBar = document.querySelector('.header-wrapper');

window.onscroll = function (e) {
    console.dir(document.scrollingElement.scrollTop)
    if (document.scrollingElement.scrollTop >= 10 || document.scrollingElement.scrollTop >= 10) {
        navBar.classList.add("nav-colored");
    }
    else {
        navBar.classList.remove("nav-colored");
    }
};
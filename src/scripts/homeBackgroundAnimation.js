const link = document.querySelector('.no-link'),
      text = document.querySelector('.home-text'),
      buttons = document.querySelector('.home-content__buttons')

let clickCounter = 0;

link.addEventListener('click', () => {
        switch (clickCounter) {
            case 0:{
                text.innerHTML = `And now?`;
                link.href = `https://jquery.com`;
                clickCounter++;
                break;
            }
            case 1:{
                text.innerHTML = `And even now?`;
                link.href = `https://webpack.js.org/concepts/`;
                clickCounter++;
                break;
            }
            case 2:{
                text.innerHTML = `Go away!`;
                link.href = `https://www.google.com`;
                buttons.style.display = 'none';
                document.body.style.overflow = 'hidden';
                break;
            }
            default:{
                text.innerHTML = 'Tired of living?';
            }

        }



})
// https://webpack.js.org/concepts/
const slider = document.querySelector('.slider')
console.log(window.innerWidth)
setInterval(()=>{
    slider.style.left = `-${window.innerWidth}px`
    console.log(slider.style)
}, 1000)
// let lFollowX = 0,
//     lFollowY = 0,
//     x = 0,
//     y = 0,
//     friction = 1 / 30;
//
// function moveBackground() {
//     console
//     x += (lFollowX - x) * friction;
//     y += (lFollowY - y) * friction;
//
//     translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
// document.querySelector('.home-wrapper__background').style= {
//         '-webit-transform': translate,
//         '-moz-transform': translate,
//         'transform': translate
//     };
//
//     window.requestAnimationFrame(moveBackground);
// }
//
// window.addEventListener('mousemove', function(e) {
//     var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
//     var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
//     lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
//     lFollowY = (10 * lMouseY) / 100;
//     moveBackground();
// });
//

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
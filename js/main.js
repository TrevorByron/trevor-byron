// This is tweaking the scroll reveal library to be more how I want it

window.sr = ScrollReveal();
sr.reveal('.foo', {duration: 700, scale: 1});
sr.reveal('.bar', {duration: 3500});
sr.reveal('.description', {duration: 1000, scale: 1, origin: 'top',distance: '30px',});
sr.reveal('.bucket', {duration: 700,  scale: .95, distance: '5px',});
sr.reveal('.card1', {duration: 500, scale: 1});
sr.reveal('.card2', {duration: 500, scale: 1, delay: 250});
sr.reveal('.card3', {duration: 500, scale: 1, delay: 500});
sr.reveal('.card4', {duration: 500, scale: 1, delay: 750});
sr.reveal('.boo', {duration: 1000, scale: 1, origin: 'top',distance: '30px',});

// This controls the header, making it appear once viewer has scrolled past pixel 479

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 650) {
            $('.second-nav').css('visibility','visible');
            $('.second-nav').fadeIn('fast');
        }
        else {
            $('.second-nav').fadeOut('fast');
        }
    });
});


// This controls the videos and allows them play only when in the view port

var videos = document.getElementsByTagName("video"),
fraction = 0.8;
function checkScroll() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

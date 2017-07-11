$(document).ready(function() {
// define document width and height
TweenMax.set('.container', {scale: 0.2})
TweenMax.to('.container', 10 + 5 * Math.random(), {rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease: Linear.easeNone, height: 2000 + Math.random(), yoyo: true}, .25)
});

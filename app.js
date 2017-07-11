$(document).ready(function() {
//  var htmlElements = "";
//  for (var i = 0; i < 10; i++) {
//   htmlElements += '<div class="container"><div class="line"></div></div>';
// }
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var initX = parseInt(Math.random());
var destX = parseInt(initX);
var container = $("#container");
var elements = []
var items;
for (var i = 6; i >= 0; i--) {
  item = $('<div class="container"><div class="line"></div></div>')
  elements.push(item)
  container.append(item)
}

elements.forEach(function (item, i){
  function moveItem(){
    TweenMax.to(item, 5 + 5 * Math.random(), {ease: Linear.easeNone, left: window.innerWidth * Math.random() * 1.3 - (window.innerWidth * .15), top: window.innerHeight * Math.random()  * 1.3 - (window.innerHeight * .15),
    onComplete: moveItem

   })
  }
  TweenMax.set(item, {x: initX, y: Math.random(), left: window.innerWidth * Math.random() * 1.3 - (window.innerWidth * .15), top: window.innerHeight * Math.random()  * 1.3 - (window.innerHeight * .15), width: 100})
  TweenMax.to(item, 5 + 5 * Math.random(), {x: destX, y: Math.random(), rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease:Sine.easeInOut, height: 180 + Math.random(), yoyo: true, force3D:false}, .25)
  moveItem();
})


});
// left: window.innerWidth * Math.random(), top: window.innerHeight * Math.random(),

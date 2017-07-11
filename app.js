$(document).ready(function() {
//  var htmlElements = "";
//  for (var i = 0; i < 10; i++) {
//   htmlElements += '<div class="container"><div class="line"></div></div>';
// }

var container = $("#container");
var elements = []
var items;
for (var i = 6; i >= 0; i--) {
  item = $('<div class="container"><div class="line"></div></div>')
  elements.push(item)
  container.append(item)
}

elements.forEach(function (item, i){
  TweenMax.set(item, {left: window.innerWidth * Math.random(), top: window.innerHeight * Math.random(), width: 100})
  TweenMax.to(item, 10 + 5 * Math.random(), {x: Math.random(), y: Math.random(), rotation: Math.random()< .5? '+=360' : '-=360', repeat: -1, ease: Linear.easeNone, height: 180 + Math.random(), yoyo: true, force3D:false}, .25)
})
});

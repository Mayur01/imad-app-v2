console.log('Loaded!');

// moving image.
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginleft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};
var a = document.querySelector("canvas"),
    c = a.getContext("2d");

a.ontouchstart = function (e) {
  e.preventDefault();
  c.moveTo(e.touches[0].pageX, e.touches[0].pageY);
};

a.ontouchmove = function (e) {
  c.lineTo(e.touches[0].pageX, e.touches[0].pageY);
  c.stroke();
};

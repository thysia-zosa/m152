/**
 * Vielen Dank an https://developer.mozilla.org/de/docs/Web/API/Canvas_API/Tutorial/Basic_animations#an_animated_solar_system für die Vorlage
 */

var sonne = new Image();
var mond = new Image();
var erde = new Image();

const FILL_STYLE = 'rgba(0, 0, 0, 0.4)';
const STROKE_STYLE = 'rgba(0, 153, 255, 0.4)';

const init = () => {
  sonne.src = 'sonne.png';
  mond.src = 'mond.png';
  erde.src = 'erde.png';
  window.requestAnimationFrame(zeichnen);
}

const zeichnen = () => {
  var context = document.getElementById('sonnensystem').getContext('2d');

  context.globalCompositeOperation = 'destination-over';
  context.clearRect(0, 0, 500, 500);
  
  context.fillStyle = FILL_STYLE;
  context.strokeStyle = STROKE_STYLE;
  context.save();
  context.translate(250, 250);

  // Erde
  var zeit = new Date();
  context.rotate(((2 * Math.PI) / 60) * zeit.getSeconds() + ((2 * Math.PI) / 60000) * zeit.getMilliseconds());
  context.translate(205, 0);
  context.fillRect(0, -12, 50, 24);
  context.drawImage(erde, -12, -12);

  // Mond
  context.save();
  context.rotate(((2 * Math.PI) / 6) * zeit.getSeconds() + ((2 * Math.PI) / 6000) * zeit.getMilliseconds());
  context.translate(0, 28.5);
  context.drawImage(mond, -3.5, -3.5);
  context.restore();

  context.restore();

  context.beginPath();
  context.arc(250, 250, 205, 0, Math.PI * 2, false);
  context.stroke();

  context.drawImage(sonne, 0, 0, 500, 500);

  window.requestAnimationFrame(zeichnen);
}

init();
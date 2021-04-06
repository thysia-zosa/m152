var myCanvas = document.getElementById('fraktal');
var ctx = myCanvas.getContext('2d');

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const draw = async (startX, startY, len, angle, branchWidth) => {
  ctx.lineWidth = branchWidth;
  ctx.beginPath();
  ctx.save();

  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if (len < 1) {
    ctx.restore();
    return;
  }

  await sleep(1);
  await draw(0, -len, len * 0.5, 240, branchWidth * 0.7);
  await draw(0, -len, len * 0.5, 0, branchWidth * 0.7);
  await draw(0, -len, len * 0.5, 120, branchWidth * 0.7);

  ctx.restore();
}

const drawAll = async () => {
  await draw(500, 500, 250, 0, 10);
  await draw(500, 500, 250, 120, 10);
  await draw(500, 500, 250, 240, 10);
}

drawAll();
let ctx = document.getElementById('sonnenuhr').getContext('2d');
let dayText = document.getElementById('dayText');
let day = document.getElementById('day');
let latText = document.getElementById('latText');
let lat = document.getElementById('lat');
let sunRiseText = document.getElementById('sunRise');
let sunSetText = document.getElementById('sunSet');
let epsilon;
let phi;
let date;
let month;
let days;
let hour;
let minute;

const getY = (x) => {
    let delta = (x + 240) * Math.PI / 480;
    let result = Math.asin(Math.sin(epsilon) * Math.sin(phi) + Math.cos(epsilon) * Math.cos(phi) * Math.cos(delta));
    return 180.5 - 360 * (result / Math.PI);
}

const twoCijfers = (number) => {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

const drawLine = () => {
    epsilon = 23.43 * Math.PI / 180 * Math.sin((day.value - 80) * Math.PI / 182.5);
    phi = lat.value * Math.PI / 180;
    ctx.clearRect(0, 0, 1000, 400);
    ctx.fillStyle = 'black';
    for (let index = 0; index <= 12; index++) {
        ctx.fillRect(20 + 80 * index, 20, 1, 360);
        ctx.fillText((18 + 2 * index) % 24, 18 + 80 * index, 395);
    }
    for (let index = 0; index <= 6; index++) {
        ctx.fillRect(20, 20 + 60 * index, 960, 1);
        ctx.fillText(90 - 30 * index, 2, 23 + 60 * index);
    }
    ctx.beginPath();
    ctx.moveTo(20, getY(0) + 20);
    for (let index = 1; index <= 960; index++) {
        ctx.lineTo(index + 20.5, getY(index) + 20);
    }
    ctx.strokeStyle = "red";
    ctx.stroke();
    date = new Date(2018, 0, day.value, 0, 6 * 60);
    month = date.getMonth() + 1;
    days = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    dayText.innerHTML = twoCijfers(days) + '.' + twoCijfers(month);
    latText.innerHTML = lat.value + '°';
}

day.addEventListener('input', drawLine);
lat.addEventListener('input', drawLine);

drawLine();

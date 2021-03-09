let originalOrder = [
  'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray', 'lightgray',
  'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green',
  'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',
  'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
  'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange',
  'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'
];

let Ordo;
let tempOrder;

let pieces = document.getElementsByClassName('smallOne');

function assignColor() {
  for (let i = 0; i < pieces.length; i++) {
    pieces[i].style.backgroundColor = Ordo[i];
  }
}

function leftUp() {
  tempOrder = [
    Ordo[18], Ordo[1], Ordo[2], Ordo[21], Ordo[4], Ordo[5], Ordo[24], Ordo[7], Ordo[8],
    Ordo[11], Ordo[14], Ordo[17], Ordo[10], Ordo[13], Ordo[16], Ordo[9], Ordo[12], Ordo[15],
    Ordo[45], Ordo[19], Ordo[20], Ordo[48], Ordo[22], Ordo[23], Ordo[51], Ordo[25], Ordo[26],
    Ordo[27], Ordo[28], Ordo[29], Ordo[30], Ordo[31], Ordo[32], Ordo[33], Ordo[34], Ordo[35],
    Ordo[36], Ordo[37], Ordo[6], Ordo[39], Ordo[40], Ordo[3], Ordo[42], Ordo[43], Ordo[0],
    Ordo[44], Ordo[46], Ordo[47], Ordo[41], Ordo[49], Ordo[50], Ordo[38], Ordo[52], Ordo[53]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function rightUp() {
  tempOrder = [
    Ordo[0], Ordo[1], Ordo[20], Ordo[3], Ordo[4], Ordo[23], Ordo[6], Ordo[7], Ordo[26],
    Ordo[9], Ordo[10], Ordo[11], Ordo[12], Ordo[13], Ordo[14], Ordo[15], Ordo[16], Ordo[17],
    Ordo[18], Ordo[19], Ordo[47], Ordo[21], Ordo[22], Ordo[50], Ordo[24], Ordo[25], Ordo[53],
    Ordo[33], Ordo[30], Ordo[27], Ordo[34], Ordo[31], Ordo[28], Ordo[35], Ordo[32], Ordo[29],
    Ordo[8], Ordo[37], Ordo[38], Ordo[5], Ordo[40], Ordo[41], Ordo[2], Ordo[43], Ordo[44],
    Ordo[45], Ordo[46], Ordo[42], Ordo[48], Ordo[49], Ordo[39], Ordo[51], Ordo[52], Ordo[36]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function leftDown() {
  tempOrder = [
    Ordo[44], Ordo[1], Ordo[2], Ordo[41], Ordo[4], Ordo[5], Ordo[38], Ordo[7], Ordo[8],
    Ordo[15], Ordo[12], Ordo[9], Ordo[16], Ordo[13], Ordo[10], Ordo[17], Ordo[14], Ordo[11],
    Ordo[0], Ordo[19], Ordo[20], Ordo[3], Ordo[22], Ordo[23], Ordo[6], Ordo[25], Ordo[26],
    Ordo[27], Ordo[28], Ordo[29], Ordo[30], Ordo[31], Ordo[32], Ordo[33], Ordo[34], Ordo[35],
    Ordo[36], Ordo[37], Ordo[51], Ordo[39], Ordo[40], Ordo[48], Ordo[42], Ordo[43], Ordo[45],
    Ordo[18], Ordo[46], Ordo[47], Ordo[21], Ordo[49], Ordo[50], Ordo[24], Ordo[52], Ordo[53]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function rightDown() {
  tempOrder = [
    Ordo[0], Ordo[1], Ordo[42], Ordo[3], Ordo[4], Ordo[39], Ordo[6], Ordo[7], Ordo[36],
    Ordo[9], Ordo[10], Ordo[11], Ordo[12], Ordo[13], Ordo[14], Ordo[15], Ordo[16], Ordo[17],
    Ordo[18], Ordo[19], Ordo[2], Ordo[21], Ordo[22], Ordo[5], Ordo[24], Ordo[25], Ordo[8],
    Ordo[29], Ordo[32], Ordo[35], Ordo[28], Ordo[31], Ordo[34], Ordo[27], Ordo[30], Ordo[33],
    Ordo[53], Ordo[37], Ordo[38], Ordo[50], Ordo[40], Ordo[41], Ordo[47], Ordo[43], Ordo[44],
    Ordo[45], Ordo[46], Ordo[20], Ordo[48], Ordo[49], Ordo[23], Ordo[51], Ordo[52], Ordo[26]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function topLeft() {
  tempOrder = [
    Ordo[6], Ordo[3], Ordo[0], Ordo[7], Ordo[4], Ordo[1], Ordo[8], Ordo[5], Ordo[2],
    Ordo[18], Ordo[19], Ordo[20], Ordo[12], Ordo[13], Ordo[14], Ordo[15], Ordo[16], Ordo[17],
    Ordo[27], Ordo[28], Ordo[29], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26],
    Ordo[36], Ordo[37], Ordo[38], Ordo[30], Ordo[31], Ordo[32], Ordo[33], Ordo[34], Ordo[35],
    Ordo[9], Ordo[10], Ordo[11], Ordo[39], Ordo[40], Ordo[41], Ordo[42], Ordo[43], Ordo[44],
    Ordo[45], Ordo[46], Ordo[47], Ordo[48], Ordo[49], Ordo[50], Ordo[51], Ordo[52], Ordo[53]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function topRight() {
  tempOrder = [
    Ordo[2], Ordo[5], Ordo[8], Ordo[1], Ordo[4], Ordo[7], Ordo[0], Ordo[3], Ordo[6],
    Ordo[36], Ordo[37], Ordo[38], Ordo[12], Ordo[13], Ordo[14], Ordo[15], Ordo[16], Ordo[17],
    Ordo[9], Ordo[10], Ordo[11], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26],
    Ordo[18], Ordo[19], Ordo[20], Ordo[30], Ordo[31], Ordo[32], Ordo[33], Ordo[34], Ordo[35],
    Ordo[27], Ordo[28], Ordo[29], Ordo[39], Ordo[40], Ordo[41], Ordo[42], Ordo[43], Ordo[44],
    Ordo[45], Ordo[46], Ordo[47], Ordo[48], Ordo[49], Ordo[50], Ordo[51], Ordo[52], Ordo[53]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function downLeft() {
  tempOrder = [
    Ordo[0], Ordo[1], Ordo[2], Ordo[3], Ordo[4], Ordo[5], Ordo[6], Ordo[7], Ordo[8],
    Ordo[9], Ordo[10], Ordo[11], Ordo[12], Ordo[13], Ordo[14], Ordo[24], Ordo[25], Ordo[26],
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[33], Ordo[34], Ordo[35],
    Ordo[27], Ordo[28], Ordo[29], Ordo[30], Ordo[31], Ordo[32], Ordo[42], Ordo[43], Ordo[44],
    Ordo[36], Ordo[37], Ordo[38], Ordo[39], Ordo[40], Ordo[41], Ordo[15], Ordo[16], Ordo[17],
    Ordo[47], Ordo[50], Ordo[53], Ordo[46], Ordo[49], Ordo[52], Ordo[45], Ordo[48], Ordo[51]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function downRight() {
  tempOrder = [
    Ordo[0], Ordo[1], Ordo[2], Ordo[3], Ordo[4], Ordo[5], Ordo[6], Ordo[7], Ordo[8],
    Ordo[9], Ordo[10], Ordo[11], Ordo[12], Ordo[13], Ordo[14], Ordo[42], Ordo[43], Ordo[44],
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[15], Ordo[16], Ordo[17],
    Ordo[27], Ordo[28], Ordo[29], Ordo[30], Ordo[31], Ordo[32], Ordo[24], Ordo[25], Ordo[26],
    Ordo[36], Ordo[37], Ordo[38], Ordo[39], Ordo[40], Ordo[41], Ordo[33], Ordo[34], Ordo[35],
    Ordo[51], Ordo[48], Ordo[45], Ordo[52], Ordo[49], Ordo[46], Ordo[53], Ordo[50], Ordo[47]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function frontCounterclockwise() {
  tempOrder = [
    Ordo[0], Ordo[1], Ordo[2], Ordo[3], Ordo[4], Ordo[5], Ordo[27], Ordo[30], Ordo[33],
    Ordo[9], Ordo[10], Ordo[8], Ordo[12], Ordo[13], Ordo[7], Ordo[15], Ordo[16], Ordo[6],
    Ordo[20], Ordo[23], Ordo[26], Ordo[19], Ordo[22], Ordo[25], Ordo[18], Ordo[21], Ordo[24],
    Ordo[47], Ordo[28], Ordo[29], Ordo[46], Ordo[31], Ordo[32], Ordo[45], Ordo[34], Ordo[35],
    Ordo[36], Ordo[37], Ordo[38], Ordo[39], Ordo[40], Ordo[41], Ordo[42], Ordo[43], Ordo[44],
    Ordo[11], Ordo[14], Ordo[17], Ordo[48], Ordo[49], Ordo[50], Ordo[51], Ordo[52], Ordo[53]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function frontClockwise() {
  tempOrder = [
    Ordo[0], Ordo[1], Ordo[2], Ordo[3], Ordo[4], Ordo[5], Ordo[17], Ordo[14], Ordo[11],
    Ordo[9], Ordo[10], Ordo[45], Ordo[12], Ordo[13], Ordo[46], Ordo[15], Ordo[16], Ordo[47],
    Ordo[24], Ordo[21], Ordo[18], Ordo[25], Ordo[22], Ordo[19], Ordo[26], Ordo[23], Ordo[20],
    Ordo[6], Ordo[28], Ordo[29], Ordo[7], Ordo[31], Ordo[32], Ordo[8], Ordo[34], Ordo[35],
    Ordo[36], Ordo[37], Ordo[38], Ordo[39], Ordo[40], Ordo[41], Ordo[42], Ordo[43], Ordo[44],
    Ordo[33], Ordo[30], Ordo[27], Ordo[48], Ordo[49], Ordo[50], Ordo[51], Ordo[52], Ordo[53]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function backCounterclockwise() {
  tempOrder = [
    Ordo[29], Ordo[32], Ordo[35], Ordo[3], Ordo[4], Ordo[5], Ordo[6], Ordo[7], Ordo[8],
    Ordo[2], Ordo[10], Ordo[11], Ordo[1], Ordo[13], Ordo[14], Ordo[0], Ordo[16], Ordo[17],
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26],
    Ordo[27], Ordo[28], Ordo[53], Ordo[30], Ordo[31], Ordo[52], Ordo[33], Ordo[34], Ordo[51],
    Ordo[42], Ordo[39], Ordo[36], Ordo[43], Ordo[40], Ordo[37], Ordo[44], Ordo[41], Ordo[38],
    Ordo[45], Ordo[46], Ordo[47], Ordo[48], Ordo[49], Ordo[50], Ordo[9], Ordo[12], Ordo[15]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function backClockwise() {
  tempOrder = [
    Ordo[15], Ordo[12], Ordo[9], Ordo[3], Ordo[4], Ordo[5], Ordo[6], Ordo[7], Ordo[8],
    Ordo[51], Ordo[10], Ordo[11], Ordo[52], Ordo[13], Ordo[14], Ordo[53], Ordo[16], Ordo[17],
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26],
    Ordo[27], Ordo[28], Ordo[0], Ordo[30], Ordo[31], Ordo[1], Ordo[33], Ordo[34], Ordo[2],
    Ordo[38], Ordo[41], Ordo[44], Ordo[37], Ordo[40], Ordo[43], Ordo[36], Ordo[39], Ordo[42],
    Ordo[45], Ordo[46], Ordo[47], Ordo[48], Ordo[49], Ordo[50], Ordo[35], Ordo[32], Ordo[29]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function globalUp() {
  tempOrder = [
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26],
    Ordo[11], Ordo[14], Ordo[17], Ordo[10], Ordo[13], Ordo[16], Ordo[9], Ordo[12], Ordo[15],
    Ordo[45], Ordo[46], Ordo[47], Ordo[48], Ordo[49], Ordo[50], Ordo[51], Ordo[52], Ordo[53],
    Ordo[33], Ordo[30], Ordo[27], Ordo[34], Ordo[31], Ordo[28], Ordo[35], Ordo[32], Ordo[29],
    Ordo[8], Ordo[7], Ordo[6], Ordo[5], Ordo[4], Ordo[3], Ordo[2], Ordo[1], Ordo[0],
    Ordo[44], Ordo[43], Ordo[42], Ordo[41], Ordo[40], Ordo[39], Ordo[38], Ordo[37], Ordo[36]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function globalDown() {
  tempOrder = [
    Ordo[44], Ordo[43], Ordo[42], Ordo[41], Ordo[40], Ordo[39], Ordo[38], Ordo[37], Ordo[36],
    Ordo[15], Ordo[12], Ordo[9], Ordo[16], Ordo[13], Ordo[10], Ordo[17], Ordo[14], Ordo[11],
    Ordo[0], Ordo[1], Ordo[2], Ordo[3], Ordo[4], Ordo[5], Ordo[6], Ordo[7], Ordo[8],
    Ordo[29], Ordo[32], Ordo[35], Ordo[28], Ordo[31], Ordo[34], Ordo[27], Ordo[30], Ordo[33],
    Ordo[53], Ordo[52], Ordo[51], Ordo[50], Ordo[49], Ordo[48], Ordo[47], Ordo[46], Ordo[45],
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function globalLeft() {
  tempOrder = [
    Ordo[6], Ordo[3], Ordo[0], Ordo[7], Ordo[4], Ordo[1], Ordo[8], Ordo[5], Ordo[2],
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26],
    Ordo[27], Ordo[28], Ordo[29], Ordo[30], Ordo[31], Ordo[32], Ordo[33], Ordo[34], Ordo[27],
    Ordo[36], Ordo[37], Ordo[38], Ordo[39], Ordo[40], Ordo[41], Ordo[42], Ordo[43], Ordo[44],
    Ordo[9], Ordo[10], Ordo[11], Ordo[12], Ordo[13], Ordo[14], Ordo[15], Ordo[16], Ordo[17],
    Ordo[47], Ordo[50], Ordo[53], Ordo[46], Ordo[49], Ordo[52], Ordo[45], Ordo[48], Ordo[51]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function globalRight() {
  tempOrder = [
    Ordo[2], Ordo[5], Ordo[8], Ordo[1], Ordo[4], Ordo[7], Ordo[0], Ordo[3], Ordo[6],
    Ordo[36], Ordo[37], Ordo[38], Ordo[39], Ordo[40], Ordo[41], Ordo[42], Ordo[43], Ordo[44],
    Ordo[9], Ordo[10], Ordo[11], Ordo[12], Ordo[13], Ordo[14], Ordo[15], Ordo[16], Ordo[17],
    Ordo[18], Ordo[19], Ordo[20], Ordo[21], Ordo[22], Ordo[23], Ordo[24], Ordo[25], Ordo[26],
    Ordo[27], Ordo[28], Ordo[29], Ordo[30], Ordo[31], Ordo[32], Ordo[33], Ordo[34], Ordo[27],
    Ordo[51], Ordo[48], Ordo[45], Ordo[52], Ordo[49], Ordo[46], Ordo[53], Ordo[50], Ordo[47]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function globalCounterclockwise() {
  tempOrder = [
    Ordo[29], Ordo[32], Ordo[35], Ordo[28], Ordo[31], Ordo[34], Ordo[27], Ordo[30], Ordo[33],
    Ordo[2], Ordo[5], Ordo[8], Ordo[1], Ordo[4], Ordo[7], Ordo[0], Ordo[3], Ordo[6],
    Ordo[20], Ordo[23], Ordo[26], Ordo[19], Ordo[22], Ordo[25], Ordo[18], Ordo[21], Ordo[24],
    Ordo[47], Ordo[50], Ordo[53], Ordo[46], Ordo[49], Ordo[52], Ordo[45], Ordo[48], Ordo[51],
    Ordo[42], Ordo[39], Ordo[36], Ordo[43], Ordo[40], Ordo[37], Ordo[44], Ordo[41], Ordo[38],
    Ordo[11], Ordo[14], Ordo[17], Ordo[10], Ordo[13], Ordo[16], Ordo[9], Ordo[12], Ordo[15]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function globalClockwise() {
  tempOrder = [
    Ordo[15], Ordo[12], Ordo[9], Ordo[16], Ordo[13], Ordo[10], Ordo[17], Ordo[14], Ordo[11],
    Ordo[51], Ordo[48], Ordo[45], Ordo[52], Ordo[49], Ordo[46], Ordo[53], Ordo[50], Ordo[47],
    Ordo[24], Ordo[21], Ordo[18], Ordo[25], Ordo[22], Ordo[19], Ordo[26], Ordo[23], Ordo[20],
    Ordo[6], Ordo[3], Ordo[0], Ordo[7], Ordo[4], Ordo[1], Ordo[8], Ordo[5], Ordo[2],
    Ordo[38], Ordo[41], Ordo[44], Ordo[37], Ordo[40], Ordo[43], Ordo[36], Ordo[39], Ordo[42],
    Ordo[33], Ordo[30], Ordo[27], Ordo[34], Ordo[31], Ordo[28], Ordo[35], Ordo[32], Ordo[29]
  ];
  Ordo = tempOrder.slice();
  assignColor();
}

function mixPieces() {
	const movements = [
			leftUp, leftDown, rightUp, rightDown, topLeft, topRight, downLeft, downRight, frontCounterclockwise, frontClockwise, backCounterclockwise, backClockwise
		];

	for (let i = 0; i < 50; i++) {
		movements[Math.floor(Math.random() * movements.length)]();
	}
}

function sortPieces() {
  Ordo = originalOrder.slice();
  assignColor();
}


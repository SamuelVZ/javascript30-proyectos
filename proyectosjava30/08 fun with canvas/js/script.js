const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue =0;
let direcction = true;


function draw(e){
	if (!isDrawing) return; // deja de correr la funcion cuando no esta cliqueado
console.log(e);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
//empezar de
ctx.moveTo(lastX, lastY);
//el final
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
[lastX, lastY] =[e.offsetX, e.offsetY];

hue++;
if (hue >= 360) {
	hue =0;
}
if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
	direcction = !direcction;
}
if (direcction) {
ctx.lineWidth++;

} else {
	ctx.lineWidth--;
}

}
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] =[e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

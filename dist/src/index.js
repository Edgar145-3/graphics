import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');

//graphics.lineWidth = 8;
//ssssgraphics.strokeStyle = "#11111";
const miCanvas = new CanvasLocal(graphics, canvas);

miCanvas.paint();
//miCanvas.pixelSize();

let canvas;
let context;
var sales = [
  {
    product: "Basketballs",
    units: 150,
  },
  {
    product: "Baseballs",
    units: 125,
  },
  {
    product: "Footballs",
    units: 300,
  },
];

const canvasWidth = 550;
const canvasHeight = 430;
const lineaHorizontal = 350;
const lineaVertical = 120;

canvas = document.getElementById("basic-shapes-canvas");
context = canvas.getContext("2d");
context.font = "bold 18px sans-serif";
context.textAlign = "center";

context.beginPath();
context.moveTo(lineaVertical, 10);
context.lineTo(lineaVertical-5, 15);
context.moveTo(lineaVertical, 10);
context.lineTo(lineaVertical+5, 15);
context.moveTo(lineaVertical, 10);
context.lineTo(lineaVertical, lineaHorizontal);
context.lineTo(lineaVertical, lineaHorizontal);

context.lineTo(canvasWidth-10, lineaHorizontal);
context.lineTo(canvasWidth-10-5, lineaHorizontal+5);
context.lineTo(canvasWidth-10, lineaHorizontal);
context.lineTo(canvasWidth-10-5, lineaHorizontal-5);

context.stroke();

context.fillText("Units", lineaVertical/2, lineaHorizontal/2); 
context.fillText("Product", (canvasWidth-lineaVertical)/2+lineaVertical, lineaHorizontal+60); 


let gradients = ["#fea910", "#0694c0", "#f17945"];

let distanciaMinima = lineaVertical+30;
for (let i = 0; i < sales.length; i++) {
  let altura = sales[i].units;
  let producto = sales[i].product;

  const grd = context.createLinearGradient(distanciaMinima, 0, (distanciaMinima+100), 0);
  grd.addColorStop(0, gradients[i]);
  grd.addColorStop(1, "lightgrey");

  context.fillStyle = grd;
  context.fillRect(distanciaMinima, lineaHorizontal, 75, -altura);
  context.fillStyle = "black";
  context.fillText(producto, distanciaMinima+35, lineaHorizontal+30); 
  distanciaMinima += 110;
}

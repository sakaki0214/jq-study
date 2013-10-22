// myscript.js

window.onload = function() {
  draw();
}

function draw() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
//  ctx.strokeStyle = "rgb(255,155,100)";
//  ctx.lineWidth=10;
//  ctx.lineJoin = "miter";
//  ctx.fillStyle = "rgb(255,255,0)";
//  ctx.strokeRect(10,10,50,50);
  //var g = ctx.createLinearGradient(0,0,100,100);
//  var g = ctx.createRadialGradient(50,50,20,50,50,60);
//  g.addColorStop(0.0,"red");
//  g.addColorStop(0.5,"yellow");
//  g.addColorStop(1.0,"blue");
//  ctx.fillStyle = g;

//  ctx.shadowColor = "#ccc";
//  ctx.shadowOffsetX = 5;
//  ctx.shadowOffsetY = 5;
//  ctx.shadowBlur = 5;
//  
//  ctx.globalAlpha = 0.5;

//  ctx.scale(0.8,0.8);
//  ctx.rotate(30/180*Math.PI);
//  ctx.translate(100,10);
//  ctx.fillRect(0,0,100,100);

//  ctx.beginPath();
//  ctx.moveTo(20,20);
//  ctx.lineTo(120,20);
//  ctx.lineTo(120,120);
//  ctx.closePath();
//  ctx.fill();
//  ctx.stroke();
  
//  ctx.arc(100,100,50,0/180*Math.PI,270/180*Math.PI);
//  ctx.lineWidth = 15;
//  ctx.lineCap = "butt";
//  ctx.stroke();
  //ctx.fill();
  
  ctx.font = 'bold 20px Verdana';
  ctx.textAlign = 'left'; //right,center,start,end
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'pink';
  
  ctx.fillText('dotinstall',20,20,200);
  ctx.strokeText('dotinstall',20,120,200);
}
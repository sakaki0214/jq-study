// myscript.js

window.onload = function() {
  draw();
}

function draw() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
//  var img = new Image();
//  img.src = 'baby.jpg';
//  img.onload = function() {
//    ctx.drawImage(img,10,10);
//  }
//  img.onload = function() {
//    var pattern = ctx.createPattern(img,'repeat');
//    ctx.fillStyle = pattern;
//    ctx.fillRect(20,20,1000,1000);
//  }
//  ctx.fillStyle = "yellow";
//  ctx.save();
//  
//  ctx.fillRect(0,0,50,50);
//  
//  ctx.fillStyle = "blue";
//  ctx.fillRect(100,0,50,50);
//
//  ctx.restore();
//  ctx.fillRect(200,0,50,50);

//  ctx.globalAlpha = 0.5;
//  
//  for (var i = 0; i < 100; i++) {
//    var x = Math.floor(Math.random() * 400);
//    var y = Math.floor(Math.random() * 200);
//    var r = Math.floor(Math.random() * 200);
//    
//    ctx.fillStyle = "rgb("+rgb()+","+rgb()+","+rgb()+")";
//    ctx.beginPath();
//    ctx.arc(x,y,r,0,2*Math.PI);
//    ctx.fill()
//  }
//  function rgb() {
//    return Math.floor(Math.random() * 255);
//  }
  ctx.fillStyle ="red";
  var y = 0;
  
  (function loop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if ( y > canvas.height) y = -50;
    y++;
    ctx.fillRect(0,y,50,50);
    setTimeout(loop,10);
  })();
}
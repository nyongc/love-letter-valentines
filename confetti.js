// Confetti animation for love letter
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
for(let i=0;i<150;i++){
  hearts.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*10+5,
    speed: Math.random()*2+1,
    angle: Math.random()*2*Math.PI
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach(h=>{
    ctx.beginPath();
    ctx.fillStyle = "pink";
    ctx.moveTo(h.x,h.y);
    ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
    ctx.fill();
    h.y -= h.speed;
    h.x += Math.sin(h.angle)*2;
    h.angle += 0.01;
    if(h.y<0) h.y=canvas.height;
    if(h.x>canvas.width) h.x=0;
  });
  requestAnimationFrame(draw);
}

draw();

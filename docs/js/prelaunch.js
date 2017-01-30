var c=document.getElementById("canvas");
var ctx=c.getContext('2d');
var my_gradient=ctx.createLinearGradient(0,0,0,180);
my_gradient.addColorStop(0,"#800020");
my_gradient.addColorStop(1,"#282B6E");
ctx.fillStyle=my_gradient;
ctx.fillRect(0,0,2560,1200);


var mouseEvent="empty";
var lastpx,lastpy;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="red";
widthline=10;
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
   current_position_of_x=e.clientX-canvas.offsetLeft;
   current_position_of_y=e.clientY-canvas.offsetTop;
   if(mouseEvent=="mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=widthline;
       ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI); 
   ctx.stroke();
    }
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
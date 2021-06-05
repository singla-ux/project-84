camvas=document.getElementById("myCanvas");
ctx=canvas.getCantext("2d");

car1_width=120;
car1_height = 70;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height = 70;
car2_image="car 2.png";
car2_x=10;
car2_y=10;

background_image="racing.jpg";

function add()
{

   bgTag=new Image();
   bgTag.onload=uploadbackground;
   bgTag.src=background_image;

   car1Tag=new Image();
   car1Tag.onload=uploadcar1;
   car1Tag.src=car1_image;

   car2Tag=new Image();
   car2Tag.onload=uploadcar2;
   car2Tag.src=car2_image;
}

function uploadbackground() {
ctx.drawImage(bgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1Tag,car1_x,car1_y,car1_width,car1_height);
    }
    function uploadcar2() {
        ctx.drawImage(car2Tag,car2_x,car2_y,car2_width,car2_height);
        }
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
 keyno=e.keyCode;
console.log(keyno);
if(keyno == '38'){
    up();
    console.log("up");
}
if(keyno == '40'){
    car1_down();
    console.log("down");
}
if(keyno == '37'){
    car1_left();
    console.log("left");
}
if(keyno == '39'){
    car1_right();
    console.log("right");
}

if(keyno == '39'){
    car2_up();
    console.log("w");
}
if(keyno == '83'){
    car2_down();
    console.log("s");
}
if(keyno == '65'){
    car2_left();
    console.log("a");
}
if(keyno == '68'){
    car2_right();
    console.log("d");
}
}

var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var rx=10;
var ry=10;

var rover_width=100;
var rover_height=90;

var bg_img_arry=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_num=Math.floor(Math.random()*4);
bg_img=bg_img_arry[random_num];

var rover_img="rover.png";

function add(){
    bg_imgTag=new Image;
    bg_imgTag.onload=uploadBackround;
    bg_imgTag.src=bg_img;

    rover_imgTag=new Image;
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_img;

}

function uploadBackround(){

    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height)
}

function uploadrover(){

    ctx.drawImage(rover_imgTag,rx,ry,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode
    if(keyPressed=="37"){
        left();
        console.log("left")
    }
    if(keyPressed=="38"){
        up();
        console.log("up")
    }
    if(keyPressed=="39"){
        right();
        console.log("right")
    }
    if(keyPressed=="40"){
        down();
        console.log("down")
    }
}

function up()
{
    if(ry >=0){
        ry=ry-10;
        console.log("position of rover- x= "+rx+"y= "+ry);
        uploadBackround();
        uploadrover()
    }
}

function down(){

    if(ry<=500){
        ry=ry+10;
        console.log("Position of rover- x= "+rx+"y="+ry);
        uploadBackround();
        uploadrover()
    }

}

function right(){
    if(rx<=700){
        rx=rx+10;
        console.log("Position of rover- x= "+rx+"y="+ry);
        uploadBackround();
        uploadrover()
    }
}

function left(){
    if(rx>=0){
        rx=rx-10;
        console.log("Position of rover- x= "+rx+"y="+ry);
        uploadBackround();
        uploadrover()
    }
}
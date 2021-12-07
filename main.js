var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_heigth=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(img){
    player_object= Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    top:player_x
    });
    canvas.add(player_object);
});
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img){
block_image_object=Img;

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_heigth);
block_image_object.set({
top:player_y,
top:player_x
});
canvas.add(block_image_object);
});
}
window.addEventListener("keydown",my_Keydown);

function my_Keydown(e)
{
    keyPresed=e.keyCode;
    console.log(keyPresed);
    if(e.shiftKey == true && keyPresed == '80')
    {
        console.log("shift and p presed together");
        block_image_width = block_image_width+10;
        block_image_heigth = block_image_heigth+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_heigth;    
    }
    if(e.shiftKey == true && keyPresed == '77')
    {
        console.log("shift and m presed together");
        block_image_width = block_image_width-10;
        block_image_heigth = block_image_heigth-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_heigth;    
    }
    if(keyPresed == '38')
    {
        Up();
        console.log("up");
    }
    if(keyPresed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPresed == '37')
    {
        left();
        console.log("uleft");
    }
    if(keyPresed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPresed == '87')
    {
        new_image('wall.png')
        console.log("w");
    }
    if(keyPresed == '71')
    {
        new_image('ground.png')
        console.log("g");
    }
    if(keyPresed == '76')
    {
        new_image('light_green.png')
        console.log("l");
    }
    if(keyPresed == '84')
    {
        new_image('trunk.jpg')
        console.log("t");
    }
    if(keyPresed == '82')
    {
        new_image('roof.jpg')
        console.log("r");
    }
    if(keyPresed == '89')
    {
        new_image('yellow_wall.png')
        console.log("y");
    }
    if(keyPresed == '68')
    {
        new_image('dark_green.png')
        console.log("d");
    }
    if(keyPresed == '67')
    {
        new_image('cloud.jpg')
        console.log("c");
    }
    if(keyPresed == '85')
    {
        new_image('unique.png')
        console.log("u");
    }

}
function Up(){

    if(player_y >=0){
        player_y=player_y-29;
        console.log("block image height =" + block_image_heigth);
        console.log("when up arow key is presed , x=" + player_x + " , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){

    if(player_y <=500){
        player_y=player_y+1;
        console.log("block image height =" + block_image_heigth);
        console.log("when down arow key is presed , x=" + player_x + " , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){

    if(player_x >=0){
        player_y=player_y-29;
        console.log("block image width =" + block_image_width);
        console.log("when left arow key is presed , x=" + player_x + " , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){

    if(player_y <=850){
        player_y=player_y-29;
        console.log("block image height =" + block_image_heigth);
        console.log("when right arow key is presed , x=" + player_x + " , y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
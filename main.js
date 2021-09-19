canvas = document.getElementById('cane');

ctx = canvas.getContext("2d");

rover_width = 50;
rover_height = 50;

rover_x = 10;
rover_y = 10;

hole_width = 65;
hole_height = 50;

hole_x = 800;
hole_y = 300;

background_image = "Grass.jpg";

rover_image = "ball.png";

hole_image = "golf-h.png";

function load_img() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

	hole_imgTag = new Image();
    hole_imgTag.onload = uploadHole;  
    hole_imgTag.src = hole_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadHole()
{
    ctx.drawImage(hole_imgTag, hole_x, hole_y, hole_width, hole_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (rover_x == 800 && rover_y == 300) {
		document.getElementById("hd3").innerHTML="THIS GAME IS EASY PEZY LEMON SQUZZEY"
	}else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
{
 if(rover_y >= 0)
 { 
  rover_y= rover_y-10;
  console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 
 }

}

function left()
{
 if(rover_x >= 0)
 { 
  rover_x= rover_x-10;
  console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);

 }

}

function right()
{
 if(rover_x <= 700)
 { 
  rover_x= rover_x+10;
  console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);

 }

}

function down()
{
 if(rover_y <= 500)
 { 
  rover_y= rover_y+10;
  console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);}
	
}

}
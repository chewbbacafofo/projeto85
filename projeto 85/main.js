//Criar uma referência para tela

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Dê altura e largura específicas para a imagem do carro

greencar_width = 75;
greencar_height = 100;
background_Image = "parkingLot.jpg";
greencar_Image = "car2.png";

//Defina a posição inicial para uma imagem de carro.

greencar_x = 5;
greencar_y = 225;

function add() {
	//carregar carro e imagens de fundo na tela.
	background_ImgTag = new Image();
	background_ImgTag.onload = uploadBackground;
	background_ImgTag.src = background_Image;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadGreenCar;
	greencar_ImgTag.src = greencar_Image;	
}

function uploadBackground() {
	//Defina a função ‘uploadBackground’
	ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	//Defina a função ‘uploadGreenCar’.
	ctx.drawImage(greencar_ImgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	//Definir função para mover o carro para cima
	if(greencar_y >=0){
		greencar_y = greencar_y -10;
		console.log("quando a tecla para cima for pressionada, x= " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	//Definir função para mover o carro para baixo
	if(greencar_y <= 500){
		greencar_y = greencar_y +10;
		console.log("quando a tecla para baixo for pressionada, x= " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
	if(greencar_x > 0){
		greencar_x = greencar_x -10;
		console.log("quando a tecla para esquerda for pressionada, x= " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	//Definir função para mover o lado direito do carro
	if(greencar_x < 900){
		greencar_x = greencar_x +10;
		console.log("quando a tecla para direita for pressionada, x= " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

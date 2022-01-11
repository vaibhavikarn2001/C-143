noseX=0;
noseY=0;
marioX=325;
marioY=325;
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
    mario_gameover=loadSound("gameover.wav");
	mario_killing=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');


	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
    

}
function gotPoses(results){
	if(results.length>0){
        noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log(results);
		
	}
}
function modelLoaded(){
	console.log('Model Loaded');
	
}

function draw() {
	game()
	if(noseX<300){
		marioX=marioX-1;
	}
	if(noseX>300){
		marioX=marioX+1;
	}
	if(noseY<150){
		marioY=marioY-1;
	}
	
}







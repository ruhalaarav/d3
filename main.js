song = ""

scoreRightWrist = ""
song = ""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;

function preload(){
song = loadSound("music.mp3");

}

function setup(){
canvas = createCanvas(600,500);
canvas.center();

video= createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}

function gotPoses(results){

 if (results.length > 0){
    console.log(results)
    scoreleftWrist = results[0].pose.keypoints[9].score;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    leftWristX = results[0].pose.leftWrist.x
    leftWristY = results[0].pose.leftWrist.y
    rightWristX = results[0].pose.rightWrist.x
    rightWristY = results[0].pose.rightWrist.y
 }
}



function modelLoaded(){
    console.log("model has Been loaded")
}

function draw(){
image (video ,0,0, 600,500)
fill("red")

if(scoreRightWrist >0.2){

 circle(rightWristX,rightWristY,20)
 if (rightWristX> 0 && rightWristY<=100) {
    song.rate(0.5)
    document.getElementById("speed").innerHTML = "Speed: 0.5x"
 }


 else if (rightWristX> 0 && rightWristY<=100) {
    song.rate(0.5)
    document.getElementById("speed").innerHTML = "Speed: 1.0x"
 }

 else if (rightWristX> 0 && rightWristY<=100) {
    song.rate(1.0)
    document.getElementById("speed").innerHTML = "Speed: 1.5x"
 }

 else if (rightWristX> 0 && rightWristY<=100) {
    song.rate(1.5)
    document.getElementById("speed").innerHTML = "Speed: 2.0x"
 }

 else if (rightWristX> 0 && rightWristY<=100) {
    song.rate(2.5)
    document.getElementById("speed").innerHTML = "Speed: 2.5x"
 }
}






stroke("red")
if(scoreleftWrist > 0.2){

circle(leftWristX , leftWristY , 20)
InNumberleftWristY = Number(leftWristY);
removedecimal = floor(InNumberleftWristY)
volume =  removedecimal/500;
document.getElementById("volume").innerHTML = "volume = "+volume;
song.setVolume(volume) 
}
}

function playSound(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}



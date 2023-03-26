nx = 0;
ny = 0;
lx = 0;
rx = 0;
difference = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(650,550);
    canvas.position(660,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose", gotposes)

}

function draw(){
    background("rgb(190, 155, 224)");
    fill("purple");
    textSize(difference);
    text("Nour",nx,ny)
}

function modelLoaded() {
    console.log("poseNet is loaded");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nx = results[0].pose.nose.x;
        ny = results[0].pose.nose.y;
        lx = results[0].pose.leftWrist.x;
        rx = results[0].pose.rightWrist.x;
        difference = lx-rx;
    }
}
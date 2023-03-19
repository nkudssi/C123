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
    background("rgb(192, 192, 255)");
    fill("purple");
    textSize(100);
    text("Nour",100,100)
}

function modelLoaded() {
    console.log("poseNet is loaded");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}
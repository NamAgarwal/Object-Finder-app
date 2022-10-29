Status = "";
input = "";

function setup(){
    canvas = createCanvas(490, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 490, 400);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
    input = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model is ready");
    Status = true;
}
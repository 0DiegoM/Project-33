noseX = 0;
noseY = 0;

difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
video.position(40, 260);

    canvas = createCanvas(550, 550);
    canvas.position(780, 260);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = "+ noseX +" NoseY = "+ noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("leftWristX = "+ leftWristX +" rightWristX = "+ rightWristX+ "Difference = "+ difference);
    }
}

function modelLoaded() {
    console.log('PoseNet esta prendido');
}

function draw(){
    background('#a27bcd')
    document.getElementById("square_side").innerHTML = 'El ancho y el alto del texto seran '+ Math.floor(difference)+ "px";
    textSize(difference);
    fill('#FFE787');
    text('Hola', noseX, noseY);
    }
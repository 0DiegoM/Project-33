function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
video.position(40, 260);

    canvas = createCanvas(550, 550);
    canvas.position(780, 260);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}

function modelLoaded() {
    console.log('PoseNet esta prendido');
}

function draw(){
background('#a27bcd')
}
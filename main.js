song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
song6 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet Is Initialized");
}

function draw() {
  image(video, 0, 0, 600, 500);
  fill("red");
  stroke("red");
  if (scorerightWrist >0.2) {
    circle(rightWristX, rightWristY, 20);
    if (rightWristY >0 && rightWristY <=100) {
      document.getElementById("speed").innerHTML = "Speed = 0.5x";
      song1.rate(0.5);
      song2.rate(0.5);
      song3.rate(0.5);
      song4.rate(0.5);
      song5.rate(0.5);
      song6.rate(0.5);
    }
     if (rightWristY > 100 && rightWristY <= 200) {
       document.getElementById("speed").innerHTML = "Speed = 1x";
       song1.rate(1);
       song2.rate(1);
       song3.rate(1);
       song4.rate(1);
       song5.rate(1);
       song6.rate(1);
    }
     if (rightWristY > 200 && rightWristY <= 300) {
       document.getElementById("speed").innerHTML = "Speed = 1.5x";
       song1.rate(1.5);
       song2.rate(1.5);
       song3.rate(1.5);
       song4.rate(1.5);
       song5.rate(1.5);
       song6.rate(1.5);
    }
    if (rightWristY > 300 && rightWristY <= 400) {
      document.getElementById("speed").innerHTML = "Speed = 2x";
      song1.rate(2);
      song2.rate(2);
      song3.rate(2);
      song4.rate(2);
      song5.rate(2);
      song6.rate(2);
    }
    if (rightWristY > 400 && rightWristY <= 500) {
      document.getElementById("speed").innerHTML = "Speed = 2.5x";
      song1.rate(2.5);
      song2.rate(2.5);
      song3.rate(2.5);
      song4.rate(2.5);
      song5.rate(2.5);
      song6.rate(2.5);
    }
  }
  if (scoreleftWrist > 0.2) {
    circle(leftWristX, leftWristY, 20);
    innumberleftWristY = Number(leftWristY);
    remove_decimals = floor(innumberleftWristY);
    volume = remove_decimals / 500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song1.setVolume(volume);
    song2.setVolume(volume);
    song3.setVolume(volume);
    song4.setVolume(volume);
    song5.setVolume(volume);
    song6.setVolume(volume);
  }
}

function preload() {
  song6 = loadSound("dandelions.mp3");
  song1 = loadSound("hypeboy.mp3");
  song2 = loadSound("lifegoeson.mp3");
  song3 = loadSound("lovedive.mp3");
  song4 = loadSound("pinkvenom.mp3");
  song5 = loadSound("Solo.mp3");
}

function play1() {
  song1.play();
  song2.stop();
  song3.stop();
  song4.stop();
  song5.stop();
  song6.stop();
  song1.setVolume(1);
  song1.rate(1);
}

function play2() {
  song2.play();
  song1.stop();
  song3.stop();
  song4.stop();
  song5.stop();
  song6.stop();
  song2.setVolume(1);
  song2.rate(1);
}

function play3() {
  song3.play();
  song2.stop();
  song1.stop();
  song4.stop();
  song5.stop();
  song6.stop();
  song3.setVolume(1);
  song3.rate(1);
}

function play4() {
  song4.play();
  song2.stop();
  song3.stop();
  song1.stop();
  song5.stop();
  song6.stop();
  song4.setVolume(1);
  song4.rate(1);
}

function play5() {
  song5.play();
  song2.stop();
  song3.stop();
  song4.stop();
  song1.stop();
  song6.stop();
  song5.setVolume(1);
  song5.rate(1);
}

function play6() {
  song6.play();
  song2.stop();
  song3.stop();
  song4.stop();
  song5.stop();
  song1.stop();
  song6.setVolume(1);
  song6.rate(1);
}

function stopmusic() {
  song1.stop();
  song2.stop();
  song3.stop();
  song4.stop();
  song5.stop();
  song6.stop();
}

function gotPoses(results) {
  if (results.length > 0) {
  }
  console.log(results);
  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;
  console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

  rightWristX = results[0].pose.rightWrist.x;
  rightWristY = results[0].pose.rightWrist.y;
  console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
  scoreleftWrist = results[0].pose.keypoints[9].score;
  console.log("scoreleftWrist = " + scoreleftWrist);

   scorerightWrist = results[0].pose.keypoints[10].score;
   console.log("scorerightWrist = " + scorerightWrist);
}

lipX = 0;
lipY = 0;

function preload()
{
    lipstick = loadImage('https://i.postimg.cc/RCRMSfwY/lipstick-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipX = results[0].pose.nose.x - 25;
        lipY = results[0].pose.nose.y;
        console.log("nose x = " + lipX);
        console.log("nose y = " + lipY);
    }
}

function draw()
{
    image(video, 0, 0, 400, 300);
    image(lipstick, lipX, lipY, 50, 40);
}

function take_snapshot()
{
    save('myFilterImage.png')
}
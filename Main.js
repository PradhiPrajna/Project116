nosex = 0;
nosey = 0;
function preload()
{
    mostouche_image = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded()
{
    console.log("posNet is initielized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x-10;
        nosey = results[0].pose.nose.y;
        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);
    }
}


function draw()
{
    image(video, 0, 0, 300, 300);
    image(mostouche_image, nosex, nosey, 30, 30);
}

function take_snapshot()
{
    save('moustache.png')
}
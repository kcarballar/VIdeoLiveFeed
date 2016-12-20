var videofeed; //variable that stores what the camera sees
var img; //image

var r; //color variables
var g;
var b;
var a;

function setup() {
  createCanvas (640,480); // the bigger the more memory will requiere
  videofeed = createCapture (VIDEO); // to store the content of the webcam
  videofeed.size (320,240);
  
  img = createImage (640,480);
  img.loadPixels ();
}

function draw() {
  background (255);
  videofeed.loadPixels(); //you have to call the pixels to use them
  
  
  for(var i = 0; i < videofeed.pixels.length; i += 4){ //i += 4 so it goest toyhr begining of the next pixel, meaning 'r'
    
    r = videofeed.pixels [i];
    g = videofeed.pixels [i + 1];
    b = videofeed.pixels [i + 2];
    a = videofeed.pixels [i + 3];
    
    img.pixels [i] = b; //what is red make blue
    img.pixels [i + 1] = g; //green is green
    img.pixels [i + 2] = r; //b is red
    img.pixels [i + 3] = a;
  }
  
  img.updatePixels ();
   image (img, 0, 0);
   
  push(); // to rotate the image and make it look like mirror.
  translate (img.width, 0);
  scale(-1,1);
  image (img, 0, 0);
  pop();
}
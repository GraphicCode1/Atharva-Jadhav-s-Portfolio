function setup() {
  createCanvas(1500, 900);
  background("#76e1ff");
}

function draw() {
  background
  noStroke()
  if(mouseX>700)
    {
      fill("blue")
    }
  else{
    fill("red")
  }
  
  rect(mouseX,mouseY,100,100)
}
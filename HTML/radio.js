
let val = 0
let slPosV, slPosH, sliderR, sliderG, sliderB, sliderSW, sliderSS
function setup() {
  createCanvas(1500, 900);
  
  rdShape = createRadio()
  rdShape.position(1145,220);
    rdShape.option("Rectangle")
    rdShape.option("Rounded Rectangle")
    rdShape.option("Circle")
  rdShape.selected("Circle")
  
  slPosH = createSlider(1, 10, 4);
  slPosH.position(20, 760);
  slPosH.style('width', '300px');
  
  slPosV = createSlider(1, 12, 4);
  slPosV.position(20, 783);
  slPosV.style('width', '300px');
  
  
  
  sliderR = createSlider(0,255,0);
   sliderR.position(450, 770)
   sliderR.style('width', '80px');
  
   sliderG = createSlider(0,255,0);
   sliderG.position(580, 770)
   sliderG.style('width', '80px');
  
   sliderB = createSlider(0,255,0);
   sliderB.position(710, 770)
   sliderB.style('width', '80px');
  
   sliderSS = createSlider(10,300,80);
   sliderSS.position(840, 770)
   sliderSS.style('width', '80px');
  
  sliderSW = createSlider(1,20,2);
   sliderSW.position(970, 770)
   sliderSW.style('width', '80px');
  
   
}




function draw() {
  background("#76C3FF");
  
   fill("#c71dfd")
  strokeWeight(2)
  rect(400,200,700,500)
  
  fill("#000000")
  noStroke
  rect(410,700,690,10)
  
  fill("#000000")
  noStroke
  rect(1102,210,10,500)
  
  
  fill("#000000")
  strokeWeight(2)
  rect(410,750,700,80)
  
  fill("#FF9800")
  strokeWeight(2)
  rect(400,740,700,80)
  
  
  fill("#000000")
  strokeWeight(2)
  rect(1150,210,310,60)
  
  fill("#fa6c6c")
  strokeWeight(2)
  rect(1140,200,310,60)
  
  
  
  
  
  fill("#000000")
  strokeWeight(2)
  rect(20,750,350,80)
  
  fill("#F5C634")
  strokeWeight(2)
  rect(10,740,350,80)
  
   fill("#000000")
  strokeWeight(2)
  rect(20,210,350,500)
  
  
  fill("#a2ff60")
  strokeWeight(2)
  rect(10,200,350,500)
  
  fill("#000000")
  noStroke
  rect(410,700,690,10)
  
  fill("#000000")
  noStroke
  rect(1102,210,10,500)
  
  
  
  
  
  
  

  
   let val1 = sliderR.value(), val2 = sliderG.value(), val3 = sliderB.value(), val4 = sliderSW.value(); val5 = sliderSS.value();
  
  for(j=0; j<slPosV.value();j++)
    if(rdShape.value()=="Rectangle")
    {
      rect(675,350,150,150)
    }
  else if(rdShape.value()=="Rounded Rectangle")
    {
      rect(675,350,150,150,12)
    }
  else
    {
      circle(750,350,150)
    }
    {
      for(i=0; i<slPosH.value(); i++)
        {
          rect((i*50)+10, j*50, val5, val5)
          fill(val1, val2, val3);
          strokeWeight(val4)
        }
    }
}

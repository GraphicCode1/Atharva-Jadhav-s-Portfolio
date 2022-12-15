let btnRock, btnPaper, btnScissor, btnGame, btnGame3, btnGame5
//variable for text 
let txtWelcome, txtInsert, txtResult
txtWelcome="ROCK - PAPER - SCISSORS"
txtInsert="Choose an option"
txtResult=""

let RndNumber;
let notes="welcome to my game, plz choose your option"
let result=""

//button end the game and replay
let btnReplay, btnEndGame

//variable for computer choice 
let compOpt

function setup() {
  createCanvas(1500, 900);
  RndNumber = round (random(0.5,3.5))

  btnGame = createButton('Single Game')
  btnGame.position (600,550)
  btnGame.style('width', '100px')
  btnGame.mousePressed(NewGame)
  
  btnGame3 = createButton('Best of Three')
  btnGame3.position(715,550)
  btnGame3.style('width', '100px')
  btnGame3.mousePressed(showRPS)
  
  btnGame5 = createButton('Best of Five')
  btnGame5.position(830,550)
  btnGame5.style('width', '100px')
  btnGame5.mousePressed(showRPS)
  




  btnRock = createButton('Rock')
  btnRock.position (600,550)
  btnRock.hide()
  btnRock.mousePressed(CompareRock)
  
  btnPaper = createButton('Paper')
  btnPaper.position(715,550)
  btnPaper.hide()
  btnPaper.mousePressed(ComparePaper)
  
  btnScissor = createButton('Scissor')
  btnScissor.position(830,550)
  btnScissor.hide()
  btnScissor.mousePressed(CompareScissor)
  


  //button for replay and end
  btnReplay = createButton('Replay')
  btnReplay.position(600,550)
  btnReplay.hide()
  btnReplay.mousePressed(NewGame)
  
  btnEnd = createButton('End')
  btnEnd.position(850,550)
  btnEnd.hide()
  
  //reset random number compOpt
  
}

function draw() {
  background("#ffd75f");
  
  fill("#c71dfd")
  strokeWeight(2)
  rect(510,100,500,500)
  
  fill("#000000")
  noStroke
  rect(520,600,500,10)
  
  fill("#000000")
  noStroke
  rect(1010,115,10,490)
  
  fill("#000000")
  text(txtWelcome,630,150)
  text(txtInsert, 680,200)
  text(txtResult, 660,400)
  textAlign(200)
  textSize(20)

  
  
  }




 

function showRPS()
{
  txtInsert="Choose amoung rock, paper , scissors"
  txtResult=""
  
  //hide game options
  btnGame.hide()
  btnGame3.hide()
  btnGame5.hide()
  
  //show rock paper scissors button
  btnRock.show()
  btnPaper.show()
  btnScissor.show()

  }
function CompareRock()
{
  if (compOpt == 1)
    {
    txtResult = "IT'S A TIE"
    
    }
  else if (compOpt == 2)
    {
    txtResult = "COMPUTER WON"
    
    }
  else
    {
    txtResult = "YAYY! YOU WON!"
    
    }
  showResult()
}
function ComparePaper()
{
  if (compOpt == 1)
    {
    txtResult = "YAYY! YOU WON!"
    
    }
  else if (compOpt == 2)
    {
    txtResult = "IT'S A TIE"
    
    }
  else
    {
    txtResult = "COMPUTER WON"
    
    }
  showResult()
}
function CompareScissor()
{
  if (compOpt == 1)
    {
    txtResult = "COMPUTER WON"
    
    }
  else if (compOpt == 2)
    {
    txtResult = "YAYY! YOU WON!"
    
    }
  else
    {
    txtResult = "IT'S A TIE"
    
    }
  showResult()
}

function NewGame()
{
  compOpt =round(random(0.5,3.5))
   showRPS();
  btnReplay.hide()
  btnEnd.hide()
  
}
function showResult()
{
  btnRock.hide()
  btnPaper.hide()
  btnScissor.hide()
  
  txtInst =""
  
  btnReplay.show()
  btnEnd.show()
}





var button;
var valuemon;
var valuemon = 25;
var valuetime;
var valuetime= 24;
var valuehap;
var valuehap=180;
var valuehea;
var valuehea=100;
var showText;
var showText = true;
var valueday;
var valueday= 0;
var timesplayed;
var timesplayed=0;
var receivedBonushap = false;
var receivedBonushea = false;
var receivedBonusmon = false;


function setup() {
  createCanvas(1250, 1000);
  background(255);
  textAlign(CENTER);
  fill(2);
  textSize(20);
  text("The Industrialization has just started.\n You lost your job as a carpenter and you are now working in a factory.\n You have no family, and you only have 25 dollars in your savings.\n Your job already pays a lot more than average, but you must work long hours and you are often tired and depressed.\n Each day, you get a little older and get a little weaker.", width/2, height/5);
  buttons();
  hidebuttons();
  // button that is clicked to start game
  game = createButton("start");
  game.position(600,400);
  game.mousePressed(play);
  // button that brings player back to menu
  back = createButton("Menu");
  back.position (1000,100);
  back.mousePressed(menu);
  // button that goes to achievment page
  ac = createButton("Achievements");
  ac.position(100,100);
  ac.mousePressed(Achievements);
  // button that does exact same thing as start button, but is placed at different time of the game
  restart = createButton("Restart");
  restart.mousePressed(play);
  restart.hide();
  contb = createButton("Continue");
  contb.position(700,400);
  contb.mousePressed(cont);
  contb.hide();
  BeerImg = loadImage("images/beer.jpg");
  HealthImg = loadImage("images/health.jpg");
  MoneyImg = loadImage("images/money.jpg");
}


function Achievements(){
  console.log("called negative");
  game.hide();
  background(255);
}

function reset(){
  console.log("called negative");
valuemon = 25;
valuetime= 24;
valuehap=180;
valuehea=100;
}

function menu(){
  console.log("called negative");
  hidebuttons();
  restart.hide();
  background(255);
  textAlign(CENTER);
  fill(2);
  textSize(20);
  text("The Industrialization has just started.\n You lost your job as a carpenter and you are now working in a factory.\n You have no family, and you only have 25 dollars in your savings.\n Your job already pays a lot more than average, but you must work long hours and you are often tired and depressed.\n Each day, you get a little older and get a little weaker.", width/2, height/5);
  game.show();
  ac.show();
  contb.show();
  hidebuttons
}

function cont(){
  console.log("called negative");
  game.hide();
  ac.hide();
  contb.hide();
  restart.position(1000,600);
  restart.show();
  background(255);
  buttons();
  valuestext();
  buttonstext();
}

// function so that all buttons do now show up
function hidebuttons(){
  console.log("called negative");
 buttonwork1.hide();
  buttonwork2.hide();
  buttonpub.hide();
  buttonsleep1.hide();
  buttonsleep2.hide();
  buttoneat.hide();
}


function draw(){

}


function play() {
  console.log("called negative");
 reset();
 game.hide();
 ac.hide();
 contb.hide();
// cont.hide();
 restart.show();
  restart.position(1000,600);
 background(255);
 if(showText){
  valuestext();
  buttonstext();
 }
 buttons();
  background(255);
  valuestext();
   buttonstext();
}


function valuestext(){
 textSize(32);
  text("money", 100, 100);
  text(valuemon, 100, 150);
  text("time", 300, 100);
  text(valuetime, 300, 150);
  text("health", 500, 100);
  text(valuehea, 500, 150);
  text("happiness", 700, 100);
  text(valuehap, 700, 150);
  text("day",900,100);
  text(valueday, 900,150);
}


function buttonstext(){
 textSize(20);
 text("+10 money \n -8 time \n -20 health \n -20 happiness", 250,250);
 text("+20 money \n -15 time \n -30 health \n -25 happiness",650,250);
 text("-5 money \n -1 time \n -1 health \n +5 happiness",1050,250);
 text("-3 money \n -1 time \n +1 health \n +1 happiness",250,450);
 text("-5 money \n -3 time \n +5 health \n +5 happiness",650,450);
 text("-5 money \n -1 time \n +0 health \n +3 happiness",1050,450);
}


// ________________________________________________________________________________________________________________________________


// all buttons for adding or subtracting valuemons
function buttons(){
  console.log("called negative");
 // work #1
 buttonwork1 = createButton('Work #1');
  buttonwork1.position(225, 200);
  // work #2
 buttonwork2 = createButton('Work #2');
  buttonwork2.position(625, 200);
  // pub
 buttonpub = createButton('Pub');
  buttonpub.position(1025, 200);
  // sleep #1
 buttonsleep1 = createButton('Sleep #1');
  buttonsleep1.position(225, 400);
  // sleep #2
 buttonsleep2 = createButton('Sleep #2');
  buttonsleep2.position(625, 400);
  // eat
 buttoneat = createButton('Eat');
  buttoneat.position(1025, 400);
  // what happens when buttons are pushed
  buttonwork1.mousePressed(work1);
  buttonwork2.mousePressed(work2);
  buttonpub.mousePressed(pub);
  buttonsleep1.mousePressed(sleep1);
  buttonsleep2.mousePressed(sleep2);
  buttoneat.mousePressed(eat);
}


// ________________________________________________________________________________________________________________________________


// functions that happen when certain buttons are pushed
function work1(){
 // when work1 pushed, +10 money, -8 time, -20 health, -20 happiness
 if(!negative(-8)){
  valuemon= valuemon+10;
  valuetime= valuetime-8;
  valuehea= valuehea-20;
  valuehap= valuehap-20;
  background(255);
  valuestext();
  buttonstext();
  check();
  check2();
  }
}


function work2(){
 // when work2 pushed, +20 money, -15 time, -30 health, -25 happiness
 if(!negative(-15)){
  valuemon= valuemon+20;
  valuetime= valuetime-15;
  valuehea= valuehea-30;
  valuehap= valuehap-25;
  background(255);
  valuestext();
  buttonstext();
   check();
   check2();
 }
}


function pub(){
 // when pub button pushed, -5 money, -1 time, -1 health, +5 happiness'
 if(!negative(-1)){
   valuemon= valuemon-5;
   valuetime= valuetime-1;
   valuehea= valuehea-1;
   valuehap= valuehap+5;
   background(255);
   valuestext();
   buttonstext();
    check();
    check2();
 }
}


function sleep1(){
 // when sleep1 button pushed, -3 money, -1 time, +1 health, +1 happiness
 if(!negative(-1)){
   valuemon= valuemon-3;
   valuetime= valuetime-1;
   valuehea= valuehea+1;
   valuehap= valuehap+1;
   background(255);
   valuestext();
   buttonstext();
   check();
   check2();
 }
}


function sleep2(){
 // when sleep2 button pushed, -5 money, -3 time, +5 health, +5 happiness
 if(!negative(-3)){
   valuemon= valuemon-5;
   valuetime= valuetime-3;
   valuehea= valuehea+5;
   valuehap= valuehap+5;
   background(255);
   valuestext();
   buttonstext();
   check();
   check2();
 }
}


function eat(){
 // when eat button pushed, -5 money, -1 time, +0 health, +3 happiness
 if(!negative(-1)){
  valuemon= valuemon-5;
  valuetime= valuetime-1;
 valuehea= valuehea+0;
 valuehap= valuehap+3;
 background(255);
 valuestext();
 buttonstext();
  check();
  check2();
 }
}

// ________________________________________________________________________________________________________________________________

// reset the time
function resettime(){
 valuetime= 24;
 background(255);
 valuestext();
 buttonstext();
 buttons();
}

// after gameover, reset everything.
function gameover(){
  console.log("called negative");
 background(255);
 text(50);
 text("GAME OVER", 650,250);
 restart.show();
  restart.position(625,150);
  back.show();
 valuemon = 25;
 valuetime= 24;
 valuehap=100;
 valuehea=100;
 valueday=0;
 timesplayed=timesplayed+1
 firsttime();
}


// once you finish the game for the first time, gives some info about industrialization
function firsttime(){
  console.log("called negative");
  if (timesplayed===1){
  textAlign(CENTER);
  textSize(25);
  text("Because of the creation of machines, many people lost their jobs. \n They used to stay home and hand-wove or handmake products. \n The working class people during the Industrialization had to work long hours \n and they often had many injuries, but they couldn't pay for care or medicine \n because they didn't have enough money.\n The workers only received a break for lunch and a break for dinner. \n Children couldn't get an education and this led to more idle time \n which eventually led to more crimes. \n The factories produced a lot of toxic gasses and people got lung cancer. \n During this time, there wasn't much chance for the working class to become successful.",width/2,height/2-200);
 }
}

// ________________________________________________________________________________________________________________________________

// so that it's not possible for time to go into negative; if negative, nothing happens
function negative(btime){
  console.log("called negative");
   if(valuetime+btime<0){
   return(true);
  }
 return(false);
}

function check(){
  console.log("called negative");
  if(valuehap<=0){
   // if happiness goes to zero
     background(255);
   showText = false;
   restart.hide();
   back.hide();
   hidebuttons();
    textSize(30)
    text("you suffer from extreme depression and can no longer work", 700, 500);
    setTimeout(gameover,2000);
    image(BeerImg, 600, 200);
  }
  else if(valuehea<=0){
    console.log("called negative");
  // if health goes to zero
     background(255);
      showText = false;
      hidebuttons();
      back.hide();
      restart.hide();
    textSize(30)
    text("you suffer from extreme lung cancer and can no longer work", 700, 500);
    setTimeout(gameover,2000);
    image(HealthImg, 600, 300);
  }
  else if(valuemon<=0){
    console.log("called negative");
   // if money go to zero
     background(255);
      showText = false;
      hidebuttons();
      back.hide();
      restart.hide();
    textSize(30)
    text("you lose your job and home and can't pay for food", 700, 500);
    setTimeout(gameover,2000);
    image(MoneyImg, 500,100);
  }
  else if(valuetime<=0){
    console.log("called negative");
   // if time goes to zero
    background(255);
    showText = false;
    hidebuttons();
    restart.hide();
    back.hide();
    textSize(50)
    text("NEXT DAY", 600, 400);
    valueday= valueday+1
    valuehea= valuehea-2
    valuemon= valuemon-2
    valuehap= valuehap-2
    setTimeout(resettime,2000);
  }
}

// ________________________________________________________________________________________________________________________________

function back2(){
  console.log("called negative");
 background(255);
 fill(0);
 valuestext();
 buttonstext();
 buttons();
}

function check2(){
  monac();
  hapac();
  heaac();
}
function monac(){
  if(valuemon >=100 && receivedBonusmon === false){
    fill(0, 102, 153);
    textSize(50);
    text("100+ money", 600, 350);
    setTimeout(back2,500);
    receivedBonusmon = true;
  }
}

function hapac(){
  if(valuehap >=200 && receivedBonushap === false){
    textSize(50);
    fill(0, 102, 153);
    text("200+ happiness", 600, 350);
    setTimeout(back2,500);
    receivedBonushap = true;
  }
}

function heaac(){
  if(valuehea >=200 && receivedBonushea === false){
    fill(0, 102, 153);
    textSize(50);
    text("200+ health", 600, 350);
    setTimeout(back2,500);
    receivedBonushea = true;
  }
}

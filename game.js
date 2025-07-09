var drawBitmojiHerik = function(bitmojix,bitmojiy,bitmojiheight){
    noStroke();   
    fill (207, 161, 112);
    ellipse (bitmojix-41+(100/150)*bitmojiheight,bitmojiy-85+(bitmojiheight/150*100),bitmojiheight/150*83,bitmojiheight/150*100); //head
    fill (255, 255, 255);
    fill(255, 255, 255);
    ellipse (bitmojix-41+(bitmojiheight/150*84),bitmojiy-85+(bitmojiheight/150*94),bitmojiheight/150*22,bitmojiheight/150*16); //left eye
    fill(255, 255, 255);
    ellipse(bitmojix-41+(bitmojiheight/150*114),bitmojiy-85+(bitmojiheight/150*94),bitmojiheight/150*22,bitmojiheight/150*16); //right eye
    fill(0, 0, 0);
    ellipse(bitmojix-41+(bitmojiheight/150*85),bitmojiy-85+(bitmojiheight/150*98), bitmojiheight/150*12,bitmojiheight/150*11); //left pupil
    fill(0, 0, 0);
    ellipse(bitmojix-41+(bitmojiheight/150*114),bitmojiy-85+(bitmojiheight/150*98), bitmojiheight/150*12,bitmojiheight/150*11); //right pupil
    fill(0, 0, 0);
    bezier(bitmojix-41+(bitmojiheight/150*100),bitmojiy-85+(bitmojiheight/150*100), bitmojix-41+(bitmojiheight/150*121),bitmojiy-85+(bitmojiheight/150*122),bitmojix-41+(bitmojiheight/150*92),bitmojiy-85+(bitmojiheight/150*120),bitmojix-41+(bitmojiheight/150*96),bitmojiy-85+(bitmojiheight/150*115)); //nose
    fill(207,161,112);
    ellipse (bitmojix-41+(bitmojiheight/150*98),bitmojiy-85+(bitmojiheight/150*110),bitmojiheight/150*15,bitmojiheight/150*12); //nose fill in
    fill(190, 247, 250);
    ellipse(bitmojix-41+(bitmojiheight/150*59),bitmojiy-85+(bitmojiheight/150*108),bitmojiheight/150*8,bitmojiheight/150*7); //left earring 
    ellipse(bitmojix-41+(bitmojiheight/150*141),bitmojiy-85+(bitmojiheight/150*108),bitmojiheight/150*8,bitmojiheight/150*7); // right earring 
    fill(255, 173, 235);
    stroke(0, 0, 0);
    arc(bitmojix-41+(bitmojiheight/150*100),bitmojiy-85+(bitmojiheight/150*127),bitmojiheight/150*30,bitmojiheight/150*13,1,180); //lips
      
    fill(0, 0, 0);
    rect(bitmojix-41+(bitmojiheight/150*86),bitmojiy-85+(bitmojiheight/150*64),bitmojiheight/150*61,bitmojiheight/150*2); //hairline
    noStroke();
    fill(0, 0, 0);
    arc(bitmojix-41+(bitmojiheight/150*114),bitmojiy-85+(bitmojiheight/150*83),bitmojiheight/150*24,bitmojiheight/150*-10,1,200); //right eyebrow
    arc(bitmojix-41+(bitmojiheight/150*83),bitmojiy-85+(bitmojiheight/150*85),bitmojiheight/150*24,bitmojiheight/150*-10,1,200); // left eyebrow
    ellipse(bitmojix-41+(bitmojiheight/150*60),bitmojiy-85+(bitmojiheight/150*84),bitmojiheight/150*20,bitmojiheight/150*32); // far left hair
    ellipse(bitmojix-41+(bitmojiheight/150*139),bitmojiy-85+(bitmojiheight/150*84),(bitmojiheight/150*20),(bitmojiheight/150*32)); // far right hair
    ellipse(bitmojix-41+(bitmojiheight/150*73),bitmojiy-85+(bitmojiheight/150*66),(bitmojiheight/150*48),(bitmojiheight/150*27)); //left sideways hair 
    ellipse(bitmojix-41+(bitmojiheight/150*127),bitmojiy-85+(bitmojiheight/150*66),(bitmojiheight/150*48),(bitmojiheight/150*27)); //right sideways hair
    ellipse(bitmojix-41+(bitmojiheight/150*79),bitmojiy-85+(bitmojiheight/150*50),(bitmojiheight/150*28),(bitmojiheight/150*28));//topleft curl
    ellipse(bitmojix-41+(bitmojiheight/150*119),bitmojiy-85+(bitmojiheight/150*50),(bitmojiheight/150*28),(bitmojiheight/150*28));//topright curl
    ellipse (bitmojix-41+(bitmojiheight/150*100),bitmojiy-85+(bitmojiheight/150*50),(bitmojiheight/150*33),(bitmojiheight/150*30)); //middle curl
    
    fill(207, 161, 112);
    rect( bitmojix-41+(bitmojiheight/150*85),bitmojiy-85+(bitmojiheight/150*147),(bitmojiheight/150*30),(bitmojiheight/150*10)); //neck 
    fill(0, 0, 0);
    quad(bitmojix-41+(bitmojiheight/150*159),bitmojiy-85+(bitmojiheight/150*190),bitmojix-41+(bitmojiheight/150*41),bitmojiy-85+(bitmojiheight/150*190),bitmojix-41+(bitmojiheight/150*72),bitmojiy-85+(bitmojiheight/150*154),bitmojix-41+(bitmojiheight/150*128),bitmojiy-85+(bitmojiheight/150*155)); //shirt
    fill (207, 161, 112);
    ellipse(bitmojix-41+(bitmojiheight/150*100),bitmojiy-85+(bitmojiheight/150*157),(bitmojiheight/150*30),(bitmojiheight/150*19)); //where neck and shirt meet
    fill (4, 255, 0);
    textSize(bitmojiheight/150*15);
    text("HM",bitmojix-41+(bitmojiheight/150*114),bitmojiy-83+(bitmojiheight/151*170));
};

var drawBitmojiMithilesh = function (x,y,h) {
    //head and hair
    noStroke();
    fill(231, 140, 77);
    ellipse(x+h/60*200,y+h/60*190,h/60*50,h/60*60);//main head
    fill(0, 0, 0);
    arc(x+h/60*200,y+h/60*188,h/60*55,h/60*70,180,360);//main hair
    fill(231, 140, 77);
    ellipse(x+h/60*200,y+h/60*190,h/60*40,h/60*50);//piece of head at right
    fill(0, 0, 0);
    arc(x+h/60*200,y+h/60*172,h/60*40,h/60*20,180,360);//piece of hair at center
    fill(231, 140, 77);
    ellipse(x+h/60*195,y+h/60*185,h/60*30,h/60*30);//piece of head at left
    ellipse(x+h/60*200,y+h/60*184,h/60*30,h/60*30);//piece of head at center
    fill(0, 0, 0);
    arc(x+h/60*219,y+h/60*173,h/60*17,h/60*25,230,423);//piece of hair on right
    fill(120, 97, 74);
    arc(x+h/60*225,y+h/60*185,h/60*10,h/60*10,300,450);//blocking hair on right
    
    //ear
    fill(231, 140, 77);
    ellipse(x+h/60*177,y+h/60*196,h/60*10,h/60*17);//left ear
    ellipse(x+h/60*222,y+h/60*196,h/60*10,h/60*17);//right ear
    
    //glasses
    fill(231, 140, 77);
    stroke(78,53,36);
    rect(x+h/60*201,y+h/60*183,h/60*19,h/60*14,5);//right lense
    rect(x+h/60*179,y+h/60*183,h/60*19,h/60*14,5);//left lense
    strokeWeight(h/60*2);
    line(x+h/60*177,y+h/60*193,x+h/60*180,y+h/60*185);//left line
    line(x+h/60*221,y+h/60*185,x+h/60*224,y+h/60*193);//right line
    line(x+h/60*199,y+h/60*185,x+h/60*201,y+h/60*185);//center line
    
    //eyebrows
    stroke(0, 0, 0);
    arc(x+h/60*210,y+h/60*183,h/60*12,h/60*5,200,340);//right eyebrow
    arc(x+h/60*190,y+h/60*183,h/60*12,h/60*5,200,340);//left eyebrow
    
    //eyes
    noStroke();
    fill(255,255,255);
    ellipse(x+h/60*210,y+h/60*190,h/60*12,h/60*8);//right eye sclera
    fill(0,0,0);
    ellipse(x+h/60*210,y+h/60*190,h/60*7,h/60*7);//right eye pupil
    fill(255,255,255);
    ellipse(x+h/60*190,y+h/60*190,h/60*12,h/60*8);//left eye sclera
    fill(0,0,0);
    ellipse(x+h/60*190,y+h/60*190,h/60*7,h/60*7);//left eye pupil
    
    //mouth
    stroke(0,0,0);
    fill(231, 140, 77);
    arc(x+h/60*200,y+h/60*205,h/60*15,h/60*5,0,180);//mouth

    //shirt
    noStroke();
    fill(0, 255, 255);
    quad(x+h/60*175,y+h/60*233,x+h/60*185,y+h/60*223,x+h/60*215,y+h/60*223,x+h/60*225,y+h/60*233);//collar
    quad(x+h/60*155,y+h/60*240,x+h/60*175,y+h/60*233,x+h/60*225,y+h/60*233,x+h/60*245,y+h/60*240);//top part of shirt
    quad(x+h/60*150,y+h/60*270,x+h/60*155,y+h/60*240,x+h/60*245,y+h/60*240,x+h/60*250,y+h/60*270);//bottom part of shirt
    stroke(0, 0, 0);
    strokeWeight(h/60*1);
    line(x+h/60*170,y+h/60*250,x+h/60*170,y+h/60*268);//left line
    line(x+h/60*230,y+h/60*250,x+h/60*230,y+h/60*268);//right 
    
    //neck
    noStroke();
    fill(231, 140, 77);
    rect(x+h/60*185,y+h/60*213,h/60*30,h/60*20);//main neck
    fill(120, 97, 74);
    arc(x+h/60*215,y+h/60*225,h/60*5,h/60*20,90,270);//blocking neck on right
    arc(x+h/60*185,y+h/60*225,h/60*5,h/60*20,270,450);//blocking neck on left
    fill(231, 140, 77);
    triangle(x+h/60*185,y+h/60*232,x+h/60*215,y+h/60*232,x+h/60*203,y+h/60*245);//bottom part of neck
    
    //text
    fill(0, 0, 0);
    textSize(h/60*15);
    text("MP",x+h/60*191,y+h/60*251);
};

var currentScene = 0;
//0 is splash screen
//1 is instructions page
//2 is level selection page
//3 is easy level page
//4 is medium level page
//5 is hard level page

var Button = function(config) { //button constructor function
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 120;
    this.height = config.height || 45;
    this.label = config.label || "Click";
    this.color = config.color || color(255, 255, 255);
    this.onClick = config.onClick;
};

Button.prototype.draw = function() { //method to draw the button
    //for the rectangle
    fill(this.color);
    stroke(0, 0, 0);
    strokeWeight(2);
    rect(this.x,this.y,this.width,this.height,30);
    //for the text in the rectangle
    fill(0, 0, 0);
    textSize(20);
    textAlign( LEFT, TOP);
    text(this.label, this.x, this.y+this.height/4);
};

Button.prototype.isMouseInside=function(){ //returns if clicked inside the button
    return mouseX > this.x &&
           mouseX < (this.x + this.width) && 
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function () { //what to do when a button is clicked
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var instructionsButton = new Button ({ //button on spalsh screen that takes us to the instructions page when clicked
    x:232,
    y:344,
    label: "  Instructions",
    color: color(255, 209, 209),
    onClick: function(){
      currentScene = 1;  
    }
});

var startButton = new Button ({ //button on splash screen that takes us to the level selection page
    x:33,
    y:344,
    label: "       Start",
    color: color(255, 209, 209),
    onClick: function(){
      currentScene = 2;  
    }
});

var startButton2 = new Button ({ //button on instructions page that takes us to the level selection page
    x:135,
    y:344,
    label: "       Start",
    color: color(255, 209, 209),
    onClick: function(){
      currentScene = 2;  
    }
});

var level1Button = new Button ({ //button on level selection page that takes us to the easy level
    x: 100,
    y: 70,
    width: 200,
    height: 50,
    label: "              Easy",
    color: color(0, 255, 0),
    onClick: function(){
      currentScene = 3;
    }
});

var level2Button = new Button ({ //button on level selection page that takes us to the medium level
    x: 100,
    y: 170,
    width: 200,
    height: 50,
    label: "            Medium",
    color: color(255, 255, 0),
    onClick: function(){
      currentScene = 4;
    }
});

var level3Button = new Button ({ //button on level selection page that takes us to the hard level
    x: 100,
    y: 270,
    width: 200,
    height: 50,
    label: "              Hard",
    color: color(255, 0, 0),
    onClick: function(){
      currentScene = 5;
    }
});

var splash = function () { //this is the page the player will first see and can choose to start playing or to look at the instructions
    background(120, 97, 74);
    
    //title
    fill(255, 255, 255);
    textSize(66);
    text("Piano Tiles",38,2);
    
    //authors
    fill(255, 255, 255);
    textSize(23);
    text("By: Herik Munoz and Mithilesh Pabba",10,72);
    
    //bitmojis
    drawBitmojiHerik( -10,137,216);
    drawBitmojiMithilesh(-82,-170,110);
    
    //rectangle at the bottom
    fill(255, 209, 209);
    rect(0,330,399,69);
    
    //buttons
    instructionsButton.draw();
    startButton.draw();
};

var instructionsPage = function (){ //this page tells the player how to play in case they never played Piano Tiles before
    background(120, 97, 74);
    
    //title
    fill(255, 255, 255);
    textSize(65);
    text("Instructions",24,13);
    
    //text on how to play
    fill(255, 209, 209);
    textSize(23);
    text("In this game, there will be piano tiles falling down from the top of the screen. The objective is to click the tile when it appears on screen as fast as possible. ",41,100,311,340);
    
    //button
    rect(0,330,399,69);
    startButton2.draw();
    
    //bitmojis
    drawBitmojiHerik( 61,363,96);
    drawBitmojiMithilesh(153,182,48);
};

var levelsPage = function(){ //in this page, the player can select the diffculty they want to play
    background(80, 170, 220);
    level1Button.draw();
    level2Button.draw();
    level3Button.draw();
};

var xTile = []; //an array for the x position of the tile, it is either 35, 105, 175, 245, or 315, so that each tile has like their own lane
var yTile = []; //an array for the y position of the tile, each are 120 apart so that they don't come at the same time
var colorTile = []; //an array that has the colors of the tiles
var lose = []; //an array to see if the tile has been clicked or not
var score = 0; //keeps track of the score
var tiles = 1000; //how many tiles are in the game, 1000 to keep the illusion of infinity

for(var i=0; i<tiles; i++){ //makes the y, x, color for each tile
    yTile.push(i*-120);
    var xRandom = round(random(0.5,5.4));
    if (xRandom === 1) {xTile.push(35);}
    if (xRandom === 2) {xTile.push(105);}
    if (xRandom === 3) {xTile.push(175);}
    if (xRandom === 4) {xTile.push(245);}
    if (xRandom === 5) {xTile.push(315);}
    colorTile.push(color(255,255,255));
    lose.push(false); // they all start out false because they haven't been clicked on yet
}

var level1 = function(){ //easy level
    background(0, 255, 255);
    fill(0, 0, 0);
    text("Score: " + score, 10,20); //shows their current score
    
    for(var i=0; i<tiles; i++){ //makes the tiles
        fill(colorTile[i]);
        rect(xTile[i], yTile[i], 50, 100);
        yTile[i] += 2; //makes the tiles go down, easy is 2 speed
        if(yTile[i]>400&&lose[i] === false){ //losing screen if a tile was not clicked and reached the bottom of the screen
            background(255, 0, 0);
            textSize(75);
            text("Game Over",5,100);
            text("Score: " + score,40,200); //shows their final score
            for(var i=0; i<tiles; i++){ //makes all the tiles go offscreen so they can't click on them from the losing screen
                xTile[i] = 500;
            }
        }
    }
};

var level2 = function(){ //medium level
    background(0, 255, 255);
    fill(0, 0, 0);
    text("Score: " + score, 10,20); //shows their current score
    
    for(var i=0; i<tiles; i++){ //makes the tiles
        fill(colorTile[i]);
        rect(xTile[i], yTile[i], 50, 100);
        yTile[i] += 3; //makes the tiles go down, medium is 3 speed
        if(yTile[i]>400&&lose[i] === false){ //losing screen if a tile was not clicked and reached the bottom of the screen
            background(255, 0, 0);
            textSize(75);
            text("Game Over",5,100);
            text("Score: " + score,40,200); //shows their final score
            for(var i=0; i<tiles; i++){ //makes all the tiles go offscreen so they can't click on them from the losing screen
                xTile[i] = 500;
            }
        }
    }
};

var level3 = function(){ //hard level
    background(0, 255, 255);
    fill(0, 0, 0);
    text("Score: " + score, 10,20); //shows their current score
    
    for(var i=0; i<tiles; i++){ //makes the tiles
        fill(colorTile[i]);
        rect(xTile[i], yTile[i], 50, 100);
        yTile[i] += 4; //makes the tiles go down, hard is 4 speed
        if(yTile[i]>400&&lose[i] === false){ //losing screen if a tile was not clicked and reached the bottom of the screen
            background(255, 0, 0);
            textSize(75);
            text("Game Over",5,100);
            text("Score: " + score,40,200); //shows their final score
            for(var i=0; i<tiles; i++){ //makes all the tiles go offscreen so they can't click on them from the losing screen
                xTile[i] = 500;
            }
        }
    }
};

mouseClicked = function(){ //for when the buttons are clicked and for when the tiles are clicked
    if(currentScene === 0){ //splash screen
        startButton.handleMouseClick();
        instructionsButton.handleMouseClick();
    }
    if (currentScene === 1){ //instructions screen
        startButton2.handleMouseClick();
    }
    if (currentScene===2) { //level selection screen
        level1Button.handleMouseClick();
        level2Button.handleMouseClick();
        level3Button.handleMouseClick();
    }
    if(currentScene === 3 || 4 || 5){ //the games screens: easy, medium, and hard
        for(var i=0; i<tiles; i++){
            if(mouseX>xTile[i]&&mouseX<xTile[i]+50&&mouseY>yTile[i]&&mouseY<yTile[i]+100&&lose[i]===false){ //only when they click inside the tile; the lose thing is so that they don't click on it more than once and get extra points
                playSound(getSound("rpg/metal-chime")); //the sound when they click
                colorTile[i] = color(0,0,0); //changes the color to black when clicked
                lose[i] = true; //this helps to know if they clicked on it or not
                score++; //for each tile they click on, they get a point
            }
        }
    }
};

draw = function(){ //makes the screens come when the currentScene number has been changed to theirs
    if (currentScene===0) {splash();}
    if (currentScene===1) {instructionsPage();}
    if (currentScene===2) {levelsPage();}
    if (currentScene===3) {level1();}
    if (currentScene===4) {level2();}
    if (currentScene===5) {level3();}
};

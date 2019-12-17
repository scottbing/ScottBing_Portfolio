var stage = new Konva.Stage({
   container: 'container',
   width: window.innerWidth,
   height: window.innerHeight
});

// add background layer and add it to the stage
var background = new Konva.Layer();
stage.add(background);
background.setZIndex(0); 

// add background image
    var imageObj = new Image();
    imageObj.onload = function() {
        var map = new Konva.Image({
            x: 0,
            y: 0,
            image: imageObj,
            width: window.innerWidth,
            height: window.innerHeight
        });
        
        var text = new Konva.Text({
            x: 10,
            y: 15,
            text: "Dress the Campers",
            fontSize: 45,
            fontFamily: 'Calibri',
            fill: 'green'
        });

        // add image to background
        background.add(map);
        // add text to background
        background.add(text);
        // add layer to stage
        stage.add(background);
    };
imageObj.src = "background.png";

// now add layer for graphics objects
var layer = new Konva.Layer();
stage.add(layer);
layer.setZIndex(1); 

// add the images
addImage('boy.png', 500,350);
addImage('penguin.png',700,375);
addImage('witches_hat.png', 100,775);
addImage('redhead.png', 200,775);
addImage('tweety.png', 100,550);
addImage('brunett.png', 300,775);
addImage('beanie.png', 400,775);
addImage('shirt.png', 500,775);
addImage('shorts.png', 600,775);
addImage('flannel_shirt.png', 700,775);
addImage('ranger_hat.png', 200,675);
addImage('casual_pants.png', 500,675);
addImage('left_shoe.png', 550,875);
addImage('right_shoe.png', 500,875);
addImage('left_sneaker.png', 600,875);
addImage('right_sneaker.png', 650,875);
addImage('pants.png', 800,775);
addImage('casual_shirt.png', 600,675);
addImage('eyesnose01.png', 700,675);
addImage('eyesnose02.png', 750,675);
addImage('face.png', 800,675);


function addImage(src, x, y) {
  
  
  var imageObj = new Image();
  
  imageObj.onload = function() {
    
   /* // now add layer for graphics objects
    var layer = new Konva.Layer();
    stage.add(layer);
    layer.setZIndex(1);     */
    
    var konvaImg = new Konva.Image({
      image: this,
      x:x,
      y:y,
      width: this.naturalWidth /2,
      height: this.naturalHeight /2,
      draggable: true
      
    });
    
    konvaImg.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
    });
                
    konvaImg.on('mouseout', function() {
      document.body.style.cursor = 'pointer';
    });
    
    konvaImg.on('mousedown', function() {
      layer.moveUp();
    });
    
    layer.add(konvaImg);
    
    stage.add(layer);
    
    
  }
    
  imageObj.src = src;
}
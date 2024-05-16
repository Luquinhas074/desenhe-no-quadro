function setup() {
    createCanvas(370, 370);
    background("purple");
  }
  
  function draw() {
    stroke("yellow");
    fill("red");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
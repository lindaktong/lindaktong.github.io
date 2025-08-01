let hearts = [];
let colors = [];

function setup() {
  createCanvas(600, 600);
  colors = ["#ffe0d2", "#ffaea2", "#e7d8e9", "#fceaa4", "#d9f3d0", "#cfd9f3"];
}

function draw() {
  background(0);

  // Display "happy valentine's day julian" in the background
  textSize(32);
  textAlign(CENTER);
  fill(255);
  text("happy valentine's day julian <3", width/2, height/2);

  for (let i=0; i<hearts.length; i++) {
    hearts[i].display();
    hearts[i].fall();
  }

  for (let i=0; i<hearts.length; i++) {
    if (hearts[i].y > height+20) {
      hearts.splice(i, 1);
    }
  }

}

function mouseDragged() {
  hearts.push(new Heart(mouseX, mouseY));
}

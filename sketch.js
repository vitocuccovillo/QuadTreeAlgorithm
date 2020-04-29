// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// QuadTree
// 1: https://www.youtube.com/watch?v=OJxEcs0w_kE
// 2: https://www.youtube.com/watch?v=QQx_NmCIuCY

// For more:
// https://github.com/CodingTrain/QuadTree

let qtree;

function setup() {
  createCanvas(400, 400);
  background(255);
  let boundary = new Rectangle(200, 200, 200, 200);
  qtree = new QuadTree(boundary, 4);
  for (let i = 0; i < 150; i++) {
    let x = randomGaussian(width / 2, width / 8);
    let y = randomGaussian(height / 2, height / 8);
    let p = new Point(x, y);
    qtree.insert(p);
  }

/*  createCanvas(400, 400);
  background(255);
  let boundary = new Rectangle(200, 200, 200, 200);
  qtree = new QuadTree(boundary, 2);
  let pnts = [
            new Point(10, 10),
            new Point(105, 105),
            new Point(117, 117),
            new Point(127, 127),
            new Point(132, 132),
            new Point(138, 138),
            new Point(152, 152),
            new Point(20, 20)
           ];
  for (let p of pnts) {
    qtree.insert(p);
  }*/

}

function draw() {
  background(0);
  qtree.show();

  stroke(0, 255, 0);
  rectMode(CENTER);
  let range = new Rectangle(mouseX, mouseY, 25, 25);

  // This check has been introduced due to a bug discussed in https://github.com/CodingTrain/website/pull/556
  if (mouseX < width && mouseY < height) {
    rect(range.x, range.y, range.w * 2, range.h * 2);
    let points = qtree.query(range);
    for (let p of points) {
      strokeWeight(4);
      point(p.x, p.y);
    }
  }
}
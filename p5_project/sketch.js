// 1. COLOR DEFINITIONS
let skyColors, buildingColors, shadowColor;
let colorStart, colorMid, colorEnd; // Added color definitions here

// 2. SHAPE DEFINITIONS
let shapePointsA, shapePointsB, shapePointsC, shapePointsD, shapePointsE, shapePointsF, shapePointsG, shapePointsH, shapePointsI;
let shapesWithAngles, buildingPoints, building2Points, shadowParts, shadowPoints;
let originalWidth = 2480, originalHeight = 1758;
let noiseOffset = 0; // Initialize noise offset

// 3. SETUP
function setup() {
  createCanvas(windowWidth, windowHeight); // Create a responsive canvas
  initializeData(); // Initialize data for buildings and shadows
  randomSeed(42); // Set a fixed seed for random number generator
  loop(); // Enable continuous drawing
}

// 4. INITIALIZE DATA
function initializeData() {
  // 4A. COLOR DEFINITIONS
  skyColors = [
    color("#b94224"), // red
    color("#dc8400"), // orange
    color("#e8c158"), // yellow
    color("#81b6ac"), // green
    color("#3459a0")  // blue
  ];

  buildingColors = [
    color('#304754'), 
    color('#762E59'), 
    color('#6F3831')
  ];

  shadowColor = color('#7D4A57');

  colorStart = color(48, 71, 84, 63.5); // 25% transparency
  colorMid = color(118, 46, 89, 63.5); // 25% transparency
  colorEnd = color(111, 56, 49, 63.5); // 25% transparency

  // 4B. SHAPE DEFINITIONS
  shapePointsA = [
    {x: 0, y: 0}, {x: 0, y: 1015}, {x: 62, y: 1015}, {x: 196, y: 0}, {x: 0, y: 0}
  ];

  shapePointsB = [
    {x: 196, y: 0}, {x: 62, y: 1015}, {x: 404, y: 1015}, {x: 404, y: 0}, {x: 196, y: 0}
  ];

  shapePointsC = [
    {x: 404, y: 0}, {x: 404, y: 1015}, {x: 798, y: 1015}, {x: 587, y: 0}
  ];

  shapePointsD = [
    {x: 587, y: 0}, {x: 798, y: 1015}, {x: 1155, y: 1015}, {x: 910, y: 0}, {x: 587, y: 0}
  ];

  shapePointsE = [
    {x: 910, y: 0}, {x: 1155, y: 1015}, {x: 1459, y: 1015}, {x: 1221, y: 0}, {x: 910, y: 0}
  ];

  shapePointsF = [
    {x: 1221, y: 0}, {x: 1459, y: 1015}, {x: 1756, y: 1015}, {x: 1540, y: 0}, {x: 1221, y: 0}
  ];

  shapePointsG = [
    {x: 1540, y: 0}, {x: 1756, y: 1015}, {x: 2044, y: 1015}, {x: 1884, y: 0}, {x: 1540, y: 0}
  ];

  shapePointsH = [
    {x: 1884, y: 0}, {x: 2044, y: 1015}, {x: 2316, y: 1015}, {x: 2114, y: 0}, {x: 1884, y: 0}
  ];

  shapePointsI = [
    {x: 2114, y: 0}, {x: 2316, y: 1015}, {x: 2480, y: 1015}, {x: 2480, y: 0}, {x: 2114, y: 0}
  ];

  shapesWithAngles = [
    {points: shapePointsA, angle: PI / -4}, {points: shapePointsB, angle: PI / -6},
    {points: shapePointsC, angle: PI / 9}, {points: shapePointsD, angle: PI / 4},
    {points: shapePointsE, angle: PI / 6}, {points: shapePointsF, angle: PI / 8},
    {points: shapePointsG, angle: PI / 4}, {points: shapePointsH, angle: PI / 3},
    {points: shapePointsI, angle: PI / 6}
  ];

  buildingPoints = [
    {x: 0, y: 1015}, //left bottom point
    {x: 0, y: 897}, //left top point
    {x: 64, y: 897}, {x: 64, y: 812}, {x: 143, y: 738}, {x: 223, y: 762}, {x: 263, y: 655},
    {x: 302, y: 759}, {x: 345, y: 728}, {x: 345, y: 269}, {x: 372, y: 300}, {x: 372, y: 106},
    {x: 401, y: 43}, {x: 467, y: 321}, {x: 467, y: 643}, {x: 535, y: 588}, {x: 535, y: 580},
    {x: 550, y: 515}, {x: 565, y: 540}, {x: 565, y: 588},  {x: 636, y: 648}, {x: 636, y: 725},
    {x: 728, y: 725}, {x: 798, y: 757}, {x: 834, y: 757}, {x: 846, y: 706}, {x: 856, y: 757},
    {x: 938, y: 810}, {x: 938, y: 850}, {x: 1128, y: 879},
    {x: 1240, y: 950}, //right top point
    {x: 1240, y: 1015},//right bottom point
  ];

  building2Points = [
    {x: 1905, y: 950}, {x: 2038, y: 721}, {x: 2131, y: 855}, {x: 2189, y: 735},
    {x: 2205, y: 657}, {x: 2227, y: 707}, {x: 2401, y: 950},
  ];

  shadowParts = [
    [
      { x: 128, y: 1015 }, { x: 372, y: 1096 }, { x: 354, y: 1136 },
      { x: 379, y: 1153 }, { x: 371, y: 1183 }, { x: 389, y: 1203 },
      { x: 373, y: 1243 }, { x: 400, y: 1247 }, { x: 507, y: 1243 },
      { x: 547, y: 1193 }, { x: 505, y: 1176 }, { x: 543, y: 1156 },
      { x: 496, y: 1140 }, { x: 550, y: 1053 }, { x: 547, y: 1050 },
      { x: 948, y: 1046 }, { x: 1228, y: 1012 }, { x: 128, y: 1015 }
    ],
    [
      { x: 428, y: 1258 }, { x: 366, y: 1264 }, { x: 381, y: 1277 },
      { x: 365, y: 1284 }, { x: 383, y: 1300 }, { x: 353, y: 1321 },
      { x: 445, y: 1341 }, { x: 515, y: 1336 }, { x: 508, y: 1303 },
      { x: 524, y: 1283 },       { x: 428, y: 1258 }
    ],
    [
      { x: 398, y: 1348 }, { x: 497, y: 1362 }, { x: 506, y: 1406 },
      { x: 455, y: 1439 }, { x: 377, y: 1430 }, { x: 362, y: 1401 },
      { x: 398, y: 1358 }
    ],
    [
      { x: 412, y: 1469 }, { x: 360, y: 1474 }, { x: 395, y: 1508 },
      { x: 369, y: 1520 }, { x: 369, y: 1551 }, { x: 485, y: 1555 },
      { x: 457, y: 1525 }, { x: 487, y: 1519 }, { x: 488, y: 1516 },
      { x: 494, y: 1502 }, { x: 412, y: 1469 }
    ],
    [
      { x: 454, y: 1586 }, { x: 384, y: 1594 }, { x: 380, y: 1610 },
      { x: 379, y: 1629 }, { x: 420, y: 1654 }, { x: 483, y: 1652 },
      { x: 477, y: 1612 }, { x: 493, y: 1602 }
    ],
    [
      { x: 452, y: 1694 }, { x: 407, y: 1700 }, { x: 394, y: 1734 },
      { x: 400, y: 1751 }, { x: 497, y: 1748 }, { x: 494, y: 1734 },
      { x: 453, y: 1694 }
    ]
  ];
  
  shadowPoints = [
    {x: 0.7618, y: 0.57736}, {x: 0.7845, y: 0.5114}, {x: 0.8218, y: 0.4101},
    {x: 0.8593, y: 0.4863}, {x: 0.8827, y: 0.4181}, {x: 0.8891, y: 0.3737},
    {x: 0.8980, y: 0.4022}, {x: 0.9681, y: 0.57736}
  ];

  // Convert normalized coordinates to canvas coordinates
  for (let point of shadowPoints) {
    point.x *= originalWidth;
    point.y *= originalHeight;
  }
}

// 5. DRAWING AND COLORING SHAPES
function draw() {
  background('#FFFFFF'); // Set a white background

  drawShapes(); // Draw shapes
  drawRiver(); // Draw river
  drawCombinedShadows(); // Draw combined shadow parts
  drawBuilding(); // Draw building
  drawBuilding2(); // Draw building2

  noiseOffset += 0.01; // Increment noise offset for slower movement
}

// 5A. DRAW RIVER
function drawRiver() {
  let riverPoints = scalePoints([
    { x: 0, y: 1015 },
    { x: originalWidth, y: 1015 },
    { x: originalWidth, y: originalHeight },
    { x: 0, y: originalHeight }
  ]);

  fillShapeWithWavyLines(riverPoints, color('#CC5510'), color('#E8BB51'), color('#799DBA'));
}

// 5B. DRAW COMBINED SHADOWS
function drawCombinedShadows() {
  // Combined shadow parts
  for (let shadowPoints of shadowParts) {
    let scaledShadowPoints = scalePoints(shadowPoints);
    fillShapeWithWavyLines(scaledShadowPoints, shadowColor, shadowColor, shadowColor);
  }
}

// 5C. DRAW BUILDING
function drawBuilding() {
  // Fill the shape with lines for the building
  let scaledBuildingPoints = scalePoints(buildingPoints);
  fillShapeWithVerticalWavyLines(scaledBuildingPoints, buildingColors[0], buildingColors[1], buildingColors[2]);
}

// 5D. DRAW BUILDING 2
function drawBuilding2() {
  // Fill the shape with lines for the building2
  let scaledBuildingPoints = scalePoints(building2Points);
  fillShapeWithVerticalWavyLines(scaledBuildingPoints, colorStart, colorMid, colorEnd);
}

// 6. SCALING AND ROTATION
// Function to scale points based on the canvas size
function scalePoints(points) {
  let scaleX = width / originalWidth;
  let scaleY = height / originalHeight;
  return points.map(p => ({ x: p.x * scaleX, y: p.y * scaleY }));
}

// Function to rotate a point by a given angle
function rotatePoint(p, angle) {
  let cosA = cos(angle);
  let sinA = sin(angle);
  return {
    x: p.x * cosA - p.y * sinA,
    y: p.x * sinA + p.y * cosA
  };
}

// 7. FILL SHAPES WITH LINES
// Function to fill shapes with wavy lines, using Perlin noise and random values for variability
function fillShapeWithWavyLines(points, colorStart, colorMid, colorEnd) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (let p of points) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }

  let step = 5; // Step for drawing lines
  let strokeWidth = 2; // Set a consistent stroke weight

  // Draw horizontal lines within the bounding box
  for (let y = minY; y <= maxY; y += step) {
    let intersections = [];
    for (let i = 0; i < points.length; i++) {
      let p1 = points[i];
      let p2 = points[(i + 1) % points.length];
      if ((p1.y < y && p2.y >= y) || (p2.y < y && p1.y >= y)) {
        let t = (y - p1.y) / (p2.y - p1.y);
        let xAtY = p1.x + t * (p2.x - p1.x);
        intersections.push(xAtY);
      }
    }
    intersections.sort((a, b) => a - b);

    for (let i = 0; i < intersections.length; i += 2) {
      if (i + 1 < intersections.length) {
        let inter = map(y, minY, maxY, 0, 1);
        let col;
        if (inter < 0.5) {
          col = lerpColor(colorStart, colorMid, inter * 2);
        } else {
          col = lerpColor(colorMid, colorEnd, (inter - 0.5) * 2);
        }
        stroke(col);
        strokeWeight(strokeWidth);
        beginShape();
        for (let x = intersections[i]; x <= intersections[i + 1]; x += 5) {
          let waveHeight = map(noise(noiseOffset + x * 0.01), 0, 1, -20, 10); // Use Perlin noise for river waves
          waveHeight += random(-2, 2); // Add randomness for additional variability
          vertex(x, y + waveHeight);
        }
        endShape();
      }
    }
  }
}

// Function to fill shapes with vertical wavy lines, using Perlin noise and random values for variability
function fillShapeWithVerticalWavyLines(points, colorStart, colorMid, colorEnd) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

  for (let p of points) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }

  let step = 2; // Step for drawing lines
  let strokeWidth = 1; // Set a consistent stroke weight

  // Draw vertical lines within the bounding box
  for (let x = minX; x <= maxX; x += step) {
    let intersections = [];
    for (let i = 0; i < points.length; i++) {
      let p1 = points[i];
      let p2 = points[(i + 1) % points.length];
      if ((p1.x < x && p2.x >= x) || (p2.x < x && p1.x >= x)) {
        let y = p1.y + (x - p1.x) * (p2.y - p1.y) / (p2.x - p1.x);
        intersections.push(y);
      }
    }
    intersections.sort((a, b) => a - b);

    for (let i = 0; i < intersections.length; i += 2) {
      if (i + 1 < intersections.length) {
        let inter = map(x, minX, maxX, 0, 1);
        let col;
        if (inter < 0.5) {
          col = lerpColor(colorStart, colorMid, inter * 2);
        } else {
          col = lerpColor(colorMid, colorEnd, (inter - 0.5) * 2);
        }
        stroke(col);
        strokeWeight(strokeWidth);
        beginShape();
        for (let y = intersections[i]; y <= intersections[i + 1]; y += 5) {
          let waveWidth = map(noise(noiseOffset + y * 0.01), 0, 1, -5, 5); // Use Perlin noise for building shine
          waveWidth += random(0.5); // Add randomness for additional variability
          vertex(x + waveWidth, y);
        }
        endShape();
      }
    }
  }
}

// Function to fill the shape with diagonal lines at a specified angle
function fillShapeWithDiagonalLines(points, angle, scaleX, scaleY) {
  let rotatedPoints = points.map(p => rotatePoint({ x: p.x * scaleX, y: p.y * scaleY }, angle));

  let minY = Infinity, maxY = -Infinity;

  // Find the minimum and maximum y-coordinates of the rotated shape
  for (let p of rotatedPoints) {
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }

  // Adjust step size according to scale
  let step = 5;

  // Iterate through y-coordinates of the bounding box of the rotated shape
  for (let y = minY; y <= maxY; y += step) {
    let intersections = [];
    for (let i = 0; i < rotatedPoints.length; i++) {
      let p1 = rotatedPoints[i];
      let p2 = rotatedPoints[(i + 1) % rotatedPoints.length];
      if ((p1.y < y && p2.y >= y) || (p2.y < y && p1.y >= y)) {
        let x = p1.x + (y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y);
        intersections.push(x);
      }
    }
    intersections.sort((a, b) => a - b);

    for (let i = 0; i < intersections.length; i += 2) {
      if (i + 1 < intersections.length) {
        let x1 = intersections[i];
        let x2 = intersections[i + 1];
        let pt1 = rotatePoint({ x: x1, y: y }, -angle);
        let pt2 = rotatePoint({ x: x2, y: y }, -angle);

        // Calculate the vertical position relative to the range of shape y-coordinates
        let t = map(y, minY, maxY, 0, 1);

        // Interpolate between colors based on vertical position
        let strokeColor;
        if (t < 0.25) {
          strokeColor = lerpColor(skyColors[4], skyColors[3], t * 4); // Interpolate between blue and green
        } else if (t < 0.5) {
          strokeColor = lerpColor(skyColors[3], skyColors[2], (t - 0.25) * 4); // Interpolate between green and yellow
        } else if (t < 0.75) {
          strokeColor = lerpColor(skyColors[2], skyColors[1], (t - 0.5) * 4); // Interpolate between yellow and orange
        } else {
          strokeColor = lerpColor(skyColors[1], skyColors[0], (t - 0.75) * 4); // Interpolate between orange and red
        }

        // Set stroke color and draw line segments
        stroke(strokeColor);
        strokeWeight(2);
        line(pt1.x, pt1.y, pt2.x, pt2.y);
      }
    }
  }
}

// Draw shapes with their respective angles and fill them with diagonal lines
function drawShapes() {
  let scaleX = width / originalWidth;
  let scaleY = height / originalHeight;

  shapesWithAngles.forEach(shape => {
    noStroke();
    beginShape();
    for (let pt of shape.points) {
      vertex(pt.x * scaleX, pt.y * scaleY);
    }
    endShape(CLOSE);

    fillShapeWithDiagonalLines(shape.points, shape.angle, scaleX, scaleY);
  });
}

// 8. WINDOW RESIZING
// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw(); // Redraw everything on resize
}


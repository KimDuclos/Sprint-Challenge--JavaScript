// 1. Copy and paste your prototype in here and refactor into class syntax.


console.log("/* ===== Prototype Practice ===== */")

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

console.log(" ");
console.log(" == Step 1: Base Constructor ==");
/*  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}

console.log(" ");
console.log(" == Step 2: Volume Method ==")
 /* Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

CuboidMaker.prototype.volume = function() {  // ES6 DOES NOT WORK ON THESE
  return (this.length * this.width * this.height);
};

console.log(" ");
console.log(" == Step 3: Surface Area Method ==");
 /* Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

CuboidMaker.prototype.surfaceArea = function() {
  return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
}

console.log(" ");
console.log(" == Step 4: Create a new object that uses CuboidMaker ==");
 /* Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

let cuboid = new CuboidMaker(4, 5, 5);


console.log(" ");
console.log("Output:");
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130




// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
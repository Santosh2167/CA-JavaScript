
Declare mult() function that will multiply values
of all the properties of the passed object as long as that property
value is a number (explicitly)
hint: typeof
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3,
  a: "test",
  b: true,
  c: 11,
  d: "3"
};

// Write mult() function here
function mult(obj) {
  let answer = obj.x * obj.y * obj.z;
  return answer;
}

console.log(mult(obj));
// 300
/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
let pi: number = 3.14159

 /**
 * 
 * @param radius
 *        the radius of the circle
 * @returns 
 *        Returns the area of a circle
 */
 function getArea(radius){
     return pi * (radius * radius);
 }
​ /**
* 
* @param radius
*        the radius of the circle
* @returns 
*        Returns the diameter of a circle
*/
 function getDiameter(radius) {
     return radius + radius;
 }

​ /**
* 
* @param radius
*        the radius of the circle
* @returns 
*        Returns the circumfrence of a circle
*/
 function getCircumfrence(radius) {
     return pi * getDiameter(radius)
 }

 console.log(getArea(5))
 console.log(getDiameter(5))
 console.log(getCircumfrence(5))
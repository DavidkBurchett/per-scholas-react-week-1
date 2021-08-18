/**
 * Complete the function in the editor. It has two parameters: and

. It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2 * (a + b).
area: This value is equal to a * b.
 */

function Rectangle(a, b): object {
    return {
        length : a,
        width : b,
        perimeter : 2 * (a + b),
        area : a * b
    };
};

console.log(Rectangle(4,5));
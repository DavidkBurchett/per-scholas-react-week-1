/**
 * Complete the function in the editor. It has two parameters: and

. It must return an object modeling a rectangle that has the following properties:

length: This value is equal to a.
width: This value is equal to b.
perimeter: This value is equal to 2 * (a + b).
area: This value is equal to a * b.
 */
/**
 *
 * @param {length} length
 * @param {width} width
 * @returns {{length: number, width: number, perimeter: number, area: number}}
 *      returns a rectangle that has the following properties:
 *      length, Width, Perimeter, Area
 */
function Rectangle(length, width) {
    return {
        length: length,
        width: width,
        perimeter: 2 * (length + width),
        area: length * width
    };
}
;
console.log(Rectangle(4, 5));

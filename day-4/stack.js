var MyStack = /** @class */ (function () {
    function MyStack() {
    }
    MyStack.prototype.push = function (item) {
        this.data.push(item);
    };
    MyStack.prototype.pop = function (item) {
        this.data.pop;
    };
    MyStack.prototype.size = function () {
        return this.data.length;
    };
    return MyStack;
}());
var MyStack = new MyStack();
// interface MyStackInterface {
//     //push puts something onto the stack
//     push: (null)
//     //pop takes something off the stack
//     pop: (null)
// }
// class MyStack {
//     first: null;
//     last: null;
//     size: null;
//     constructor(first, last) {
//         this.first = null;
//         this.last = null;
//         this.size = null;
//         const array = [];
//     }
// }
// console.log("hi")
// const array: Array<string> = ["a", "b", "c", "d"];
// array.forEach((element, index) => {
//     console.log("array index", + index + " has element " + element);
// });

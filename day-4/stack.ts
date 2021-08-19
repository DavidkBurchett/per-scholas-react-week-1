class MyStack {
    data: Array<any>;

    constructor() {

    }

    push(item:any) {
        this.data.push(item);
    }

    pop(item:any) {
        this.data.pop;
    }

    size() {
        return this.data.length
    }
}

const MyStack = new MyStack();

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
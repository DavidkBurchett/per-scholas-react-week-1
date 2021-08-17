const myInfo = {
    "name": "Kyle",
    "birthday": 11242001,
    "citiesLivedIn": ["Charlotte"],
    "isHuman": true,
    "planetsVisited": null,
    "personalInfo": {
        "favoriteFood": "pizza"
    }
};

console.log('My info printed as an object');
console.log(myInfo);

console.log('my info printed as a strinf in the JSON format');
const myInfoAsJSON = JSON.stringify(myInfo);
console.log(myInfoAsJSON);

function sayHi(name, age) {
    return `My name is ${name}, and I am ${age} years old`;
};

console.log(sayHi("Kyle", "19"));
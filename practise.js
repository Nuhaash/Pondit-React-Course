# Pondit-React-Course

// Problem 01 : Create an array that contains full name of each person who are older than 30 //

const users = [
    { firstName: 'John', lastName: 'Doe', age: 26 },
    { firstName: 'Rahim', lastName: 'Iqbal', age: 26 },
    { firstName: 'Shakib', lastName: 'Al Hasan', age: 33 },
    { firstName: 'Lionel', lastName: 'Messi', age: 33 },
    { firstName: 'Christiano', lastName: 'Ronaldo', age: 37 }
];



var arrayFullName = [];

const objectUser = users.filter((user) => user.age > 30);

objectUser.map((user) => {
    arrayFullName.push(user.firstName + " " + user.lastName);
});

console.log(arrayFullName);
console.log(`${arrayFullName}\n age is more than thirty`);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 


// Problem 02 : create an array of object that contains 
// acc = {
//     26: 2,
//     33: 2,
//     37: 1
// }


var ageCounter = {};

users.filter((item) => {
    if (ageCounter.hasOwnProperty(item.age)) {

        ageCounter[item.age]++;
    } else {
        ageCounter[item.age] = 1;
    }

});

console.log(ageCounter);

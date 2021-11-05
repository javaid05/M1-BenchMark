/*JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values*/

// ex 21
// let x = "John";
// let y = "Doe";
// console.log('"' + x + " <> " + y + '"');

// ex22

let user = {
  name: "Muhammd",
  surname: "Javaid",
  email: "javaid@gmail.com",
};
console.log(user);

//ex23
delete user.email;
console.log("User object after deleting email Propert:", user);

// 24

let stringArray = [];
for (let i = 1; i <= 10; i++) {
  stringArray.push("string" + i);
}
console.log(stringArray);

//25 :Print in the console every string from the previous array
for (let everyString of stringArray) {
  console.log(everyString);
}

//26:  26) Create an array with 100 random numbers in it

let randonArray = [];
for (let i = 1; i <= 100; i++) {
  randonArray.push(Math.round(Math.random() * 100));
}
console.log(randonArray);
//2x27Write a function to get the maximum and minimum values from the previously created array

let numberOfArray;
const maxNumberGet = function () {
  numberOfArray = randonArray;
  console.log(Math.max.apply(null, randonArray));
};
maxNumberGet();

// 2x 28: Create an array of arrays, in which every array has 10 random numbers
let outerArray = [];
for (let i = 1; i <= 10; i++) {
  let innerArray = [];
  for (let i = 1; i <= 10; i++) {
    innerArray.push(Math.round(Math.random() * 10));
  }
  outerArray.push(innerArray);
}
console.log(outerArray);

//29) Create a function that gets 2 arrays as parameters and returns the longest one

const longestArray = function (arr1, arr2) {
  if (arr1 > arr2) {
    // console.log("first Array is Bigger", arr1); with this show undefine after printing the array
    return arr1; // working fine
  } else {
    // console.log("Second array is Bigger", arr2);
    return arr2;
  }
};
console.log(longestArray([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]));

//30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values*/

const higherSum = function (array1, array2) {
  let sum = 0;
  for (let number of array1) {
    sum += number;
  }
  let sum1 = 0;
  for (let number of array2) {
    sum1 += number;
  }
  return sum >= sum1 ? sum : sum1;
};
console.log(higherSum([3, 4, 5], [4, 5, 6]));
/*
 DOM EXERCISES

        31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page TODO
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list  */
console.log("-------------Dom Exercise------------ ");

//31) Get the element with an id of "container" from the page
let getID = document.getElementById("orderList");

//32) Get every <td> element from the page

let getTd = document.querySelectorAll("td");
//33) Use a loop for printing the text inside of every <td> element in the page

//34) Write a function to change the heading of the page
const changeHeading = function (heading) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = heading;
};
changeHeading("Heading of Page");

//35) Write a function to add an extra row to the table

//36) Write a function to add a class of "test" to each row in the table

//37) Write a function to add a red background to every link in the page

//38) Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
  console.log("Page Load");
};

//39) Write a function to add new items to a unordered list

//40) Write a function to empty a list  */
const emptyList = function () {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
};
emptyList();

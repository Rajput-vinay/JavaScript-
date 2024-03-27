# JavaScript-


variable declaration in js
— — — — — — — — — — — — — — — — — —

let , var, const where let>>var (better)

The difference between let and var is in the scope of the variables they create:

Variables declared by let are only available inside the

block where they’re defined. Variables declared by var

are available throughout the function in which they’re

declared.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Printing
To print a single value console.log(“Hello World”)

To print many values

const accountId = 144553

let accountEmail = “chandni@google.com”

var accountPassword = “12345”

accountCity = “Jaipur”

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

Data Types in js
number

bigint

string

boolean

null

undefined

symbol

— — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Check data type-> console.log(typeof x)

Convert the datatype-> y=String(x)

concatenation -> str1=’hello’ str2=’world’ str1+str2=’helloworld’

++x -> currently x=x+1 ->preincrement

x++ -> currently x=x and for next use x=x+1 ->postincrement

let x = new Number(5) : constructor is used

let x =5 : doesn’t have any additional properties or methods

associated with it, unlike the object created using the constructor.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Operator
1.Comparision

>,<,>=,<=,==,===

Equality Operator (==):

The == operator is used for loose equality comparison. It compares the values on both sides and tries to perform type coercion if the values are of different data types. Type coercion means that JavaScript will attempt to convert the values to a common type before making the comparison.

Strict Equality Operator (===):

The === operator is used for strict equality comparison. It not only compares the values but also checks if the data types are the same. It does not perform type coercion. This operator is often considered safer and more predictable than == because it avoids unexpected conversions.

2.Arithmatic

+,-,*,/,%

— — — — — — — — — — — — — — — — — — — — — — — — — — — —

String Methods
const name=”Chandni”

const univ=”iiitk”

console.log(`I am ${ name} and I study in${univ}`)

const roll=new String(“cse21030”)

console.log(roll[0])

console.log(roll.__proto__)

console.log(roll.length)

console.log(roll.charAt(2))

console.log(roll.indexOf(‘e’))

const newstr=roll.substring(0,4)

console.log(roll)

console.log(newstr)

PS C:\Users\chand\OneDrive\Desktop\working with API’s> node js-practice.js

I am Chandni and I study iniiitk

c

{}

8

e

2

[String: ‘cse21030’]

const newStringOne = “ chandni “

console.log(newStringOne);

console.log(newStringOne.trim());

const url = “https://chandni.com/chandni%20choudhary"

console.log(url.replace(‘%20’, ‘-’))

console.log(url.includes(‘sundar’))

console.log(url.split(‘/’));

PS C:\Users\chand\OneDrive\Desktop\working with API’s> node js-practice.js

chandni

chandni

https://chandni.com/chandni-choudhary

false

[ ‘https:’, ‘’, ‘chandni.com’, ‘chandni%20choudhary’ ]

— — — — — — — — — — — — — — — — — — — — — — — — — — — -

Maths and numbers
const score = 400

console.log(score);

const balance = new Number(100)

console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

console.log(hundreds.toLocaleString(‘en-IN’));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.6));

console.log(Math.ceil(4.2));

console.log(Math.floor(4.9));

console.log(Math.min(4, 3, 6, 8));

console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10

const max = 20

console.log(Math.floor(Math.random() * (max — min + 1)) + min)

— — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Dates
let myDate = new Date()

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// let myCreatedDate = new Date(“2023–01–14”)

// let myCreatedDate = new Date(“01–14–2023”)

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);

console.log(newDate.getMonth() + 1);

console.log(newDate.getDay());

`${newDate.getDay()} and the time `

newDate.toLocaleString(‘default’, {

weekday: “long”,

})

— — — — — — — — — — — — — — — — — — — — -

Array can have any type of elements
A=[“ram”,1,true,”mango”,5,6]

Addressing -> A[0],A[1]

push(), pop() <- to enter and remove element from last

unshift(), shift()<-to enter and remove from first

Methods

A.slice(0,2)=[“ram”,1] wouldnot affect array A

A.splice(0,2)=[“ram”,1,true] A=[“mango”,5,6]

A=[1,2,3]

B=[4,5]

A.push(B)=[1,2,3,[4,5]]

const C=A.concat(B) C=[1,2,3,4,5]

const C=[…A,…B] C=[1,2,3,4,5] spread operator

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) [1,2,3,4,5,6,7]

console.log(Array.isArray(“chandni”)) false

console.log(Array.from(“chandni”)) [ ‘H’, ‘i’, ‘t’, ‘e’, ‘s’, ‘h’ ]

console.log(Array.from({name: “chandni”})) // interesting it wouldnot work

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1, score2, score3));[ 100, 200, 300 ]

— — — — — — — — — — — — — — — — — — — — — — — — — — — -

Objects
const user={} singeleton object

const user={

name:”a”,

roll:”2",

“surname”:”b”,

}

console.log(user.name)

console.log(user[“surname”])

user.greeting = function(){

console.log(“Hello JS user”);

}

user.greetingTwo = function(){

console.log(`Hello JS user, ${this.name}`);

}

console.log(user.greeting());

console.log(user.greetingTwo());

conser.log(Object.keys(users))

console.log(Object.values(users))

console.log(Object.entries(users))

const obj3 = { obj1, obj2 }

const obj3 = Object.assign({}, obj1, obj2, obj4)

fisrt position is owned by resultat object singeleton is taken so that we can merge as object as possible

const obj3 = {…obj1, …obj2} spread operator

console.log(obj3);

— — — — — — — — — — — — — — — — — — — — — — — — — — -

Functions
function add(…nums) {

let sum = 0;

for (let num of nums) {

sum += num;

}

return sum;

}

const A = [1, 2, 3];

console.log(add(…A)); // Outputs: 6

const chai = function () {

let username = “chandni”

console.log(username);

}

const chai1 = () => {

let username = “chandni”

console.log(username);

}

chai()

chai1()

const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(2,3))

— — — — — — — — — — — — — — — — — — — — — — — — — —

// Immediately Invoked Function Expressions (IIFE)
(function chai(){

// named IIFE

console.log(`DB CONNECTED`);

})();

( (name) => {

console.log(`DB CONNECTED TWO ${name}`);

} )(‘hitesh’)

— — — — — — — — — — — — — — — — — — — — — — — — — — -

scopes
->Global

->Local/ Functional

— — — — — — — — — — — — — — — — — — — — — — — — — — —

Control flow
if else else if, switch

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10

// val1 = null ?? 10 if val1 is null 10 would be assigned to it

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

Ternanry operator

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log(“less than 80”) : console.log(“more than 80”)

— — — — — — — — — — — — — — — — — — — — — — — — — — -

Iterations
while loop

do while loop

for loop

for (let i = 0; i < 5; i++) {

console.log(i);

}

for (;;) {

// Code to be repeated indefinitely

}

const person = { name: ‘Alice’, age: 30, job: ‘Engineer’ };

for (let key in person) {

console.log(key, person[key]);

}

const colors = [‘red’, ‘green’, ‘blue’];

for (let color of colors) {

console.log(color);

}

let count = 0;

while (count < 5) {

console.log(count);

count++;

}

let num = 5;

do {

console.log(“The number is: “ + num);

num — ;

} while (num > 0);

— — — — — — — — — — — — — — — — — — — — — — — — — —

Difference between innertext, innerContent, innerHTML
inner-text: contains only visible test inside selected ele

innerContent: constains both visible and hidden elements inside selected ele

innerHTML: entire HTML With tags and attributes

— — — — — — — — — — — — — — — — — — — — — — — — — -

DOM selecting an element
To get a DOM element using JavaScript, you can use various methods provided by the Document Object Model (DOM) API. Here are some common ways to select and retrieve DOM elements:

getElementById():

This method allows you to select an element by its unique id attribute.

const elementById = document.getElementById(“elementId”);

querySelector():

The querySelector() method lets you select an element using a CSS selector.

const element = document.querySelector(“.className”); // Selects by class

const anotherElement = document.querySelector(“#elementId”); // Selects by id

querySelectorAll():

Use querySelectorAll() to select multiple elements that match a CSS selector.

const elements = document.querySelectorAll(“.className”);

getElementsByClassName():

This method retrieves elements by their class name.

const elementsByClass = document.getElementsByClassName(“className”);

getElementsByTagName():

Use getElementsByTagName() to select elements by their tag name;

const elementsByTag = document.getElementsByTagName(“tagName”);

const secondLang = document.querySelector(“li:nth-child(2)”)

console.log(secondLang);

querySelectorAll() and getElementByClassName() acts like array

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

Events:
click,mousehover, keypress etc

EventPropagation Types:

— — — — — — — — — — — — —

1.Capturing Phase:

In the capturing phase, the event starts from the outermost ancestor element and propagates down the DOM tree to the target element. Event handlers attached during the capturing phase are executed before the event reaches the target element.

To use the capturing phase, you need to set the third parameter of the addEventListener() method to true.

element.addEventListener(‘click’, handler, true);

2.Bubbling Phase:

In the bubbling phase, the event starts from the target element and propagates up the DOM tree to the outermost ancestor element. Event handlers attached during the bubbling phase are executed after the event passes through the target element.

To use the bubbling phase (which is the default behavior), you either omit the third parameter of the addEventListener() method or set it to false.

element.addEventListener(‘click’, handler); // Bubbling phase (default)

// OR

element.addEventListener(‘click’, handler, false); // Bubbling phase

3.Target Phase

The target phase involves the actual target element where the event was triggered. Event handlers attached to the target element are executed.

The target phase is not explicitly used in the addEventListener() method; it’s the central point where the event occurs.

document.getElementById(‘google’).addEventListener(‘click’, function(e){

e.preventDefault();

e.stopPropagation();

// console.log(“google clicked”);

}, false);

The e.preventDefault() method is used to prevent the default behavior of an event. When an event occurs, there is often a default action associated with it. For example, clicking on a link (<a> element) usually navigates the browser to the URL specified in the link’s href attribute. By calling e.preventDefault() within the event handler, you can prevent this default action from taking place.

Calling e.stopPropagation() prevents the event from continuing to propagate to ancestor elements in both the capturing and bubbling phases.

REMOVE

document.querySelector(‘#images’).addEventListener(‘click’, function(e){

console.log(e.target.tagName);

if (e.target.tagName === ‘IMG’) {

console.log(e.target.id);

let removeIt = e.target.parentNode

removeIt.remove()

}

})

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — -

const timeoutId = setTimeout(function() {

// Code to be executed after the delay

}, delayInMilliseconds);

const intervalId = setInterval(function() {

// Code to be executed at each interval

}, intervalInMilliseconds);

// To cancel the scheduled execution

clearTimeout(timeoutId);

clearInterval(intervalId);

Both setTimeout and setInterval are essential tools for managing asynchronous operations in JavaScript, such as animations, periodic updates, and delayed tasks.

The setTimeout function is used to execute a function (or a piece of code) after a specified delay (in milliseconds). It takes two main arguments: a function to be executed and the delay in milliseconds.

The setInterval function is used to repeatedly execute a function at a specific interval (in milliseconds). It takes two main arguments: a function to be executed and the interval in milliseconds.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

API
Old http request method for fetching data from an api
0 UNSENT Client has been created. open() not called yet.

1 OPENED open() has been called.

2 HEADERS_RECEIVED send() has been called, and headers and status are available.

3 LOADING Downloading; responseText holds partial data.

4 DONE The operation is complete.

const requestUrl = ‘https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest();

xhr.open(‘GET’, requestUrl)

xhr.onreadystatechange = function(){

console.log(xhr.readyState);

if (xhr.readyState === 4) {

const data = JSON.parse(this.responseText)

console.log(typeof data);

console.log(data.followers);

}

}

xhr.send();

New Method
define url

let getJoke = () => {

fetch(url)

.then(data => data.json())

.then(item => {

jokeContainers.forEach(container => {

container.textContent = item.joke;

});

});

}

btns.forEach(btn => {

btn.addEventListener(“click”, getJoke);

});

*/
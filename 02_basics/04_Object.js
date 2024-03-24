// const tinderUser = new Object()

const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email:"some@gmail.com",
    fullname :{
        userfullname : {
              firstName :"vinay",
              lastName:"Rajpur"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName)


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {... obj1,...obj2}  // we used mostly spread operator in both the case means array and object

//  the difference between the array spread operator and object spread operatort only bracket . in array we used a square bracket [], in object we used a curl bracket {}
// console.log(obj3)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))

// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // give the output in the form of array inside the array


// console.log(tinderUser.hasOwnProperty('isLogged'))  // hasOwn property are used to check weather object contain specific value or not]


const course = {
    courseName: "Js in Hindi",
    price:"999",
    courseInstructor :"hitesh"
}

// course.courseInstructor  // access way from object 

const {courseInstructor} = course  // destructuring
const {courseInstructor : instructor} = course
// console.log(courseInstructor)
console.log(instructor)


// json formate
// {
//     "name":"hitesh",
//     "courseName":"Js in hindi"
//     "price":"free"
// }








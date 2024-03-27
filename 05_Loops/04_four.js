const myObject = {
    js :'JavaScript',
    cpp:'C++',
    rb:'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
//  console.log(`${key} shortcut is for ${myObject[key]}`)   
}


const myArray = [1,2,3,4,5]

for (const i in myArray) {
    // console.log(myArray[i])
}


const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for (const key in map) {
   console.log(key)
} // map are not iterated so we not iterate map through a for In loop
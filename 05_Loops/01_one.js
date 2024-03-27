// For

for(let i = 0; i<=10; i++){
    // console.log("count", i)
}

for(let i = 0; i<10; i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j = 0 ; j< 10 ; j++){
        // console.log(`Inner loop ${j} and inner loop ${i}`)

        // console.log(i + '*' + j + ' = ' + i*j)
    }
}

let myArray = ["flash", "batman", "superman"]
for(let i = 0 ; i<myArray.length ; i++){
    const element = myArray[i];
    // console.log(element)
}


// break and continue

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        break;
    }
   console.log(`value is ${index}`)
    

}


for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
   console.log(`value is ${index}`)
    
}


console.log("In This Programme I Am Going To Demonstrate For Loop With Arrays And For That I Am Going To Declare An Array.")
let Array = ["Harry Bhai Is The Best", 54, true, false, 54.88]
console.log("Firstly I Am Going To Use Normal For Loop & Array Indexing To Demonstrate Array With For Loop")
for (let index = 0; index < Array.length; index++) {
    console.log("So Now I Am Under The For Loop And I Am Printing The Values Of An Array One By One " + Array[index])
}
console.log("So That's How I Can Access Every Element Of An Array Using Normal For Loop.")
console.log("Now We Are Going To Use For In Loop With Arrays.")
for (const key in Array) {
    console.log("So Now I Am Under The For In Loop And I Am Printing The Values Of An Array One By One " + Array[key])
}
console.log("Now We Are Going To Use For Of Loop With Arrays.")
for (const Value of Array) {
    console.log("So Now I Am Under The For Of Loop And I Am Printing The Values Of An Array One By One " + Value)
}
console.log("Now We Are Going To Use For Each Loop With Arrays.")
Array.forEach(element => {
    console.log("So Now I Am Under The For Each Loop And I Am Printing The Values Of An Array One By One " + element)
})
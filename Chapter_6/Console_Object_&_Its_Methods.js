console.log("In This Programme I Am Going To Demonstrate Some More Methods On Console And This Log Method Is Used To Log Things Written Under This Method.")
console.error("This Console Method Will Raise An Error In Console With A Red Color.")
console.warn("This Console Method Will Raise An Warning In Console With A Yellow Color & An Warning Icon.")
console.info("This Console Method Will Considered As An Information In Console & It Looks Like Normal Console Log.")
console.log("Below Method Of Console Will Clear Everything Written Till Now,That's Why I Am Commenting It Out.")
// console.clear()
console.log("Now I Am Going To Demonstrate A Method Which Returns True If A Condition Satisfies & Returns False If A Condition Is Failed To Satisfy,And It Not Only Return False But Also Raise An Error.")
console.assert(5 < 4)
console.log("So As You Can See That Above Condition Is Returning False That's Why It Is Raising An Error.")
console.assert(5 > 4)
console.log("Now As You Can See That Above Condition Is Returning True That's Why It Is Not Raising An Error.")
console.log("Now I Am Going To Demonstrate A Method Which Shows Data(Like An Object) In A Table Format & In Order To Demonstrate It I Am Going To Declare An Object Varriable.")
let obj = {
    "Key_1": "Pritam Saha",
    "Key_2": "Aditya Acharjee",
    "Key_3": "Srayani Parui",
}
console.table(obj)
console.log("So As You Can Now See That I Have Created An Object And Showed It In A Table Format.")
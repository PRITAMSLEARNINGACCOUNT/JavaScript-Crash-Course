console.log("In This Programme I Am Going To Demonstrate Some Important Methods Of Strings")
console.log("Let's Start With A Method Which Returns The Length Of A String,In Order To Demonstrate This Method I Will Declare A String Varriable")
let str = "Pritam"
console.log("So The Length Of The String Declared Under The String Varriable Is ", str.length)
console.log("Let's Make The String UpperCase")
console.log("The UpperCase String Is " + str.toUpperCase())
console.log("Let's Make The String LowerCase")
console.log("The LowerCase String Is " + str.toLowerCase())
console.log("Let's Slice The String We Declared Using Index")
console.log("The Sliced String From Index 2 to The End Of The String", str.slice(2))
console.log("We Are Going To Slice The String Again With An Ending Index")
console.log("The Sliced String From Index 2 to Index 4", str.slice(2, 4))
console.log("Now I Am Going To Replace A Part Of The String With Some Other Charecters")
console.log("So The Replaced String Is " + str.replace("am", "i"))
console.log("Now I Am Going To Demonstrate A String Method Which Trims Down The WhiteSpace From A String")
let White_Space_String = "   Hello World   "
console.log("So The String After Removing White Spaces Is " + White_Space_String.trim())
console.log("Lastly I Want To Demonstrate Concatination Of String Using A Method Instead Of Addition Operator And For This I Am Going To Create Two More String Varriables")
let str_1 = "Before Concatination"
let str_2 = " After Concatination"
console.log(str_1.concat(str_2))
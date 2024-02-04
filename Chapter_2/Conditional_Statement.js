console.log("Now We Are Going To Demonstrate Conditional Statements Which Are If-Else Statement,If-ElseIf-Else Statement And Ternary Operation")
console.log("Firstly We Are Going To Demonstrate If-Else Statement")
let age = 9
if (age > 20) {
    console.log("Your Age Is - ", age, " So You Can Marry Now")
}
else {
    console.log("Your Age Is - ", age, " So You Can't Marry Now")
}
console.log("Now We Are Going To Demonstrate If-ElseIf-Else Statement")
if (age > 20 && age <= 50) {
    console.log("Your Age Is - ", age, " So You Can Marry Now")
}
else if (age < 20) {
    console.log("Your Age Is - ", age, " So You Should Focus On Your Studies For Now")

}
else {
    console.log("Your Age Is - ", age, " So You Should Die Now")
}
console.log("Now We Are Going To Demonstrate Ternary Operator Which Will Be Same As The If-Else Statement Demonstrated A First")
console.log("Your Age Is - ", age, (age > 20) ? " So You Can Marry Now" : " So You Can't Marry Now")



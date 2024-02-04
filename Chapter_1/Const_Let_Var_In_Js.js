console.log("Let Is Used To Create A Varriable Within A Block Of Code")
console.log("Var Is Used To Create A Varriable Within Global Scope")
console.log("Const Is Used To Create A Varriable Which Can Not Be Changed Once Created")
let Varriable = 58
var Varriable_2 = 55.66
const Varriable_3 = false
{
    let Varriable = 33
    console.log("We Are Under A Block Of Code And We Also Have Changed The Value Of The Varriable We Declared With Let Previously")
    console.log("So Now Under This Block Of Code The Value Of The Varriable Is ", Varriable)
}
console.log("We Are Now Outside Of The Block Of Code")
console.log("So Now The Value Of The Varriable Declared With Let Is ", Varriable)
{
    var Varriable_2 = 33
    console.log("We Are Under A Block Of Code And We Also Have Changed The Value Of The Varriable We Declared With Var Previously")
    console.log("So Now Under This Block Of Code The Value Of The Varriable Is ", Varriable_2)
}

console.log("We Are Now Outside Of The Block Of Code")
console.log("So Now The Value Of The Varriable Declared With Let Is ", Varriable_2)
console.log("Now Finally The Value Of The Constant Varriable Is ", Varriable_3)
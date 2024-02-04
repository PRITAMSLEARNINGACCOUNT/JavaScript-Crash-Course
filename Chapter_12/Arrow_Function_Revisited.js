console.log("So I Am Revisiting On Arrow Function In This Program With Some Twist In This Concept.")
const Arrow_Function = Argument => console.log(`This Is An One Liner Arrow Function With An Argument ${Argument}`);
Arrow_Function("Hello Harry Bhai");
const Arrow_Function_2 = (Greeting, Name) => console.log(`This Is An One Liner Arrow Function With Two Argument Which Are - ${Greeting} ${Name}`);
Arrow_Function_2("Hello", " Harry Bhai");
console.log("So These Are Some Variations Of Arrow Function With Whom I Can Work.");
console.log("Now I Am Going To Demonstrate Arrow Function With An Object.");
let Key_1 = () => {
    console.log("So This Is An Arrow Function");
}
let Key_2 = "This Is A Normal Varriable";
let object = { Key_1, Key_2 };
console.log(object.Key_2);
object.Key_1();
console.log("Now I Am Going To Work With 'this' Operator On An Arrow Function Using An Object.");
let obj = {
    "key_1": "This Is A Primary Value",
    "Function": function Func() {
        return Arrow_Function = () => {
            console.log("This Is An Arrow Function(Inner Function - Returning Function) Where I Am Using 'this' Keyword To Access Property Of This Object Directly And The Value Of That Property Is - " + this.key_1);
        }

    },
    "Function_2": function Func() {
        let temporary = this.key_1
        return function timeout() {
            console.log("This Is A Traditional Function (Inner Function - Returning Function) Where I Can't Be Able To Access 'this' To Access The Property Of An Object.So I Am Using A Temporary Varriable To Store The Value Of The Property In Outer Function Using 'this' Keyword And Now I Am Printing The Value Of The Temporary Varriable Where The Value Of The Property Is Stored - " + temporary)
        }
    },

}
const Func = obj.Function_2();
Func();
const Func_3 = obj.Function();
Func_3();
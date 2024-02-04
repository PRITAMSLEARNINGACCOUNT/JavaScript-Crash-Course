console.log("In This Programme I Am Going To Demonstrate Some Browser Events.And In Order To Demonstrate Them I Am Going To Use An Arrow Function")

const func = (Event) => {
    console.log("This Is Under The Function And Now I Am Going To Demonstrate The Event Argument & Some Of It's Method.")
    console.log("Firsly The Target Of The Event Which Is " + Event.type)
    console.log("Now The HTML Element Of The Event Which Is Handled By This Event " + Event.currentTarget)
    console.log("Lastly The Coordinates Of The Cursor When The Event Happened By Clicking The Mouse Pointer " + Event.clientX, Event.clientY)
    alert("Successfully You Have Clicked On That Button")
}
console.log("So Firstly I Am Going To Demonstrate A Method For Which The Function I Created Can Run When Clicked In The Button.")
console.log("If This Method Is Runned Using A Function Then Automatically An Event Argument Will Be Passed To That Function,On Which I Can See Some Different Properties.")
document.getElementsByTagName("button")[0].onclick = func
console.log("Now I Am Going To Demonstrate A Different Method Which Has The Ability To Do The Same Thing When Clicked On It & I Am Going To Create An Additional Function In Order To Demonstrate It.")
const func_2 = (event) => {
    alert("Function 2 Is Running Now.")
    console.log("This Is Function 2 Where Event Object Is Also Passed And I Can Also Use Same Method Just Like I Used Them In The First Function.")
}
document.getElementsByClassName("box")[2].addEventListener("click", func_2)
console.log("We Can Also Remove This Second Demonstration Method As I Have Created An Another Function Object In Second Case.")
document.getElementsByClassName("box")[2].removeEventListener("click", func_2)
console.log("So Finally The Second Demonstration Is Removed.")

console.log("'Includes' Method Return A Boolean Value Based On The String You Want To Find From The String Given")
let str = "No One Can Compete With Harry Bhai"
let find = "Harry"
if (str.includes(find)) {
    console.log("Yess,The Programme Has Successfully Founded The String You Are Looking For")

}
console.log("Now I Am Going To Demonstrate The Work Of The Method 'startswith' & And The Work Of The Method 'endswith'")
console.log("So This Is The Result Of The First Method Is " + str.startsWith("No"))
console.log("So This Is The Result Of The Second Method Is " + str.endsWith("Bhai"))

let age
let boolean
do {
    age = prompt("Enter Your Age??")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("You Have Entered An Invalid Age")
    }
    else if (age >= 18) {
        alert("You Can Drive")

    }
    else {
        alert("You Can Not Drive")
    }
    boolean = confirm("Do You Want To Prompt Again??")
} while (boolean)
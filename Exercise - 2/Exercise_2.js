let obj = {
    "Computer_Selection": undefined,
    "User_Selection": undefined,
    "Computer_Count": 0,
    "User_Count": 0
}
function Computer_Generation() {
    if ((Number.parseInt(Math.random() * 3)) == 0) {
        obj["Computer_Selection"] = "S"
    }
    else if ((Number.parseInt(Math.random() * 3)) == 1) {
        obj["Computer_Selection"] = "G"

    }
    else {
        obj["Computer_Selection"] = "W"

    }
}
for (let index = 0; index < 10; index++) {
    Computer_Generation()
    console.log(obj["Computer_Selection"])
    obj["User_Selection"] = prompt("Enter 'S' For Snake,'W' For Water And 'G' For Gun.And If You Do Not Want To Play This Game Please Type 'exit'.")
    if (obj["User_Selection"] == "exit") {
        break
    }
    if (obj["User_Selection"] == "S" && obj["Computer_Selection"] == "W") {
        alert("You Win This Time.")
        obj["User_Count"]++

    }
    else if (obj["User_Selection"] == "S" && obj["Computer_Selection"] == "G") {

        alert("You Lose This Time.")
        obj["Computer_Count"]++
    }
    else if (obj["User_Selection"] == "W" && obj["Computer_Selection"] == "S") {

        alert("You Lose This Time.")
        obj["Computer_Count"]++
    }
    else if (obj["User_Selection"] == "W" && obj["Computer_Selection"] == "G") {

        alert("You Win This Time.")
        obj["User_Count"]++
    }
    else if (obj["User_Selection"] == "G" && obj["Computer_Selection"] == "W") {

        alert("You Lose This Time.")
        obj["Computer_Count"]++
    }
    else {

        alert("You Win This Time.")
        obj["User_Count"]++
    }
}
if (obj["User_Count"] > obj["Computer_Count"]) {
    alert("You Successfully Won The Whole Game")
}
else if (obj["User_Count"] < obj["Computer_Count"]) {
    alert("Computer Successfully Won The Whole Game")
}
else {
    alert("You Haven't Played The Game Properly")

}
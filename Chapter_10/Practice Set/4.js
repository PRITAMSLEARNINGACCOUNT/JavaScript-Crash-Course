
let No = 1
while (localStorage.getItem(`Note ${No}`) != null) {

    localStorage.removeItem(`Note ${No}`)
    No++
}
alert("All Notes Are Deleted Successfully Now.")
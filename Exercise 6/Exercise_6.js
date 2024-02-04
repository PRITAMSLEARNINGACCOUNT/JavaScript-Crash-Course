let Note_No = 1
async function Adding_Note() {
    document.querySelector("#Add_Note").addEventListener("click", async () => {
        let note = prompt("Enter Your Note??")
        localStorage.setItem(`Note No${Note_No}`, note)
        Showing_Notes()
        Note_No++
    })
}
function Showing_Notes() {
    if (Note_No == 1) {
        document.querySelector(".Container").innerHTML = ""
        let table = document.createElement("table")
        document.querySelector(".Container").append(table)
        document.querySelector("table").innerHTML = `<tr>
        <td>Serial No</td>
        <td>Note</td>
        </tr>`
    }
    document.querySelector("table").insertAdjacentHTML("beforeend", `<tr>
    <td>${Note_No}</td>
    <td>${localStorage.getItem(`Note No${Note_No}`)}</td>
    </tr>`)
}
async function RemoveAll() {
    document.querySelector("#Remove_Note").addEventListener("click", (() => {
        Note_No = 1
        document.querySelector(".Container").innerHTML = "Your Notes Are Empty"
        localStorage.clear()
    }))
}
const Main_Function = async () => {
    await Adding_Note()
}
RemoveAll()
Main_Function()
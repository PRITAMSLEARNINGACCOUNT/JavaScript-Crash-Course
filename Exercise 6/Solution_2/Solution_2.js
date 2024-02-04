let Note_No = 0
let array = []
let My_Notes
function Add_Note() {
    My_Notes = JSON.parse(localStorage.getItem("Todos"))
    if (My_Notes == null || My_Notes.length == 0) {
        notes = []
        Show_Notes()
    } else {
        notes = JSON.parse(localStorage.getItem("Todos"))
        Show_Notes()
    }
    document.querySelector("#Add_Note").addEventListener("click", (() => {
        let note = prompt("Enter A Note??")
        notes.push(note)
        localStorage.setItem("Todos", JSON.stringify(notes))
        Show_Notes()
    }))

}
function Show_Notes() {
    My_Notes = JSON.parse(localStorage.getItem("Todos"))
    // console.log(My_Notes)
    if (My_Notes == null || My_Notes.length == 0) {
        document.querySelector(".Container table").innerHTML = "Todo Is Empty"
    }
    else {
        let HTML_2 = document.getElementById("Table")
        // console.log(HTML_2)
        HTML_2.innerHTML = `<tr>
        <td>Serial No</td>
        <td>Notes</td>
        </tr>`
        notes.forEach((element, index) => {
            document.querySelector("table").insertAdjacentHTML("beforeend", `<tr id="${index}" onclick="Select(this.id)">
            <td>${index + 1}</td>
            <td>${element}</td >
            </tr > `)
        })

    }
}

function Select(index) {
    array.push(index)
    let tr = document.getElementById(`${index}`)
    tr.style.backgroundColor = "blue"
    console.log(array)
}

document.querySelector("#Remove_Note").addEventListener("click", (() => {
    if (array == null || array.length == 0) {
        alert("Please Select Something To  Delete.")
    }
    else {
        for (let index = 0; index < array.length; index++) {
            if (array[index] >= notes.length) {
                array[index] = array[index] - 1
            }
            notes.splice(array[index], 1)
        }
        console.log(notes)
        localStorage.setItem("Todos", JSON.stringify(notes))
        Show_Notes()
        array = []
    }
}))
Add_Note()

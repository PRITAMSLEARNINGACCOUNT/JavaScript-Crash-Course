let notes = []
let My_Notes
function Adding_Notes() {
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
    if (My_Notes == null || My_Notes.length == 0) {
        document.querySelector(".Container").innerHTML = "Nothing To Show"
    }
    else {
        let HTML = document.querySelector(".Container")
        HTML.innerHTML = ""
        notes.forEach((element, index) => {
            HTML.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Note No ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <buttton id="${index}" onclick="DeleteNote(this.id)" class="btn btn-primary">Delete Note</buttton>
            </div>
            </div>`
        })

    }

}
function DeleteNote(Note_Index) {
    notes.splice(Note_Index, 1)
    localStorage.setItem("Todos", JSON.stringify(notes))
    Show_Notes()

}
Adding_Notes()
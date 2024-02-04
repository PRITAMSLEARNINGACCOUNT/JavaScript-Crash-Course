let date = Date()
let Hour = Number.parseInt(date.slice(16, 18))
let Miniutes = Number.parseInt(date.slice(19, 21))
let Seconds = Number.parseInt(date.slice(22, 24))

let miliseconds = 1000
setInterval(() => {
    document.getElementsByClassName("box")[2].innerHTML = Seconds
    if (Seconds == 60) {
        Seconds = 0
        Miniutes += 1
    }
    document.getElementsByClassName("box")[1].innerHTML = Miniutes
    if (Miniutes == 60) {
        Miniutes = 0
        Hour += 1
    }
    if (Hour == 24) {
        Hour =0
    }
    Seconds += 1
    document.getElementsByClassName("box")[0].innerHTML = Hour
}, miliseconds);

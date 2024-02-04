let date = Date()
let Hour = Number.parseInt(date.slice(16, 18))
let Miniutes = Number.parseInt(date.slice(19, 21))
let Seconds = Number.parseInt(date.slice(22, 24))
const Alarm_Audio = new Audio("Alarm_Tone.wav");
let miliseconds = 1000

var alarm_hour = undefined, alarm_miniute = undefined
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
    if (Hour == 13) {
        Hour = 1
    }
    if (Hour == alarm_hour && Miniutes == alarm_miniute) {
        Alarm_Audio.play()
    }
    if (Miniutes == (alarm_miniute + 1)) {
        alarm_miniute = undefined
        alarm_hour = undefined
    }
    Seconds += 1
    document.getElementsByClassName("box")[0].innerHTML = Hour

}, miliseconds);

document.getElementById("SetAlarm").addEventListener("click", (() => {
    alert("Alarmed Set Successfully.")
    alarm_hour = Number.parseInt(document.querySelector("#floatingInputValue").value.slice(0, 3))
    alarm_miniute = Number.parseInt(document.querySelector("#floatingInputValue").value.slice(3))
}))




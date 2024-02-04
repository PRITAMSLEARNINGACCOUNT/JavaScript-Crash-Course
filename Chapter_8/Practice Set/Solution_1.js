let Button_1 = (optional_argument) => {
    alert("You Have Clicked On Button 1")
}
let Button_2 = (optional_argument) => {
    alert("You Have Clicked On Button 2")
}
let Button_3 = (optional_argument) => {
    alert("You Have Clicked On Button 3")
}
let Button_4 = (optional_argument) => {
    alert("You Have Clicked On Button 4")
}
let Button_5 = (optional_argument) => {
    alert("You Have Clicked On Button 5")
}

document.getElementsByTagName("button")[0].onclick = Button_1
document.getElementsByTagName("button")[1].onclick = Button_2
document.getElementsByTagName("button")[2].onclick = Button_3
document.getElementsByTagName("button")[3].onclick = Button_4
document.getElementsByTagName("button")[4].onclick = Button_5
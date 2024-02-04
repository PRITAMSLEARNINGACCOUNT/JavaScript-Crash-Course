let func = () => {
    window.location.href = "https://www.google.com/"
}
let func_2 = () => {
    window.location.href = "https://www.facebook.com/"
}
let func_3 = () => {
    window.location.href = "https://twitter.com/"
}
let func_4 = () => {
    window.location.href = "https://www.youtube.com/"
}
let func_5 = () => {
    window.location.href = "https://www.instagram.com/"
}
document.getElementsByTagName("button")[0].addEventListener("click", func)
document.getElementsByTagName("button")[1].addEventListener("click", func_2)
document.getElementsByTagName("button")[2].addEventListener("click", func_3)
document.getElementsByTagName("button")[3].addEventListener("click", func_4)
document.getElementsByTagName("button")[4].addEventListener("click", func_5)
let links = ["https://cdn.replit.com/_next/static/chunks/4228-c3fbfa350e076387.js", "https://cdn.replit.com/_next/static/chunks/4010-cd3bfddf248fdd60.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"]
var links_length = 0
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script)
        script.onload = function () {
            resolve("Your Requested Link Is Successfully Loaded")
            links_length++
        }
        script.onerror = function () {
            reject("Your Requested Link Can't Be Loaded As It Is Invalid.")
        }

    })
}

let Load_Script = loadScript(links[links_length])
Load_Script.then((value) => {
    console.log(value)
    return loadScript(links[links_length])

}, (error) => {
    console.log(error)
}).then((value) => {
    console.log(value)
    return loadScript(links[links_length])
}, (error) => {
    console.log(error)
}).then((value) => {
    console.log(value)
    return loadScript(links[links_length])
}, (error) => {
    console.log(error)
})



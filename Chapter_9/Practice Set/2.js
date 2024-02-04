let Problem_No_2 = async () => {
    let promise = new Promise((resolve, reject) => {
        let element = document.createElement("script")
        element.src = "https://cdn.replit.com/_next/static/chunks/4228-c3fbfa350e076387.js"
        element.onload = () => {
            resolve("The Link Is Loaded Successfully.")
        }
        element.onerror = () => {
            reject("The Link Can't Be Loaded.")
        }
        document.body.append(element)
    })
    let Result = await promise
    return Result

}
Problem_No_2().then((value) => {
    console.log(value)
})

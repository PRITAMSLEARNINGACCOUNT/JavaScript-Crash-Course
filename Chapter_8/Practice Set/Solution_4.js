const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function () {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    let a = await fetchContent(url)
    document.getElementsByClassName("Container")[0].innerHTML += a["title"]

}, 3000)
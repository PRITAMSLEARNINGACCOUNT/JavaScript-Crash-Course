async function Main_Function() {
    let result = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94")

    let json_result = await result.json()
    let articles = json_result.articles
    articles.forEach((element) => {
        document.querySelector(".Container").innerHTML = document.querySelector(".Container").innerHTML + `<div class="card" style="width: 18rem;">
        <img src=${element.urlToImage}  class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text"><strong>Description</strong> - ${element.description}</p>
            <a href=${element.url} class="btn btn-primary">Click Here To Read The Complete NEWS</a>
        </div>
    </div>`
        console.log()

    });



}

Main_Function()
// Common JS

let Fetch_News = async () => {
  let Response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf7fec402fd1484c9d2561c5a2ac1b94"
  );
  let JSON = await Response.json();
  return JSON.articles;
};

let Fetched_Newses = await Fetch_News();
// module.exports = Fetched_Newses;

let API_URL="https://newsapi.org/v2/"
let API_KEY="cfbe4ad656a44698b5967c98512d161b"

type TNews={
    urlToImage:string;
    title:string;
    description:string;
    author:string;
    sourse: TSourse;
}
type TSourse={
    id: string;
    name: string;
}

const news = document.querySelector("#news")

async function fetchNews() {
    let response = await fetch(`${API_URL}everything?q=bitcoin&apiKey=${API_KEY}`)
    let obj = await response.json()
    console.log(obj.articles)
    renderNews(obj.articles);
}
fetchNews ()

function renderNews(newsArr: TNews[]){
    newsArr.forEach(newItem => {
        const listItem = document.createElement('div');
        listItem.className = "news__item"
        news?.appendChild(listItem)
        
        const imgItem = document.createElement('img')
        imgItem.src = newItem.urlToImage
        listItem.appendChild(imgItem)

        const titleItem = document.createElement('h2')
        titleItem.innerHTML = newItem.title
        listItem.appendChild(titleItem)

        const descriptionItem = document.createElement('p')
        descriptionItem.innerHTML = newItem.description
        listItem.appendChild(descriptionItem)

        const authorItem = document.createElement('h3')
        authorItem.innerHTML = newItem.author
        listItem.appendChild(authorItem)
    });    
}
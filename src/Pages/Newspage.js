import { useState, useEffect } from 'react';


function Newspage() {
    const [news, setNews] = useState([])
    // const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // setNews((prev) => 
                // prev.concat(data.results))
                setNews(data.articles)
            })
            .catch((err) =>
                console.log(err))
    }, [])

    // window.onscroll = function() {
    //     if ((window.innerHeight + window.scrollY * 1.1) >= document.body.offsetHeight) {
    //         setPage(page + 1)
    //     }
    // };
    return (
        <div>
            {news.map((article) => {
                return (
                    <div key={article}>
                        <h4>{article.title}</h4>
                    </div>
                )
            })}
        </div>

    )
}

export default Newspage
import { useState, useEffect } from 'react';


function Newspage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setNews(data.articles)
            })
            .catch((err) =>
                console.log(err))
    }, [])
    return (
        <div className="news">
            {news.map((article) => {
                return (
                    <div>
                        
                        <div className="article">
                            <div className="linkToArticle"><a target="blank" href={article.url}>{article.title}</a></div>
                            <div className="content">
                                <p>{article.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Newspage
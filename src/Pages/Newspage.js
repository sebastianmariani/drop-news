import { useState, useEffect,useContext  } from 'react';
import { DataContext } from '../Context/ContextData';


function Newspage() {
    // const data = useContext(DataContext);
    const [keyword, country] = useContext(DataContext);
    const [news, setNews] = useState([]);

    // useEffect(() => {
    //     if (data[4] === 'null'){
    //         fetch(`https://newsapi.org/v2/top-headlines?country=${data[2]}&apiKey=${process.env.REACT_APP_API_KEY}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setNews(data.articles)
    //             })
    //             .catch((err) =>
    //             console.log(err))
    //     } else {
    //         fetch(`https://newsapi.org/v2/everything?q=${data[4]}&apiKey=${process.env.REACT_APP_API_KEY}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setNews(data.articles)
    //             })
    //             .catch((err) =>
    //             console.log(err))
    //     }
    // }, [data])
    useEffect(() => {
        if (keyword === 'null'){
            fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setNews(data.articles)
                })
                .catch((err) =>
                console.log(err))
        } else {
            fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    setNews(data.articles)
                })
                .catch((err) =>
                console.log(err))
        }
    }, [country, keyword])
    return (
        <div className="news">
            {news.map((article) => {
                return (
                    <div key={article.title}>
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
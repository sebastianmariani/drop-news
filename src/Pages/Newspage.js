import { useState, useEffect,useContext } from 'react';
import { DataContext } from '../Context/ContextData';


function Newspage() {
    const [searchCriteria, setSearchCriteria, country, setCountry] = useContext(DataContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${searchCriteria}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setNews(data.articles)
            })
            .catch((err) =>
            console.log(err))
    }, [country, searchCriteria])
    return (
        <div className="news">
            {news.map((article) => {
                return (
                    <div key={article.title}>
                        <div className="article">
                            <div className="headerArticle">
                                <div className="linkToArticle">
                                    <a id="link" target="blank" href={article.url}>{article.title}</a>
                                </div>
                            </div>
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
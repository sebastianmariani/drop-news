import { useState, useEffect,useContext } from 'react';
import { DataContext } from '../Context/ContextData';
import axios from 'axios';


function Newspage() {
    const [searchCriteria, setSearchCriteria, country, setCountry] = useContext(DataContext);
    const [news, setNews] = useState([]);

    useEffect( () => {
        axios.get('/newspage', {
            params: {
                country,
                searchCriteria
            }
        }).then( response => {
            setNews(response.data)
        }).catch( err => {
            console.log(err)
        })
    }, [searchCriteria, country])

    if (news.length > 0) {
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
    } else {
        return (
            <div className="news">
                <div className="noResult">
                    <p>Something went wrong!<br/>
                        Please try again.
                    </p>
                </div>
            </div>
        )
    }
}

export default Newspage
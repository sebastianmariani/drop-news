import { useState, useEffect,useContext } from 'react';
import { DataContext } from '../Context/ContextData';
import axios from 'axios';

const URL = 'https://drop-news.herokuapp.com'

function Newspage() {
    const [searchCriteria, setSearchCriteria, country, setCountry,isLoaded, setIsLoaded] = useContext(DataContext);
    const [news, setNews] = useState([]);

    useEffect( () => {
        axios.get(`${URL}/newspage`, {
            params: {
                country,
                searchCriteria
            }
        }).then( response => {
            setNews(response.data)
            setIsLoaded(true)
        }).catch( err => {
            console.log(err)
            setIsLoaded(false)
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
                                        <a className="link" target="blank" href={article.url}>{article.title}</a>
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
            <div className="noResult">
                <p>Loading...</p>
            </div>
        )
    }
}

export default Newspage
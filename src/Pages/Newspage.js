import { useState,useEffect } from 'react';


function Newspage (props) {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=e782df4c0a2e4a73aebfa7a8137da492
        ${process.env.REACT_APP_API_KEY}${page}`)
        .then(res => res.json())
        .then(data => {
            setNews((prev) => 
            prev.concat(data.results))
        })
        .catch((err) => 
            console.log(err))
    }, [page])

    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY * 1.1) >= document.body.offsetHeight) {
            setPage(page + 1)
        }
    };
    return (
        <div>
            <p>Homepage</p>
        </div>
    )
}

export default Newspage
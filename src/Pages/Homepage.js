import { Link } from 'react-router-dom';

import img from '../styles/assets/08 1.png'

function Homepage () {
    return (
        <div className="homepageContent">
            <div className="homepageText">
                <h1>DR<br/>
                    <span>
                        <svg className="drop" width="30" height="37" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.97923 2C7.80512 4.16438 8.37952 5.22582 9.58603 6.87058C10.9272 8.58997 11.5268 9.48092 12.2918 10.9242C13.1064 13.2543 13.2503 14.4264 12.5558 16.109C11.7361 17.8654 11.0991 18.6125 9.58603 19.4398C7.46056 20.1527 6.3166 20.22 4.40543 19.4398C3.08695 18.6178 2.42738 18.0862 1.66665 16.7688C0.9505 14.9514 0.799777 13.8892 1.27068 11.8668C2.02286 10.1658 2.57491 9.14304 4.40543 6.87058C5.70489 5.19099 6.28482 4.13698 6.97923 2Z" fill="black" stroke="black"/>
                        </svg>
                    </span>
                    P
                </h1>
                <div className="paragraphs">
                    <h3>The pace of now-a-day news is becoming unsustainable,<br/>
                        setting at record high the level of stress and <br/>
                        sadness in our community.</h3>
                    <h3>We are here to limit the the quantity of distraction<br/>
                        that we are subject from news, and allowing us to<br/>
                        keep up with what’s going on in the world without<br/>
                        the downsides and at your own tempo.</h3>
                        <span className="linkContainer"><Link to="newspage">Start now</Link></span>
                </div>
            </div>
            <img alt="Lamp" src={img}></img>
        </div>
    )
}

export default Homepage
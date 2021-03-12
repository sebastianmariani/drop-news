import { Link } from 'react-router-dom';

import img from '../styles/assets/08 1.png'

function Homepage () {
    return (
        <div className="homepageContent">
            <div className="homepageText">
                <h1>DR<br/>
                    <span>
                        <svg className="drop" width="28" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9585 2C14.6102 6.56925 15.759 8.81007 18.1721 12.2823C20.8544 15.9122 22.0535 17.793 23.5836 20.8399C25.2129 25.7591 25.5005 28.2336 24.1116 31.7856C22.4722 35.4936 21.1983 37.0707 18.1721 38.8174C13.9211 40.3224 11.6332 40.4644 7.81086 38.8174C5.1739 37.0821 3.85476 35.9598 2.33329 33.1787C0.901 29.3419 0.599554 27.0994 1.54136 22.83C3.04573 19.2389 4.14983 17.0797 7.81086 12.2823C10.4098 8.73654 11.5696 6.5114 12.9585 2Z" fill="black" stroke="black"/>
                        </svg>
                    </span>P
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
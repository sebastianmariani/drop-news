import {useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/ContextData';

function Navbar () {
    const [searchCriteria, setSearchCriteria, country, setCountry] = useContext(DataContext);

    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleChangeCategories = (e) => {
        setSearchCriteria(e.target.value)
    }

    return (
        <div className="navbar">
            <Link to="/">
                <h1>DR<br/>
                    <span>
                        <svg className="dropNavbar" width="20" height="27" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.97923 2C7.80512 4.16438 8.37952 5.22582 9.58603 6.87058C10.9272 8.58997 11.5268 9.48092 12.2918 10.9242C13.1064 13.2543 13.2503 14.4264 12.5558 16.109C11.7361 17.8654 11.0991 18.6125 9.58603 19.4398C7.46056 20.1527 6.3166 20.22 4.40543 19.4398C3.08695 18.6178 2.42738 18.0862 1.66665 16.7688C0.9505 14.9514 0.799777 13.8892 1.27068 11.8668C2.02286 10.1658 2.57491 9.14304 4.40543 6.87058C5.70489 5.19099 6.28482 4.13698 6.97923 2Z" fill="black" stroke="black"/>
                        </svg>
                    </span>
                    P
                </h1>
            </Link>
            <div className="selectors">
                <div className="selectOption">
                    <h4>Category</h4>
                    <select value={searchCriteria} onChange={handleChangeCategories}>
                        <option value="general">General</option>
                        <option value="business">Businnes</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                    </select>
                </div>
                <div className="selectOption">
                    <h4>Country</h4>
                    <select value={country} onChange={handleChangeCountry}>
                        <option default value="gb">Uk</option>
                        <option value="us">US</option>
                        <option value="it">Italy</option>
                        <option value="pt">Portugal</option>
                        <option value="ca">Canada</option>
                        <option value="cn">China</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="gr">Greece</option>
                        <option value="jp">Japan</option>
                        <option value="nl">Netherland</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Navbar
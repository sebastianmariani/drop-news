import {useContext} from 'react';
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
            <div>
                <h1>DR<br/>
                    <span>
                        <svg width="20" height="37" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9585 2C14.6102 6.56925 15.759 8.81007 18.1721 12.2823C20.8544 15.9122 22.0535 17.793 23.5836 20.8399C25.2129 25.7591 25.5005 28.2336 24.1116 31.7856C22.4722 35.4936 21.1983 37.0707 18.1721 38.8174C13.9211 40.3224 11.6332 40.4644 7.81086 38.8174C5.1739 37.0821 3.85476 35.9598 2.33329 33.1787C0.901 29.3419 0.599554 27.0994 1.54136 22.83C3.04573 19.2389 4.14983 17.0797 7.81086 12.2823C10.4098 8.73654 11.5696 6.5114 12.9585 2Z" fill="black" stroke="black"/>
                        </svg>
                    </span>P
                </h1>
            </div>
            <div className="selectors">
                <div className="selectOption">
                    <h4>Category</h4>
                    <select value={searchCriteria} onChange={handleChangeCategories}>
                        <option default value=''>All</option>
                        <option value="business">Businnes</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
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
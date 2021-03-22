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
            <h1>DR<br/>OP</h1>
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
    )
}

export default Navbar
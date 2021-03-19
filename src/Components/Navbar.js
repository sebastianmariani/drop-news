import {useContext} from 'react';
import { DataContext } from '../Context/ContextData';

function Navbar () {
    const [searchCriteria, setSearchCriteria, country, setCountry, keyword, setKeyword] = useContext(DataContext);

    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleChangeCategories = (e) => {
        setSearchCriteria(prev => [...prev, e.target.value])
        console.log(searchCriteria)
    }
    const handleSpecificSearch = (e) => {
        if(e.key === 'Enter'){
            console.log(keyword)
            setKeyword(e.target.value)
        }
    }
    
    return (
        <div className="navbar">
            <h1>DR<br/>OP</h1>
            <div className="newsCategory">
                <h4>Category</h4>
                <div className="categories">
                    <input type="checkbox"  value="business" id="business" onChange={handleChangeCategories}/>
                    <label htmlFor="business">
                        businnes
                    </label>
                    <input type="checkbox"  value="entertainment" id="entertainment" onChange={handleChangeCategories}/>
                    <label htmlFor="entertainment">
                        entertainment
                    </label>
                    <input type="checkbox"  value="technology" id="technology" onChange={handleChangeCategories}/>
                    <label htmlFor="technology">
                        technology
                    </label>
                    <input type="checkbox"  value="health" id="health" onChange={handleChangeCategories}/>
                    <label htmlFor="health">
                        health
                    </label>
                    <input type="checkbox"  value="science" id="science" onChange={handleChangeCategories}/>
                    <label htmlFor="science">
                        science
                    </label>
                    <input type="checkbox"  value="sports" id="sports" onChange={handleChangeCategories}/>
                    <label htmlFor="sports">
                        sports
                    </label>
                    <input type="checkbox"  value="general" id="general"/>
                    <label htmlFor="general">
                        general
                    </label>
                </div>
            </div>
            <div className="countrySelect">
                <h4>Country</h4>
                <select value={country} onChange={handleChangeCountry}>
                    <option default value="gb">GB</option>
                    <option value="us">US</option>
                    <option value="it">IT</option>
                    <option value="ca">CA</option>
                    <option value="cn">CN</option>
                    <option value="de">DE</option>
                    <option value="fr">FR</option>
                    <option value="gr">GR</option>
                    <option value="jp">JP</option>
                    <option value="nl">NL</option>
                </select>
            </div>
            <input type="text" placeholder="Search..." onKeyPress={handleSpecificSearch}></input>
        </div>
    )
}

export default Navbar
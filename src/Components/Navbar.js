import {useState} from 'react';

function Navbar () {
    const [country, setCountry] = useState('gb')
    const [categories, setCategories] = useState([])

    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleChangeCategories = (e) => {
        setCategories(prev => {
            prev.push(e.target.value)
        })
        console.log(categories)
    }
    
    
    return (
        <div className="navbar">
            <h1>DR<br/>OP</h1>
            <div className="newsCategory">
                <h4>Category</h4>
                <div className="categories">
                    <button onSelect={handleChangeCategories} value="businnes">business</button>
                    <button onSelect={handleChangeCategories} value="entertainment">entertainment</button>
                    <button onSelect={handleChangeCategories} value="technology">technology</button>
                    <button onSelect={handleChangeCategories} value="health">health</button>
                    <button onSelect={handleChangeCategories} value="science">science</button>
                    <button onSelect={handleChangeCategories} value="sports">sports</button>
                    <button onSelect={handleChangeCategories} value="general">general</button>
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
            <input type="text" placeholder="Search..."></input>
        </div>
    )
}

export default Navbar
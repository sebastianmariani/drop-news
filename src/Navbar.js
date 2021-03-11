function Navbar () {
    return (
        <div className="navbar">
            <h1>DR<br/>OP</h1>
            <div className="newsCategory">
                <h4>Category</h4>
                <div className="categories">
                    <button>business</button>
                    <button>entertainment</button>
                    <button>technology</button>
                    <button>health</button>
                    <button>science</button>
                    <button>sports</button>
                    <button>general</button>
                </div>
            </div>
            <div className="countrySelect">
                <h4>Country</h4>
                <select>
                    <option>GB</option>
                    <option>IT</option>
                </select>
            </div>
            <input type="text" placeholder="Search..."></input>
        </div>
    )
}

export default Navbar
import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = props => {
    const [searchCriteria, setSearchCriteria] = useState([]);
    const [country, setCountry] = useState('gb');
    const [keyword, setKeyword] = useState(null);



    return (
        <DataContext.Provider value={[searchCriteria,setSearchCriteria,country,setCountry,keyword,setKeyword]}>
            {props.children}
        </DataContext.Provider>
    )
}
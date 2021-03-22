import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = props => {
    const [searchCriteria, setSearchCriteria] = useState('');
    const [country, setCountry] = useState('gb');



    return (
        <DataContext.Provider value={[searchCriteria,setSearchCriteria,country,setCountry]}>
            {props.children}
        </DataContext.Provider>
    )
}
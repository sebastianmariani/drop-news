import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = props => {
    const [searchCriteria, setSearchCriteria] = useState('general');
    const [country, setCountry] = useState('gb');
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <DataContext.Provider value={[searchCriteria,setSearchCriteria,country,setCountry,isLoaded,setIsLoaded]}>
            {props.children}
        </DataContext.Provider>
    )
}
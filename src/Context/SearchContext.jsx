import React , {useState, createContext} from 'react'



export const SearchContext = createContext()

export const SearchProvider = (props) => {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [flag, setFlag] = useState({});
    const [address, setAddress] = useState("");

    return(
        <SearchContext.Provider value={{
            value:[weather,setWeather],
            value2:[forecast,setForecast],
            value3:[flag, setFlag],
            value4:[address, setAddress]}}>
            {props.children}
        </SearchContext.Provider>
    )
}
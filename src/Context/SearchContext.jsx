import React , {useState, createContext} from 'react'



export const SearchContext = createContext()

export const SearchProvider = (props) => {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [flag, setFlag] = useState({});
    const [address, setAddress] = useState("");
    const [view, setView] = useState("")
    const [date, setDate] = useState("")

    return(
        <SearchContext.Provider value={{
            value:[weather,setWeather],
            value2:[forecast,setForecast],
            value3:[flag, setFlag],
            value4:[address, setAddress],
            value5:[view,setView],
            value6:[date,setDate]
            }}>
            {props.children}
        </SearchContext.Provider>
    )
}
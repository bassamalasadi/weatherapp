import React,{useContext, useEffect} from 'react'
import {SearchContext} from "../Context/SearchContext"
import Weather from "../components/Weather.Component";
import Forecast from "../components/Forecast.Component";
import AddandCopy from "../components/AddAndCopy.Component";
import Favourite from "../components/Favourites.Component";
import Search from "../components/Search.Component"
import {useParams} from "react-router-dom"
import UseDate from '../components/timeDate';

function CityPage(){
    const cityname = useParams()
    const {value, value2, value3, value5, value6} = useContext(SearchContext)
    const [weather] = value
    const [forecast] = value2
    const [flag] = value3
    const [view, setView] = value5
    const [date] = value6
    useEffect(() => {
       setView(cityname.cityname)
    }, [cityname])
    return(    
        <div className="App">  
        <UseDate />
            <main>    
            <div >
            <Search city={view} />              
            </div>      
                    {/* display two button */}
                    <div className="mainCard">
                    {typeof weather.main != "undefined" ? (
                    <div className="">
                        <div className="cards">
                        <AddandCopy  props={weather}/><br />
                        </div>
                        <div className="cards">
                        <Weather weather={weather} flag={flag} date={date} forecast={forecast} /><br />
                        </div>
                        <Forecast data={forecast} />          
                    </div>
                    ) : (
                    ""
                    )}
                    </div>
                    <Favourite/>
                </main>
            </div>      
    )}
export default CityPage
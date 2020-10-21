import React, { useState,useEffect,useContext } from "react";
import Weather from "./components/Weather.Component";
import Forecast from "./components/Forecast.Component";
import Favourite from "./components/Favourites.Component";
import AddandCopy from "./components/AddAndCopy.Component"
import {FavouritesProvider} from "./Context/FavouritesContext"
import "react-perfect-scrollbar/dist/css/styles.css";
import "./App.css";

import Search from "./components/Search.Component"
import {SearchContext,SearchProvider} from "./Context/SearchContext"

import { Container, Navbar } from 'react-bootstrap';

function App() {
  function MainPage(){
    const {value, value2, value3, value4, value5} = useContext(SearchContext)
    const [weather, setWeather] = value
    const [forecast, setForecast] = value2
    const [flag, setFlag] = value3
    const [address, setAddress] = value4
    const [view, setView] = value5
    const [change, setChange] = useState(false)
 
    return(
      <div className="App">  
      <main>
            <div>
            
            <Search city={view} />
                          
            </div>
            {/* display two button */}
            {typeof weather.main != "undefined" ? (
              <div className="cards">
                <AddandCopy  props={weather}/><br />
                <div className="card">
                <Weather weather={weather} flag={flag} />
                <Forecast data={forecast} />
                </div>
              </div>
            ) : (
              ""
            )}
         <Favourite/>
      </main>
    </div>
    )
  }
 
  return (
    <FavouritesProvider>
      <SearchProvider>
        <MainPage />
    </SearchProvider>
    </FavouritesProvider>
  );
}

export default App;
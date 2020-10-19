import React, { useContext } from "react";
import Weather from "./components/Weather.Component";
import Forecast from "./components/Forecast.Component";
import Favourite from "./components/Favourites.Component";
import AddandCopy from "./components/AddAndCopy.Component"
import {FavouritesProvider} from "./Context/FavouritesContext"
import "react-perfect-scrollbar/dist/css/styles.css";
import "./App.css";

import Search from "./components/Search.Component"
import {SearchContext,SearchProvider} from "./Context/SearchContext"

function App() {
  function MainPage(){
    const {value, value2, value3, value4} = useContext(SearchContext)
    const [weather, setWeather] = value
    const [forecast, setForecast] = value2
    const [flag, setFlag] = value3
    const [address, setAddress] = value4

    return(
      <div className="App">  
      <main>
        <div className="upper">
          <div className="search-box">
            {/* Search-bar input */}
            <div>
              <Search />            
            </div>
            {/* display two button */}
            {typeof weather.main != "undefined" ? (
              <div className="">
                <AddandCopy  props={weather}/>
              </div>
            ) : (
              ""
            )}
          </div>
                  <Favourite/>
        </div>
        
        {typeof weather.main == "undefined" ? (
              <div className="logo">

              </div>
            ) : (
              ""
            )}
        {/* display the weather */}
        {typeof weather.main != "undefined" ? (
              <Weather weather={weather} flag={flag} />
        ) : (
          ""
        )}
        {/* display the forecast */}
        {typeof weather.main != "undefined" ? (
            <Forecast data={forecast} />
        ) : (
          ""
        )}
        
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
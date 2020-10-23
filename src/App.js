import React, { useContext } from "react";
import Weather from "./components/Weather.Component";
import Forecast from "./components/Forecast.Component";
import Favourite from "./components/Favourites.Component";
import AddandCopy from "./components/AddAndCopy.Component";
import {FavouritesProvider} from "./Context/FavouritesContext"
import "react-perfect-scrollbar/dist/css/styles.css";
import Search from "./components/Search.Component"
import {SearchContext,SearchProvider} from "./Context/SearchContext"
function App() {
  function MainPage(){
    const {value, value2, value3, value5, value6} = useContext(SearchContext)
    const [weather, setWeather] = value
    const [forecast, setForecast] = value2
    const [flag, setFlag] = value3
    const [view, setView] = value5
    const [date, setDate] = value6
    return(
      <div className="App">  
      <main>
            <div>
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
                   <Weather weather={weather} flag={flag} date={date} /><br />
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
import React, { useState } from "react";
import Weather from "./components/weather.component";
import Forecast from "./components/forecast.component";
import PerfectScrollbar from "react-perfect-scrollbar";
import Favourite from "./components/favourites.component";
import PlacesAutocomplete from "react-places-autocomplete";
import AddandCopy from "./components/AddAndCopy"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {FavouritesProvider} from "./components/FavouritesContext"
import "react-perfect-scrollbar/dist/css/styles.css";
import "./App.css";
// variable use to fetch weather and forecast APIs
const api = {
  keyWeather: "cbf3e6bbd09a990359dddac086ea6fb0",
  weather: "https://api.openweathermap.org/data/2.5/weather",
  forecast: "https://api.openweathermap.org/data/2.5/forecast",
};

function App() {

  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [flag, setFlag] = useState({});
  const [address, setAddress] = useState("");
  const [fave, setFave] = useState({})

  // Search Function use to fetch the APIs using cities' name
  const search = async (e) => {

    let dir = "";
    try {
      // fetch weather api
      await fetch(`${api.weather}?q=${e}&appid=${api.keyWeather}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          dir = result.sys.country;

        });
      // fetch forecast api
      await fetch(`${api.forecast}?q=${e}&appid=${api.keyWeather}`)
        .then((res) => res.json())
        .then((result) => {
          setForecast(result);
        });
      // fetch cities' data to display flag and countries' information
      await fetch(`https://restcountries.eu/rest/v2/alpha/${dir}`)
        .then((res) => res.json())
        .then((result) => {
          setFlag(result);
        });
      setAddress("");
    } catch {
      console.log("err")
    }
  };
  // take first word from cities
  const handleSelect = async (e) => {
    let regix = e.split(",")[0];
    search(regix);
  };
 

  return (
    <FavouritesProvider>
    <div className="App">  
      <main>
        <div className="upper">
          <div className="search-box">
            {/* Search-bar input */}
            <div>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onClick={handleSelect}
                onSelect={handleSelect}
                shouldFetchSuggestions={address.length >= 2}
                highlightFirstSuggestion={true}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                 
                }) => (
                  <div className="HeadSearech">
                    <input
                      {...getInputProps({ placeholder: "Search Places..." })}
                      className="input-search"
                    />
                    
                      <FontAwesomeIcon icon={faSearch} color="white" />
                    <div className="search-list" >
                      {suggestions.map((suggestion) => {
                        return (
                          <div key ={suggestion.description} className="search-items">
                            <div 
                            {...getSuggestionItemProps(suggestion)}
                          >
                            <ul className="suggestion">
                              <li  className="suggeste">
                                <div  className="suggesteCh">
                                  <div className="searchIcon"></div>
                                  <i className="material-icons">location_on</i>
                                  <div className="searchItem">
                                  <span className="searchRes">{suggestion.description}</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          </div> 
                        );
                      })}
                    
                    </div>
                    
                  </div>
                )}
              </PlacesAutocomplete>
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
          {/* display favourites scroll-bar */}
          
          <div className="favourite">
            <div > Favourites! </div>
              <div className="scroll">
                <PerfectScrollbar style={{ width: 200, height: 600 }}>
                  {/* function use to display each city stor in localstorage */}
                  <Favourite/>
                </PerfectScrollbar>
              </div>
          </div>
        </div>
        {typeof weather.main == "undefined" ? (
              <div className="logo">

              </div>
            ) : (
              ""
            )}
        {/* display the weather */}
        {typeof weather.main != "undefined" ? (
          <div className="">
            <div className="info-box">
              <Weather
                city={weather.name}
                country={weather.sys.country}
                temp={weather.main.temp}
                weather={weather.weather[0].main}
                icon={weather.weather[0].id}
                humidity={weather.main.humidity}
                wind={weather.wind}
                pressure={weather.main.pressure}
                flag={flag.flag}
                capital={flag.capital}
                nativeName={flag.nativeName}
                region={flag.region}
              />
            </div>
            <div></div>
          </div>
        ) : (
          ""
        )}
        {typeof weather.main != "undefined" ? (
          <div>
            <Forecast data={forecast} />
          </div>
        ) : (
          ""
        )}
        {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      </main>
    </div>
    </FavouritesProvider>
  );
}

export default App;
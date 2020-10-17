import React, {useContext} from 'react'
import {SearchContext} from '../Context/SearchContext'
import PlacesAutocomplete from "react-places-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const api = {
  keyWeather: "cbf3e6bbd09a990359dddac086ea6fb0",
  weather: "https://api.openweathermap.org/data/2.5/weather",
  forecast: "https://api.openweathermap.org/data/2.5/forecast",
};

const Search = (props) => {

  const {value, value2, value3, value4} = useContext(SearchContext)
  const [weather, setWeather] = value
  const [forecast, setForecast] = value2
  const [flag, setFlag] = value3
  const [address, setAddress] = value4
  // take first word from cities
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
  }
  const handleSelect = async (e) => {
    let regix = e.split(",")[0];
    search(regix);
  };
return( 
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
  )
}
export default Search
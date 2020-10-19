import React, {useState,useContext} from 'react'
import {SearchContext} from '../Context/SearchContext'
import PlacesAutocomplete from "react-places-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Notification from "../notification/Notification"
const api = {
  keyWeather: "cbf3e6bbd09a990359dddac086ea6fb0",
  weather: "https://api.openweathermap.org/data/2.5/weather",
  forecast: "https://api.openweathermap.org/data/2.5/forecast",
};

const Search = () => {
  
  const {value, value2, value3, value4} = useContext(SearchContext)
  const [weather, setWeather] = value
  const [forecast, setForecast] = value2
  const [flag, setFlag] = value3
  const [address, setAddress] = value4

  const [notification, setNotification] = useState('')

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
    } catch (error) {
      setNotification({
        content: 'The city name " ',
        name: e,
        content2:' " does not match any city name. If you are not confident you can check ',
        content3:' list for all cities',
        type: 'Error'
    })
    setTimeout(() => {
        setNotification(null)
    }, 5000)
    } }
  const handleSelect = async (e) => {
    let regix = e.split(",")[0];
    search(regix);
  };
  let placeId = ""
  
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
                        // placeId = suggestion.placeId
                        // console.log(placeId)
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
      <Notification message={notification} />
    </div>
  )
}
export default Search
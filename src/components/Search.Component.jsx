import React, {useState, useEffect,useContext} from 'react'
import {SearchContext} from '../Context/SearchContext'
import PlacesAutocomplete from "react-places-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Notification from "../notification/Notification"
import {useSpring, animated} from 'react-spring'
import {useParams, Link} from 'react-router-dom'

const api = {
  keyWeather: "cbf3e6bbd09a990359dddac086ea6fb0",
  weather: "https://api.openweathermap.org/data/2.5/weather",
  forecast: "https://api.openweathermap.org/data/2.5/forecast",
};

const Search = (props) => {
  const {cityname} = useParams()
  const {value, value2, value3, value4, value5} = useContext(SearchContext)
  const [weather, setWeather] = value
  const [forecast, setForecast] = value2
  const [flag, setFlag] = value3
  const [address, setAddress] = value4
  const [view] = value5
  const [notification, setNotification] = useState('')
 
  const iconan = useSpring({opacity: 1, from: {opacity: 0}})
  let e = cityname
  // take first word from cities
  const search = async (e) => {

    if(e != ''){
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
          // console.log(result)
          setForecast(result);
        });
      // fetch cities' data to display flag and countries' information
      await fetch(`https://restcountries.eu/rest/v2/alpha/${dir}`)
        .then(response => response.json())
        .then(async(result) => {
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
    }
    
  const handleSelect = async (e) => {
    let regix = e.split(",")[0];
    search(regix);
    console.log(regix)
  };
  useEffect(() => {
    e = props.city
    if(typeof e != 'undefined'){
    let regix = e.split(",")[0];
    search(regix);
    }
  }, [view])
  
return( 
  <div className=""> 
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
                      {...getInputProps({ placeholder: `Search Places...` })}
                      className="input-search"
                    />
                    <FontAwesomeIcon icon={faSearch} color="white" />
                    <animated.div style={iconan}>
                    <div className="search-list" >
                      {suggestions.map((suggestion) => {
                        return (
                          <div key ={suggestion.description} className="search-items">
                            <div 
                            {...getSuggestionItemProps(suggestion)}
                          >
                            <ul className="">
                              <li  className="suggeste">
                                <div  className="suggesteCh">
                                  {/* <div className="searchIcon"></div> */}
                                  {/* <i className="material-icons">location_on</i> */}
                                  <div className="searchItem">
                                  <Link to={`/city/${suggestion.description.split(",")[0]}`}>
                                  <span className="searchRes">{suggestion.description}</span>
                                  </ Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          </div> 
                        );
                      })}
                    </div>
                    </animated.div>
                  </div>
                )}
      </PlacesAutocomplete>
      <Notification message={notification} />
    </div>
  )
}
export default Search
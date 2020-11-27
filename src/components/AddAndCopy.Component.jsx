// Display the Add button to add the favourite city to your Favourites list 
// Display the Copy button to copy the url route of a specific city
import React, {useContext} from 'react'
import {FavouritesContext} from '../Context/FavouritesContext'
import { BsFillStarFill } from "react-icons/bs"
import { AiFillCopy } from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useSpring, animated} from 'react-spring'
const AddandCopy = (props) => {
    const iconan = useSpring({opacity: 1, from: {opacity: 0},transition: '1s'})
    const [fave,setFave] = useContext(FavouritesContext);  
    const weather = props.props
    const items = {...localStorage}
    // Push all the items from your browser local storage to Array
    let data = []
    Object.keys(items).map((e) => { 
        data.push(e)
        return 0
    })
    // "Add button" to add city to your browser local storage 
    const add = (e) => {
        // Prevent a browser reload or refresh
        e.preventDefault()
            // Check if the city name is not included in the local storage
            if(!data.includes(weather.name)){
                // Set all the city's information in the "SetFave" state
                setFave(prev =>[ ...prev, {
                    id:weather.coord.lat,
                    name:weather.name,
                    temp:weather.main.temp,
                    icon:weather.weather[0].id
                  }]) 
                // Set the city's name in the browser local storage 
                localStorage.setItem(`${weather.name}`, JSON.stringify(weather.name));
            }
    }
    return (
        <animated.div style={iconan}>
        <div>  
            {!data.includes(weather.name) ?
                <button value={props.name} type="button"  className="btn btn-warning buton" onClick={add}>
                    <BsFillStarFill /> Add {weather.name} to Favourites
                </button>
                : null
            }
            {" "}{" "}{" "}
            <CopyToClipboard text={window.location.href}>
            <button type="button" className="btn btn-warning button buton">
                  <AiFillCopy className="" /> Copy {weather.name} Weather
            </button>
            </CopyToClipboard>
        </div> 
        </animated.div>
    )
}
export default AddandCopy
// Display the Favourites list for all the cities 

import React, {useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Icon from "./Icons.Componet";
import Popup from "reactjs-popup";
import Delay from 'react-delay'
import {FavouritesContext} from '../Context/FavouritesContext'
import {SearchContext} from '../Context/SearchContext'
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "reactjs-popup/dist/index.css";

const Favourite = React.memo((props) => {
  // Use context API to share different states
  const { value5 } = useContext(SearchContext)
  // Use "view" state to make request to the Search component 
  const [view, setView] = value5
  // Use "fave" state to update the virtual dom in React without need to 
  // render the page or to get the new item from local storage
  const [fave, setFave] = useContext(FavouritesContext)
  // Remove function to remove items from Favourites list and from local storage
  const del = (idx) => {
    // set all the favourite items 
    const temp = [...fave]
    // Get the name of the targeted item
    const name = temp[idx].name
    // Remove the targeted item from the temp array 
    temp.splice(idx, 1)
    // Set the new array in "fave" state
    setFave(temp)
    // Remove the item from locl storage
    localStorage.removeItem(`${name}`);
  };
  // Define a variable to set all the items inside it for the rendering process
  const list = 
    // Looping through the items  
    fave.map((e) => {
     return(
        <div key={e.id}>
          <Delay wait={100} >
          <Popup 
            trigger={
              <div className="scrollbar element">
                <div>
                  {e.name} {Math.round(e.temp - 273.15)}°C <Icon icon={e.icon} />{" "}
                  <button
                    type="button"
                    className="btn btn-warning star"
                    value={e.name}
                    onClick={() => del(fave.indexOf(e))}
                  >
                    <BsFillStarFill /> Remove
                  </button>  
                </div>
              </div>
            }
            position="left center"
          >
            <Card.Header><nobr><h4>{e.name}</h4> <div>
            <Link to={`/city/${e.name}`}>
            <button className="btn btn-success" onClick={()=> setView(e.name)}> View</button>
            </Link>
            </div></nobr></Card.Header>
            {typeof e.description != "undefined" ? (
              <Card.Body>
              <div id={e.iconId} key={e.name}>
              <div
                key={e.iconId}
                value={e.iconId}
                style={{ backgroundImage: `url(${props.flag})` }}
              >
                <div>
                <Card.Title> Description </Card.Title>
                </div>
                <Card.Text>
                {e.main}
                
                <br />
                <br />
                Coordinates
                Latitude: {e.lat}<br />
                Longitude: {e.lon}<br />
                </Card.Text>
              </div>
            </div>
            </Card.Body>
            ): (
              ""
            )}
          </Popup>
          </Delay>
        </div>
     )
    })
  return (
    <div>
      {fave.length >= 1 ?(
        <div className=" favourite">
        <div > Favourites! </div>
        <div className="scroll">
          <PerfectScrollbar style={{ width: 200, height: 570 }}>
            {list}
          </PerfectScrollbar>
        </div>
      </div>
      ): ""}
      
    </div>
  );
})

export default Favourite;
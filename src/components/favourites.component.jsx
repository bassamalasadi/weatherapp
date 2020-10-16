import React, { useState, useEffect, useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Icon from "./icons.componet";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Delay from 'react-delay'
import {FavouritesContext} from './FavouritesContext'

const Favourite = React.memo((props) => {
  const [fave, setFave] = useContext(FavouritesContext)

  const del = (idx) => {
    const temp = [...fave]
    const name = temp[idx].name 
    temp.splice(idx, 1)
    setFave(temp)
    localStorage.removeItem(`${name}`);
  };
  const handleChange = async () => {};
  
  const list =   
    fave.map((e) => {
     return(
        <div key={e.id}>
          <Delay wait={100} >
          <Popup
            onClick={handleChange}
            trigger={
              <div className="scrollbar">
                <div>
                  <button
                    type="button"
                    className="btn btn-warning star"
                    value={e.name}
                    onClick={() => del(fave.indexOf(e))}
                  >
                    <BsFillStarFill /> Remove
                  </button>
                  {e.name} {Math.round(e.temp - 273.15)}°C <Icon icon={e.icon} />{" "}
                </div>
              </div>
            }
            position="left center"
          >
            <div id={e.iconId} key={e.name}>
              <div
                key={e.iconId}
                value={e.iconId}
                style={{ backgroundImage: `url(${props.flag})` }}
              >
                
                {e.name}
              </div>
            </div>
          </Popup>
          </Delay>
        </div>
     )
    })
    console.log('list',list)
  return (
    <div>
     {list}
    </div>
  );
})

export default Favourite;

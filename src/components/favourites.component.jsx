import React, { useState,useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Icon from "./Icons.Componet";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Delay from 'react-delay'
import {FavouritesContext} from '../Context/FavouritesContext'
import {SearchContext} from '../Context/SearchContext'
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Favourite = React.memo((props) => {
  const { value5 } = useContext(SearchContext)
  const [view, setView] = value5
  const [fave, setFave] = useContext(FavouritesContext)
  const [showModel, setShowModel] = useState(false)
  
  const del = (idx) => {
    const temp = [...fave]
    const name = temp[idx].name 
    temp.splice(idx, 1)
    setFave(temp)
    localStorage.removeItem(`${name}`);
  };
  const handleChange = async () => {};
  const handleView = (e) => {
    setShowModel(true)
    setView(e)
  }
  const list =   
    fave.map((e) => {

     return(
        <div key={e.id}>
          <Delay wait={100} >
          <Popup className=""
            onClick={handleChange}
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
            <button className="btn btn-success" onClick={()=> handleView(e.name)}> View</button>
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
      <div className=" favourite">
            <div > Favourites! </div>
              <div className="scroll">
                <PerfectScrollbar style={{ width: 200, height: 600 }}>
                  {list}
                </PerfectScrollbar>
              </div>
          </div>
    </div>
  );
})

export default Favourite;
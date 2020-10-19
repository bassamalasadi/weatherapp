import React, { useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import Icon from "./Icons.Componet";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Delay from 'react-delay'
import {FavouritesContext} from '../Context/FavouritesContext'
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card } from 'react-bootstrap';
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
      // console.log('e',e)
     return(
        <div key={e.id}>
          <Delay wait={100} >
          <Popup className="popup"
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
            

            <Card.Header><h4>{e.name}</h4></Card.Header>
            
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
              
                <h6>{e.main}</h6>
                {e.description}
                <br />
                <br />
                <h6>Coordinates</h6>
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
      <div className="btn btn-warning favourite">
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
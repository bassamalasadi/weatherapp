import React, {useState, useContext} from 'react'
import {FavouritesContext} from '../Context/FavouritesContext'
import { BsFillStarFill } from "react-icons/bs"
import { AiFillCopy } from "react-icons/ai";

const AddandCopy = (props) => {
   
    const [fave,setFave] = useContext(FavouritesContext)   
    const weather = props.props
    const items = {...localStorage}
    let data = []
    Object.keys(items).map((e) => { 
        data.push(e)
    }) 
    const add = (e) => {
        e.preventDefault()
        if(!data.includes(weather.name)){
            setFave(prev =>[ ...prev, {
                id:weather.coord.lat,
                name:weather.name,
                temp:weather.main.temp,
                icon:weather.weather[0].id
              }]) 
            localStorage.setItem(`${weather.name}`, JSON.stringify(weather.name));
            console.log('not include', props.props.name)
        }else{
            console.log('include')
        }
    }

    return (
        <div>  
             
            <button value={props.name} type="button" className="btn btn-warning" onClick={add}>
                <BsFillStarFill /> Add {props.name} to Favourites
            </button>
            <button type="button" className="btn btn-warning button">
                  <AiFillCopy className="" /> Copy {weather.name} Weather
                </button>
        </div>
        
    )
}
export default AddandCopy


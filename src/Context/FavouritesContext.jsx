import React , {useState, useEffect, createContext} from 'react'


export const FavouritesContext = createContext()

export const FavouritesProvider = (props) => {
  const [fave , setFave] = useState([])
  const items = {...localStorage}
 
  useEffect(() => {
    
    Object.keys(items).map((e) => {
      try {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=cbf3e6bbd09a990359dddac086ea6fb0`)
          .then((res) => res.json())
          .then((result) => {
            setFave(fave =>[ ...fave, {
              id:result.coord.lat,
              name:result.name,
              temp:result.main.temp,
              icon:result.weather[0].id,
              main:result.weather[0].main,
              description:result.weather[0].description,
              lon:result.coord.lon,
              lat:result.coord.lat
            }])  
    })
  }catch{
    console.log("not working")
    }})}, [])
   
    return(
        <FavouritesContext.Provider value={[fave, setFave]}>
            {props.children}
        </FavouritesContext.Provider>
    )
}
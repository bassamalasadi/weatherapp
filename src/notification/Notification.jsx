  
import React from 'react'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

let url = 'https://en.wikipedia.org/wiki/List_of_towns_and_cities_with_100,000_or_more_inhabitants/cityname:_A'
    return (
        <div className={message.type}>
            { message.name ?(
              
            <div className="Notifi">  
                <div className="NotifiHeader"> &nbsp;  Notification
                </div>  
                <div className="message">
                    {message.content}
                    <nobr className="cityName">
                         {message.name} 
                    </nobr>{message.content2} 
                    <nobr className="wiki">
                        <a href={url} target="_blank" rel="noopener noreferrer"> Wikipedia</a>
                    </nobr>
                    {message.content3}
                    
                </div>
                
            </div>
            ):(
                ''
            )
            }
            

        </div>
    )
}

export default Notification
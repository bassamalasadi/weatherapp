import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const UseDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); 
    
    useEffect(() => {
        const timer = setInterval(() => {
      
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer);
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    return(
      
      <div className="dateTime">
        <div className="date">{date}</div>
        <div className="time">{time}</div>
        <div className="wish">{wish}</div>
        <Link to={`/`}>
        <div className="home">Home</div>
        </Link>
      </div>
    )
  };

  export default UseDate
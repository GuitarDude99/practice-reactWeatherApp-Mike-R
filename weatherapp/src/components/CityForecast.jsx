//import
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';



// Weather Data

const weatherData = {
    StLouis: {
    summary: "Sunny, 70°F",
    details: "Clear skies throughout the day with mild temperatures.",
    } ,
    LosAngeles: {
    summary: "Cloudy, 55°F",
    details: "Overcast with occasional light rain in the afternoon.",
    },
    Seattle: {
    summary: "Rainy, 51°F",
    details: "Continuous rain expected throughout the day.",
    },
    };

    
// Display forecast for the selected city using URL params, data, and scrolls to a detailed section on button click.


function CityForecast() {
const {cityName} = useParams();


const [weather, setWeather] = useState(null);
const detailsRef = useRef(null) ;


useEffect(() => {
    const cityWeather = weatherData[cityName];
    setWeather(cityWeather);
}, [cityName]);
  



  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
// Disply city and it's info

  return (
    <div>
      <h1>{cityName}</h1>
      <p>{weather?.summary}</p>
      <button onClick={scrollToDetails}>View Details</button>
  
      <div ref={detailsRef} style={{ marginTop: '32px' }}>
        <h3>Details</h3>
        <p>{weather?.details}</p>
      </div>
    </div>
  );
  
        
    }

    export default CityForecast;
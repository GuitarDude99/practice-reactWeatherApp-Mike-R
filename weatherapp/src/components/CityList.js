// Component to list cities with links to the forecast page.

const CityList = (  ) => { 

   return(

    <div>
        <h2>City List </h2>
        {weatherData.map((city, index)=> (
            <li key={index}></li>
        ) )}
        <ul>


const weatherData = {

    LosAngeles: {
    summary: "Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures."
    },

    Seattle: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
    },

    STL: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
    },

    };

}

    const {city} = useParams();
    const data = WeatherData[city];

     /*  weatherData.map((weatherofCity, index) => (
    <ul key={index}>
        <li>weatherofCity</li>
        <li>weatherofCity</li>
        <li>weatherofCity</li>
    </ul>)
    */
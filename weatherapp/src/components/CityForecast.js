// Component to display the forecast for the selected city.

// NOTE: EXAMPLE FROM INSTRUCTIONS, MODIFY DETAILS FOR PRACTICE.

const weatherData = {

    LosAngeles: {
    summary: "Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures."
    },

    Seatlle: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
    },

    STL: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
    },

    };


   
    const {city} = useParams();
    const data = WeatherData[city];

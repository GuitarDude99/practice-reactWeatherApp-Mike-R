import { Link } from 'react-router-dom';

// Displays the list of cities as links to their forecast pages

function CityList() {
const listOfCities = ["StLouis", "LosAngeles", "Seattle"]

  return (

        <div>
      <h2>City List</h2>
      <ul>
     {listOfCities.map((city) => (
          <li key={city}>
            <Link to={`/forecast/${city}`}>{city}</Link>
          </li>
        ))}
    </ul>
    </div>
  );
}
export default CityList;
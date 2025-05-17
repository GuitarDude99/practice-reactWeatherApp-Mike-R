import './App.css'
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CityList from './components/CityList';
import CityForecast from './components/CityForecast';


// This sets up routing for the app

function App() {
  
  return (
   <Router>
    <Routes>
    <Route path="/" element={<CityList />} />
    <Route path="/forecast/:cityName" element={<CityForecast />} />


    </Routes>
   </Router>
  )
}

export default App


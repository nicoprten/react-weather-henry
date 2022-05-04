import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Home from './components/Home';
import City from './components/City';

export default function App() {
  const [cities, setCities] = useState([]);
  let apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((data) => {
      if(data.main !== undefined){
        const ciudad = {
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
          img: data.weather[0].icon,
          id: data.id,
          wind: data.wind.speed,
          temp: data.main.temp,
          name: data.name,
          weather: data.weather[0].main,
          clouds: data.clouds.all,
          latitud: data.coord.lat,
          longitud: data.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      }else{
        alert('Ciudad no encontrada!');
      }
    })
  }

  function deleteCity(id){
    console.log(id);
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }

  function onFilter(id){
    let ciudad = cities.filter(c => c.id === parseInt(id))
    if (ciudad.length > 0){
      return ciudad;
    }else{
      return null;
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={"/about"} element={<About name='Nicolino'/>} />
        <Route path={'/city'} element={<Cards cities={cities} deleteCity={deleteCity}/>} />
        <Route path={'/city/:id'} element={<City onFilter={onFilter}/>} />
        {/* <Route path={"/cities"} element={<Cards cities={cities} deleteCity={deleteCity}/>} /> */}
      </Routes>
      {/* <Cards cities={cities} deleteCity={deleteCity}/> */}
    </div>
  );
}

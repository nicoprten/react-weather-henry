import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function City({onFilter}){
    const {id} = useParams();
    console.log(id)
    console.log(onFilter(id))
    const cityDetail = onFilter(id);
    console.log(cityDetail)
    // console.log(onFilter(id))
    if(cityDetail !== null){
        return(
            <div>
                <h2>{cityDetail[0].name}</h2>
                <p>TEMP: {cityDetail[0].temp}</p>
                <p>WIND: {cityDetail[0].wind}</p>
                <img src={`http://openweathermap.org/img/wn/${cityDetail[0].img}@2x.png`} alt={cityDetail[0].name}/>
                <Link to='/city'>
                    Volver a las ciudades
                </Link>
            </div>
        )
    }else{
        return(
            <h2>No existe la ciudad</h2>
        )
    }
}
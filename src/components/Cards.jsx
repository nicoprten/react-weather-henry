import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css';

export default function Cards({cities, deleteCity}) {
  // acá va tu código
  // tip, podés usar un map
  // console.log(cities)
  if(cities && cities.length > 0){
    return(
      <div className={styles.container}>
    {
      cities.map((citie) => {
        return <Card 
          key={citie.id}
          id={citie.id}
          max={citie.max}
          min={citie.min}
          name={citie.name}
          img={citie.img}
          deleteCity={deleteCity}
          // onClose={()=> alert(city.name)}
        />
      })
    }
  </div>
    )
  }else{
    return(
      <div className={styles.notFound}>
        <h2>No hay ciudades</h2>
      </div>
    )
  }
};
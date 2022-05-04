import React from 'react';
import styles from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.card_container}>
      <button className={styles.card_button} onClick={() => props.deleteCity(props.id)}>X</button>
      <Link to={`/city/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <div className={styles.card_detail}>
        <ul className={styles.card_list}>
          <div className={styles.card_temp}>
            <li>MIN</li>
            <li>{props.min}</li>
          </div>
          <div className={styles.card_temp}>
            <li>MAX</li>
            <li>{props.max}</li>
          </div>

        </ul>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={props.name}/>
      </div>
    </div>
  )
};
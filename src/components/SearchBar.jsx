import React, {useState} from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState([]);
  // console.log(city)

  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }
    } className={styles.container}>
      <input value={city} className={styles.input_search} type='text' placeholder='Search city' onChange={(e)=> {setCity(e.target.value)}}/>
      <input className={styles.search_button} value='Agregar' type='submit' />
    </form>
  )
};
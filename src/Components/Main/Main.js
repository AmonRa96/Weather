import axios from 'axios';
import { useState } from 'react';
import classes from './Main.module.css';
import humidity from '../Pictures/humidity.png';
import windy from '../Pictures/windy.png';
import feels from '../Pictures/feels.png';
import pressure from '../Pictures/pressure.png';
import visibility from '../Pictures/visibility.png';
import uv_index from '../Pictures/uv-index.png';



export const Main = () => {
  const [data,setData] =useState({});
  const[city,setCity] = useState('');

  const currentURL = `http://api.weatherstack.com/current?access_key=780c90701ebc031a4bff90c5ad5fff98&query=${city}`; 
  const searchLocation = (e) =>{
    return axios.get(currentURL).then((response)=>{
      setData(response.data);
      setCity('');        
    });
  };
 

  return (
    <main className={classes.main}>     
      <input className={classes.input} type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e)=>{setCity(e.target.value);}}/>
      <button className={classes.button} onClick={()=>{searchLocation();}}>Find</button> 
      <div className={classes.data}>       
        {data.current?  <div className={classes.countryName}>{data.location.name}</div> : null}
        {data.current?  <div className={classes.countryTemp}>{data.current.temperature}°C</div> : null}
        {data.current?  <div className={classes.weather_icons}><img src={data.current.weather_icons} alt=""/></div> : null}
        {data.current?  <div className={classes.weather_descriptions}>{data.current.weather_descriptions}</div> : null}
        <div className={classes.blocks}>
          {data.current?  <div className={classes.block}><p>FEELS LIKE</p> <img className={classes.Icon} src={feels} alt=""/>  {data.current.feelslike}°C</div> : null}
          {data.current?  <div className={classes.block}><p>WIND SPEED</p> <img className={classes.Icon} src={windy} alt=""/> {data.current.wind_speed} km/h</div> : null}
          {data.current?  <div className={classes.block}><p>PRESSURE</p><img className={classes.Icon} src={pressure} alt=""/> {data.current.pressure} hPa</div> : null}
          {data.current?  <div className={classes.block}><p>HUMIDITY</p><img className={classes.Icon} src={humidity} alt=""/> {data.current.humidity} %</div> : null}
          {data.current?  <div className={classes.block}><p>VISIBILITY</p><img className={classes.Icon} src={visibility} alt=""/>{data.current.visibility} km</div> : null}
          {data.current?  <div className={classes.block}><p>UV INDEX</p><img className={classes.Icon} src={uv_index} alt=""/>{data.current.uv_index}</div> : null}
        </div>
      </div>   
    </main>
  );
};
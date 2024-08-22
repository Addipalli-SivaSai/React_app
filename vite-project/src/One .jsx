import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
export const One  = () => {
  const [apiData,setapiData]=useState([])
useEffect(()=>{
 axios.get("https://freetestapi.com/api/v1/weathers").
 then(res=>setapiData(res.data))
 
},[])
console.log(apiData)
  return (
    <>
    {apiData.map((data)=>(
      <ul>
         <li>{data.id}</li>
         <li>{data.city}</li>
         <li>{data.country}</li>
         <li>{data.latitude}</li>
         <li>{data.longitude}</li>
         <li>{data.temperature}</li>
         <li>{data.weather_description}</li>
         <li>{data.humidity}</li>
         <li>{data.wind_speed}</li>
         {/* <li>{data.forecast}</li> */}
         {data.forecast.map((forcast)=>(
          <ol>
              <li>{forcast.date}</li>
              <li>{forcast.temperature}</li>
              <li>{forcast.weather_description}</li>
              <li>{forcast.humidity}</li>
              <li>{forcast.wind_speed}</li>
              <br/>
          </ol>
         ))}
         <br/>
      </ul>
    ))}
    </>
  )
}

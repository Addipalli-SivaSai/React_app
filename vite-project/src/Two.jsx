import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Two = () => {
   const [cityinfo,setCityInfo]=useState([])
   const [forcast1,setForcast]=useState({})
   useEffect(()=>{
    axios.get("https://freetestapi.com/api/v1/weathers?search=London").then(res=>setCityInfo(res.data[0],   setForcast(cityinfo["forecast"])
))

   },[])

   console.log("qdf",cityinfo)
    console.log("ret",forcast1)
  
  return (
    <>
      <ul>
         <li>{cityinfo.id}</li>
         <li>{cityinfo.city}</li>
         <li>{cityinfo.country}</li>
         <li>{cityinfo.latitude}</li>
         <li>{cityinfo.longitude}</li>
         <li>{cityinfo.temperature}</li>
         <li>{cityinfo.weather_description}</li>
         <li>{cityinfo.humidity}</li>
         <li>{cityinfo.wind_speed}</li>
          
         <br/>
      </ul>
    </>
  )
}

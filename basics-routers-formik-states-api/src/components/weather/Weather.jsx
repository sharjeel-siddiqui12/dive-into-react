import React, { useState, useEffect } from 'react'
import axios from 'axios'

function weather() {
    const [weatherData, setWeatherData] = useState({})
    const [cityName, setCityName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
        .then(response => {
            
            console.log('response', response)
            setWeatherData(response.data)
        })
        .catch(error => {
            console.log('error', error)
        })
    }
    

  return (
    
    <div>
        <form className='w-[100%]' onSubmit={submitHandler}>
            <input className='mt-10 border border-red-500 h-8' type="text" placeholder="Enter City Name" value={cityName} required onChange={(e) =>{ setCityName(e.target.value)  }}  />
            <button className='border border-black-800 text-[20px] h-8' type="submit">Get Weather</button>

        </form>
        
        <div className='flex justify-center align-middle flex-col text-[20px] text-blue-950 font-serif font-bold m-[30px] '>
            
        {
                weatherData.main && (
                    <>
                        Name: {weatherData?.name} <br/>
                        Temperature: {weatherData?.main?.temp}°C<br/>
                        Max Temperature: {weatherData?.main?.temp_max}°C<br/>
                        Min Temperature: {weatherData?.main?.temp_min}°C<br/>
                        Description: {weatherData?.weather[0].description}<br/>
                    </>
                )
            }


        </div>
    



    </div>
  )
}

export default weather

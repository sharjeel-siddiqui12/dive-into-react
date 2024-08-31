import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios'

function weatherFormik() {
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


<Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={ (values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="firstName">City Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" className='border border-black ml-3 mt-3'/><br />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" className='border border-black ml-3 mt-3' /><br />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          className='border border-black ml-3 mt-3'
        /> <br />
        <button className='border border-black ml-3 rounded p-2 w3 mt-3' type="submit ">Submit</button>
      </Form>
    </Formik>


        {/* <form className='w-[100%]' onSubmit={submitHandler}>
            <input className='mt-10 border border-red-500 h-8' type="text" placeholder="Enter City Name" value={cityName} required onChange={(e) =>{ setCityName(e.target.value)  }}  />
            <button className='border border-black-800 text-[20px] h-8' type="submit">Get Weather</button>

        </form>
         */}




        <div className='flex justify-center align-middle flex-col text-[20px] text-blue-950 font-serif font-bold m-[30px] '>
            
        {
                weatherData.main && (
                    <>
                        Name: {weatherData?.name} <br/>
                        Temperature{weatherData?.main?.temp}°C<br/>
                        Max Temperature {weatherData?.main?.temp_max}°C<br/>
                        Min Temperature{weatherData?.main?.temp_min}°C<br/>
                        Description{weatherData?.weather[0].description}<br/>
                    </>
                )
            }


        </div>
    



    </div>
  )
}

export default weatherFormik

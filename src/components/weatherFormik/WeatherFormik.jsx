import React, { useState, useEffect } from 'react'
import { Formik, Field, Form, useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'

function weatherFormik() {
    const [weatherData, setWeatherData] = useState({})
    

    const validationSchema = yup.object({
        cityName: yup
          .string('Enter your city name')
          .required('City name is required')
          .min(3, 'City Name should be of minimum 3 characters length')
          .max(20, 'City Name should be of maximum 20 characters length'),
      });

    const formik = useFormik({
        initialValues: {
          cityName: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        //   alert(JSON.stringify(values, null, 2));
          console.log('values', values)
        //   e.preventDefault();

          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${values.cityName}&units=metric&appid=e0f99c494c2ce394a18cc2fd3f100543`)
          .then(response => {
              
              console.log('response', response)
              setWeatherData(response.data)
          })
          .catch(error => {
              console.log('error', error)
          })
        }
        });


  return (
    
    <div>
        <form onSubmit={formik.handleSubmit}>City Name:
            <input
            
            id="cityName"
            name="cityName"
            label="City Name"
            value={formik.values.cityName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            className='border border-black ml-3 mt-3'
            /> 
            {(formik.touched.cityName && Boolean(formik.errors.cityName))? 
            <span className='text-red-600 ml-2'>{formik.errors.cityName}</span>:
            null
            }           
            <br />
            <button className='border border-black ml-[88px] rounded p-2 w3 mt-3'  type="submit">
            Submit
            </button>
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

export default weatherFormik

import React, { useState, useEffect } from 'react'
import { Formik, Field, Form, useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'

function FormikEmailPass() {
    const [weatherData, setWeatherData] = useState({})
    const [cityName, setCityName] = useState("")


    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        //   alert(JSON.stringify(values, null, 2));
          console.log('values', values)
        }
        });

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
        <form onSubmit={formik.handleSubmit}>
            <input
            
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
            //   error={}
            //   helperText={formik.touched.email && }
            className='border border-black ml-3 mt-3'
            /> 
            {(formik.touched.email && Boolean(formik.errors.email))? 
            <span className='text-red-600 ml-2'>{formik.errors.email}</span>:
            null
            }

            <br />
            <input
            
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

            //   error={formik.touched.password && Boolean(formik.errors.password)}
            //   helperText={formik.touched.password && formik.errors.password}
            className='border border-black ml-3 mt-3'
            /> 
            {(formik.touched.password && Boolean(formik.errors.password))? 
            <span className='text-red-600 ml-2'>{formik.errors.password}</span>:
            null
            }

            <br />
            <button className='border border-black ml-3 rounded p-2 w3 mt-3'  type="submit">
            Submit
            </button>
        </form>



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

export default FormikEmailPass

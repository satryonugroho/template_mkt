import React, { useEffect } from 'react'
import reactLogo from '../../assets/imgs/react.svg'
import viteLogo from '../../assets/imgs/vite.svg'
import tailwindLogo from '../../assets/imgs/tailwind.svg'
import axios from 'axios'

const Home = () => {
  useEffect(()=>{
    let data = JSON.stringify({
      "username": "SatryoNugroho",
      "password": "Zenita19"
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8080/api/user',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log("Response: ",response);
    })
    .catch((error) => {
      console.error("Error: ",error);
    });
  },[])
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='flex'>
          <img src={viteLogo} alt="vite logo" className='h-32 w-32 animate-pulse' />
          <img src={reactLogo} alt="react logo" className='h-32 w-32 animate-pulse' />
          <img src={tailwindLogo} alt="tailwind logo" className='h-32 w-32 animate-pulse' />
        </div>
        Vite/React + Tailwind + Heroicons
    </div>
  )
}

export default Home
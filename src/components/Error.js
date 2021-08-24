import React from 'react'
import Loading from './Loading'
import { useState,useEffect } from 'react'

const Error = () => {

const [seconds,setSeconds] = useState(3);

useEffect(() => {

  if(seconds > 0){
    setTimeout(() => {
      setSeconds(seconds - 1)
    }, 1000);
  }
  else{
    setSeconds(` Finished ...`);
  }
},[seconds])


  return <div className="section section-center text-center">
  <h3>An error were occured due to multiple bugs ... you will be redirected to Home
    {  seconds <= 3 ? ' in':' ' } 
   <span>  {seconds} </span>
  </h3>
  <Loading />
</div>


 
}

export default Error

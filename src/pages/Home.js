import React from 'react'
import { Link } from 'react-router-dom'
import Body from '../components/Body'
import { swiggyUrl } from '../utils/url'
import { useState,useEffect } from 'react'

const Home = () => {


    const [url,setUrl] = useState([])
    let  fetchFunc = async function(){
        let response = await fetch(swiggyUrl)
        let data = await response.json()
        
        setUrl(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,)
        }
        useEffect(()=>{
            
            fetchFunc()
        },[])     



  return (
    <div>
     <Body url={url} />
    </div>
  )
}

export default Home

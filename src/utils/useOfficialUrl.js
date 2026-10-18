import React from 'react'
import { useState,useEffect } from 'react'
import { swiggyUrl } from './url'
import { useContext } from 'react'
import hotelListContext from './hotelListContext'
const useOfficialUrl = () => {

const [url,setUrl] = useState([])

let {hotelList,setHotelList,setAllItems} = useContext(hotelListContext)


    let  fetchFunc = async function(){
        let response = await fetch(swiggyUrl)
        let data = await response.json()
        
        setUrl(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants,)


            setAllItems(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)


            setHotelList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants)
        }
        useEffect(()=>{
            
            fetchFunc()
        },[])     


  return hotelList
}

export default useOfficialUrl;

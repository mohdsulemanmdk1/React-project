import React from 'react'
import { baseUrl } from '../utils/url'
const AccBody = ({ details }) => {
  console.log(details)

  const {name,price,imageId,description,ratings} = details
  return (
    <div className='acc-body'>
      <div className='acc-body-sec1'>

        <h4>{name}</h4>
        <p>price:{price/100}</p>
        <p>rating: {ratings.aggregatedRating.rating}</p>
        <p>{description}</p>
      </div>
      <div className='acc-body-sec2'>

        <img className='acc-body-img' src={baseUrl + imageId} />
      </div>
    </div>
  )
}

export default AccBody

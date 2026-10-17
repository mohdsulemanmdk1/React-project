import React from 'react'
import { baseUrl } from '../utils/url'
import {Link} from 'react-router-dom'

const Card = ({url}) => {

  return (
    <Link to={`/menuCard/${url.info.id}`}>
    <div className='card'>
      <img className='card-img' src={baseUrl + url.info.cloudinaryImageId
}/>
      <div className='card-details'> 
        <h3>-{url.info.name}</h3>
        <h4>{url.info.cuisines}</h4>
      </div>
    </div>
</Link>
  )
}

export default Card

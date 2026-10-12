import React from 'react'
import { baseUrl } from '../utils/url'

const MenuCardDetails = ({ menu }) => {
  
    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        totalRatingsString
    } = menu.data.cards[2].card.card.info

    return (
        <div>
            <h1 className='MenuCardDetails-name'>{name}</h1>
            <img className='MenuCardDetails-img' src={baseUrl + cloudinaryImageId} />

            <h4 className='MenuCardDetails-rating'>-Rating: {avgRating} ({totalRatingsString})</h4>
            <h4>-Cost For Two: {costForTwo}</h4>
            <h4>- {cuisines}</h4>
            
        </div>
    )
}

export default MenuCardDetails

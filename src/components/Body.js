import React from 'react'
import Card from './Card'
import Shimmer from './Shimmer'
import { useContext } from 'react'
import hotelListContext from '../utils/hotelListContext'
import useDiscountLable from '../utils/useDiscountLable'
const Body = ({ url }) => {
  const {hotelList} = useContext(hotelListContext)

    const DiscountCard = useDiscountLable(Card)

  if (!hotelList || hotelList.length === 0) {
    return <div className='shimmer-container'>

      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  }
  return (
    <div className='body'>
      {
        hotelList.map((e) => {
          let logic = e.info.aggregatedDiscountInfoV3;
          return <div key={e.info.id}>
            {logic? <DiscountCard url={e}  />
          : ( 
          <Card url={e} />)
          }
          </div> 

        })
      }

    </div>
  )
}

export default Body

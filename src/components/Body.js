import React from 'react'
import Card from './Card'
import Shimmer from './Shimmer'
const Body = ({ url }) => {
  if (url.length === 0) {
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
        url.map((e) => {
          return <Card url={e} key={e.info.id} />

        })
      }

    </div>
  )
}

export default Body

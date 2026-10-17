import React, { useState } from 'react'
import AccBody from './AccBody'
const MenuCategory = ({ category,command,setIndex}) => {




  const [showItems,setShowItems ] = useState(command)
  return (
    <div className='category'>
      <div className='accordian-head' onClick={()=>{
        setIndex()
        setShowItems(!showItems)
      }} >

        <p className='acc-head-title'>{category.title}</p>
       {command?  <p>⬆️</p> :  <p>⬇️</p>}
      </div>

{ command  ?

        <div className='accordian-body'>


          {category.itemCards.map((elem) => {
            return (
              <AccBody details={elem.card.info} key={elem.card.info.id} />
            )
          })}

        </div>  
        : <div></div>
        }
    </div>
  )
}
export default MenuCategory 


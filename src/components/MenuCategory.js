import React from 'react'
import { baseUrl } from '../utils/url'
import AccBody from './AccBody'
const MenuCategory = ({ category }) => {
  // console.log(category)
  return (
    <div className='category'>
      <div className='accordian-head'>

        <p className='acc-head-title'>{category.title}</p>
        <p>⬇️</p>
          </div>
        <div className='accordian-body'>
          {category.itemCards.map((elem) => {
            return (
              // console.log(elem.card.info);

              <AccBody details={elem.card.info} key={elem.card.info.id} />
            )
          })}

        </div>


    </div>
  )
}
export default MenuCategory 

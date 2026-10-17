import React from 'react'
import { useState } from 'react'
import MenuCardDetails from './MenuCardDetails'
import MenuCategory from './MenuCategory'
import useFetchUrl from '../utils/useFetchUrl'
import useFetchCategory from '../utils/useFetchCategory'

const MenuCard = () => {

  const [showIndex,setShowIndex ] = useState()

  const menu = useFetchUrl() //menu
  const menu1 = useFetchCategory() //filterdArr

  if (menu == null) {
    return <h2>Loading menu...</h2>
  }

  return (
    <div className='menuCard'>
      <MenuCardDetails menu={menu} />
      {menu1.map((e,index) => {
        return <MenuCategory category={e.card.card} key={e.card.card.categoryId} command={index == showIndex ? true : false } 
        setIndex={()=>{
          setShowIndex(index)
        }}
        />

      })}
      {/* {menu1.map((e,index) => {
        return <MenuCategory category={e.card.card} key={e.card.card.categoryId} command={index == showIndex ? true : false } 
        setIndex={()=>{
          setShowIndex(index)
        }}
        />

      })} */}
    </div>
  )
}
export default MenuCard;


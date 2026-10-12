import React from 'react'
import { menuApi } from '../utils/url'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MenuCardDetails from './MenuCardDetails'
import MenuCategory from './MenuCategory'

const MenuCard = () => {
    const [menu,setMenu] = useState(null)
    const { id } = useParams();
    async function menuFetch(){
        let response = await fetch(menuApi + id );
        let data = await response.json();
        
        setMenu(data)
        // console.log(data)
        
    }
    
    useEffect(()=>{
        
        menuFetch()
    },[])
    
    if (menu == null ) {
  return <h2>Loading menu...</h2>
}


 let arr =   menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards

 let filteredArr=  arr.filter((e)=>{
      if(e.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
        return true;
      }
else{
  return false;
}
})
// console.log(filteredArr)




  return (
    <div className='menuCard'>
      <MenuCardDetails menu={menu}/>
      {filteredArr.map((e)=>{
        // console.log(e.card.card.categoryId)
      return  <MenuCategory category={e.card.card}  key={e.card.card.categoryId}/>
      })}
    </div>
  )
}
export default MenuCard


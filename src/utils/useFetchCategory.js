import useFetchUrl from "./useFetchUrl";
// import MenuCategory from "../components/MenuCategory";

const useFetchCategory = ()=>{

    const menu = useFetchUrl()
     if(menu == null){
        return []
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
    return filteredArr
}


export default useFetchCategory;
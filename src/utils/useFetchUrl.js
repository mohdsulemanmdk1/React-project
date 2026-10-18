import { menuApi } from "./url";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const useFetchUrl = ()=>{


const [menu,setMenu] = useState(null)
    const { id } = useParams();
    async function menuFetch(){
        let response = await fetch(menuApi + id );
        let data = await response.json();



        setMenu(data)
        console.log(data)
        
    }

 useEffect(()=>{
  menuFetch()
 },[id])   

    return menu ;
}

export default useFetchUrl;
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId)=>{

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data1 = await fetch(MENU_API + resId);
        const json   =  await data1.json();
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu;
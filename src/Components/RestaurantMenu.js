import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu=()=>{

    const [resInfo,setResInfo]  = useState(null);

    const {resId} = useParams();

    const [showIndex , setShowIndex] = useState(0);
    // console.log(resId);
    useEffect(()=>{
        fetchMenu();   
    },[]);
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId); 
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }
    
    const {name,cuisines,avgRating,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info|| 'loading api data';
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || 'loading api data';
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(itemCards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);

    if(resInfo===null) return <Shimmer/>;
    return (
        <div className="text-center">
            <h1 className="font-extrabold my-6  text-2xl">{name}</h1>
            <h3 className="text-lg font-bold">{avgRating}stars . {costForTwoMessage}</h3>
            <p className="font-bold">{cuisines.join(", ")}</p>
            {/* cata=egories accordian */}
            {categories.map((category,index)=><RestaurantCatagory 
            key = {category?.card?.card?.title}
            data={category?.card?.card} 
            showItems = {index === showIndex ? true : false}
            setShowIndex = {()=>setShowIndex(index)}
            />)}
            <h2>Menu</h2>
            <ul>
                {itemCards.map( item => <li key ={item.card.info.id}>
                    {item.card.info.name}-{"Rs "}
                    {item.card.info.price/100}
                </li> )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;
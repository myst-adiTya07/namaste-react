import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    const [searchedText,setSearchedText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2391043&lng=82.9725811&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json);

        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (<h1>
            Are INTERNATE connect kro BC!!
        </h1>)
    }

    const {loggedInUser, setUserName} = useContext(UserContext);
    // console.log(listOfRestaurant );
    return listOfRestaurant?.length === 0?(<Shimmer />):(
        <div className="body">
            <div className="filter flex items-center">
                <div className="search p-4 ">
                    <input 
                        type="text" className="px-6 py-1 border border-solid border-black" value={searchedText}
                        onChange={(e)=>{
                            setSearchedText(e.target.value);
                        }}
                    />
                    <button className="px-3.5 py-1.5 bg-teal-400 hover:bg-blue-300 "  onClick={()=>{
                        //Filter the restau.. cards and update the ui
                        console.log(searchedText);
                        const filteredRestaurants =  listOfRestaurant?.filter((res) => res.info.name.toLowerCase().includes(searchedText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <div className="mx-auto px-4 py-0.5 flex items-center">
                <button className="px-4 py-1 bg-teal-300  border border-black rounded-lg" onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res) =>res.info.avgRating > 4
                    );
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
                <div className=" px-4 py-0.5 flex items-center">
                    <label className="m-4 font-semibold">UserName : </label>
                    <input className="px-auto bg-teal-300 border border-black p-1 rounded-md" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants?.map((restaurant) =>(
                    <Link key ={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {
                            restaurant?.info?.type?<RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant}/>
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
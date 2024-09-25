import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;
    return(
        <div className="p-4 m-6 w-[250px] rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300">
            <img className=" rounded-lg" alt="res-logo" src={CDN_URL
                 +
                cloudinaryImageId
            }/>
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ✨</h4>
            <h4>{costForTwo}</h4>   
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
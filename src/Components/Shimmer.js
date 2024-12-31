import ShimmerFilters from "./Shimmer/ShimmerFilter";
import ShimmerHeader from "./Shimmer/ShimmerHeader";
import ShimmerRestaurants from "./Shimmer/ShimmerRestaurant";

const Shimmer = ()=>{
    return (
    <div className="min-h-screen bg-gray-50">
      {/* <ShimmerHeader/> */}
      <ShimmerFilters />
      <ShimmerRestaurants />
    </div>
    );
};

export default Shimmer;
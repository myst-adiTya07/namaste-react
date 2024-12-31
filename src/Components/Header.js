import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const  [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log({data});
// subscribe to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-3">
                    <li className="px-4 font-serif">Online Status: {onlineStatus?"✅":"🛑"}</li>
                    <li className="px-4 font-serif"><Link to="/">Home</Link></li>
                    <li className="px-4 font-serif">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 font-serif">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-serif">
                    <Link to="/cart" className="font-semibold">Cart({cartItems.length})</Link>
                    </li>
                    <li className="px-4 font-bold font-serif">{loggedInUser}</li>
                    <button className="login font-serif bg-amber-500 rounded-md text-white hover:bg-blue-300 p-1.5" onClick={()=>{
                        btnName === "Login"?setBtnName("Logout"):setBtnName("Login");   
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
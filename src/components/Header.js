import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100-lg shadow-lg sm: bg-yellow-50 lg:bg-green-50 font-semibold text-xl">
      <div className="logo-container">
        <img className="w-20 rounded-full shadow-xl" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status:{onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">
              {" "}
              Cart: 🛒(
              {cartItems.length === 1
                ? `${cartItems.length} item`
                : `${cartItems.length} items`}
              )
            </Link>
          </li>
          {/* <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("LogOut")
                : setbtnNameReact("Login");
            }}
          >
            {" "}
            {btnNameReact}
          </button>  */}
          {/* // <li className="px-4">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;

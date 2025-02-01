import React, { useContext } from "react";
import "./FoodItems.css";
import { assets } from "../../Assets/assets";
import { MyContext } from "../../Context/MyContext";

export default function FoodItems({ id, name, price, description, image }) {

  // const [ItemCount,setItemCount] = useState(0);
  const {cartItems,addtoCart,removefromCart} = useContext(MyContext)

  return (
    <div className="food-items">
      <div className="food-items-img-container">
        <img src={image} alt="" className="food-items-image" />
        {!cartItems[id]
          ?<img onClick={()=>addtoCart(id)} className="add" src={assets.add_icon_white} alt="" />
          :<div className="food-items-count">
            <img onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="food-items-info">
        <div className="food-items-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-items-description">{description}</p>
        <p className="food-items-price">₹{price}</p>
      </div>
    </div>
  );
}

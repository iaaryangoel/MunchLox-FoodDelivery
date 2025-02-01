import React, { useContext } from "react";
import "./Cart.css";
import { MyContext } from "../../Context/MyContext";
import { assets, food_list } from "../../Assets/assets";
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cartItems, addtoCart, removefromCart, getcartTotal } = useContext(MyContext);

  const navigate = useNavigate();

  const handlecartItems = (item, val) => {
    if (cartItems[item._id] > 0) {
      return (
        <div>
          <div className="cart-items-title cart-items-item">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>₹{item.price * cartItems[item._id]}</p>
            {/* <p onClick={()=>removefromCart(item._id)} className="remove-cross">x</p> */}
            <div className="food-items-count">
              <img onClick={()=>removefromCart(item._id)} src={assets.remove_icon_red} alt="" />
              <img onClick={()=>addtoCart(item._id)} src={assets.add_icon_green} alt="" />
            </div>
          </div>
          <hr />
        </div>
      );
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          {/* <p>Remove</p> */}
        </div>
        <br />
        <hr />
        {food_list.map((item, val) => handlecartItems(item, val))}
      </div>
      <div className="cart-bottom">
        <div className="cart-bottom-total">
          <h2>Cart Summary</h2>
          <div>
            <div className="cart-bottom-total-details">
              <p>Subtotal</p>
              <p>₹{getcartTotal()}</p>
            </div>
            <hr />
            <div className="cart-bottom-total-details">
              <p>Delivery Charges</p>
              <p>₹{getcartTotal()===0?0:20}</p>
            </div>
            <hr />
            <div className="cart-bottom-total-details">
              <b>Total Amount</b>
              <b>₹{getcartTotal()+(getcartTotal()===0?0:20)}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Want extra discount? Enter promocode:</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import "./OrderPlacing.css";
import { MyContext } from "../../Context/MyContext";

export default function OrderPlacing() {
  const { getcartTotal } = useContext(MyContext);

  return (
    <form className="order-placing">
      <div className="order-placing-left">
        <p className="title">Delivery Information</p>
        <div className="info-inputs">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email" />
        <div className="info-inputs">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="info-inputs">
          <input type="text" placeholder="Pincode" />
          <input type="text" placeholder="Country" />
        </div>
      </div>
      <div className="order-placing-right">
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
              <p>₹{getcartTotal() === 0 ? 0 : 20}</p>
            </div>
            <hr />
            <div className="cart-bottom-total-details">
              <b>Total Amount</b>
              <b>₹{getcartTotal() + (getcartTotal() === 0 ? 0 : 20)}</b>
            </div>
          </div>
          <button>Proceed to Pay</button>
        </div>
      </div>
    </form>
  );
}

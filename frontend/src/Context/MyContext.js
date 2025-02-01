import { createContext, useState } from "react";
import { food_list } from "../Assets/assets";

export const MyContext = createContext(null);

export default function MyContextProvider(props) {
  const [cartItems, setCartItems] = useState({});

  const addtoCart = (itemid) => {
    if (!cartItems[itemid]) {
      setCartItems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removefromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const getcartTotal = () => {
    let cartTotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        cartTotal += itemInfo.price * cartItems[item];
      }
    }
    return cartTotal;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtoCart,
    removefromCart,
    getcartTotal
  };
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

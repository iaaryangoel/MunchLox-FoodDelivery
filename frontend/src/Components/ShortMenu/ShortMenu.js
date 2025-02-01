import React from "react";
import "./ShortMenu.css";
import { menu_list } from "../../Assets/assets";

export default function ShortMenu({ category, setCategory }) {
  const handleCategory = (item) => {
    setCategory((prev) =>
      prev === item.menu_name ? "neutral" : item.menu_name
    );
  };

  const PrintItems = (item, val) => {
    return (
      <div
        onClick={() => handleCategory(item)}
        key={val}
        className="short-menu-list-items"
      >
        <img
          className={category === item.menu_name ? "on" : ""}
          src={item.menu_image}
          alt=""
        />
        <p className={category === item.menu_name ? "paraon" : ""}>
          {item.menu_name}
        </p>
      </div>
    );
  };

  return (
    <div className="short-menu" id="short-menu">
      <h1>Discover our exquisite menu</h1>
      <p className="short-menu-para">
        Indulge in a variety of mouthwatering dishes, crafted to delight your
        taste buds and enhance your dining experience.
      </p>
      <div className="short-menu-list">
        {menu_list.map((item, val) => PrintItems(item, val))}
      </div>
      <hr />
    </div>
  );
}

import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ShortMenu from "../../Components/ShortMenu/ShortMenu";
import BigMenu from "../../Components/BigMenu/BigMenu";
import Download from "../../Components/Download/Download";

export default function Home() {
  
  const [category,setCategory] = useState("neutral");

  return (
    <div>
      <Header />
      <ShortMenu category={category} setCategory={setCategory} />
      <BigMenu category={category} />
      <Download/>
    </div>
  );
}

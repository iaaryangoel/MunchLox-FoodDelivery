import React, { useContext } from 'react'
import './BigMenu.css'
import {MyContext} from '../../Context/MyContext'
import FoodItems from '../FoodItems/FoodItems'

export default function BigMenu({category}){

  const {food_list} = useContext(MyContext)
  
  const handleFoodList = (item,val) => {
    if(category==="neutral" || category===item.category){
      return(
          <FoodItems key={val} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
      )
    }
  }

  return (
    <div className='big-menu' id='big-menu'>
      <h2>Top Dishes near you</h2>
      <div className="big-menu-list">
        {food_list.map((item,val)=>handleFoodList(item,val))}
      </div>
    </div>
  )
}


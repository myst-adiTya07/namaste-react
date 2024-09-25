import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCatagory = ({data , showItems , setShowIndex} ) => {
  // console.log(data)
  const handleClick = ()=>{
    // setShowItems(!showItems);
    setShowIndex();
  }
  return (
    /*{header}*/
    <>
    <div className='w-6/12 mx-auto my-4 bg-white shadow-lg p-4 '>
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
       <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
       <span>{showItems == false ? "⬇️" : "⬆️"}</span>
      </div>
       {showItems && <ItemList items={data.itemCards}/>}
    </div>
    </>
  )
}

export default RestaurantCatagory
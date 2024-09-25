import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items}) => {
// console.log(items);

const dispatch = useDispatch();

const handleAddItem = (item)=>{
    dispatch(addItem(item));
};

  return (
    <div>
            {items.map((item) =>(
                <div key={item.card.info.id}
                    className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'
                >
                    <div className='w-9/12'>
                        <div className='py-2'>
                            <span className='font-semibold text-gray-900 text-lg'>{item.card.info.name}</span> <br/>
                            <span className='font-bold text-sm'> ₹{item.card.info.price/100}</span>
                        </div>
                        <p className='text-xs'>{item.card.info.description}</p>
                    </div>
                    
                    <div className='w-3/12 p-4'>
                        <div className='absolute'>
                            <button className='p-2 bg-white shadow-lg mx-16 rounded-xl hover:bg-gray-200'
                            onClick={()=>handleAddItem(item)}>
                                <span className='text-green-700 font-extrabold'>ADD+</span>
                            </button>
                        </div>    
                        <img src={CDN_URL + item.card.info.imageId} className='w-full rounded-xl'/>
                    </div>

                </div>
            ))}
    </div>
  )
}

export default ItemList;
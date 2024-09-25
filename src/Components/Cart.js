import React from 'react'
import { clearCart } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';

//subscribe to store



const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () =>{
    dispatch(clearCart());
  }
  return (
    <div className='text-center m-4 p-4'>
       <h1 className='text-2xl font-bold'>Cart</h1>
       <div className='w-6/12 m-auto'>
       <button className='p-2 m-2 bg-black text-white , rounded-lg' onClick={handleClearCart}>Clear Cart</button>
       {cartItems.length === 0 && <h1 className='font-bold text-pink-600'>Na Chhedo Hme... Hm Sataye Huye Hai...😭</h1>}
        <ItemList items = {cartItems}/>
        </div> 
    </div>
  )
}

export default Cart
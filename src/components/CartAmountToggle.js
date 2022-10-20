import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartAmountToggle = ({amount,setDecrese, setIncrease}) => {
  return (
    <div className='cart-button'>
      <div className='amount-toggle'>
        <button onClick={()=>setDecrese()}>
            <FaMinus />
        </button>
        <div className='amount-style'>{amount}</div>
         <button onClick={()=>setIncrease()}>
            <FaPlus />
         </button>
      </div>
    </div>
  );
}

export default CartAmountToggle

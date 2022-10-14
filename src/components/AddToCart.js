import React, { useState } from 'react'
import styled from 'styled-components';
import {FaCheck} from 'react-icons/fa'
const AddToCart = ({product}) => {
    const {id, colors, stock} = product;
    const [color, setColor] = useState(colors[0]);
  
    
  return (
    <Wrapper>
      <p>
        Colors:
        {
           colors.map((curColor,index) =>{
            return <button key={index} style={{backgroundColor:curColor}}
            className={color === curColor ? "btnStyle active" : "btnStyle"}
            onClick={()=> setColor(curColor)}>
             {color===curColor ? <FaCheck className="checkStyle"/> : null}
            </button>
           })
        }
      </p>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.colors p{
    display:flex;
    justify-content:flex-start;
    align-item:center;
}`
export default AddToCart

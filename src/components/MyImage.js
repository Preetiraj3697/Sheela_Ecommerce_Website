import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
const MyImage = ({imgs = [{url:""}]}) => {
  const [mainImage , setMainImage] = useState(imgs[0]);

  console.log('imgs: ', imgs);
  return (
    <Wrapper>
      <div className='grid grid-four-column'>
       {
        imgs.map((curElem,index)=>{
          return(
            <figure>
              <img src={curElem.url} alt={curElem.filename} className="box-image-style"  key={index} onClick={()=> setMainImage(curElem)}/>
            </figure>
          )
        })
       }
      </div>
    {/* 2 column */}
    <div className='main-screen'>
      <img src={mainImage.url} alt={mainImage.filename} />
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display:grid;
grid-template-columns:0.4fr 1fr;
gap:1rem;
img{
  width:100px;
}
`
export default MyImage

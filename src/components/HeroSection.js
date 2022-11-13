import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button} from '../styles/Button'
import styled from 'styled-components';
const HeroSection = ({myData}) => {
    // console.log(myData)
    const {name}=myData;
  return (
    <Wrapper>
     <div className='container'>
        <div className="grid grid-two-column">
            <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
                <h1>{name}</h1>
                <p>Whoever said cash can’t purchase joy basically didn’t know where to go shopping.
                Shopping is somewhat of a loosening upside interest for me, or, in other words for the bank balance.</p>
             <NavLink to="/products">
                <Button>Shop Now</Button>
             </NavLink>
            </div>
            <div className="hero-section-image">
         <figure>
            <img src="images/hero.jpg" alt="hero-section-photo" className="img-style"/>
         </figure>
            </div>
        </div>
     </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 12rem 0;
img {
  min-width: 10rem;
  height: 10rem;
}
.hero-section-data {
  p {
    margin: 2rem 0;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }
  .intro-data {
    margin-bottom: 0;
  }
}
.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;
  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }
  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;
export default HeroSection

import styled from "styled-components";
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import FormatPrice from "./Helpers/FormatPrice";

const API = "https://api.pujakaitem.com/api/products"
const SingleProduct = () => {
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
   console.log('SingleProduct: ', singleProduct);
  const {id} = useParams();
  // console.log('id: ', id);
   const {id: sheela,image,name,company, description,category,stock,stars,reviews,price} = singleProduct;
  useEffect(()=>{
  getSingleProduct(`${API}?id=${id}`)
  },[])
  return <Wrapper>
    <img src={image} alt="image" />
    <h3>Name : {name}</h3>
  <h3>Company : {company}</h3>
  <p>Description : {description}</p>
  <h3 className="product-data-price">Price : <FormatPrice price={price}/></h3>
  <h3>Category : {category}</h3>
  <h3>Stock : {stock}</h3>
  <h3>Stars : {stars}</h3>
  <h3>Reviews : {reviews}</h3></Wrapper>;
}





const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

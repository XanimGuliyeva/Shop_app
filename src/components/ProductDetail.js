import React, { useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getProductById} from '../fetcher'
import styled from 'styled-components'

const ProductDetail = () => {

  const [product,setProduct] = useState({errorMessage:'', data:{} })
  const {productId} = useParams();

  // const [product,setProduct] = useState({errorMessage:'', data:[]});
  useEffect(()=>{
    const fetchdata = async () => {
      // const responseObject = await fetcher("/categories");
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    }
    fetchdata();
  },[productId])

  //styled components
  const GeneralDiv = styled.div`
  display: flex
  `

  //to Markup(html code inside db.json)
  const createMarkup = ()=>{
    return {__html: product.data?.description}
  }
  return (
    <GeneralDiv style={{display:'flex'}} key={product.data.id}>
        <img alt={product.data.title} style={{width:'450px',height:'350px'}} src={`/assest/${product.data.image}`}/>
        <div style={{margin:'45px 0px'}}>
          {product.data.title} - <span>&#8364;{product.data.price}</span> <br/>
          <span>Stock - {product.data.stock}</span>  <br/> <br/>  
          <span dangerouslySetInnerHTML={createMarkup()}></span>  <br/> <br/>
          <button>Add to basket</button> <br/>
        </div>
    </GeneralDiv>
  )
}

export default ProductDetail;

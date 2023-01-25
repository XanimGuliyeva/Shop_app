import React, { useContext } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {CartContext} from '../context/CartContext'

const CategoryProduct = ({id,title,image,price})=> {

  const cartContext = useContext(CartContext);
  const addProduct = cartContext;
  const navigate = useNavigate();

  return (
    <div style={{display:'flex'}} key={id}>
        <img alt='img' style={{width:'150px',height:'150px'}} src={`/assest/${image}`}/>
        <div>
          <Link to={`/products/${id}`}>{title}</Link> - <span>&#8364;{price}</span> <br/>
           <br/>
          <button onClick={()=>navigate(`/products/${id}`)} style={{margin:'10px'}}>View Product</button> <br/>
          <button onClick={()=> addProduct({id,title,price})} style={{margin:'10px'}}>Add to basket</button> <br/>
        </div>
    </div>
  )
}

export default CategoryProduct;
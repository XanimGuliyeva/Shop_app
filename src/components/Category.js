import React, { useEffect } from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { getProducts} from '../fetcher'
import CategoryProduct from './CategoryProduct';




const Category = ({id,title,onCategoryClick})=> {

  const [products,setProducts] = useState({errorMessage:'', data:[] })
  const {categoryId} = useParams();

  useEffect(()=>{
    const fetchdata = async () => {
      // const responseObject = await fetcher("/categories");
      const responseObject = await getProducts(categoryId);
      setProducts(responseObject);
    }
    fetchdata();
  },[categoryId])

  
  const renderProducts = () => {
    return products.data.map(d => 
      <CategoryProduct key={d.id} {...d}>{d.title}</CategoryProduct>
    )
  };


  return (
    <div >
        <h1>Products</h1>
          {products.errorMessage && <div>Error: {products.errorMessage}</div>}
          {products.data && renderProducts()}
    </div>
  )
}

export default Category;
import React,{useEffect,useState} from 'react'
import { getProductsByQuery} from '../fetcher'
import {useSearchParams} from 'react-router-dom'
import CategoryProduct from './CategoryProduct';

const SearchResult = () => {
    const [products,setProducts] = useState({errorMessage:'', data:[] });
    const [searchParams] = useSearchParams();
    const query = searchParams.get('s');

    useEffect(()=>{
        const fetchdata = async () => {
          const responseObject = await getProductsByQuery(query);
          setProducts(responseObject);
        }
        fetchdata();
      },[query])

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

export default SearchResult
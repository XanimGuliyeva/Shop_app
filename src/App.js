import './App.css';
import React, { useEffect, useState } from 'react';
import Category from './components/Category';
import {getCategory,getProducts} from './fetcher'
import CategoryProduct from './components/CategoryProduct';


function App() {
  const [categories,setCategories] = useState({errorMessage:'', data:[]});
  const [products,setProducts] = useState({errorMessage:'', data:[]});

  
  useEffect(()=>{
    const fetchdata = async () => {
      // const responseObject = await fetcher("/categories");
      const responseObject = await getCategory();
      setCategories(responseObject);
    }
    fetchdata();
  },[])


  const handlecategoryClick = id => {
    const fetchdata = async () => {
      // const responseObject = await fetcher("/products?catId="+id);
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchdata();

    // fetch(
    //   "http://localhost:3000/products?catId="+id)
    //               .then(res => res.json())
    //               .then(data => {setProducts(data)})
  }

  const renderCategory = () => {
    // const categories = [];
    // for(let i=0; i<results.length; i++){
    //   categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title}/>)
    // }
    // return categories;

    return categories.data.map(d => 
          <Category key={d.id} id={d.id} title={d.title} onCategoryClick={()=>handlecategoryClick(d.id)}/>
    )
  };

  const renderProducts = () => {
    return products.data.map(d => 
      <CategoryProduct key={d.id} {...d}>{d.title}</CategoryProduct>
    )
  };


  return (
    <React.Fragment>
      <header>
        My Store
      </header>
      <section>
          <nav>
            {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
              {
                categories.data && renderCategory()
              }
          </nav>
          <article>
            <h1>Products</h1>
            {products.errorMessage && <div>Error: {products.errorMessage}</div>}
            {products.data && renderProducts()}
          </article>
        </section>
        <footer>
              Footer
        </footer>
    </React.Fragment>
  );
}

export default App;

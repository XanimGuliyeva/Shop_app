import "./App.css";
import React, { useEffect, useState } from "react";
import { getCategory } from "./fetcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Basket from "./components/Basket";
import Category from "./components/Category";
import Checkout from "./components/Checkout";
import Layout from "./components/Layout";
import Home from "./components/Home";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  const [categories, setCategories] = useState({ errorMessage: "", data: [] });

  useEffect(() => {
    const fetchdata = async () => {
      // const responseObject = await fetcher("/categories");
      const responseObject = await getCategory();
      setCategories(responseObject);
    };
    fetchdata();
  }, []);

  /*
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
*/

  // const renderProducts = () => {
  //   return products.data.map(d =>
  //     <CategoryProduct key={d.id} {...d}>{d.title}</CategoryProduct>
  //   )
  // };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="orderconfirmation" element={<OrderConfirmation/>} />
            <Route path="products/:productId" element={<ProductDetail />} />
            <Route path="categories/:categoryId" element={<Category />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Basket from './components/Basket';
import Checkout from './components/Checkout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='basket' element={<Basket/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='products/:productId' element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



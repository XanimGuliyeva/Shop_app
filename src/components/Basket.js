import React,{useContext,useEffect,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {CartContext} from '../context/CartContext'


const Basket = () => {

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const {getItems,clearBasket,increaseQuantity,decreaseQuantity,removeProduct} =  useContext(CartContext);


  useEffect(()=>{
    //const cartItems = getItems();
    //setCartItems(cartItems);
    setCartItems(getItems());
  },[getItems])

  const renderCart = ()=>{

    if (cartItems.length>0){
      return cartItems.map((p)=>(
        <React.Fragment key={p.id}>
          <tr>
            <td style={{width:'200px',textAlign:'center'}}>
                <Link to={`/products/${p.id}`}>
                  {p.title}
                </Link>
            </td>
            <td style={{width:'200px',textAlign:'center'}}>
                <button onClick={()=>setCartItems(increaseQuantity({id:p.id}))}>+</button>
                  {p.quantity}
                <button onClick={()=>setCartItems(decreaseQuantity({id:p.id}))}>-</button>
                <button onClick={()=>setCartItems(removeProduct({id:p.id}))}>Trash</button>
            </td>
            <td style={{width:'200px',textAlign:'center'}}>
                {p.price}
            </td>
          </tr>
        </React.Fragment>
      ))
    }
    else{
      return <div>The basket is empty</div>
    }
  }

  const renderTotal = ()=>{
    const cartItems = getItems();
    const total = cartItems.reduce((total, item)=>(total+item.price*item.quantity), 0);
    return total;
  }
  return (
    <div style={{padding:'20px'}}>
      <h1>Shopping Basket</h1>  
      <br/><br/>
      <button onClick={()=>navigate('/checkout')}>ChechOut</button>
      <table style={{borderCollapse:"collapse",marginTop:'20px'}}>
        <tr style={{width:'350px'}}>
          <th style={{width:'200px',textAlign:'center'}}>Item</th>
          <th style={{width:'200px',textAlign:'center'}}>Quantity</th>
          <th style={{width:'200px',textAlign:'center'}}>Price</th>
        </tr>
        {renderCart()}
      </table>
      <br/>
      <button onClick={()=>setCartItems(clearBasket())}>CLEAR</button>
      <span>Total: $ {renderTotal()}</span>
    </div>
  )
}

export default Basket
import React from 'react'
import {useNavigate} from 'react-router-dom';

const Checkout = () => {

  const navigate = useNavigate();
  const confirmOrder =(ev)=>{
    navigate('/orderconfirmation')
  }
  
  return (
    <div>
      <h1 style={{margin:'10px'}}>Your detail</h1>
      <div style={{display:'flex',margin:'10px'}}>
        <div>
          <p style={{margin:'10px'}}>Name</p>
          <input type='text' name='name' style={{margin:'10px'}}/>
        </div>
        <div >
          <p style={{margin:'10px'}}>Email</p>
        <input type='text' name='email' style={{margin:'10px'}}/>
        </div>
      </div>
      <div>
        <h1 style={{margin:'10px'}}>Billing address</h1>
        <input type='text' name='billing-address1' style={{margin:'20px'}}/>
        <input type='text' name='billing-address2' style={{margin:'20px'}}/>
        <input type='text' name='billing-city' style={{margin:'20px'}}/>
      </div>
      <div>
        <h1 style={{margin:'10px'}}>Shipping address</h1>
        <input type='text' name='shipping-address1' style={{margin:'20px'}}/>
        <input type='text' name='shipping-address2' style={{margin:'20px'}}/>
        <input type='text' name='shipping-city' style={{margin:'20px'}}/>
      </div>
      <button style={{margin:'20px'}} onClick={()=>navigate('/basket')}>Cancel</button>
      <button style={{margin:'20px'}} onClick={confirmOrder}>Confirm</button>

    </div>
  )
}

export default Checkout;

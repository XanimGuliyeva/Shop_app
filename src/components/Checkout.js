import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Checkout = () => {

  const [form, setForm] = useState({
    name:'',
    email:'',
    shippingAddress1:''
  })
  const navigate = useNavigate();

  
  const handleChange = (ev)=>{
    const {name,value} = ev.target;
    setForm((prevState)=>{
      return{
        ...prevState,
        [name]:value
      }
    })
  }

  const handleSubmit = (ev) => {
    navigate('/orderconfirmation');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h1 style={{margin:'10px'}}>Your detail</h1>
      <div style={{display:'flex',margin:'10px'}}>
        <div>
          <p style={{margin:'10px'}}>Name</p>
          <input type='text' name='name' onChange={handleChange} style={{margin:'10px'}} placeholder='Enter your name' required/>
        </div>
        <div >
          <p style={{margin:'10px'}}>Email</p>
        <input type='text' name='email' onChange={handleChange} style={{margin:'10px'}} placeholder='Enter your email' required/>
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
        <input type='text' name='shipping-address1' onChange={handleChange}  style={{margin:'20px'}} placeholder='Enter your shipping address'/>
        <input type='text' name='shipping-address2' style={{margin:'20px'}}/>
        <input type='text' name='shipping-city' style={{margin:'20px'}}/>
      </div>
      <button style={{margin:'20px'}} onClick={()=>navigate('/basket')}>Cancel</button>
      <button style={{margin:'20px'}} >Confirm</button>

    </div>
    </form>
  )
}

export default Checkout;

import React from 'react'

const Basket = () => {
  return (
    <div style={{padding:'20px'}}>
      <h1>Shopping Basket</h1>  
      <br/><br/>
      <button>ChechOut</button>
      <table style={{borderCollapse:"collapse",marginTop:'20px'}}>
        <tr style={{width:'350px'}}>
          <th style={{width:'200px',textAlign:'center'}}>Item</th>
          <th style={{width:'200px',textAlign:'center'}}>Quantity</th>
          <th style={{width:'200px',textAlign:'center'}}>Price</th>
        </tr>
        <tr>
          <td style={{width:'200px',textAlign:'center'}}>Alfreds Futterkiste</td>
          <td style={{width:'200px',textAlign:'center'}}>1 <button>+</button><button>-</button></td>
          <td style={{width:'200px',textAlign:'center'}}>Germany</td>
        </tr>
      </table>
      <br/>
      <button>CLEAR</button>
      <span>Total:</span>
    </div>
  )
}

export default Basket

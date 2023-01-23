import React from 'react'

const Products = ({id,title})=> {
    return (
      <div key={id}>
          {title}
      </div>
    )
  }

  export default Products;
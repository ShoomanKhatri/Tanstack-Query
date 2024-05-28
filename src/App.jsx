import  './App.css';
import useProducts from './hooks/useProducts';

import React from 'react';

const App = () => {

  const{isPending,data,error,isError} = useProducts();

  if(isPending){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>{error.message}</h1>
  }
  return (
    <>
    <button>Add Product</button>
    <div className='products'>
      {
        data.map(product=>{
         return(
          <div key={product.id} className='product'>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
         )
        })
      }
    </div>
    </>
  )
}

export default App
import React,{useContext} from 'react';
import Product from './Product'
import '../styles/components/Products.css'
import {AppContext} from '../context/AppContext'

const Products = ({ products }) => {
  const {state,addToCart}=useContext(AppContext)
  const handleAddToCart=(product)=>()=>{
    addToCart(product)
  }
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product product={product} key={product.id} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Products;

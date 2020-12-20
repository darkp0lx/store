import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';
const Checkout = () => {
  const { state, removeToCart } = useContext(AppContext);
  const handleRemoveToCart = (product) => () => {
    removeToCart(product);
  };


  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos</h3>
        {state.cart.map((elemento) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{elemento.title}</h4>
              <span>{elemento.price}$</span>
            </div>
            <button onClick={handleRemoveToCart(elemento)} type="button">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: 10</h3>
        <Link to="/checkout/informacion">
          <button type="button">Continuar Pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;

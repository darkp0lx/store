import React, { useState, useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

const Information = ({history}) => {
  const { state, addBuyer } = useContext(AppContext);
  const form = useRef(null);
  console.log(state);
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const comprador = {
      name: formData.get('name'),
      addres: formData.get('addres'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
    };
    addBuyer(comprador);
    history.push('/checkout/payment')
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {state.cart.map((elemento) => (
          <div className="Information-item">
            <div className="Information-element">
              <h4>{elemento.title}</h4>
              <span>{elemento.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;

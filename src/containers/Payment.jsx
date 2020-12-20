import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/components/Payment.css';
import { PayPalButton } from 'react-paypal-button';
const Payment = () => {
  const { state ,addNewOrder} = useContext(AppContext);
  const paypalOptions ={
    ClientId:"AaBidaFFuyTrnRzNF9LTEDVPGbCkZUQo_vdanEMAEh0cQmyHP3Lsq9ist3w6b03pRdmvfXFiwoKzHGN1",
    intent:"capture",
    currency:'USD'
  }

  const ButtonStyles={
    layout:'vertical',
    shape:"rect"
  }

  const handlePaymentSuccess=(data)=>{
    if(data.status==="COMPLETED"){
      const newOrder={
        buyer:state.buyer,
        product:state.cart,
        payment:data
      }
      addNewOrder(newOrder);
    }
    
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {state.cart.map((elemento) => (
          <div className="Payment-item" key={elemento.title}>
            <div className="Payment-element">
              <h4>{elemento.title}</h4>
              <span>${elemento.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={ButtonStyles}
            amount='10'
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={() => console.log('pedido Cancelado')}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;

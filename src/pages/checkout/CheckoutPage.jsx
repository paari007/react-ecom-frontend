import axios from 'axios';
import { useState, useEffect,  } from 'react';
import './CheckoutPage.css';
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';

export function CheckoutPage({ cart,loadCart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
   const fetchCheckoutData = async ()=>{

        let response = await axios.get('https://react-ecom-backend-a19y.onrender.com/api/delivery-options?expand=estimatedDeliveryTime');
        setDeliveryOptions(response.data);

   };

     fetchCheckoutData();
      
  }, []);

    useEffect(() => {
   const fetchCheckoutData = async ()=>{

       const response = await axios.get('https://react-ecom-backend-a19y.onrender.com/api/payment-summary')
        setPaymentSummary(response.data);
   };

     fetchCheckoutData();
      
  }, [cart]);



  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
         <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
         <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  )
}
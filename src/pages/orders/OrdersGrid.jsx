import './OrdersPage.css'
import { OrdersHeader } from "./OrdersHeader.jsx";
import { OrdersDetailsGrid } from './OrdersDetailsGrid.jsx';

export function OrdersGrid({ orders,loadCart }) {
  return (


    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">

            <OrdersHeader order={order} />
             
            <OrdersDetailsGrid order={order} loadCart={loadCart}/>
            

          </div>
        );
      })}

    </div>


  );
};


import './Checkout.css'
import ShoppingCart from "./ShoppingCart";
import PayPal from "./PayPal"
function Checkout() {
  return (
    <div >
     <div className="checkout-grid">
            <ShoppingCart/>
            <PayPal/>
        </div>
    </div>
  );
}

export default Checkout;
import './Checkout.css'
import ShoppingCart from "./ShoppingCart";
import PayPal from "./PayPal"
function Checkout({currentUser}) {
  return (
    <div >
     <div className="checkout-grid">
            <ShoppingCart currentUser={currentUser}/>
            <PayPal/>
        </div>
    </div>
  );
}

export default Checkout;
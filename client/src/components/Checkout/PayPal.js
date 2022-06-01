import { useRef, useEffect } from 'react'
function PayPal() {

    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons({
         
        }).render(paypal.current)
    }, [])

    return (
        <div checkout-grid-paypal>
            <div ref={paypal}></div>
        </div>



    )
};

export default PayPal;
import { useRef, useEffect } from 'react'
function PayPal() {

    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons({
            // createOrder: (data, actions, err) => {
            //     return actions.order.create({
            //         intent: "Capture",
            //         purchase_Units: [
            //             {
            //                 description: "Vintage Mid Century Modern Bookends",
            //                 amount: {
            //                     currency_code: "USD",
            //                     value: 250.00
            //                 }
            //             }
            //         ]
            //     })
            // },
            // onApprove: async (data, actions) => {
            //     const order = await actions.order.capture();
            //     console.log(order);
            // },
            // onError: (err) => {
            //     console.log(err)
            // },
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>



    )
};

export default PayPal;
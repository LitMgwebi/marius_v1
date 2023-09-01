import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { redirect } from "react-router";

function PaypalCheckoutButton(props) {
    const { product } = props
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        // Call backend function to fulfill order

        // if success
        setPaidFor(true);
        // Refresh user's acc status

        // If reponse is error
        // SetError("Your Payment was processed successfully. However, we are ubale to convert your...")
    };

    if(paidFor){
        //Display success message, model or redirect user to success page
        redirect('/portfolio')
        alert("Thank you for your purchase");
    }

    if(error){
        //Display error message or redirect user to error page.
        redirect('/portfolio')
        alert(error);
    }

    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture();
                console.log("order, ", order);

                handleApprove(data.orderID);
            }}
            onCancel={() => {
                //Display Cancel message, model or redirect user to cancel page
                redirect("/portfolio");
            }}
            onError={(err) => {
                setError(err);
                console.error("Paypal error: " + err);
            }}
        />
    );
}

export default PaypalCheckoutButton;
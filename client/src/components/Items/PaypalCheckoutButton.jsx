import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function PaypalCheckoutButton(props) {
    const { product } = props;
    const [status, SetStatus] = useState("");

    const createOrder = async() => {
        try{
            const response = await fetch("/server/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cart: [{
                        id: product.id,
                        quantity: product.quantity
                    },],
                }),
            });

            const orderData = await response.json();

            if (orderData.id) {
                alert("Order has been created");
                return orderData.id;
            } else {
                const result = orderData.details?.[0];
                SetStatus(result ? `{result.issue} ${result.description} ${result.debug_id}` : JSON.stringify(orderData));

                throw new Error(status);
            }
        }catch(error){
            console.error(error);
            SetStatus(error.message);
            alert("Could not initiate Paypal Checkout");
        }
    };

    const handleApprove = async(data, actions) => {
        try {
            const response = await fetch(`/server/orders/${data.orderID}/capture`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const orderData = await response.json();
            const errorDetail = orderData?.details?.[0];

            if(errorDetail?.issue === "INSTRUMENT_DECLINED"){
                SetStatus("Instrument Declined, restarting action now");
                alert(status);
                return actions.restart();
            } else if (errorDetail) {
                throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
            } else if (!orderData.purchase_units){
                throw new Error(JSON.stringify(orderData));
            } else {
                const transaction = orderData?.purchase_units?.[0]?.payments?.captures?.[0] || orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
                SetStatus(`Transaction: ${transaction.status}: ${transaction.id}`);
                console.log("Capture result", orderData, JSON.stringify(orderData, null, 2),);
            }
        } catch(error) {
            console.error(error);
            SetStatus(error.message);
            alert("Could not process transaction");
        }
    };

    const handleCancel = () => {

    };

    const handleError = () => {

    };

    return (
        <PayPalButtons
            createOrder={createOrder}
            onApprove={handleApprove}
            onCancel={handleCancel}
            onError={handleError}
        />
    );
}

export default PaypalCheckoutButton;
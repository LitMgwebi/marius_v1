//#region Document Imports
import express from "express";
import cors from "cors";
// import paypal from "@paypal/checkout-server-sdk";
import corsOptions from "./corsOptions.js";
import { } from "dotenv/config";
//#endregion

//#region Document Global Variable
const host = process.env.HOST;
const port = process.env.PORT;
const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const base = "https://api-m.sandbox.paypal.com";
const server = express();
//#endregion

//#region Server Settings
server.use(express.static("client"));
server.use(express.json());
server.use(cors(corsOptions));
//#endregion

//#region Paypal Helper functions
const generateAccessToken = async () => {
	try {
		if (!clientId || !clientSecret) {
			throw new Error("MISSING_API_CREDENTIALS");
		}
		const auth = Buffer.from(clientId + ":" + clientSecret).toString("base64");

		const response = await fetch(`${base}/v1/oauth2/token`, {
			method: "POST",
			body: "grant_type=client_credentials",
			headers: {
				Authorization: `Basic ${auth}`,
			},
		});

		const data = await response.json();
		return data.access_token;
	} catch (error) {
		console.error("Failed to generate Access Token:", error);
	}
};

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */

const createOrder = async (cart) => {
	// use the cart information passed from the front-end to calculate the purchase unit details
	console.log("shopping cart information passed from the frontend createOrder() callback:", cart);
	const accessToken = await generateAccessToken();
	const url = `${base}/v2/checkout/orders`;
	const payload = {
		intent: "CAPTURE",
		purchase_units: [
			{
				amount: {
					currency_code:  "USD",
					value: "100.00",
				},
			},
		],
	};
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
			// Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
			// https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
			// "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
			// "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
			// "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
		},
		method: "POST",
		body: JSON.stringify(payload),
	});
	return handleResponse(response);
};

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
	const accessToken = await generateAccessToken();
	const url = `${base}/v2/checkout/orders/${orderID}/capture`;

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken}`,
			// Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
			// https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
			// "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
			// "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
			// "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
		},
	});

	return handleResponse(response);
};

async function handleResponse(response) {
	try {
		const jsonResponse = await response.json();
		return {
			jsonResponse,
			httpStatusCode: response.status,
		};
	} catch (err) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}
}
//#endregion

//#region Server Endpoints 
server.get("/", (req, res) => {
	res.send("Server is working");
	console.log("Server is working");
});

server.post("/server/orders", async (req, res) => {
	try {
		// use the cart information passed from the front-end to calculate the order amount detals
		const { cart } = req.body;
		const { jsonResponse, httpStatusCode } = await createOrder(cart);

		res.status(httpStatusCode).json(jsonResponse);
	} catch (error) {
		console.error("Failed to create order:", error);

		res.status(500).json({ error: "Failed to create order." });
	}
});

server.post("/server/orders/:orderID/capture", async (req, res) => {
	try {
		const { orderID } = req.params;
		const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
		res.status(httpStatusCode).json(jsonResponse);
	} catch (error) {
		console.error("Failed to create order:", error);
		res.status(500).json({ error: "Failed to capture order." });
	}
});

server.listen(port, host, () => {
	console.info(`Listening at: http://${host}:${port}`);
});
//#endregion
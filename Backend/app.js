require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SK);
const port = 7000 || process.env.PORT;
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
        res.json({"message":"pong.."})
})
app.post("/api/create-checkout-session", async (req, res) => {
        const products = req.body;
        
        const lineItems = products.map((product) => ({
                price_data: {
                        currency: process.env.currency,
                        product_data: {
                               name: product.Name,

                               description:product.Frequency,
                        },
                        unit_amount: product.price * 100,
                },
                quantity: "1"
        }));
        console.log(lineItems);
        const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: lineItems,
                mode: "payment",
                success_url: process.env.success_url,
                cancel_url: process.env.cancel_url,
        });

        res.json({ id: session.id })

})

app.listen(port, () => {
        console.log(`Connected to port : ${port} 🌟`)
})

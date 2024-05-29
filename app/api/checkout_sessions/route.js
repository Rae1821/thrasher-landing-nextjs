const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// create a session
const session = await stripe.checkout.sessions.create({
  mode: "payment",
  line_items: [
    {
      price: "$150.00",
      quantity: 1,
    },
  ],
  success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
});

// retrieve a session
const retrieveSession = await stripe.checkout.sessions.retrieve(
  process.env.STRIPE_SECRET_KEY
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Sample Product",
              },
              unit_amount: 1000,
            },
            quantitye: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      res.status(500).json({ error: "Error creating checkout session" });
    }
  }
}

// Figure out a way to show a success or cancel component and show those instead of redirecting to a success or cancel page

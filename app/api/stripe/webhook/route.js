// // Stripe Webhook
// import Stripe from "stripe";
// import { buffer } from "micro";
// import { connectToDB } from "@utils/database";
// import User from "@/models/user";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// export const handleWebHook = async (req, res) => {
//   const buf = await buffer(req);
//   const sig = req.headers["stripe-signature"];

//   let event;

//   const { clerkId, date, paid } = await req.json();

//   try {
//     event = stripe.webhooks.constructEvent(buf.toString(), sig, endpointSecret);
//   } catch (error) {
//     console.log(`Webhook Error: ${error.message}`);
//     return new Response(`Webhook Error: ${error.message}`, {
//       status: 400,
//     });
//   }

//   // Handle the event

//   switch (event.type) {
//     case "checkout.session.completed": {
//       const session = event.data.object;

//       // Save the session to your MongoDB
//       try {
//         await connectToDB();

//         const newPaidStatus = new Paid({
//           owner: clerkId,
//           date: date,
//           paid: paid,
//         });
//       } catch (err) {
//         console.error(err);
//       }

//       break;
//     }
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   await newPaidStatus.save();

//   return new Response(JSON.stringify(newPaidStatus), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export async function POST(req, res) {
//   const sig = req.headers["stripe-signature"];
//   const buf = await buffer(req);

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
//   } catch (err) {
//     console.error(`Webhook signature verification failed: ${err.message}`);
//     return res
//       .status(400)
//       .send(`Webhook signature verification failed: ${err.message}`);
//   }

//   switch (event.type) {
//     case "checkout.session.completed":
//       const session = event.data.object;
//       console.log(`Payment successful for session ID: ${session.id}`);
//       // Handle post-payment actions here
//       break;

//     // Add other event types to handle as needed

//     default:
//       console.warn(`Unhandled event type: ${event.type}`);
//   }

//   res.status(200).end();
// }

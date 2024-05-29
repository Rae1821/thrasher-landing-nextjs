import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import Stripe from "stripe";
import { buffer } from "micro";

export async function POST(req) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  const { id } = evt.data;
  const eventType = evt.type;

  // if (eventType === "user.created") {
  //   const { email_addresses, image_url, first_name, last_name, username } =
  //     evt.data;

  //   const user = {
  //     clerkId: id,
  //     email: email_addresses[0].email_address,
  //     username: username,
  //     firstName: first_name,
  //     lastName: last_name,
  //     photo: image_url,
  //   };

  //   const newUser = await createUser(user);

  //   if (newUser) {
  //     await clerkClient.users.updateUserMetadata(id, {
  //       publicMetadata: {
  //         userId: newUser._id,
  //       },
  //     });
  //   }

  //   return NextResponse.json({ message: "OK", user: newUser });
  // }

  // if (eventType === "user.updated") {
  //   const { id, image_url, first_name, last_name, username } = evt.data;

  //   const user = {
  //     firstName: first_name,
  //     lastName: last_name,
  //     username: username,
  //     photo: image_url,
  //   };

  //   const updateUser = await updateUser(id, user);

  //   return NextResponse.json({ message: "OK", user: updateUser });
  // }

  // if (eventType === "user.deleted") {
  //   const { id } = evt.data;

  //   const deleteUser = await deleteUser(id);

  //   return NextResponse.json({ message: "OK", user: deleteUser });
  // }
  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  return new Response("", { status: 200 });
}

// Stripe Webhook

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handleWebhookEvent(req, res) {
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res
      .status(400)
      .send(`Webhook signature verification failed: ${err.message}`);
  }

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log(`Payment successful for session ID: ${session.id}`);
      // Handle post-payment actions here
      break;

    // Add other event types to handle as needed

    default:
      console.warn(`Unhandled event type: ${event.type}`);
  }

  res.status(200).end();
}

export default handleWebhookEvent;

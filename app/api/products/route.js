import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  // initiating stripe
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  // fetching prices of products from stripe dashboard
  const prices = await stripe.prices.list({
    limit: 1,
  });

  return NextResponse.json(prices.data);
}

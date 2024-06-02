"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
// import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutButton = ({ priceId, email }) => {
  const [loading, setLoading] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/user?email=${email}`);
      const data = await response.json();
      setHasPaid(data.hasPaid);
    }
    fetchData();
  }, [email]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.log(result.error.message);
      setLoading(false);
    }
  };

  return hasPaid ? (
    <p>Your HOA payments are up to date. Thank you!</p>
  ) : (
    <Button
      role="link"
      type="submit"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? "Loading..." : "Checkout"}
    </Button>
  );
};

export default CheckoutButton;

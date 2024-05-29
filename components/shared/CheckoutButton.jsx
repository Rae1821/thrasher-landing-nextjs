import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { Button } from "../ui/button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutButton = () => {
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { sessionId } = await response.json();
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        router.push("/error");
      }
    } catch (err) {
      console.log("Error in creating checkout session:", err);
    }
  };
  return <Button handleSubmit={handleCheckout}>Pay Now</Button>;
};

export default CheckoutButton;

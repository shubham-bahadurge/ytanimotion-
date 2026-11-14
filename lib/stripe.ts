import Stripe from "stripe";

let stripeClient: Stripe | undefined;

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY must be configured in the environment.");
  }

  if (!stripeClient) stripeClient = new Stripe(secretKey);
  return stripeClient;
}

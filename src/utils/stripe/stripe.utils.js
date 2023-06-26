import { loadStripe } from "@stripe/stripe-js";

// Added toString to avoid type errors
export const stripePromise = loadStripe(
	toString(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
);

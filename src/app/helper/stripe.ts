import  { Stripe } from "stripe"
import config from "../../config/index.ts"

export const stripe = new Stripe(config.stripe_secret_key)
var public_key = document.querySelector("meta[name='stripe-public-key']").content;
var stripe = Stripe(public_key);
var elements = stripe.elements();

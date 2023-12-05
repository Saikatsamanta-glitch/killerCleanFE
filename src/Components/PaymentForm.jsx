// PaymentForm.js
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Use the stripe object to create a payment method
    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    // Handle the token or error as needed
    if (token) {
      // Send the token to your server for further processing
      console.log(token);
    } else {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;

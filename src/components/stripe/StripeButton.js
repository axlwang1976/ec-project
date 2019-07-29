import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const stripeKey = 'pk_test_fLShGAvyz6OlHZjtpo2UpwzO00CHiIKGjg';
  const onToken = token => {
    console.log(token);
    alert('Paymeny Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="EC Project"
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripeKey}
    />
  );
}

StripeButton.propTypes = {
  price: PropTypes.number,
};

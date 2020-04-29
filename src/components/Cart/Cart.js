import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  //   const totalPrice = cart.reduce((total, pd) => {
  //     return total + pd.price;
  //   }, 0);
  //   console.log(totalPrice);

  let total = 0;
  let shippingPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
    shippingPrice = shippingPrice + cart[i].shipping;
  }

  const taxlessTotal = total.toFixed(2);
  const shipmentPrice = shippingPrice.toFixed(2);
  console.log(taxlessTotal);
  console.log(shipmentPrice);
  const tax = (taxlessTotal / 10).toFixed(2);
  console.log(tax);
  const tot = parseFloat(shipmentPrice) + parseFloat(taxlessTotal);
  console.log(tot);
  const gTotal = tot + parseFloat(tax);
  return (
    <div>
      <h2>Order summary</h2>
      <h3>Items Ordered: {cart.length} </h3>
      <h4>Price: ${taxlessTotal}</h4>
      <h4>Shipping Price: ${shipmentPrice}</h4>
      <h4>Total Price: ${tot.toFixed(2)}</h4>
      <h4>Tax: ${tax}</h4>
      <h2 className="grand-total">Grand Total: ${gTotal.toFixed(2)}</h2>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

export default Cart;

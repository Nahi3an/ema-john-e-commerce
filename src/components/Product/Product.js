import React from "react";

const Product = (props) => {
  const { name, seller, price, url, stock } = props.product;
  return (
    <div>
      <h3>This is product</h3>

      <h4>Name :{name} </h4>
      <h4>{seller}</h4>
      <h4>{url}</h4>
      <h4>{price}</h4>
      <h4>{stock}</h4>
    </div>
  );
};

export default Product;

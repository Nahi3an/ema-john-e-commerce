import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, seller, price, img, stock } = props.product;
  // console.log(props.addProduct);

  // function add() {
  //   return props.addProduct(props.product);
  // }

  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="productImage"></img>
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <h5>Manufactured by: {seller}</h5>
        <h4>${price}</h4>
        <p>
          only <span>{stock}</span> left in stock - order soon
        </p>
        <button
          className="product-btn"
          onClick={() => props.addProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

import React from "react";

const CartItem = (props) => {
  const { cartKey, cartItem } = props;
  const { product, amount, totalCost } = cartItem;
  console.log(cartItem);
  console.log(product);
  return (
    <tr className="">
      <td>
        <figure className="image is-64x64">
          <img className="is-64x64" src={product.image} alt="item" />
        </figure>
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{amount}</td>
      <td>{totalCost}</td>
      <td>
        <button
          className="delete"
          onClick={() => props.removeFromCart(cartKey)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;

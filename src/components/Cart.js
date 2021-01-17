import React, { useState, useEffect } from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});

  const [total, setTotal] = useState(0);

  const cartTotal = () => {
    let totalVal = 0;
    cartKeys.forEach((key) => {
      totalVal += cart[key].totalCost;
    });
    setTotal(totalVal.toFixed(2));
  };

  useEffect(() => {
    cartTotal();
  }, [cart]);

  return (
    <section>
      <div className="container mt-6 py-4">
        <div className="hero  is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Cart</h1>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>
                  <abbr title="Quantity">QTY</abbr>
                </th>
                <th>Amount</th>
              </thead>
              {cartKeys && cartKeys.length ? (
                <tbody>
                  {cartKeys.map((key) => (
                    <CartItem
                      cartKey={key}
                      key={key}
                      cartItem={cart[key]}
                      removeFromCart={props.context.removeFromCart}
                    />
                  ))}
                </tbody>
              ) : (
                <h2>Cart is Empty</h2>
              )}
            </table>
          </div>
          <div className="card-footer is-flex ">
            <div className="card-footer-item columns is-justify-content-flex-end">
              <div className="column is-3 is-flex is-justify-content-space-evenly">
                <div className="title">Total: </div>
                <div className="title">{total}</div>
              </div>
              <div className="column is-3">
                <button className="button is-link is-rounded">Checkout</button>
              </div>
            </div>
          </div>
          <button
            className="button"
            onClick={() => {
              if (window.confirm("Are you sure that you want to clear cart?"))
                props.context.clearCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default withContext(Cart);

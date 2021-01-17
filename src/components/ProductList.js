import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";

const ProductList = (props) => {
  const { products, newProducts } = props.context;
  // console.log("----PRODUCTS---");
  // console.log(products);
  // console.log("----NEW PRODUCTS---");
  // console.log(newProducts);

  return (
    <section>
      <div className="container mt-6 py-4">
        <div className="hero info is-small">
          <div className="hero-body">
            <div className="container">
              <p className="title">Products</p>
              <p className="subtitle">Select Items</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title error">No products found!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default withContext(ProductList);

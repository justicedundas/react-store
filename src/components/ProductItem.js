import React from "react";

const ProductItem = (props) => {
  const { product } = props;
  const amountOptions = [...Array(product.stock).keys()];

  const [amount, setAmount] = React.useState(amountOptions[1]);

  console.log(amount);
  return (
    <div className="column is-3">
      <div className="card is-shadow block">
        <div className="level">
          <div className="level-item has-text-centered">
            <p className="heading">{product.category}</p>
          </div>
        </div>
        <div className="card-image  column is-half is-offset-one-quarter">
          <figure className="image  is-3by4  ">
            <img
              src={product.image}
              alt={product.id}
              class="modal-button"
              data-target={product.id}
              width="50% !important"
            />
          </figure>
        </div>
        <div className="card-content is-small has-text-centered">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="header">{product.title}</p>
                <p className="subtitle">${product.price}</p>
              </div>
            </div>
          </div>
          <div className="content"></div>
          <div className="card-footer is-justify-content-center">
            <div
              className="button is-light is-primary card-footer-item"
              onClick={() =>
                props.addToCart({
                  id: product.name,
                  product,
                  amount: amount,
                })
              }
            >
              <span className="icon-text">
                <span className="icon-">
                  <i className="fas fa-cart-plus"></i>
                </span>
              </span>
              <span className="is-size-7">Add to Cart</span>
            </div>
            {/* <button className="button is-light is-primary">X</button> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
    //   {/* <div className="card-content">
    //     <div classname="content is-small">
    //       <p className="title is-6">{product.title}</p>
    //       <p className="">{product.category}</p>
    //       <p className="subtitle is-6">${product.price}</p>
    //     </div>
    //   </div> */}

    // {/* <div>{product.title}</div>
    // <div>{product.stock}</div>
    // <div>{product.price}</div>
    // <div>{product.description}</div>
    // <div className="field has-addons">
    //   <div className="control">
    //     <div className="select">
    //       <label className="label" htmlFor="amount">
    //         Quantity:
    //         <select
    //           value={amount}
    //           onChange={(e) => setAmount(e.target.value)}
    //           disabled={!amountOptions.length}
    //         >
    //           {amountOptions.map((amount) => (
    //             <option key={amount} value={amount}>
    //               {amount}
    //             </option>
    //           ))}
    //         </select>
    //       </label>
    //       <button
    //         className="button is-primary"
    //         onClick={() =>
    //           props.addToCart({
    //             id: product.name,
    //             product,
    //             amount: amount,
    //           })
    //         }
    //       >
    //         <span className="icon-text">
    //           <span className="icon">
    //             <i className="fas fa-cart-plus"></i>
    //           </span>
    //         </span>
    //         <span>Add to Cart</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    // <div className="control"></div> */}
  );
};

export default ProductItem;

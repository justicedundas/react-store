import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-4by3">
                <img
                  src="https://picsum.photos/800/600/?random"
                  alt="Description"
                />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">StoreName</h1>
              <h2 className="subtitle is-4">Product Slogan</h2>
              <br />
              <p className="has-text-centered">
                <Link
                  className="button is-medium is-info is-outlined"
                  to="/products"
                >
                  Explore Store
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container has-text-centered">
          <p>Copyright &copy; 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

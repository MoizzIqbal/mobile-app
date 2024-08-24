import React from "react";
// import Sdata from './Sdata'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Products({ Sdata, cart, setCart }) {
  const notify = () => toast.success("Item added on cart");
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("cart element =", cart);
  };
  return (
    <div>
      <ToastContainer />
      <div className="container mt-5">
        <div className="row">
          {Sdata.map((product) => {
            return (
              <div
                key={product.id}
                className="col-lg-4 gy-5 col-md-6 col-sm-12 text-center"
              >
                <div
                  className="card d-flex justify-content-center align-items-center"
                  style={{ width: "18rem" }}
                >
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">
                      {product.price} Rs
                    </button>
                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.price,
                          product.title,
                          product.description,
                          product.imgSrc
                          )
                        }
                        className="btn btn-warning"
                        >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;

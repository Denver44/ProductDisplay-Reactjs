import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const product = [];
  return (
    <div className="Home">
      {product?.map((item) => (
        <div className="productlist" key={item._id}>
          <div className="product__title">
            <h1>{item.title}</h1>
          </div>
          <Link to="/product">
            <button onClick={() => {}} className="product__selectButton">
              Select
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

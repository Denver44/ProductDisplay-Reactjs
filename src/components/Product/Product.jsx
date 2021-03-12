import React from "react";
import "./product.css";
import { useSelector } from "react-redux";

function Product() {
  const item = useSelector((state) => state.selectedProduct);

  return (
    <div className="product">
      <div className="product__details" key={item._id}>
        <div
          className="product__img"
          style={{ backgroundImage: ` url(${item.src})` }}
        />

        <div className="product__box">
          <div className="product__boxRow">
            <h2>{item.title}</h2>
            <p> ₹{item.price}</p>
          </div>
          <div className="product__rating">
            {Array(item.rating)
              .fill()
              .map((_, i) => {
                return <p>⭐</p>;
              })}
          </div>
          <p>{item.description}</p>
          <button className="product__boxCart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;

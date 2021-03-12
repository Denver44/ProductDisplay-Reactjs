import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../actions";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);

  return (
    <div className="Home">
      {product.map((item) => (
        <div className="productlist" key={item._id}>
          <div className="product__title">
            <h1>{item.title}</h1>
          </div>
          <Link to="/product">
            <button
              onClick={() => dispatch(selectProduct(item))}
              className="product__selectButton"
            >
              Select
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

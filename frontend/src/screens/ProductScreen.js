import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  const [qty, serQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {};
  }, []);

  const hendleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div> {error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.reviews} Reviews)
              </li>
              <li>
                Price:<b> {product.price}$</b>
              </li>
              <li>
                Description
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: {product.price}$</li>
              <li>
                Status: {product.countInStock > 0 ? "In stock" : "Out of stock"}
              </li>
              <li>
                Qty:
                <select
                  value={qty}
                  onChange={(e) => {
                    serQty(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((count) => (
                    <option key={count + 1} value={count + 1}>
                      {count + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.countInStock > 0 ? (
                  <button
                    onClick={hendleAddToCart}
                    className="add-button primary"
                  >
                    Add to cart
                  </button>
                ) : (
                  <div>Out of stock.</div>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductScreen;

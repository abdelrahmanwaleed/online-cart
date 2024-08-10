import React from "react";
import { removeItem, clearCart } from "../state/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeItem(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h1>Shopping cart</h1>
      {Object.keys(items).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        //---------------------List show items with uniqe key in the cart section so you can remove or clear----------
        <ul>
          {Object.values(items).map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>
                  {item.price} $ x {item.quantity}
                </p>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {Object.keys(items).length > 0 && (
        <button className="clear-cart" onClick={handleClearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;

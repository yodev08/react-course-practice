import { formatMoney } from "../../utils/money";
import { useState } from "react";
import axios from "axios";

export function CartItemDetails({ cartItem, loadCartData }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity),
    });
    await loadCartData();
    setIsUpdating(false);
  };

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCartData();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateQuantity();
    } else if (e.key === "Escape") {
      setQuantity(cartItem.quantity);
      setIsUpdating(false);
    }
  };

  return (
    <>
      <div className="product-name">{cartItem.product.name}</div>
      <div className="product-price">
        {formatMoney(cartItem.product.priceCents)}
      </div>
      <div className="product-quantity">
        <span>
          Quantity:{" "}
          {isUpdating ? (
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ width: "50px" }}
            />
          ) : (
            <span className="quantity-label">{cartItem.quantity}</span>
          )}
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={() => {
            if (isUpdating) {
              updateQuantity();
            } else {
              setIsUpdating(true);
            }
          }}
        >
          {isUpdating ? "Save" : "Update"}
        </span>
        <span
          className="delete-quantity-link link-primary"
          onClick={deleteCartItem}
        >
          Delete
        </span>
      </div>
    </>
  );
}

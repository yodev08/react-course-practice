import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import type { Cart, DeliveryOption, LoadCartData } from "../../types";

export function OrderSummary({
  cart,
  deliveryOptions,
  loadCartData,
}: {
  cart: Cart;
  deliveryOptions: DeliveryOption[];
  loadCartData: LoadCartData;
}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:
                {dayjs(selectedDeliveryOption!.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <CartItemDetails
                    cartItem={cartItem}
                    loadCartData={loadCartData}
                  />
                </div>
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCartData={loadCartData}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
